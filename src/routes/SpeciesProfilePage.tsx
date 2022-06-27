import Header from 'components/Header/Header';
import SpeciesProfile from 'features/speciesProfile/SpeciesProfile';

function SpeciesProfilePage() {
  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Page header */}
      <Header title="Species Profile Page" withBackButton />

      {/* Page content with profile of selected spieces */}
      <SpeciesProfile />
    </div>
  );
}

export default SpeciesProfilePage;
