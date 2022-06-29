import { useState } from 'react';
import { useGetAllSpeciesQuery } from './api';

export const useSpeciesList = () => {
  const [page, setPage] = useState(1);

  const { data: speciesResponse, isLoading, isFetching } = useGetAllSpeciesQuery(page);

  return {
    isLoading,
    isFetching,
    speciesResponse,
    page,
    setPage,
  };
};
