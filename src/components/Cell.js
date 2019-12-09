import React from 'react';
import {StyledCell} from './styles/StyledCell';
import {TETROMINOS} from '../tetrominos';

const Cell = ({type}) => (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}/>
)
// This is grabbing the random tetrominos and the colour along with it
// there is a shape and a color property which we need to grab and bring through 
 

export default Cell; 