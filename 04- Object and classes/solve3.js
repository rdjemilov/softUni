function jsonToObj(input) {
    let info = JSON.parse(input);


    //loop through all the keys
    for (const key of Object.keys(info)) {
        console.log(`${key}: ${info[key]}`);
    }
}

jsonToObj('{"name": "George", "age": 40, "town": "Sofia"}')