import { useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router';
import { Overlay } from '../../components/Auth/Overlay';
import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';
import { Label } from '../../components/ui/Label/Label';
import { loginUser } from '../../store/auth/auth';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Login.module.css';

const Login = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    password: '',
    email: '',
  });
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state ?? '/';

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(loginUser(userData)).unwrap();

      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  if (token) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <Overlay>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="login">Email</Label>
        <Input onChange={handleChange} name="email" id="login" type="text" />
        <Label htmlFor="email">Email</Label>
        <Input
          onChange={handleChange}
          name="password"
          id="email"
          type="password"
        />
        <div className={styles.loginAction}>
          <Button fullWidth>Register</Button>
        </div>
      </form>
    </Overlay>
  );
};

export default Login;
