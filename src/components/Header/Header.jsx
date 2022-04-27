import { HeaderNav } from './HeaderNav/';
import { Logo } from '../Logo';
import { Container } from '../Container';
import { HeaderActions } from './HeaderActions';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <Container className={style.headerContainer}>
        <HeaderNav />
        <Logo />
        <HeaderActions />
      </Container>
    </header>
  );
};
