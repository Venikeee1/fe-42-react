import { IconButton } from '../../../IconButton';
import { ReactComponent as CartIcon } from '../../../../assets/Group.svg';
import { ReactComponent as FavoriteIcon } from '../../../../assets/Vector.svg';
import style from './HeaderAcc.module.css';

export const HeaderAcc = () => {
  return (
    <div className={style.container}>
      <IconButton className={style.icon}>
        <FavoriteIcon />
      </IconButton>
      <IconButton className={style.icon}>
        <CartIcon />
      </IconButton>
    </div>
  );
};
