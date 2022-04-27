import style from './HeaderNavItem.module.css';

export const HeaderNavItem = ({ label, link }) => {
  return (
    <li className={style.item}>
      <a className={style.itemLink} href={link}>
        {label}
      </a>
    </li>
  );
};
