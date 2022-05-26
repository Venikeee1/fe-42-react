import { useState, useCallback, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchArticles } from '../../services/articles';
import { Articles } from '../../components/Articles';
import { Container } from '../../components/Container';
import { SearchBar } from '../../components/SearchBar';
import { Loader } from '../../components/Loader';
import { Outlet } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';
import { useFetch } from '../../hooks/useFetch';
import { useAfterInitEffect } from '../../hooks/useAfterInitEffect';
import { NotifyContext } from '../../providers/ProviderNotify';

import styles from './Home.module.css';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [page, setPage] = useState(searchParams.get('page') ?? 1);
  const { setNotifications } = useContext(NotifyContext);

  const { data, loading, error } = useFetch(
    () => fetchArticles(query, page),
    [query, page],
    { hits: [] }
  );

  useEffect(() => {
    // if (!error) return;

    setNotifications((prevState) => [
      {
        type: 'error',
        message: 'User cannot login',
      },
      ...prevState,
    ]);
  }, [error, setNotifications, query]);

  useAfterInitEffect(() => {
    setSearchParams({ page, query });
  }, [page, query, setSearchParams]);

  const { hits: articles, nbPages: totalPage } = data;

  const handleChange = (query) => {
    setQuery(query);
  };

  const handlePageChange = useCallback((page) => {
    setPage(page);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Outlet />
      <Container>
        <main className={styles.main}>
          <SearchBar onChange={handleChange} />
          <Pagination
            page={page}
            pagesLimit={totalPage}
            onChange={handlePageChange}
          />
          <Articles items={articles} />
        </main>
      </Container>
    </>
  );
};

export default Home;
