import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import { getTokenFromCookie } from '~/utils';
import type {
  IUser,
  IAuthResponse,
  ISigninDto,
  ISignupDto,
  IAuthor,
  IBook,
} from '~/types';
import { CreateCategoryDto, ICategory } from '~/types/category.type';

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
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const dekooApi = createApi({
  reducerPath: 'dekooApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['DEKOO_API'],
  endpoints: (build) => ({
    // Auth
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
    signInAsAdmin: build.mutation<IAuthResponse, ISigninDto>({
      query: (credentials) => ({
        url: '/auth/signin-admin',
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
    // Users
    getUserById: build.query<IUser, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
    }),
    // Categories
    createCategory: build.mutation<ICategory, CreateCategoryDto>({
      query: (createCategoryDto) => ({
        url: `/categories`,
        method: 'POST',
        body: createCategoryDto,
      }),
    }),
    getAllCategories: build.query<ICategory[], void>({
      query: () => ({
        url: `/categories`,
        method: 'GET',
      }),
    }),
    getCategoryById: build.query<ICategory, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: 'GET',
      }),
    }),
    // Authors
    createAuthor: build.mutation<IAuthor, FormData>({
      query: (createAuthorDto) => ({
        url: `/authors`,
        method: 'POST',
        body: createAuthorDto,
      }),
    }),
    getAllAuthors: build.query<IAuthor[], void>({
      query: () => ({
        url: '/authors',
        method: 'GET',
      }),
    }),
    getAuthorById: build.query<IAuthor, string>({
      query: (id) => ({
        url: `/authors/${id}`,
        method: 'GET',
      }),
    }),
    // Books
    createBook: build.mutation<IBook, FormData>({
      query: (createBookDto) => ({
        url: `/books`,
        method: 'POST',
        body: createBookDto,
      }),
    }),
    getAllBooks: build.query<IBook[], void>({
      query: () => ({
        url: '/books',
        method: 'GET',
      }),
    }),
    getBookById: build.query<IBook, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  // auth
  useSignInWithEmailAndPasswordMutation,
  useSignUpWithEmailAndPasswordMutation,
  useSignInWithGoogleProviderMutation,
  useSignInAsAdminMutation,
  // user
  useGetUserByIdQuery,
  // category
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  // author
  useCreateAuthorMutation,
  useGetAllAuthorsQuery,
  useGetAuthorByIdQuery,
  // book
  useCreateBookMutation,
  useGetAllBooksQuery,
  useGetBookByIdQuery,
} = dekooApi;

export const {
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  signInAsAdmin,
  signInWithGoogleProvider,
  getUserById,
  createCategory,
} = dekooApi.endpoints;
