import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SpeciesDTO } from 'app/types';
import { baseUrl } from 'app/config';

export const speciesProfileApi = createApi({
  reducerPath: 'speciesProfileApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSpecies: builder.query<SpeciesDTO, string>({
      query: (id: string) => `/species/${id}`,
    }),
  }),
});

export const {
  useGetSpeciesQuery,
} = speciesProfileApi;
