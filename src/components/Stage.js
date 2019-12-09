import React from 'react';
import {StyledStage} from './styles/StyleStage';


import Cell from './Cell';
// Should this be here? please go back and check 


const Stage = ({stage}) => (
    // prop called stage 
    //<Cell/> this has been removed as it was just testing to see if items where pulling through
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
    </StyledStage>
)
// put in the {} braces when javascript is going to be used

export default Stage 