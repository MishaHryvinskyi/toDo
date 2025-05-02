import Input from '../Input/Input.jsx'
import Button from '../Button/Button.jsx'

const Form = ({ todoName, todoDescr, handleChange, handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <Input
                name="head"
                text="Введіть текст"
                value={todoName}
                onChange={handleChange}
            />

            <Input
                name="descr"
                text="Введіть опис"
                value={todoDescr}
                onChange={handleChange}
            />
            <Button type="submit">Створити</Button>
        </form>
    )
}

export default Form;