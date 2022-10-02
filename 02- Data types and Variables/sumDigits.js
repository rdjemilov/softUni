function sumDigits(number) {
    let numberAsStrings = number.toString();
    let sum = 0;
    let numberOfDigits = numberAsStrings.length;
    for (let i = 0; i < numberOfDigits; i++) {
        let currentDigit = Number(numberAsStrings[i]);
        sum += currentDigit;
    }
    console.log(sum);
}

sumDigits(245678);