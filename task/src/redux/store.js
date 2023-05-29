import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import authSlice from "../components/Slice/authSlice";
import todoslice from "../components/Slice/todoSlice";

const combineReducer = combineReducers({
  // auth: authSlice,
  todo: todoslice,
});

const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export default store;
