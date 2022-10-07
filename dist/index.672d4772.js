"use strict";
/*
// Version 1-  not a DRY code (repeated code )
console.log(document.querySelector('.guess').value);

let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let highScore = 0;

console.log(secretNumber);
console.log('------------');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    //console.log(guess, secretNumber);
    document.querySelector('.message').textContent = '🎉 Guess is correct!';
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score > 1) {
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'Game over!';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
  console.log(secretNumber);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

*/ // Version 2 - DRY code
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let highScore = 0;
// arrow function to display message
// const displayMessage = message => (document.querySelector('.message').textContent = message);
// or function expression  to display message
const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};
// Checking if guess is write or wrong
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    // if guess is empty
    if (!guess) displayMessage("⛔️ No number!");
    else if (guess === secretNumber) {
        displayMessage("\uD83C\uDF89 Guess is correct!");
        document.querySelector("body").style.backgroundColor = " #60b347";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".number").style.width = "30rem";
        // Keeping highscore
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    // if guess is wrong
    } else if (guess !== secretNumber) {
        // comparing guess with secret number and returning string to diplay message on webpage
        displayMessage(guess > secretNumber ? "\uD83D\uDCC8 Too high!" : "\uD83D\uDCC9 Too low!");
        score--;
        document.querySelector(".score").textContent = score;
    } else {
        displayMessage("Game over!");
        document.querySelector(".score").textContent = 0;
    }
});
// Reset game to play again
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    document.querySelector(".score").textContent = score;
    secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    displayMessage("Start guessing...");
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
});

//# sourceMappingURL=index.672d4772.js.map
