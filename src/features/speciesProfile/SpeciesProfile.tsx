import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CardListItem, ProfileUrlParams } from 'app/types';
import { getItemId } from 'app/utils';
import CardList from 'components/CradList/CardList';
import { useSpeciesProfile } from './useSpeciesProfile';

function SpeciesProfile() {
  const { id } = useParams<ProfileUrlParams>();

  const {
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
    <div>
      {
        speciesProfile
        && (
          <div className="max-w-4xl mx-auto pt-10">
            <h2 className="font-medium text-3xl font-['Poppins'] border-b border-gray-500 py-3 pl-6 mb-6">
              {`${speciesProfile.name} characters`}
            </h2>
            {
              transformedPeopleList
              && (
                <CardList items={transformedPeopleList} path="/characters" />
              )
            }
          </div>
        )
      }
    </div>
  );
}

export default SpeciesProfile;
