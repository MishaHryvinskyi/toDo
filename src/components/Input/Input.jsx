import { InputStyled } from "./Input";

const Input = ({ name }) => {
    return (
        <InputStyled type="text" placeholder={name}/>
    )
}

export default Input;