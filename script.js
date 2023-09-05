const display  = document.querySelector(".display")
display.textContent = "Enter some numbers."
let numberofrequests = 0;
let string = ""
let operatorCanBe = false;


function changeNumber(number){
    if(string === "Enter some numbers!"){
        string = ""
    }
string = string + number
display.textContent = string
operatorCanBe = true;
updateDisplay();
console.log("number")
}
function plusoperator(plus){
    if(plus === 1 && operatorCanBe === true){
        string = string + " + "
         }
if(operatorCanBe === false ){
            console.log("please choose a number")
            string = string
            updateDisplay();
        }
        operatorCanBe = false;
        updateDisplay();
    }
function multiply(times) {
    if(times === 1 && operatorCanBe === true){
        string = string + " * "
         }
if(operatorCanBe === false ){
            console.log("please choose a number")
            string = string
            updateDisplay();
        }
        operatorCanBe = false;
        updateDisplay();
        }    
function updateDisplay(){
    display.textContent = string
}
function erase(){
 numberofrequests = 0;
 string = "Enter some numbers!"
 operatorCanBe = false;
    updateDisplay();
    }
function calculate(){
    string = eval(string)
    updateDisplay()
}
function divide(divide){
    if(divide === 1 && operatorCanBe === true){
        string = string + " / "
         }
if(operatorCanBe === false ){
            console.log("please choose a number")
            string = string
            updateDisplay();
        }
        operatorCanBe = false;
        updateDisplay();
    }
function subtract(){
        if(operatorCanBe === true){
            string = string + " - "
             }
    if(operatorCanBe === false ){
                console.log("please choose a number")
                string = string
                updateDisplay();
            }
            operatorCanBe = false;
            updateDisplay();
        }