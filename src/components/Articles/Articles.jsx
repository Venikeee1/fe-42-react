import PropTypes from 'prop-types';
import { Article } from './Article';
import styles from './Articles.module.css';

export const Articles = ({ items }) => {
  return (
    <section className={styles.articles}>
      {items.map((article) => {
        return (
          <Article
            key={article.objectID}
            title={article.title}
            tags={article.tags}
          />
        );
      })}
    </section>
  );
};

Articles.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
