function buildGame(input) {
    let arr = input.slice();
    let message = arr.shift();
    let tempMessage = '';
    let currentLine = arr.shift(); //'ChangeAll|z|l'

    while(currentLine !== 'Decode') {
        let tokens = currentLine.split('|');
        let command = tokens[0];

        switch (command) {
            case 'Move': 
                let lettersNumber = Number(tokens[1]);
                let lettersToMove = message.substring(0, lettersNumber);

                tempMessage = message.replace(lettersToMove, '');
                tempMessage += lettersToMove;
                message = tempMessage;
                break; 

            case 'Insert':
                let index = tokens[1];
                let value = tokens[2];

                tempMessage = message.split('');
                tempMessage.splice(index, 0, value);
                message = tempMessage.join('');
                break;

            case 'ChangeAll':
                let substring = tokens[1];
                let replacement = tokens[2]

                while (message.includes(substring)) {
                    tempMessage = message.replace(substring, replacement);
                    message = tempMessage;
                }
                break;

        }
    }
    console.log(`The decrypted message is: ${message}`);
}

buildGame([

    'zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'
    
    ])

    