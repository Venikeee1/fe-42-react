import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import style from './Logo.module.css';

export const Logo = () => {
  return (
    <a className={style.logo} href="/">
      <LogoIcon />
    </a>
  );
};
