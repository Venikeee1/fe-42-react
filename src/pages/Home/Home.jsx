import { useState, useEffect, useCallback } from 'react';
import { fetchArticles } from '../../services/articles';
import { Articles } from '../../components/Articles';
import { Container } from '../../components/Container';
import { SearchBar } from '../../components/SearchBar';
import { Loader } from '../../components/Loader';
import { Outlet } from 'react-router-dom';

import styles from './Home.module.css';
import { Pagination } from '../../components/Pagination';

export const Home = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  const handleChange = (query) => {
    setQuery(query);
  };

  const handlePageChange = useCallback((page) => {
    setPage(page);
  }, []);

  useEffect(() => {
    setLoading(true);
    const asyncRequest = async () => {
      try {
        const { data } = await fetchArticles(query, page);
        const { hits, nbPages } = data;
        setTotalPages(nbPages);
        setArticles(hits);
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(false);
      }
    };

    asyncRequest();
  }, [query, page]);

  const timerIsActive = 0;

  return (
    <>
      {loading && <Loader />}
      <Outlet />
      <Container>
        <main className={styles.main}>
          {!!timerIsActive && <div>Hello</div>}
          <SearchBar onChange={handleChange} />
          <Pagination pagesLimit={totalPage} onChange={handlePageChange} />
          <Articles items={articles} />
        </main>
      </Container>
    </>
  );
};
