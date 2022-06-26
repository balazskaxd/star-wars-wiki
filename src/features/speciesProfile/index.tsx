import { useSpecies } from './useSpeciesProfile';

function SpeciesProfile() {
  const {
    speciesProfile,
  } = useSpecies('1');

  return (
    <div>
      {
        speciesProfile
        && (
          <div>
            {
              speciesProfile.name
            }
          </div>
        )
      }
    </div>
  );
}

export default SpeciesProfile;
