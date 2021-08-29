const inputAngle = document.querySelectorAll(".input-angle");
const btnOutput = document.querySelector("#btn-output");
const outputBox = document.querySelector("#output-box");

function calculateSumOFAngle(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2+ angle3
    return sumOfAngles;
}



function isTriangle() {
    const sumOfAngles = calculateSumOFAngle(Number(inputAngle[0].value), Number(inputAngle[1].value), Number(inputAngle[2].value));
    
    if(sumOfAngles === 180){
        outputBox.innerText = "The input angles makes a Triangle";
    }
    else {
        outputBox.innerText = "The input angles don't makes a Triangle"
    }
}

btnOutput.addEventListener("click",isTriangle)