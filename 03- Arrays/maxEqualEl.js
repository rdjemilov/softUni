function maxEqualEl(arr) {
    let resultArray = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let currentNumber = arr[i];
        for (let r = i + 1; r < arrLength; r++) {
            currentNumber += arr[r];
            console.log(currentNumber);
        }
        
    }
}

maxEqualEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);