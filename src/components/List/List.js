import styled from "@emotion/styled"

export const ListStyled = styled.ul`
    background-color: skyblue;

    width: 100%;

    @media (min-width:768px) {
        max-width: 768px;
    }

    @media (min-width:1200px) {
        max-width: 1200px;
    }
`;

export const NotItems = styled.p`
    text-align: center;
    font-size: 24px;

    color: red;
`;