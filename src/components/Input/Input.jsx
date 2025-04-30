import { InputStyled } from "./Input";

const Input = ({ name, value, onChange }) => {
    return (
        <InputStyled 
      type="text" 
      placeholder={name}
      value={value} 
      onChange={onChange} 
    />
    )
}

export default Input;