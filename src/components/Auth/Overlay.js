import style from './Overlay.module.css';

export const Overlay = ({ children }) => {
  return <section className={style.container}>{children}</section>;
};
