import Header from 'components/Header/Header';
import SpeciesProfile from 'features/speciesProfile/SpeciesProfile';

function SpeciesProfilePage() {
  return (
    <>
      {/* Page header */}
      <Header title="Species Profile Page" withBackButton />

      {/* Page content with profile of selected spieces */}
      <SpeciesProfile />
    </>
  );
}

export default SpeciesProfilePage;
