// Calculation Fnctions
function operate(num1, operator, num2){
    switch(operator){
        case '+':
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}

// Get User Input
const keys = document.querySelectorAll('.grid-item');
let argumentsRow = document.querySelector('.arguments');
let resultRow = document.querySelector('.results');
let inputs, result = "";

function updateDisplay (e){

    currentKey = e.target.textContent;

    if(currentKey === "AC"){
        inputs = "";
        result = "";
        console.log(inputs);
        return;
    }
    if(currentKey === "C"){
        inputs = "";
        argumentsRow.innerHTML = inputs;
        console.log(inputs);
        return;
    }
    
    if(inputs === undefined || inputs === "" ){
        "%/x=".includes(currentKey) ? inputs : inputs = currentKey;
        console.log(inputs);
        return
    }

    if(inputs.slice(-1) === currentKey && "+-%/x=".includes(currentKey)){
        console.log('here');
        console.log(inputs);
        return
    }
    
    inputs = [inputs + currentKey].join('');
    argumentsRow.innerHTML = inputs;
    console.log(inputs);
}

keys.forEach(key =>{
    key.addEventListener('click', (e) => updateDisplay(e));
});

// Main Functions
// console.log(operate(1, '-', 3));