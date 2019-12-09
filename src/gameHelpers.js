export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
// creating a stage where we can set the width and Height
// unsure if these have to be in complete capitals or not
// we have to import these in to other components so they need to be exported 


// now to create a nested array, a multi dimensional array that reprents rows and colloms 
export const createStage = () =>  
    Array.from(Array(STAGE_HEIGHT), () => 
    new Array(STAGE_WIDTH).fill([0, 'clear'])
    )
// createing a new array from the array that we have already created 
// the array is filled with a clean value which is importent later 