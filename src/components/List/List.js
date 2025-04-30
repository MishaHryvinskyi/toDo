import styled from "@emotion/styled"

export const ListStyled = styled.ul`
    background-color: #385170; 
    width: 100%;
    padding: 20px;
    border-radius: 10px;
`;

export const ListItem = styled.li`
    list-style: none;
    border-radius: 8px;
    padding: 10px;
    margin: 0 auto 0 auto;
    background-color: #9fd3c7; 

    &:not(:last-child) {
    margin-bottom: 20px;
    }

    h2, p {
        text-align: center;
    }
`;


export const NotItems = styled.p`
    text-align: center;
    font-size: 24px;

    color: red;
`;