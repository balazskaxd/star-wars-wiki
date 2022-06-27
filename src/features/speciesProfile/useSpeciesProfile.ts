import { PeopleDTO } from 'app/types';
import { useState, useEffect } from 'react';
import { useGetSpeciesQuery } from './api';

export const useSpeciesProfile = (id: string) => {
  const [peopleList, setPeopleList] = useState<PeopleDTO[] | undefined>(undefined);

  const { data: speciesProfile, isLoading, isFetching } = useGetSpeciesQuery(id);

  const fetchPeople = async () => {
    Promise
      .all(speciesProfile!.people.map((people) => fetch(people).then((data) => (data.json()))))
      .then((reposnes) => {
        setPeopleList(reposnes);
      });
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
