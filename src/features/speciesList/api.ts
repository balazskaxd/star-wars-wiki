import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SpeciesDTOResponse } from 'app/types';

export const speciesListApi = createApi({
  reducerPath: 'speciesListApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getAllSpecies: builder.query<SpeciesDTOResponse, number>({
      query: (page: number) => `species?page=${page}`,
    }),
  }),
});

export const {
  useGetAllSpeciesQuery,
} = speciesListApi;
