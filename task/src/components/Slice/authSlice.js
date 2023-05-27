import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { logIn } from "../../redux/services/authService";

const getDefaultUser = () => {
  let user = sessionStorage.getItem("user");
  if (user && user !== "undefined") {
    return JSON.parse(user);
  } else {
    return null;
  }
};
const initialState = {
  user: sessionStorage.getItem("user") ? getDefaultUser() : {},
};

export const logInUser = createAsyncThunk("auth/login", async (payload) => {
  return await logIn(payload);
});

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      sessionStorage.clear();
      state.user = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logInUser.fulfilled, (state, action) => {
      let user = action?.payload?.data;
      state.user = user ? user : {};
    });
  },
});
export default authSlice.reducer;

export const { removeToken } = authSlice.actions;

// export const selectUser = (state) => state.auth.user;

// export const useUser = () => {
//   const user = useSelector(selectUser);
//   sessionStorage.setItem("user", user ? JSON.stringify(user) : undefined);
//   return useMemo(() => ({ user }), [user]);
// };