function arrayRot(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let numToMove = array.shift();
        array.push(numToMove);
    }
    console.log(array);
}

arrayRot([51, 47, 32, 61, 21], 2);