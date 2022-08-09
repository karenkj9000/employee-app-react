import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices/counterSlice.js";
import { baseApi } from "../services/Api.js";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    //counter: counterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});


setupListeners(store.dispatch)