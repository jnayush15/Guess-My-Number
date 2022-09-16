'use strict';

let secretNumber = 0;
let score = 20;
let highScore = 0;

const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

secretNumber = generateRandomNumber();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const manipulateCSS = function (bgColor, width) {
  document.querySelector('body').style.backgroundColor = bgColor;
  document.querySelector('.number').style.width = width;
};

const displayHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setGuessedValue = function (value) {
  document.querySelector('.guess').value = value;
};

const getGuessedValue = () => Number(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const guess = getGuessedValue();
  if (!guess) {
    displayMessage('No number!!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!!');
    displayNumber(secretNumber);
    manipulateCSS('#60b347', '30rem');
    highScore = highScore > score ? highScore : score;
    displayHighScore(highScore);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!!' : 'Too low!!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateRandomNumber();
  score = 20;
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  setGuessedValue('');
  manipulateCSS('#222', '15rem');
});
