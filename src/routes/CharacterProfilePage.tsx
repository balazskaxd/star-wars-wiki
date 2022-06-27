import Header from 'components/Header/Header';
import CharacterProfile from 'features/characterProfile/CharacterProfile';

function CharacterProfilePage() {
  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Page header */}
      <Header title="Character Profile Page" withBackButton />

      {/* Page content with profile of selected character */}
      <CharacterProfile />
    </div>
  );
}

export default CharacterProfilePage;
