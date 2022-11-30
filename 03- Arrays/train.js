function buildTrain(input) {
    let passangersInTrain = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());
    let arrLength = input.length;

    for (let index = 0; index < arrLength; index++) {
        let currentRow = input[index].split(' ');

        if (currentRow[0] === 'Add') {
            let newWagonsPassangers = Number(currentRow[1]);
            passangersInTrain.push(newWagonsPassangers);
        } else {
            for (let j = 0; j < passangersInTrain.length; j++) {
                let passangerInCurrentWagon = passangersInTrain[j];
                if (passangerInCurrentWagon + Number(currentRow[0]) <= maxCapacity) {
                    passangersInTrain[j] += Number(currentRow[0]);
                    break;
                }
            }
        }
    }
    console.log(passangersInTrain.join(' '));
}

buildTrain(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])