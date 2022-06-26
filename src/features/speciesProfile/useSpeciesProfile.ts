import { People } from 'app/types';
import { useState, useEffect } from 'react';
import { useGetSpeciesQuery } from './api';

export const useSpecies = (id: string) => {
  const [peopleList, setPeopleList] = useState<People[] | null>(null);

  const { data: speciesProfile, isLoading, isFetching } = useGetSpeciesQuery(id);

  const fetchPeople = async () => {
    Promise
      .all(speciesProfile!.people.map((people) => fetch(people).then((data) => (data.json()))))
      .then((reposnes) => {
        setPeopleList(reposnes);
      });
  };

  useEffect(() => {
    fetchPeople();
  }, [speciesProfile]);

  return {
    isLoading,
    isFetching,
    speciesProfile,
    peopleList,
  };
};
