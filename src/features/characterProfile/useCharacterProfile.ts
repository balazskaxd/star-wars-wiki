import { useState, useEffect } from 'react';
import { FilmDTO, SpeciesDTO } from 'app/types';
import { useGetCharacterQuery } from './api';

export const useCharacterProfile = (id: string) => {
  const [filmList, setFilmList] = useState<FilmDTO[] | undefined>(undefined);
  const [speciesList, setSpeciesList] = useState<SpeciesDTO[] | undefined>(undefined);

  const { data: characterProfile, isLoading, isFetching } = useGetCharacterQuery(id);

  const fetchFilms = async () => {
    Promise
      .all(characterProfile!.films.map((film) => fetch(film).then((data) => (data.json()))))
      .then((reposnes) => {
        setFilmList(reposnes);
      });
  };

  const fetchSpecies = async () => {
    Promise
      .all(characterProfile!.species.map((item) => fetch(item).then((data) => (data.json()))))
      .then((reposnes) => {
        setSpeciesList(reposnes);
      });
  };

  useEffect(() => {
    console.log(characterProfile);
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
