import { createSlice } from '@reduxjs/toolkit';
import datas from '../data/users.json';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: datas,
  },
  reducers: {
    incrementFollowesr(state, action) {
      const currentFollowers = state.users.find(
        data => data.id === action.payload
      );
      currentFollowers.followers = currentFollowers.followers + 1;
      currentFollowers.isFollowing = true;
    },
    decrementFollowesr(state, action) {
      const currentFollowers = state.users.find(
        data => data.id === action.payload
      );
      currentFollowers.followers = currentFollowers.followers - 1;
      currentFollowers.isFollowing = false;
    },
  },
});

export const { incrementFollowesr, decrementFollowesr } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
