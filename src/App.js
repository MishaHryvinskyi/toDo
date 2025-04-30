import styled from '@emotion/styled'

export const Container = styled.div`
    padding: 0 20px;
    margin: 0 auto;
    max-width: 480px;

    @media (min-width:768px) {
        max-width: 768px;
    }

    @media (min-width:1200px) {
        max-width: 1200px;
    }
`;