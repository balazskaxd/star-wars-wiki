import { PeopleDTO, ProfileUrlParams } from 'app/types';
import ListBlock from 'components/ListBlock/ListBlock';
import { useParams } from 'react-router-dom';
import { useCharacterProfile } from './useCharacterProfile';

type ListFieldRowType = {
  label: string;
  field: string;
};

const listFields: ListFieldRowType[] = [
  { label: 'Name', field: 'name' },
  { label: 'Birth year', field: 'birth_year' },
  { label: 'Gender', field: 'gender' },
  { label: 'Eye color', field: 'eye_color' },
  { label: 'Hair color', field: 'hair_color' },
  { label: 'Skin color', field: 'skin_color' },
  { label: 'Height', field: 'height' },
  { label: 'Mass', field: 'mass' },
];

function CharacterProfile() {
  const { id } = useParams<ProfileUrlParams>();

  const {
    characterProfile,
    filmList,
    speciesList,
  } = useCharacterProfile(id!);

  return (
    <div>
      {
        characterProfile
        && (
          <div className="max-w-4xl mx-auto p-10">
            <h2 className="font-medium text-3xl font-['Poppins'] border-b border-gray-500 py-3 pl-6">
              {characterProfile.name}
            </h2>
            <dl>
              {
                listFields.map((row, index) => (
                  <div
                    key={row.field}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-5 sm:px-6`}
                  >
                    <dt className="text-sm font-medium text-gray-500">
                      {`${row.label}:`}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {characterProfile[row.field as keyof PeopleDTO] as string}
                    </dd>
                  </div>
                ))
              }
            </dl>

            <div className="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-5 mt-5">
              <ListBlock
                title="Film list"
                listItems={filmList && filmList.map(({ title }) => (title))}
              />

              <ListBlock
                title="Film list"
                listItems={speciesList && speciesList.map(({ name }) => (name))}
              />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default CharacterProfile;
