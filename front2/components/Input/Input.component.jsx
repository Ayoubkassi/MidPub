import { Label , InputBut , Wrap } from './Input.styles';

const Input = ({label}) => {
  return(
    <Wrap>
      <Label>{label}</Label>
      <InputBut />
    </Wrap>
  );
}

export default Input;
