function arrayRot(array, rotations) {
    for (let index = 0; index < rotations; index++) {
        let numberToMove = array.shift();
        array.push(numberToMove); 
        
    }

    console.log(array.join(' '));
}

arrayRot([51, 47, 32, 61, 21], 2);