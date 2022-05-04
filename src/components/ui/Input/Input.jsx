import styles from './Input.module.css';

export const Input = ({ className, ...props }) => {
  const classList = [styles.input, className].join(' ');

  return <input {...props} className={classList} type="text" />;
};
