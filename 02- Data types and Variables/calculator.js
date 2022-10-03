function calculator(number1, operator, number2) {
    let result = 0;
    
    if(operator === '+') {
        result = number1 + number2;
    } else if (operator === '-') {
        if (number1 >= number2) {
            result = number1 - number2;
        } else {
            result = number2 - number1;
        }
    } else if (operator === '*') {
        result = number1 * number2;
    } else {
        if (number1 >= number2) {
            result = number1 / number2;
        } else {
            result = number2 / number1;
        }
    }

    console.log(result.toFixed(2));
}

calculator(25.5,

    '-',
    
    3)