function addAndSubtract(input) {
    let inputLength = input.length;
    let modifiedArr = [];
    let modifiedArrSum = 0;
    let arrSum = 0;

    for (let i = 0; i < inputLength; i++) {
        let currentNumber = input[i];
        let even = currentNumber + i;
        let odd = currentNumber - i;

        if (currentNumber % 2 == 0) {
            modifiedArr.push(even);
        } else {
            modifiedArr.push(odd);
        }
        arrSum += currentNumber;
        modifiedArrSum += modifiedArr[i];

    }
    console.log(modifiedArr);
    console.log(arrSum);
    console.log(modifiedArrSum);
}

addAndSubtract([5, 15, 23, 56, 35])