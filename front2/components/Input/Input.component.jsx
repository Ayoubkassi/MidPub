import { Label , InputBut , Wrap } from './Input.styles';

const Input = ({label , width , type}) => {
  return(
    <Wrap>
      <Label>{label}</Label>
      <InputBut width={width} type={type} />
    </Wrap>
  );
}

export default Input;
