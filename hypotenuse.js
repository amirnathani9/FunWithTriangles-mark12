const inputSide = document.querySelectorAll(".input-side");
const btnCalculate = document.querySelector("#btn-calculate");
const outputBox = document.querySelector("#output-box");



function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares; 
}

function calculateLength(){
    const sumOfSquares = calculateSumOfSquares(Number(inputSide[0].value), Number(inputSide[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputBox.innerText = "The Length of Hypotenuse is " + lengthOfHypotenuse;
}

function calculateHypotenuse() {
    if(inputSide[0].value && inputSide[1].value){
        calculateLength(inputSide.value)
    }
    else{
        outputBox.innerText="Input all the values"
    } 
    
    
}

btnCalculate.addEventListener("click", calculateHypotenuse)