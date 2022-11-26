function cities(input) {
    for (const line of Object.keys(input)) {
        console.log(`${line} -> ${input[line]}`);
    }
}

cities({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })