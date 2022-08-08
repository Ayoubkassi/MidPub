import Input from '../Input/Input.component';
import {Main , Button , ButContainer } from './LoginForm.styles';

const LoginForm = () => {
  const sizeWidth=500;

  return(
    <Main>
      <form>
        <Input label="Username" width={sizeWidth} type="text" />
        <Input label="Password" width={sizeWidth} type="password" />
        <p>I forgot my password</p>
        <ButContainer>
          <Button>Sign in</Button>
        </ButContainer>
      </form>
    </Main>
  );
}

export default LoginForm;
