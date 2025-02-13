import { publicApi } from ".";

export const authApi = publicApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (arg) => ({ url: "/auth/register", method: "POST", data: arg }),
    }),
    autoSignIn: builder.query({
      query: (arg) => ({ url: "/auth/login", method: "POST", data: arg }),
    }),
    manualSignIn: builder.mutation({
      query: (arg) => ({ url: "/auth/login", method: "POST", data: arg }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useAutoSignInQuery,
  useManualSignInMutation,
} = authApi;
