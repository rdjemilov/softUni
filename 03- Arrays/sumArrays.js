function arraysDemo(input) {
    let modifiedArray = [];
    let inputArraySum = 0;
    let modifiedArraySum = 0;
    let inpputLength = input.length;

    for (let i = 0; i < inpputLength; i++) {
        let currentNumber = input[i];
        let even = currentNumber + i;
        let odd = currentNumber - i;

        if (currentNumber % 2 === 0) {
            modifiedArray.push(even)
        } else {
            modifiedArray.push(odd)
        }

        inputArraySum += currentNumber;
        modifiedArraySum += modifiedArray[i];
    }

    console.log(modifiedArray);
    console.log(inputArraySum);
    console.log(modifiedArraySum);
}

arraysDemo([5, 15, 23, 56, 35]);