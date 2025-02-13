import { publicApi } from ".";

export const testimonialApi = publicApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => ({ url: "/testimonials", method: "GET" }),
    }),
  }),
});

export const { useGetTestimonialsQuery } = testimonialApi;
