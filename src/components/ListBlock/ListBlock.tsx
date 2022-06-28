import Spinner from 'components/Spinner/Spinner';

export interface ListBlockProps {
  title: string;
  listItems: string[] | undefined;
}

function ListBlock({ title, listItems }: ListBlockProps) {
  return (
    <div
      className="bg-white h-fit sm:h-auto p-4"
      data-testid="ListBlock:container"
    >
      <h3
        className="font-medium text-lg font-['Poppins'] border-b border-gray-500 mb-4"
        data-testid="ListBlock:title"
      >
        {title}
      </h3>
      {
        !listItems
        && (
          <Spinner />
        )
      }
      {
        listItems
        && (
          <ul className="pl-4" data-testid="ListBlock:list">
            {
              listItems.map((item) => (
                <li key={item}>{item}</li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

export default ListBlock;
