import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import { getTokenFromCookie } from '~/utils';
import type { IUser, IAuthResponse, ISigninDto, ISignupDto } from '~/types';

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_HOSTNAME}/api/v1`,
  prepareHeaders: (headers) => {
    const token = getTokenFromCookie();

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const dekooApi = createApi({
  reducerPath: 'dekooApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['DEKOO_API'],
  endpoints: (build) => ({
    signUpWithEmailAndPassword: build.mutation<IAuthResponse, ISignupDto>({
      query: (credentials) => ({
        url: '/auth/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    signInWithEmailAndPassword: build.mutation<IAuthResponse, ISigninDto>({
      query: (credentials) => ({
        url: '/auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    signInWithGoogleProvider: build.mutation<IAuthResponse, void>({
      query: () => ({
        url: '/auth/google',
        method: 'GET',
      }),
    }),
    getUserById: build.mutation<IUser, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useSignInWithEmailAndPasswordMutation,
  useSignUpWithEmailAndPasswordMutation,
  useSignInWithGoogleProviderMutation,
  useGetUserByIdMutation,
} = dekooApi;

export const {
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  signInWithGoogleProvider,
  getUserById,
} = dekooApi.endpoints;
