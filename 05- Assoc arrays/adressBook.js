function buildAdressBook(input) {
    let adressBook = {};

    for (let line of input) {
        let [name, adress] = line.split(':');
        adressBook[name] = adress;
    }
    let sorted = Object.entries(adressBook);
    console.log(sorted);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let key in adressBook) {
        console.log(`${key} -> ${adressBook[key]}`);
    }
}

buildAdressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])