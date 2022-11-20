function printNthEl(input) {
    let step = Number(input.pop());
    let collectedArr = [];
    for (let i = 0; i < input.length; i += step) {
        collectedArr.push(input[i]);
    }
    console.log(collectedArr.join(' '));

}

printNthEl(['5', '20', '31', '4', '20', '2'])