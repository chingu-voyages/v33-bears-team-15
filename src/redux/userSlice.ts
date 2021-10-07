import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type UserState = {
  credentials: {
    id: number;
    role: number;
  };
  userdata: Record<string, never>;
};

const initialState: UserState = {
  credentials: {
    id: 0,
    role: 0,
  },
  userdata: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeuserid: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.id = action.payload;
    },
    storeuserrole: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.role = action.payload;
    },
    storeuserdata: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.userdata = action.payload;
    },
  },
});
export const { storeuserid, storeuserrole, storeuserdata } = userSlice.actions;

export const selectUserid = (state: RootState) => state.user.id;
export const selectUserRole = (state: RootState) => state.user.role;
export const selectUserData = (state: RootState) => state.user.userdata;

export default userSlice.reducer;
