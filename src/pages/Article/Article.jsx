import { useParams, useMatch } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { useFetch } from '../../hooks/useFetch';
import { fetchArticleById } from '../../services/articles';

import styles from './Article.module.css';

export const Article = () => {
  const { id } = useParams();
  const match = useMatch('/articles/:id');
  console.log(match);
  const { data, loading, error } = useFetch(() => fetchArticleById(id), [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    data && (
      <section className={styles.container}>
        <img
          className={styles.image}
          src="https://833250.smushcdn.com/1694534/wp-content/uploads/2021/06/292dfc52465f28b3c40ecf201c97b091.jpeg?lossy=1&strip=1&webp=1"
          alt="Article"
        />
        <h1 className={styles.title}>{data.title}</h1>
        <span className={styles.author}>{data.author}</span>
      </section>
    )
  );
};
