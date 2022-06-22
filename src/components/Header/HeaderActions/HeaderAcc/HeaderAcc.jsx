import { IconButton } from '../../../IconButton';
import { ReactComponent as CartIcon } from '../../../../assets/Group.svg';
import { ReactComponent as FavoriteIcon } from '../../../../assets/Vector.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../../store/auth/auth';
import style from './HeaderAcc.module.css';

export const HeaderAcc = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className={style.container}>
      {isAuth && (
        <IconButton className={style.icon} onClick={handleLogout}>
          logout
        </IconButton>
      )}
      {!isAuth && (
        <>
          <IconButton className={style.icon}>
            <FavoriteIcon />
          </IconButton>
          <IconButton className={style.icon}>
            <CartIcon />
          </IconButton>
        </>
      )}
    </div>
  );
};
