import styled from '@emotion/styled'

export const InputStyled = styled.input`
    display: block;
    font-size: 24px;
    font-weight: 800;
    padding: 10px 20px;
    margin: 20px auto;

    background-color: skyblue;
    color: white;
    border: none;
    border-radius: 8px;

    width: 100%;

    @media (min-width:768px) {
        max-width: 480px;
    }

    @media (min-width:1200px) {
        max-width: 480px;
    }

    &::placeholder {
        color: white;
        font-weight: 400;
    }
`;