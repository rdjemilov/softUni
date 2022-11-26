//UNDERSTANDING:
/**
 * WE RECEIVE RAW ACTIVATION KEY. UNTIL THE GENERATE COMMAND WE HAVE TO TAKE OTHER COMMANDS
 */
//SUBTASKS:
/**
 * 
 */
//RESEARCH:

function buildActivationKeys(input) {
    let rawKey = input.shift();
    let line = input.shift();

    while (line !== 'Generate') {
        let tokens = line.split('>>>');
        let command = tokens[0];

        switch (command) {
            case 'Contains': {
                let subString = tokens[1];

                if (rawKey.includes(subString)) {
                    console.log(`${rawKey} contains ${subString}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            }

            case 'Flip': {

            }
        }
    }

}

buildActivationKeys([(["abcdefghijklmnopqrstuvwxyz",

"Slice>>>2>>>6",

"Flip>>>Upper>>>3>>>14",

"Flip>>>Lower>>>5>>>7",

"Contains>>>def",

"Contains>>>deF",

"Generate"])])