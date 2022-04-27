import cx from 'classnames';
import style from './IconButton.module.css';

export const IconButton = ({ children, className }) => {
  const classList = cx(style.button, className);

  return <button className={classList}>{children}</button>;
};
