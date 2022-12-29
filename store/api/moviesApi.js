import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_MOVIE_URL;

const moviesApi = createApi({
  reducerPath: `moviesApi`,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        `X-RapidAPI-Key`,
        `77558f8b16mshdb2bd10f7f24748p1fc861jsn4226e8b2bcd1`
      );
      headers.set("X-RapidAPI-Host", "movies-app1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    //get movies
    getMoviesData: builder.query({
      query: (data) => `api/genres`,
    }),
  }),
});
export const { useGetMoviesDataQuery } = moviesApi;

export default moviesApi;
