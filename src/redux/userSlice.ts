/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getJwtTokenFromCookies } from '~/utils';
import type { RootState } from './store';

// declaring the types for our state
export type CredentialsType = {
  id: string;
  role: string;
};

export type UserState = {
  credentials: {
    id: string;
    role: string;
  };
};

const initialState: UserState = {
  credentials: {
    id: getJwtTokenFromCookies()?.sub,
    role: getJwtTokenFromCookies()?.claim,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCredentials: ({ credentials }, action: PayloadAction<CredentialsType>) => {
      credentials.id = action.payload.id;
      credentials.role = action.payload.role;
    },
  },
});
export const { setUserCredentials } = userSlice.actions;

export const selectUserCredentials = ({ user }: RootState) => user.credentials.id;

export default userSlice.reducer;
