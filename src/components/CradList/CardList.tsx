import { Link } from 'react-router-dom';

export interface CardListProps {
  items: any[];
  path: string;
}

function CardList({ items, path }: CardListProps) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {
        items.map((item) => (
          <Link
            key={item.name}
            to={`${path}/${item.id}`}
            className="bg-white py-10 px-16 rounded-xl"
          >
            <div className="text-center font-normal font-['Poppins']">
              {item.name}
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default CardList;
