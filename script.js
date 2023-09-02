let number1;
let number2;
let operator;


function operate(number1,number2,operator){
    if(operator === "+"){
       calculated = number1 + number2
    }else if(operator === "/"){
        calculated = number1 / number2
    }else if(operator === "*"){
        calculated = number1 * number2
    }
}

operate(1,10,"+")
console.log(calculated)

