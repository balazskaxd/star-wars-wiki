import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SpeciesDTO } from 'app/types';

export const speciesProfileApi = createApi({
  reducerPath: 'speciesProfileApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getSpecies: builder.query<SpeciesDTO, string>({
      query: (id: string) => `species/${id}`,
    }),
  }),
});

export const {
  useGetSpeciesQuery,
} = speciesProfileApi;
