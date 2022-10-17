function solve(number) {
    let months = ['January', 'February', 'March', ' April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthsNum = number;

    if (monthsNum < 1 || monthsNum > 12) {
        console.log('Error!');
    } else {
        console.log(months[monthsNum - 1]);
    }


}