const inputs = document.querySelectorAll(".inputs");
const btnCalculate = document.querySelector("#btn-calculate");
const outputBox = document.querySelector("#output-box");

function calculateInputs(base, height) {
    const baseHeightInput = base * height;
    return baseHeightInput;
}

function calculateArea() {
    const baseHeightInput = calculateInputs(Number(inputs[0].value), Number(inputs[1].value));
    const areaTriangle = 0.5 * baseHeightInput;
    outputBox.innerText = "The Area of Triangle is " + areaTriangle + "cm²";
}

function showOutput() {
    if (inputs[0].value && inputs[1].value) {
        calculateArea(inputs.value)
    } else {
        outputBox.innerText = "Input all the values"
    }
}

btnCalculate.addEventListener("click", showOutput)

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