import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    logoutUser: state => {
      state.user = null
      window.location.reload()
    }
  }
})

export const getUser = state => state.user.user;

export const { setUser, logoutUser } = slice.actions;

export default slice.reducer;
