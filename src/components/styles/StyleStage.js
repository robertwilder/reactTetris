import styled from 'styled-components';

export const StyledStage = styled.div`
display: grid;
grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    gid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    max-width: 25vw;
    background: #111;
`
; 
// I have not come across CSS Calcuations before, this needs to be researched 
// props pulls through the height and width of out grid