import { PeopleDTO } from 'app/types';
import { populateIds } from 'app/utils';
import { useState, useEffect } from 'react';
import { useGetSpeciesQuery } from './api';

export const useSpeciesProfile = (id: string) => {
  const [peopleList, setPeopleList] = useState<PeopleDTO[] | undefined>(undefined);

  const { data: speciesProfile, isLoading, isFetching } = useGetSpeciesQuery(id);

  const fetchPeople = async () => {
    if (speciesProfile?.people) {
      const populatedPeople = await populateIds(speciesProfile.people);
      setPeopleList(populatedPeople);
    }
  };

  useEffect(() => {
    if (speciesProfile) {
      fetchPeople();
    }
  }, [speciesProfile]);

  return {
    isLoading,
    isFetching,
    speciesProfile,
    peopleList,
  };
};
