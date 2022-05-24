import styles from './Modal.module.css';

export const Modal = ({ children }) => {
  return (
    <section className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
