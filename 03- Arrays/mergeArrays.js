function mergeArr(arr1, arr2) {
    let resultArr = [];

    for (let index = 0; index < arr1.length; index++) {
        if (index % 2 === 0) {
            resultArr.push(Number(arr1[index]) + Number(arr2[index]));
        } else {
            resultArr.push(arr1[index] + arr2[index]);
        }        
    }

    console.log(resultArr.join(' - ')); // join прави от масив на стринг
}

mergeArr(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])