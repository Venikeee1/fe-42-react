import { useCallback, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Articles } from '../../components/Articles';
import { Container } from '../../components/Container';
import { SearchBar } from '../../components/SearchBar';
import { Loader } from '../../components/Loader';
import { Outlet } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';
import { useAfterInitEffect } from '../../hooks/useAfterInitEffect';
import {
  useGetArticlesQuery,
  useUpdateArticleMutation,
} from '../../store/queries/articlesQuery';

import styles from './Home.module.css';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || 1);
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const { data, error, isFetching } = useGetArticlesQuery({
    query,
    page,
  });
  // const [updateArticle, { isLoading }] = useUpdateArticleMutation();

  useEffect(() => {
    if (error) {
      console.warn(error);
    }
  }, [error]);

  useAfterInitEffect(() => {
    setSearchParams({ page, query });
  }, [page, query, setSearchParams]);

  const handleChange = (query) => {
    setQuery(query);
  };

  const handlePageChange = useCallback((page) => {
    setPage(page);
  }, []);

  return (
    <>
      {isFetching && <Loader />}
      <Outlet />
      {data && (
        <Container>
          <main className={styles.main}>
            <SearchBar onChange={handleChange} />
            <Pagination
              page={page}
              pagesLimit={data.pageLimit}
              onChange={handlePageChange}
            />
            <Articles items={data.articles} />
          </main>
        </Container>
      )}
    </>
  );
};

export default Home;
