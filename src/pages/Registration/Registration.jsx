import { Overlay } from '../../components/Auth/Overlay';
import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';
import { Label } from '../../components/ui/Label/Label';
import styles from './Registration.module.css';

const Registration = () => {
  return (
    <Overlay>
      <form>
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" />
        <Label htmlFor="login">Login</Label>
        <Input id="login" type="text" />
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" />
        <div className={styles.registrationAction}>
          <Button fullWidth>Register</Button>
        </div>
      </form>
    </Overlay>
  );
};

export default Registration;
