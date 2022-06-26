import { useParams } from 'react-router-dom';
import { useSpecies } from './useSpeciesProfile';

type SpeciesProfileParams = {
  id: string;
};

function SpeciesProfile() {
  const { id } = useParams<SpeciesProfileParams>();

  const {
    speciesProfile,
    peopleList,
  } = useSpecies(id!);

  return (
    <div>
      {
        speciesProfile
        && (
          <div className="max-w-4xl mx-auto pt-10">
            <h2 className="font-medium text-3xl font-['Poppins'] border-b border-gray-500 py-3 pl-6">
              {`${speciesProfile.name} characters`}
            </h2>
            <div className="grid grid-cols-2">
              <div className="bg-white">
                {
                  peopleList && peopleList.map((people) => (
                    <li key={people.name}>{people.name}</li>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default SpeciesProfile;
