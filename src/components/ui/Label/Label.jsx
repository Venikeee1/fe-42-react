import styles from './Label.module.css';

export const Label = ({ children, className, ...props }) => {
  return (
    <label className={[styles.label, className].join(' ')} {...props}>
      {children}
    </label>
  );
};
