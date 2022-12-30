// Calculation Fnctions
const add = function(addendOne, addendTwo) {
	return addendOne + addendTwo;
};

const subtract = function(minuend, subtratend) {
	return minuend - subtratend;
};

const multiply = function(multiplier, multiplicand) {
  return multiplicand * multiplier;
};

const divide = function(numerator, denominator) {
  return numerator / denominator;
};

let currenVal, operator, prevVal;

function operate(num1, operator, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

// Main Functions
console.log(operate(1, '-', 3));