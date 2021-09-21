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

// for nav toggle
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-120%';
}