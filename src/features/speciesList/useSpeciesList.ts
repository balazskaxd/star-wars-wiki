import { useState } from 'react';
import { useGetAllSpeciesQuery } from './api';

export const useSpeciesList = () => {
  const [page, setPage] = useState(1);

  const { data: speciesList, isLoading, isFetching } = useGetAllSpeciesQuery(page);

  return {
    isLoading,
    isFetching,
    speciesList,
    page,
    setPage,
  };
};
