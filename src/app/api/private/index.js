import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

import { baseUrl } from "../baseUrl";

export const privateApi = createApi({
  baseQuery: baseQuery({ baseUrl: `${baseUrl}/api/v1` }),
  endpoints: () => ({}),
  reducerPath: "privateApi",
  tagTypes: [],
});

function baseQuery(context) {
  return async (arg) => {
    try {
      const response = await axios({
        ...arg,
        headers: {
          ...arg.headers,
        },
        url: `${context.baseUrl}${arg.url}`,
      });
      return {
        data: arg.responseHandler
          ? arg.responseHandler(response)
          : response.data,
      };
    } catch (_error) {
      const error = _error;
      return {
        error: {
          data: error.response?.data ?? error.message,
          status: error.response?.status,
        },
      };
    }
  };
}
