'use strict';

// selecting the dice element
const dice1 = document.querySelector('.img1');
const dice2 = document.querySelector('.img2');

// random number for dice 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
dice1.src = `dice${randomNumber1}.png`;

//random number for dice 2

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
dice2.src = `dice${randomNumber2}.png`;

// winner announcement
if (randomNumber1 > randomNumber2) {
  document.querySelector('.referesh--me').textContent = `🚩Player 1 wins!`;
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('.referesh--me').textContent = `Player 2 wins! 🚩`;
} else {
  document.querySelector('.referesh--me').textContent = `Draw!😎`;
}
