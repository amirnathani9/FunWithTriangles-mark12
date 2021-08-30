const quizForm = document.querySelector(".quiz-form");
const btnSubmit = document.querySelector("#btn-submit");
const outputBox = document.querySelector("#output-box")


const correctAnswers = ["right", "Equilateral", "2 congruent sides", "180 degrees", "3"];

function calculateScore(){
    let score = 0;
    let index = 0;

    const formScores = new FormData(quizForm);
    for(let value of formScores.values()) {
        if(value === correctAnswers[index]){
            score = score + 2;
        }
        index = index + 1;
    }
    outputBox.innerText = "Your Score of the Triangle Quiz is " + score;
}

btnSubmit.addEventListener("click",calculateScore)