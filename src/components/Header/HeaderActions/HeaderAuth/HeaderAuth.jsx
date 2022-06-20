import { Link } from 'react-router-dom';
import style from './HeaderAuth.module.css';

export const HeaderAuth = () => {
  return (
    <div>
      <Link className={style.link} to="/login">
        Log in
      </Link>{' '}
      /{' '}
      <Link className={style.link} to="/registration">
        Join
      </Link>
    </div>
  );
};
