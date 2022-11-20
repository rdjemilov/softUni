function nonDecrSubsNum(input) {
    let max = input[0];
    let result = input.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max 
    });
    console.log(result.join(' '));
}

nonDecrSubsNum([ 1, 3, 8, 4, 10, 12, 3, 2, 24])