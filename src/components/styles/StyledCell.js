import styled from 'styled-components';
// React Style comonents needs to be researched
export const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, 0.8);
    border: ${props => (props.type === 0 ? '0px solid' : '1px solid')};
    boarder-bottom-color: rgba(${props => props.color},  0.1);
    boarder-right-color: rgba(${props => props.color},  1);
    boarder-top-color: rgba(${props => props.color},  1);
    boarder-left-color: rgba(${props => props.color},  0.3);

` 
// The 0px is there to show that when there is no tetremonos is there it is bank 
// the Boarder is designed to give a shadow effect on the blocks 