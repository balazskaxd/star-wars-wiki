import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PeopleDTO } from 'app/types';

export const characterProfileApi = createApi({
  reducerPath: 'characterProfileApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getCharacter: builder.query<PeopleDTO, string>({
      query: (id: string) => `people/${id}`,
    }),
  }),
});

export const {
  useGetCharacterQuery,
} = characterProfileApi;
