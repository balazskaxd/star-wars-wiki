import { useMemo } from 'react';
import { CardListItem } from 'app/types';
import { getItemId } from 'app/utils';
import CardList from 'components/CradList/CardList';
import { useSpeciesList } from './useSpeciesList';

function SpeciesList() {
  const {
    speciesList,
  } = useSpeciesList();

  const transformedSpeciesList: CardListItem[] | undefined = useMemo(() => (
    speciesList && speciesList.results.map((species) => ({
      name: species.name,
      id: getItemId(species.url, 'species'),
    }))
  ), [speciesList]);

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      {
        transformedSpeciesList
        && (
          <CardList items={transformedSpeciesList} path="/species" />
        )
      }
    </div>
  );
}

export default SpeciesList;
