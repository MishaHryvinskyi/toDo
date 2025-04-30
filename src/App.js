import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 100px 20px;
    margin: 0 auto;
    max-width: 480px;
    background-color: #ececec; 

    @media (min-width:768px) {
        max-width: 768px;
        padding: 100px 40px;
    }

    @media (min-width:1200px) {
        max-width: 1200px;
        padding: 100px 80px;
    }
`;