import { HeaderAcc } from './HeaderAcc/HeaderAcc';
import { HeaderAuth } from './HeaderAuth';
import style from './HeaderActions.module.css';

export const HeaderActions = () => {
  return (
    <div className={style.container}>
      <HeaderAuth />
      <HeaderAcc />
    </div>
  );
};
