const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <button
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        className="
          px-4
          py-2
          border
          rounded-lg
          disabled:opacity-50
        "
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() =>
            onPageChange(page)
          }
          className={`
            px-4 py-2 rounded-lg border
            ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-white"
            }
          `}
        >
          {page}
        </button>
      ))}

      <button
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        className="
          px-4
          py-2
          border
          rounded-lg
          disabled:opacity-50
        "
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;