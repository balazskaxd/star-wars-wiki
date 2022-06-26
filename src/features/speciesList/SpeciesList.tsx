import { SpeciesListItem } from 'app/types';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSpecies } from './useSpeciesList';

const getSpeciesId = (url: string): string => (
  `${Number.parseInt(url.split('https://swapi.dev/api/species/')[1], 10)}`
);

function SpeciesList() {
  const {
    speciesList,
  } = useSpecies();

  const transformedSpeciesList: SpeciesListItem[] | undefined = useMemo(() => (
    speciesList && speciesList.results.map((species) => ({
      name: species.name,
      id: getSpeciesId(species.url),
    }))
  ), [speciesList]);

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      {
        transformedSpeciesList
        && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {
              transformedSpeciesList.map((item) => (
                <Link
                  key={item.name}
                  to={`/species/${item.id}`}
                  className="bg-white py-10 px-16 rounded-xl"
                >
                  <div className="text-center font-normal font-['Poppins']">{item.name}</div>
                </Link>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default SpeciesList;
