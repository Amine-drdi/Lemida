import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { currentUser: null },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    unsetCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

export default authSlice.reducer;

export const { setCurrentUser, unsetCurrentUser } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.currentUser;
