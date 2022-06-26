import { useGetSpeciesQuery } from './api';

export const useSpecies = (id: string) => {
  const { data: speciesProfile, isLoading, isFetching } = useGetSpeciesQuery(id);

  return {
    isLoading,
    isFetching,
    speciesProfile,
  };
};
