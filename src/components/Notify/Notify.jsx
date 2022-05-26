import PropTypes from 'prop-types';
import styles from './Notify.module.css';
import cx from 'classnames';

export const Notify = ({ type = 'success', message, id, onClose }) => {
  const notifyStyles = cx(styles.notify, {
    [styles.error]: type === 'error',
    [styles.warning]: type === 'warning',
    [styles.success]: type === 'success',
  });

  const handleClose = () => {
    onClose?.(id);
  };

  return (
    <div className={notifyStyles} onClick={handleClose}>
      {message}
    </div>
  );
};

Notify.propTypes = {
  type: PropTypes.oneOf(['warning', 'success', 'error']),
  message: PropTypes.string,
  id: PropTypes.string,
  onClose: PropTypes.func,
};
