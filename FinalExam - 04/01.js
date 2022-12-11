function buildPass(input) {
    let password = input.shift();
    let passTemp = '';
    let inputLength = input.length;

    for(let i = 0; i < inputLength; i++) {
        let currentLine = input[i];
        let tokens = currentLine.split(' ');
        let command = tokens[0];

        if(command === 'Complete') {
            break;
        } else if(command === 'Make') {
            let command2 = tokens[1];
            if(command2 === 'Upper') {
                let indexChar = Number(tokens[2]);
                let lettersToUp = password.charAt(indexChar).toUpperCase();

                passTemp = password.replace(lettersToUp, '');
                passTemp += lettersToUp;
                password = passTemp;
                console.log(password);
            } else if (command2 === 'Lower') {
                let indexChar = Number(tokens[2]);
                let lettersToLower = password.charAt(indexChar).toLowerCase();

                passTemp = password.replace(lettersToLower, '');
                passTemp += lettersToLower;
                password = passTemp;
                console.log(password);
            }
        }
    }
}

buildPass(['123456789', 'Replace 5 15', 'Insert 3 R', 'Validation', 'Complete'])