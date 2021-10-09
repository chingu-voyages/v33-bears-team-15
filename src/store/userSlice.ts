/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getDecodedTokenFromCookie } from '~/utils';
import type { RootState, IUserStoreState } from '~/types/index';

const initialState: IUserStoreState = {
  credentials: {
    id: getDecodedTokenFromCookie()?.sub,
    role: getDecodedTokenFromCookie()?.claim,
  },
  currentUser: null,
  isLoggedIn: false,
  isSuperAdmin: false,
  isAdmin: false,
  isPublisher: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCredentials: (
      state: IUserStoreState,
      { payload }: PayloadAction<IUserStoreState>
    ) => {
      state.credentials = payload.credentials;
      state.currentUser = payload.currentUser;
      state.isLoggedIn = payload.isLoggedIn;
    },
    resetUserCredentials: () => initialState,
  },
});

export const { setUserCredentials, resetUserCredentials } = userSlice.actions;

export const selectUser = ({ user }: RootState) => user;

export default userSlice.reducer;
