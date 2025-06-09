import { configureStore } from '@reduxjs/toolkit';
import skipReducer from "./skip/skipSlice"
export const store = configureStore({
  reducer: {
    skip: skipReducer,
  },
});
