function buildPassValidator(input) {
    let password = input.shift();
    let templPass = '';
    let currentLine = input[0];

    while(currentLine !== 'Complete') {
        let tokens = currentLine.split(' ');
        let command = tokens[0];

        switch(command) {
            case 'Make':
                let command = tokens[1];
                if(command === 'Upper') {
                    let indexChar = Number(tokens[2]);
                    let lettersToUp = password.charAt(indexChar).toUpperCase();

                    templPass = password.replace(lettersToUp, '');
                    templPass += lettersToUp;
                    password = templPass;
                    console.log(password);
                } else if (command === 'Lower') {
                    let indexChar = Number(tokens[2]);
                    let lettersToLower = password.charAt(indexChar).toLowerCase();

                    templPass = password.replace(lettersToLower, '');
                    templPass += lettersToLower;
                    password = templPass;
                    console.log(password);
                }
                break;
            
            case 'Insert': 
                let indexChar = tokens[1];
                let char = tokens[2];

                templPass = password.split('');
                templPass.splice(indexChar, 0, char);
                password = templPass.join('');
                console.log(password);
                
                break;

            case 'Replace':
                let substring = tokens[1];
                let replacement = tokens[2];

                while(password.includes(substring)) {
                    templPass = password.replace(substring, replacement);
                    password = templPass;
                    break;
                }
                console.log(password);
                break;

            case 'Validation':
                let minLength = 8;
                function onlyLettersAndNum(password) {
                    return /^[A-Za-z0-9]*$/.test(password);
                };
                if (password.length < minLength) {
                    console.log(`Password must be at least 8
                    characters long!`);
                } else if (!onlyLettersAndNum) {
                    console.log("Password must consist only of letters, digits and _!");
                } else if (password.search[/A-Z/i]) {
                    console.log("Password must consist at least one uppercase letter!");
                }
        }
        
    }
}

buildPassValidator(['123456789',
'Replace 5 15',
'Insert 3 R',
'Validation',
'Complete'])