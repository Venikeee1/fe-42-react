import cx from 'classnames';
import style from './IconButton.module.css';

export const IconButton = ({ children, className, ...restProps }) => {
  const classList = cx(style.button, className);

  return (
    <button {...restProps} className={classList}>
      {children}
    </button>
  );
};
