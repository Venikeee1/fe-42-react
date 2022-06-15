import { useState, useCallback } from 'react';

const DEFAULT_PER_PAGE = 20;

export const usePagination = ({
  page = 1,
  pagesLimit,
  perPageSize = DEFAULT_PER_PAGE,
}) => {
  const [currentPage, setCurrentPage] = useState(page);

  const changePage = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  // usememo замість useCallback
  // const changePage1 = useMemo(() => (page) => {
  //   setCurrentPage(page);
  // }, []);

  const goToNextPage = useCallback(() => {
    if (currentPage >= pagesLimit) return;

    setCurrentPage((prevState) => +prevState + 1);
  }, [currentPage, pagesLimit]);

  const goToPrevPage = useCallback(() => {
    if (currentPage === 1) return;

    setCurrentPage((prevState) => prevState - 1);
  }, [currentPage]);

  return {
    currentPage,
    pagesLimit,
    perPageSize,
    changePage,
    goToNextPage,
    goToPrevPage,
  };
};
