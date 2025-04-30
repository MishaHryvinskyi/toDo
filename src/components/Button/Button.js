import styled from "@emotion/styled"

export const ButtonStyled = styled.button`
    cursor: pointer;
    font-size: 20px;
    font-weight: 800;
    display: block;
    margin: 0 auto;
    padding: 20px 40px;
    text-align: center;
    border: none;
    border-radius: 50px;
    color: #ececec;
    background-color: #50cb86; 
    box-shadow: 0px 0px 46px 19px rgba(80,203,134,0.48);
    width: 100%;
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        color: #385170; 
        background-color: #f5ff8d; 
        box-shadow: 0px 0px 46px 19px rgba(245,255,141,0.48);
    }

    @media (min-width: 768px) {
        width: 300px;
    }
`;