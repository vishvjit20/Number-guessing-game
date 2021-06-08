'use strict';

let number = document.querySelector('.number');
let message = document.querySelector('.message');
let check = document.querySelector('.check');
let guess = document.querySelector('.guess');
let score = document.querySelector('.score');
let again = document.querySelector('.again');
let highscore = document.querySelector('.highscore');

let body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score_val = 20;
let highscore_val = 0;

check.addEventListener('click', function () {
  const guess_val = Number(guess.value);
  if (!guess_val) {
    message.textContent = 'No number';
  } else if (guess_val === secretNumber) {
    message.textContent = 'Correct Guess';
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (score_val > highscore_val) {
      highscore_val = score_val;
      highscore.textContent = highscore_val;
    }
  } else if (guess !== secretNumber) {
    if (score_val > 1) {
      guess_val > secretNumber
        ? (message.textContent = 'Number is too high')
        : (message.textContent = 'Number is too low');
      score_val--;
      score.textContent = score_val;
    } else {
      message.textContent = 'You lost';
      score.textContent = '0';
    }
  }
});

again.addEventListener('click', function () {
  score_val = 20;
  score.textContent = score_val;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  number.style.width = '15rem';
  number.textContent = '?';
  guess.value = '';
});
