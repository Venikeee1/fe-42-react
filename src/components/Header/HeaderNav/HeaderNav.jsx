import { HeaderNavItem } from './HeaderNavItem';
import style from './HeaderNav.module.css';

const NAV_ITEMS = [
  {
    label: 'PLANTS CATALOG',
    link: '',
  },
  {
    label: 'Articles',
    link: '/articles',
  },
  {
    label: 'FAQ',
    link: '',
  },
  {
    label: 'Blog',
    link: '',
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
