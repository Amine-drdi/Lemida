import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";
import { setupListeners } from "@reduxjs/toolkit/query";
import { privateApi } from "../api/private";
import { publicApi } from "../api/public";

const createStore = (preloadedState) =>
  configureStore({
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(privateApi.middleware)
        .concat(publicApi.middleware),
    preloadedState,
    reducer: rootReducer,
  });

const store = createStore();

export default store;

setupListeners(store.dispatch);
