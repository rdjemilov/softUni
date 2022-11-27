//UNDERSTANDING:
/**
 * WE RECEIVE RAW ACTIVATION KEY. UNTIL THE GENERATE COMMAND WE HAVE TO TAKE OTHER COMMANDS
 */
//SUBTASKS:
/**
 * 
 */
//RESEARCH:

// function buildActivationKeys(input) {
//     let rawKey = input.shift();
//     let line = input.shift();

//     while (line !== 'Generate') {
//         let tokens = line.split('>>>');
//         let command = tokens[0];

//         switch (command) {
//             case 'Contains': {
//                 let subString = tokens[1];

//                 if (rawKey.includes(subString)) {
//                     console.log(`${rawKey} contains ${subString}`);
//                 } else {
//                     console.log(`Substring not found!`);
//                 }
//                 break;
//             }

//             case 'Flip': {

//             }
//         }
//     }

// }

function generateActivationKeys(input) {
    // Input & Result data
    let rawActivationKey = input.shift();
    let instructions = input.slice();
    let line = [];
    let startIndex = [];
    let endIndex = [];
    let part = '';

    // Loop through instructions
    let instruction = instructions.shift();
    while (instruction != 'Generate') {
        // Apply instruction
        let args = instruction.split('>>>');
        let instructionName = args.shift();

        switch (instructionName) {
            case 'Contains':
                let substring = args[0];
                if (rawActivationKey.includes(substring)) {
                    console.log(`${rawActivationKey} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            case 'Flip':
                line = args[0];
                startIndex = args[1];
                endIndex = args[2];

                part = rawActivationKey.substring(startIndex, endIndex);
                let newPart = line == 'Upper' ? part.toUpperCase() : part.toLowerCase();
                rawActivationKey = rawActivationKey.replace(part, newPart)
                console.log(rawActivationKey);
                break;

            case 'Slice':
                startIndex = args[0];
                endIndex = args[1];
                part = rawActivationKey.substring(startIndex, endIndex);
                rawActivationKey = rawActivationKey.replace(part, '');
                console.log(rawActivationKey);
                break;
        }
        // Get next isntruction
        instruction = instructions.shift();
    }

    // Print generated activation key
    console.log(`Your activation key is: ${rawActivationKey}`);
}

generateActivationKeys(["abcdefghijklmnopqrstuvwxyz",

    "Slice>>>2>>>6",

    "Flip>>>Upper>>>3>>>14",

    "Flip>>>Lower>>>5>>>7",

    "Contains>>>def",

    "Contains>>>deF",

    "Generate"])