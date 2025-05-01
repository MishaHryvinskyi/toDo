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

    @media (min-width:320px) and (max-width:767px) {
      h2 {
        width: 200px;
        margin: 0 auto;
        }

        button {
            display: flex;
            margin: 0 auto;
        }
    }

    @media (min-width:768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
    }

    h2 {
        width: 200px;
    }

    h2, p {
        text-align: center;
    }

    button {
        cursor: pointer;
        padding: 10px 12px;
        border: none;
        border-radius: 50%;
        background-color: #ff4057; 
        transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
            transform: scale(1.1);
            background-color:  #de1b4a; 
            box-shadow: 0px 0px 61px 22px rgba(222,27,74,0.6);
            color: white;
        }
    }
`;

export const NotItems = styled.p`
    text-align: center;
    font-size: 24px;

    color: red;
`;