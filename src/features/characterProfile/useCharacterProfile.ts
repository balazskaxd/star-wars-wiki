import { useState, useEffect } from 'react';
import { FilmDTO, SpeciesDTO } from 'app/types';
import { populateIds } from 'app/utils';
import { useGetCharacterQuery } from './api';

export const useCharacterProfile = (id: string) => {
  const [filmList, setFilmList] = useState<FilmDTO[] | undefined>(undefined);
  const [speciesList, setSpeciesList] = useState<SpeciesDTO[] | undefined>(undefined);

  const { data: characterProfile, isLoading, isFetching } = useGetCharacterQuery(id);

  const fetchFilms = async () => {
    if (characterProfile?.films) {
      const populatedFilms = await populateIds(characterProfile.films);
      setFilmList(populatedFilms);
    }
  };

  const fetchSpecies = async () => {
    if (characterProfile?.species) {
      const populatedSpecies = await populateIds(characterProfile.species);
      setSpeciesList(populatedSpecies);
    }
  };

  useEffect(() => {
    if (characterProfile) {
      fetchFilms();
      fetchSpecies();
    }
  }, [characterProfile]);

  return {
    isLoading,
    isFetching,
    characterProfile,
    filmList,
    speciesList,
  };
};
