import {Main , Button , ButContainer , Label , InputBut , Wrap } from './LoginForm.styles';
import { useState } from 'react';
import { useRouter } from 'next/router';


const LoginForm = () => {
  const sizeWidth=500;

  const router = useRouter()



  const [username, setUsername] = useState('');
  const [password , setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username == "admin" && password == "admin"){
          router.push("ads");
    }
    else{
      alert('Incorrect Informations');
      setUsername('');
      setPassword('');

    }
  }
  return(
    <Main>
      <form onSubmit={handleSubmit}>
        <Wrap>
          <Label>Username</Label>
          <InputBut width={sizeWidth} type="text" value={username} onChange={(e) => setUsername(e.target.value) } />
        </Wrap>
        <Wrap>
          <Label>Password</Label>
          <InputBut width={sizeWidth} type="password" value={password}  onChange={(e) => setPassword(e.target.value) } />
        </Wrap>
        <p>I forgot my password</p>
        <ButContainer>
          <Button>Sign in</Button>
        </ButContainer>
      </form>
    </Main>
  );
}

export default LoginForm;
