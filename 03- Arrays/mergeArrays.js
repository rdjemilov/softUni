// function mergeArr(arr1, arr2) {
//     let resultArr = [];

//     for (let index = 0; index < arr1.length; index++) {
//         if (index % 2 === 0) {
//             resultArr.push(Number(arr1[index]) + Number(arr2[index]));
//         } else {
//             resultArr.push(arr1[index] + arr2[index]);
//         }        
//     }

//     console.log(resultArr.join(' - ')); // join прави от масив на стринг
// }

// mergeArr(['5', '15', '23', '56', '35'],

// ['17', '22', '87', '36', '11'])



function mergeArr(arr1, arr2) {
    let resultArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            resultArr.push(Number(arr1[i]) + Number(arr2[i]))
        } else {
            resultArr.push(arr1[i] + arr2[i])
        }
    }
    console.log(resultArr.join(' - '));
}

mergeArr(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])