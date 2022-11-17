const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
console.log(score1.textContent);
const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const roller = document.querySelector('.roll');
const restart = document.querySelector('.refresh');

let playing, score, activePlayer;

function refresh() {
  restart.style.cursor = 'pointer';
  score = 0;
  playing = true;
  activePlayer = 1;
  score1.textContent = 0;
  score2.textContent = 0;
  display1.textContent = 0;
  display2.textContent = 0;
  player1.textContent = 'PLAYER 1';
  player2.textContent = 'PLAYER 2';
  container.style.backgroundColor = '#455d7a';
  dice.classList.remove('hidden');
}
refresh();

function win() {
  if (score1.textContent >= 50) {
    player1.textContent = 'Player 1 Won!';
    playing = false;
    dice.classList.add('hidden');
    container.style.backgroundColor = '#8ef6e4';
  } else if (score2.textContent >= 50) {
    player2.textContent = 'Player 2 Won!';
    playing = false;
    dice.classList.add('hidden');
    container.style.backgroundColor = '#ffc93c';
  }
}
win();
dice.classList.add('hidden');

roller.addEventListener('click', function () {
  if (playing) {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    roller.style.cursor = 'pointer';
    dice.src = `image/dice-${diceRoll}.png`;

    if (diceRoll !== 1) {
      score += diceRoll;
      document.querySelector(`.display${activePlayer}`).textContent = diceRoll;
      document.querySelector(`.score${activePlayer}`).textContent = score;
      win();
    } else {
      score = 0;
      document.querySelector(`.score${activePlayer}`).textContent = 0;
      document.querySelector(`.display${activePlayer}`).textContent = 0;
      if (activePlayer === 1) {
        activePlayer = 2;
        document.querySelector(`.display${activePlayer}`).textContent =
          diceRoll;
        display1.textContent = 0;
        document.querySelector(`.score${activePlayer}`).textContent = score;
      } else if (activePlayer === 2) {
        activePlayer = 1;
        document.querySelector(`.display${activePlayer}`).textContent =
          diceRoll;
        display2.textContent = 0;
        document.querySelector(`.score${activePlayer}`).textContent = score;
      }
    }
  }
});

restart.addEventListener('click', refresh);
