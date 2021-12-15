import styled from "styled-components";

export const PagosStyled = styled.div`
    width: 1000px;
    align-items: center;
    max-width: 100%;
    padding: 20px 20px;
    margin:  auto auto;    
`;

export const StyledCard = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    
    flex-direction: ${({layout}) => layout || 'row'};
    img {
        width: 80%
    }
    & > div {
        flex: 1;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const StyledReportes = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    
    flex-direction: ${({layout}) => layout || 'column'};
    img {
        width: 80%
    }
    & > div {
        flex: 1;
    }
    @media (max-width: 768px) {
        flex-direction: row;
    }
`;