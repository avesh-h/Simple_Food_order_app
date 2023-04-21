import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { Authentication: false },
  reducers: {
    login(state) {
      state.Authentication = true;
      localStorage.setItem('loggedIn','1')
    },
    logout(state) {
      state.Authentication = false;
      localStorage.removeItem('loggedIn')
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
