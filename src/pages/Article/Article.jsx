import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { useFetch } from '../../hooks/useFetch';
import { fetchArticleById } from '../../services/articles';

import styles from './Article.module.css';

export const Article = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    () => fetchArticleById(id),
    [id],
    {}
  );
  const { title, author } = data;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className={styles.container}>
      <img
        className={styles.image}
        src="https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/292dfc52465f28b3c40ecf201c97b091.jpeg?lossy=1&strip=1&webp=1"
        alt="Article"
      />
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.author}>{author}</span>
    </section>
  );
};

export default Article;
