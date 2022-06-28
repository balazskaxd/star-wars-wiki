import { FilmDTO, PeopleDTO, SpeciesDTO } from "app/types";

export const mockPeople: PeopleDTO = {
  name: 'Luke Testwalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color:'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: '/1/',
  films: ['f1', 'f2', 'f3', 'f6'],
  species: ['s1'],
  vehicles: ['v1', 'v30'],
  starships:['sh12','sh22'],
  created: new Date('2014-12-09T13:50:51.644000Z'),
  edited: new Date('2014-12-20T21:17:56.891000Z'),
  url: 'p1'
};

export const mockSpeciesProfile: SpeciesDTO = {
  name: 'Droid',
  classification: 'artificial',
  designation: 'sentient',
  average_height: 'n/a',
  skin_colors: 'n/a',
  hair_colors: 'n/a',
  eye_colors: 'n/a',
  average_lifespan: 'indefinite',
  homeworld: null,
  language: 'n/a',
  people: ['p2'],
  films: ['f6'],
  created: new Date("2014-12-10T15:16:16.259000Z"),
  edited: new Date("2014-12-20T21:36:42.139000Z"),
  url: 's2'
};

export const mockFilm: FilmDTO = {
  title: 'title',
  episode_id: 5,
  opening_crawl: 'opening_crawl',
  director: 'director',
  producer: 'producer',
  release_date: 'release_date',
  characters: ['c1'],
  planets: ['p1'],
  starships: ['sh1'],
  vehicles: ['v1'],
  species: ['s1'],
  created: new Date(),
  edited: new Date(),
  url: 'url',
};
