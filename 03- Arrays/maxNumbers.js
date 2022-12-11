function maxNUmbers(arr) {
    let resultArr = [];

    for(let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let isBigger = true;
        for(let k = i + 1; k < arr.length; k++) {
            if (currentNum <= arr[k]) {
                isBigger = false;
            }
            
        }
        if (isBigger) {
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join(' '));
}
maxNUmbers([1, 4, 3, 2])