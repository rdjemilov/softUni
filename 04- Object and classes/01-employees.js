function buildEmployees(list) {
    let employeesList = {};

    list.forEach(person => {
        employeesList[person] = person.length;
    });

    for (const key in employeesList) {
            console.log(`Name: ${key} -- Personal Number: ${employeesList[key]}`);
        }

}


buildEmployees(['Silas Butler', 
'Adnan Buckley', 
'Juan Peterson', 
'Brendan Villareal'])