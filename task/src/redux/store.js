import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../components/Slice/authSlice";

const combineReducer = combineReducers({
  auth: authSlice,
});

const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export default store;
