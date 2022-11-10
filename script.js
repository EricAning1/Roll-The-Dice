const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
console.log(score1.textContent);
const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
console.log(display1.textContent);
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const newGame = document.querySelector('.refresh');
const roll = document.querySelector('.roll');
console.log(roll.textContent);
dice.classList.add('hidden');

roll.addEventListener('click', function () {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  roll.style.cursor = 'pointer';
  newGame.style.cursor = 'pointer';
  dice.src = `image/dice-${diceRoll}.png`;
  console.log(diceRoll);
  display1.textContent = diceRoll;
});
