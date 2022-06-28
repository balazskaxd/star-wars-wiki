export type FilmDTO = {
  title: string;
  episode_id: number,
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date,
  edited: Date,
  url: string;
};

export type PeopleDTO = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[],
  species: string[],
  vehicles: string[],
  starships: string[],
  created: Date,
  edited: Date,
  url: string;
};

export type SpeciesDTO = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string | null;
  language: string;
  people: string[],
  films: string[],
  created: Date;
  edited: Date;
  url: string;
};

export type SpeciesDTOResponse = {
  count: number;
  next: string | null;
  previous: string | null,
  results: SpeciesDTO[];
};

export type CardListItem = {
  name: string;
  id: string;
};

export type ProfileUrlParams = {
  id: string;
};
