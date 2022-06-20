import { Overlay } from '../../components/Auth/Overlay';
import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';
import { Label } from '../../components/ui/Label/Label';

const Login = () => {
  return (
    <Overlay>
      <form>
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="name" />
        <Label htmlFor="login">Login</Label>
        <Input id="login" type="text" placeholder="login" />
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="email" />
        <Button>Register</Button>
      </form>
    </Overlay>
  );
};

export default Login;
