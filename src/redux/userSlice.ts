/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTokenFromCookie } from '~/utils';
import type { RootState } from './store';

// declaring the types for our state
export type CredentialsType = {
  id: string;
  role: string;
};

export type UserState = {
  credentials: CredentialsType;
  user: Record<string, unknown> | null;
};

const initialState: UserState = {
  credentials: {
    id: getTokenFromCookie()?.sub,
    role: getTokenFromCookie()?.claim,
  },
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCredentials: (
      { credentials }: UserState,
      action: PayloadAction<CredentialsType>
    ) => {
      credentials.id = action.payload.id;
      credentials.role = action.payload.role;
    },
    setUser: (state: UserState, action: PayloadAction<Record<string, unknown>>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserCredentials, setUser } = userSlice.actions;

export const selectUserCredentials = ({ user }: RootState) => user.credentials.id;
export const selectUserData = ({ user }: RootState) => user.user;

export default userSlice.reducer;
