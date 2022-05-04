import styles from './Textarea.module.css';

export const Textarea = ({ className, ...props }) => {
  const classList = [styles.textarea, className].join(' ');

  return <textarea {...props} className={classList}></textarea>;
};
