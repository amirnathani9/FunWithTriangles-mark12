const inputAngle = document.querySelectorAll(".input-angle");
const btnOutput = document.querySelector("#btn-output");
const outputBox = document.querySelector("#output-box");

function calculateSumOFAngle(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2+ angle3
    return sumOfAngles;
}

function showOutput(){
    const sumOfAngles = calculateSumOFAngle(Number(inputAngle[0].value), Number(inputAngle[1].value), Number(inputAngle[2].value));
    if(sumOfAngles === 180 && inputAngle[0].value>0 && inputAngle[1].value>0 && inputAngle[2].value>0){
        outputBox.innerText = "The input angles makes a Triangle";
    }
    else {
        outputBox.innerText = "The input angles don't makes a Triangle"
    }
}


function isTriangle() {

    if(inputAngle[0].value&&inputAngle[1].value&&inputAngle[2].value){
        showOutput(inputAngle.value)
    }
    else{
        outputBox.innerText="Input all the values"
    } 
}

btnOutput.addEventListener("click",isTriangle)