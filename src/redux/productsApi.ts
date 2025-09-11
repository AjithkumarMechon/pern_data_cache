import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
    baseUrl: "http://localhost:3000/en/dashboard",
  }), // or your API
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => "/crud",
      keepUnusedDataFor: 3600, // staleTime
      //   refetchOnMountOrArgChange: false, // optional, won't refetch on mount if cached
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
