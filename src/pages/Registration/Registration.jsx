import { Overlay } from '../../components/Auth/Overlay';
import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';
import { Label } from '../../components/ui/Label/Label';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../services/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth/auth';

import styles from './Registration.module.css';

const registerSchema = yup.object().shape({
  name: yup.string().required(),
  password: yup
    .string()
    .test('len', 'Must be greater then 7 characters', (val) => val.length >= 7)
    .required('Please provide login'),
  email: yup.string().email('Wrong email').required('Oops empty email'),
  passwordConfirm: yup
    .string()
    .required('Please confirm password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Registration = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { errors } = formState;

  const onSubmit = async (data) => {
    const { name, email, password } = data;

    try {
      const newUser = await registerUser({ name, email, password });
      dispatch(setUser(newUser));
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Overlay>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Name</Label>
        <Input {...register('name')} id="name" type="text" />
        {errors.name && <p>{errors.name.message}</p>}

        <Label htmlFor="email">Email</Label>
        <Input {...register('email')} id="email" type="email" />
        {errors.email && <p>{errors.email.message}</p>}

        <Label htmlFor="password">Password</Label>
        <Input {...register('password')} id="password" type="password" />
        {errors.password && <p>{errors.password.message}</p>}

        <Label htmlFor="passwordConfirm">Confirm password</Label>
        <Input
          {...register('passwordConfirm')}
          id="passwordConfirm"
          type="password"
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        <div className={styles.registrationAction}>
          <Button fullWidth>Register</Button>
        </div>
      </form>
    </Overlay>
  );
};

export default Registration;
