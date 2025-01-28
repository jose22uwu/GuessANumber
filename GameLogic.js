'use strict'

const randomNumber = createRandomNumber();
let inputVar;
let clickCount = 0;
document.querySelector('.checkButton').addEventListener('click', checkAnswer);
document.querySelector('.resetButton').addEventListener('click', resetGame);
function checkAnswer() {
    inputVar = Number(document.querySelector('.input').value);

    if (!inputVar) {
        document.querySelector('.ResultText').textContent = "⛔ Please enter a number";
    } else {
        clickCount++;  // Movido aquí, después de validar que hay un número
        compareTheNumber(inputVar, randomNumber);
        setScore();
    }
} 

function createRandomNumber() {
    return Math.trunc(Math.random() * 100 + 1);
}

function compareTheNumber(inputVar, randomNumber) {
    if (inputVar === randomNumber) {
        document.querySelector('.ResultText').textContent = "🎉 Correct!";
    }
    else if (inputVar > randomNumber) {
        document.querySelector('.ResultText').textContent = "💥 Too high!";
    }
    else if (inputVar < randomNumber) {
        document.querySelector('.ResultText').textContent = "💥 Too low!";
    }
}

function setScore() {
    if (inputVar === randomNumber && clickCount === 1) {
        document.querySelector('.ScoreText').textContent = "🏆Score: 100";
        document.querySelector('.centerText').textContent = randomNumber;
    }
    else if (inputVar === randomNumber && clickCount > 1 && clickCount <= 10) {
        document.querySelector('.ScoreText').textContent = "🏆Score: 50";
        document.querySelector('.centerText').textContent = randomNumber;
    }
    else if (inputVar === randomNumber && clickCount > 10) {
        document.querySelector('.ScoreText').textContent = "🏆Score: 20";
        document.querySelector('.centerText').textContent = randomNumber;
    }
}

function resetGame(){
    document.querySelector('.centerText').textContent = "?";
    document.querySelector('.ResultText').textContent = "💥Start Guessing...";
    document.querySelector('.ScoreText').textContent = "🏆Score: 0";
    document.querySelector('.HighScoreText').textContent = "🏆High Score: 0";

}
