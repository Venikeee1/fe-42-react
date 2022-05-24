import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Article.module.css';

export const Article = ({ title, id }) => {
  const articleLink = `/articles/${id}`;

  return (
    <div className={styles.article}>
      <img
        className={styles.image}
        src="https://image.shutterstock.com/image-illustration/articles-complex-like-puzzle-pictured-260nw-1666818295.jpg"
        alt=""
      />
      <h2 className={styles.title}>{title}</h2>
      <Link to={articleLink}>View article</Link>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};
