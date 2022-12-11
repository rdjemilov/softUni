function buildShoppingList(list) {
    let groceryList = list.shift().split('!');

    for (let i = 0; i < list.length; i++) {

        let rawList = list.shift().split(' ');
        let command = rawList[0];
        let grocery = rawList[1];

        switch (command) {
            case 'Go shopping': {
                break;
            }
            case 'Urgent': {
                if (!groceryList.includes(grocery)) {
                    groceryList.unshift(grocery)
                }
                break;
            }
            case 'Unnecessary': {
                if (groceryList.includes(grocery)) {
                    groceryList.splice(grocery)
                }
                break;
            }
            case 'Correct': {
                if (groceryList.includes(grocery)) {
                    
                }
            }
        }
    }
    console.log(groceryList);
}

buildShoppingList(["Tomatoes!Potatoes!Bread",

    "Unnecessary Milk",

    "Urgent Tomatoes",

    "Go Shopping!"])