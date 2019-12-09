export const TETROMINOS = {
    0:{shape:[[0]], color: '0, 0, 0'}, 
    I:{ 
        shape:[
        [0, 'I', 0, 0],
        [0, 'I', 0, 0],
        [0, 'I', 0, 0],
        [0, 'I', 0, 0]
// this is the first tetris block in which it is just a straight line
    ],
    color: '80, 227, 230',
},
    J: {
        shape:[
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
    // this is the second tetris block in which it is in a J shape
        ],
        color: '36, 95, 223',
},
    L: {
        shape:[
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
// this is the second tetris block in which it is in a J shape
        ],
        color: '223, 173, 36',
},
    O: {
        shape:[
            ['O', 'O'],
            ['O', 'O'],
            
// this is the second tetris block in which it is in a J shape
        ],
        color: '223, 217, 36',
},
    S: {
        shape:[
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 'L', 'L'],
// this is the second tetris block in which it is in a J shape
        ],
        color: '48, 211, 56',
},
    T: {
        shape:[
            [0,  0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0],
// this is the second tetris block in which it is in a J shape
        ],
        color: '132, 61, 198',
},
    Z: {
        shape:[
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
// this is the second tetris block in which it is in a J shape
        ],
        color: '227, 78, 78',
},
} 
// no we need to create a function that creates a random Tetromino
export const randomTetromino = () => {
    const tetromino = 'IJLOSTZ';
    // a string with all out tetrominons within, we will then pull the random selection from this 
    const randTetromino =
    tetromino[Math.floor(Math.random() * tetromino.length)];
    return TETROMINOS[randTetromino];

}