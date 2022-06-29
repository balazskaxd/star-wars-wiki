import { useMemo } from 'react';
import { CardListItem } from 'app/types';
import { getItemId } from 'app/utils';
import CardList from 'components/CradList/CardList';
import Spinner from 'components/Spinner/Spinner';
import Pagination from 'components/Pagination/Pagination';
import { useSpeciesList } from './useSpeciesList';

function SpeciesList() {
  const {
    page,
    setPage,
    isFetching,
    speciesResponse,
  } = useSpeciesList();

  const transformedSpeciesList: CardListItem[] | undefined = useMemo(() => (
    speciesResponse && speciesResponse.results.map((species) => ({
      name: species.name,
      id: getItemId(species.url, 'species'),
    }))
  ), [speciesResponse]);

  return (
    <div
      className="max-w-4xl mx-auto p-10"
      data-testid="SpeciesList:container"
    >
      {
        isFetching && <Spinner />
      }
      {
        !isFetching && transformedSpeciesList
        && (
          <>
            <CardList items={transformedSpeciesList} path="/species" />
            <Pagination
              total={speciesResponse!.count}
              currentPage={page}
              onChange={setPage}
            />
          </>
        )
      }
    </div>
  );
}

export default SpeciesList;
