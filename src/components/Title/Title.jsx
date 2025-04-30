import { TitleStyle } from "./Title";

const Title = ({ title }) => {
    return (
        title && <TitleStyle>{title}</TitleStyle>
    )
}

export default Title;