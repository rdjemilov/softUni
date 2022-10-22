function addAndSubtract(num1, num2, num3) {
    function add(a, b) {
        let sumOfTwo = a + b;
        return sumOfTwo;
    }

    let sum = add(num1, num2);

    function subtract(sumOfTwo, num3) {
        return sumOfTwo - num3;
    }
    let result = subtract(sum, num3);
    console.log(result);
}