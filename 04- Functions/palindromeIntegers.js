function palindromeIntegers(numArray) {
    let numArrayLength = numArray.length;
    for (let i = 0; i < numArrayLength; i++) {
        let numberAsString = numArray[i].toString();
        let reversedString = numberAsString.split('').reverse().join('');
        if (numberAsString === reversedString) {
            console.log(true)
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123,323,421,121])