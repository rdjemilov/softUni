function commEl(arr1, arr2) {
    for (let firstIndex = 0; firstIndex < arr1.length; firstIndex++) {
        for (let secondIndex = 0; secondIndex < arr2.length; secondIndex++) {
            if(arr1[firstIndex] === arr2[secondIndex]){
                console.log(arr1[firstIndex]);
            }            
        }        
    }
}

commEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])