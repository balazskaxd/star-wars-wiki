import { Link } from 'react-router-dom';

export interface HeaderProps {
  title: string;
  withBackButton?: boolean;
}

function Header({ title, withBackButton }: HeaderProps) {
  return (
    <div className={`grid ${withBackButton ? 'grid-rows-2' : 'grid-rows-none'} gap-3 bg-slate-200 px-8 py-4 md:grid-cols-3 md:grid-rows-none`}>
      {
        withBackButton
        && (
          <Link to="/">Back to main menu</Link>
        )
      }
      <h1 className={`text-center font-medium font-['Poppins']${!withBackButton ? ' col-span-3' : ''}`}>{title}</h1>
    </div>
  );
}

Header.defaultProps = {
  withBackButton: false,
};

export default Header;
