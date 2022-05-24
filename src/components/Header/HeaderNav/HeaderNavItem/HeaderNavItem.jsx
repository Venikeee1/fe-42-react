import { NavLink } from 'react-router-dom';

import style from './HeaderNavItem.module.css';

export const HeaderNavItem = ({ label, link }) => {
  return (
    <li className={style.item}>
      <NavLink
        to={link}
        className={({ isActive }) => {
          return isActive
            ? [style.itemLink, style.active].join(' ')
            : style.itemLink;
        }}
      >
        {label}
      </NavLink>
    </li>
  );
};

// style.itemLink
