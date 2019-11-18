function add(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function devide(a, b){
    return a / b;
}

const calculator = {add, minus, multiply, devide};
module.exports = calculator;