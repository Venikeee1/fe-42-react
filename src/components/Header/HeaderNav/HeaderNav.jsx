import { HeaderNavItem } from './HeaderNavItem';
import style from './HeaderNav.module.css';

const NAV_ITEMS = [
  {
    label: 'Articles',
    link: '/articles',
  },
  {
    label: 'Map',
    link: '/map',
  },
];

export const HeaderNav = () => (
  <nav>
    <ul className={style.list}>
      {NAV_ITEMS.map(({ label, link }) => (
        <HeaderNavItem key={label} label={label} link={link} />
      ))}
    </ul>
  </nav>
);
