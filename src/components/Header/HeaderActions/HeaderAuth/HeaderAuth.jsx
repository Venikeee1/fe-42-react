import style from './HeaderAuth.module.css';

export const HeaderAuth = () => {
  return (
    <div>
      <a className={style.link} href="/login">
        Log in
      </a>{' '}
      /{' '}
      <a className={style.link} href="/register">
        Join
      </a>
    </div>
  );
};
