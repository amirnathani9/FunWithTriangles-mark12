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



