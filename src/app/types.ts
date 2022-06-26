export type People = {
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
  homeworld: string;
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

export type SpeciesListItem = {
  name: string;
  id: string;
};
