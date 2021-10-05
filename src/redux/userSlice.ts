import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// declaring the types for our state
export type UserState = {
  id: number;
};

const initialState: UserState = {
  id: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeuserid: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.id = action.payload;
    },
  },
});
export const { storeuserid } = userSlice.actions;

export const selectUserid = (state: RootState) => state.user.id;

export default userSlice.reducer;
