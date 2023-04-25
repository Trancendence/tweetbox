import styled from "styled-components";

export const ContainerButtons = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
`

export const FiltersButton = styled.button`
background: ${props => props.selected ? '#5CD3A8' : 'linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%)' };
`

export const ButtonBack = styled.button`
margin-left: 40px; 
`