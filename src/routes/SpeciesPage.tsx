import Header from 'components/Header/Header';
import SearchInput from 'components/SearchInput/SearchInput';
import SpeciesList from 'features/speciesList/SpeciesList';

function SpeciesPage() {
  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Page header */}
      <Header title="Species Page" />

      {/* Input for character search */}
      <SearchInput />

      {/* Page content with list of species */}
      <SpeciesList />
    </div>
  );
}

export default SpeciesPage;
