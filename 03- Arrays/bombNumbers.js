function bombNumbers(initSequence, specialBomb) {

    let specialNum = specialBomb[0];
    let power = specialBomb[1];
    
    while (initSequence.includes(specialNum)) {
        let index = initSequence.indexOf(specialNum);
        let elToRemove = power * 2 + 1;
        let startIndex = index - power;

        if (startIndex < 0) {
            elToRemove += startIndex;
            startIndex = 0;
        }

        initSequence.splice(startIndex, elToRemove);
    }
    console.log(initSequence.reduce((a, b) => a + b, 0));
}

bombNumbers([1, 2, 2, 4, 2, 2,

    2, 9],
    
    [4, 2])