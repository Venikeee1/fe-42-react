import PropTypes from 'prop-types';
import { Tooltip } from '../Tooltip';
import styles from './SearchBar.module.css';

export const SearchBar = ({ onChange }) => {
  const handleChange = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <label className={styles.label} htmlFor="search-bar">
        Search{' '}
        <Tooltip position="bottom" label="Super label">
          (!)
        </Tooltip>
      </label>
      <input
        className={styles.input}
        id="search-bar"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
