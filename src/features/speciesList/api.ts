import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SpeciesDTOResponse } from 'app/types';
import { baseUrl } from 'app/config';

export const speciesListApi = createApi({
  reducerPath: 'speciesListApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllSpecies: builder.query<SpeciesDTOResponse, number>({
      query: (page: number) => `/species?page=${page}`,
    }),
  }),
});

export const {
  useGetAllSpeciesQuery,
} = speciesListApi;
