import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const StyledButton = styled(Button)`
    position: absolute;
    top: 80%;
    left: 45%;
    z-index: 5;
`;

export const StyledDataContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledPlanetsContainer = styled.div`
    display: flex;
`;

export const StyledPlanetItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 100px;
    height: 140px;
    background-color: 'blue';
`;
