import { InputStyled } from "./Input";

const Input = ({ text, value, onChange, name }) => {
  return (
    <InputStyled 
      type="text" 
      placeholder={text}
      value={value} 
      onChange={onChange} 
      name={name}
    />
  )
}

export default Input;