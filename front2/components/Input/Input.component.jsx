import { Label , InputBut , Wrap } from './Input.styles';

const Input = ({label , width , type , placeholder}) => {
  return(
    <Wrap>
      <Label>{label}</Label>
      <InputBut width={width} type={type} placeholder={placeholder} />
    </Wrap>
  );
}

export default Input;
