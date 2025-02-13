import { combineReducers } from "@reduxjs/toolkit";

import { privateApi } from "../api/private";
import { publicApi } from "../api/public";
import authReducer from "./auth";

const rootReducer = combineReducers({
  [privateApi.reducerPath]: privateApi.reducer,
  [publicApi.reducerPath]: publicApi.reducer,
  auth: authReducer,
});
export default rootReducer;
