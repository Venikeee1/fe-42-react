import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { useFetch } from '../../hooks/useFetch';
import { fetchArticleById } from '../../services/articles';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../../store/user';

import styles from './Article.module.css';

export const Article = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    () => fetchArticleById(id),
    [id],
    {}
  );
  const { title, author } = data;

  const handleUserNameChange = (event) => {
    const { value } = event.target;

    dispatch(setName(value));
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className={styles.container}>
      <h2>
        User {user.name}; salary {user.salary}
      </h2>
      <label>
        Change user name
        <input onChange={handleUserNameChange} type="text" />
      </label>
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
