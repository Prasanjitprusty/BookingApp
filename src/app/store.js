// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/couter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
