export interface PaginationProps {
  total: number;
  currentPage: number;
  onChange: (nextPage: number) => void;
}

const buttonStyle = `
  m-5 px-6 py-3 w-[180px]
  bg-slate-500 text-white rounded-lg
  transition-all
  disabled:opacity-50
  hover:opacity-90
`;

function Pagination({ total, currentPage, onChange }: PaginationProps) {
  const handleChange = (direction: number) => {
    onChange(currentPage + direction);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center mt-10">
      <button
        type="button"
        className={buttonStyle}
        onClick={() => { handleChange(-1); }}
        disabled={currentPage === 1}
        data-testid="Pagination:button-previous"
      >
        Previous
      </button>

      <p data-testid="Pagination:page-label">{`${currentPage} / ${Math.ceil(total / 10)}`}</p>

      <button
        type="button"
        className={buttonStyle}
        onClick={() => { handleChange(1); }}
        disabled={Math.ceil(total / 10) === currentPage}
        data-testid="Pagination:button-next"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
