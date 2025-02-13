import { publicApi } from ".";

export const faqApi = publicApi.injectEndpoints({
  endpoints: (builder) => ({
    getFaq: builder.query({
      query: () => ({ url: "/faq", method: "GET" }),
    }),
  }),
});
