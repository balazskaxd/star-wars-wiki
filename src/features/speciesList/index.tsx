import { useSpecies } from './useSpeciesList';

function SpeciesList() {
  const {
    speciesList,
  } = useSpecies();

  return (
    <div>
      {
        speciesList
        && (
          <div className="flex flex-wrap">
            {
              speciesList.results.map((item) => (
                <div key={item.name}>{item.name}</div>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default SpeciesList;
