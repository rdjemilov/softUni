function specialNumbers(number) {
    let isSpecial = true;

    for (let currentNumber = 1; currentNumber <= number; currentNumber++) {
        let sumOfDigits = 0;
        let numberToString = currentNumber.toString();
        let stringlength = numberToString.length;

        for (let i = 0; i < stringlength; i++) {
            if (currentNumber >= 10) {
                sumOfDigits += Number(numberToString[i]);
            } else {
                sumOfDigits += Number([currentNumber]);
            }
        }

        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            isSpecial = true;
            console.log(`${currentNumber} -> True`);
        } else {
            console.log(`${currentNumber} -> False`);
        }
    }
}

specialNumbers(15);