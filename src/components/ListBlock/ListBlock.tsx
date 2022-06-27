export interface ListBlockProps {
  title: string;
  listItems: string[] | undefined;
}

function ListBlock({ title, listItems }: ListBlockProps) {
  return (
    <div className="bg-white h-fit sm:h-auto p-4">
      <h3 className="font-medium text-lg font-['Poppins'] border-b border-gray-500 mb-4">{title}</h3>
      {
        !listItems
        && (
          <div>loading...</div>
        )
      }
      {
        listItems
        && (
          <ul className="pl-4">
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
