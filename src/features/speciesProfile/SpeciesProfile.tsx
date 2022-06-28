import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CardListItem, ProfileUrlParams } from 'app/types';
import { getItemId } from 'app/utils';
import CardList from 'components/CradList/CardList';
import Spinner from 'components/Spinner/Spinner';
import { useSpeciesProfile } from './useSpeciesProfile';

function SpeciesProfile() {
  const { id } = useParams<ProfileUrlParams>();

  const {
    isFetching,
    speciesProfile,
    peopleList,
  } = useSpeciesProfile(id!);

  const transformedPeopleList: CardListItem[] | undefined = useMemo(() => (
    peopleList && peopleList.map((item) => ({
      name: item.name,
      id: getItemId(item.url, 'people'),
    }))
  ), [peopleList]);

  return (
    <div
      className="max-w-4xl mx-auto p-10"
      data-testid="SpeciesProfile:container"
    >
      {
        isFetching && <Spinner />
      }
      {
        !isFetching && speciesProfile
        && (
          <>
            <h2
              className="font-medium text-3xl font-['Poppins'] border-b border-gray-500 py-3 pl-6 mb-6"
              data-testid="SpeciesProfile:title"
            >
              {`${speciesProfile.name} characters`}
            </h2>
            {
              transformedPeopleList
              && (
                <CardList items={transformedPeopleList} path="/characters" />
              )
            }
          </>
        )
      }
    </div>
  );
}

export default SpeciesProfile;
