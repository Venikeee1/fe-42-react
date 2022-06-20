import { forwardRef } from 'react';
import styles from './Input.module.css';

export const Input = forwardRef(({ className, ...props }, ref) => {
  const classList = [styles.input, className].join(' ');

  return <input ref={ref} type="text" {...props} className={classList} />;
});
