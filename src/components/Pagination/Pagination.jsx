import { useAfterInitEffect } from '../../hooks/useAfterInitEffect';
import { usePagination } from '../../hooks/usePagination';

export const Pagination = ({ pagesLimit, page = 1, onChange }) => {
  const { goToPrevPage, goToNextPage, currentPage } = usePagination({
    pagesLimit,
    page,
  });

  useAfterInitEffect(() => {
    onChange?.(currentPage);
  }, [currentPage, onChange]);

  return (
    <>
      <button onClick={goToPrevPage}>Prev</button>
      <span>{currentPage}</span>
      <button onClick={goToNextPage}>Next</button>
      <div>Total pages {pagesLimit}</div>
    </>
  );
};
