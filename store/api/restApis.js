import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const restApis = createApi({
  reducerPath: `restApis`,

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,

    // prepareHeaders: (headers, { getState }) => {
    //   // headers.set(
    //   //   `X-RapidAPI-Key`,
    //   //   `b1fb0c0db0msh6a47f2620baa802p145c4cjsnad4154b3a0b1`
    //   // );

    //   headers.set(baseurl);

    //   return headers;
    // },
  }),

  endpoints: (builder) => ({
    //get
    getPosts: builder.query({
      query: (data) => `users/`,
    }),

    getSingleUser: builder.query({
      query: (data) => `users/${data.id}`,
    }),
  }),

  // endpoints: (builder) => ({
  //   getPosts: builder.query({
  //     query: (data) => console.log(baseUrl),
  //   }),
  // }),
});
export const { useGetPostsQuery, useGetSingleUserQuery } = restApis;

export default restApis;
