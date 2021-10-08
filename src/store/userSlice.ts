/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getDecodedTokenFromCookie } from '~/utils';
import type { RootState, IUserStoreState } from '~/types/index';

const initialState: IUserStoreState = {
  credentials: {
    id: getDecodedTokenFromCookie()?.sub,
    role: getDecodedTokenFromCookie()?.claim,
  },
  user: null,
  isLoggedIn: !!getDecodedTokenFromCookie()?.sub,
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
      state.user = payload.user;
      state.isLoggedIn = payload.isLoggedIn;
    },
    resetUserCredentials: () => initialState,
  },
});

export const { setUserCredentials, resetUserCredentials } = userSlice.actions;

export const selectCurrentUser = ({ user }: RootState) => user;

export default userSlice.reducer;
