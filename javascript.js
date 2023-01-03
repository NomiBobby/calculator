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
let allowDot = 1;

function updateDisplay (e){

    currentKey = e.target.textContent;

    if(!parseInt(currentKey, 10) && currentKey !=="."){
        allowDot = 1;
    }

    if(currentKey === "AC"){// Clear arguments and results
        inputs = "0";
        result = "";
        argumentsRow.innerHTML = inputs;
        console.log(inputs);
        return;
    }
    if(currentKey === "C"){//only clear the arguments window
        inputs = "0";
        argumentsRow.innerHTML = inputs;
        console.log(inputs);
        return;
    }
    
    if(inputs === undefined || inputs === "0" ){
        if("%/x=".includes(currentKey)){ // forbid operand to start the first argument
            return;
        }
        else{
            inputs = currentKey;
            argumentsRow.innerHTML = inputs;
            return;
        }
    }
  
    if(inputs.slice(-1) === currentKey && ".+-%/x=".includes(currentKey)){//no duplicate operands
        console.log('here');
        console.log(inputs);
        return
    }

    if(currentKey === "." ){
        if (allowDot === 0){
            return;
        }
        else{
            allowDot = 0;
        }
    }

    inputs = [inputs + currentKey].join('');
    argumentsRow.innerHTML = inputs;
    console.log(`58: ${inputs}`);
}

keys.forEach(key =>{
    key.addEventListener('click', (e) => updateDisplay(e));
});

// Main Functions
console.log();