const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
console.log(score1.textContent);
const display1 = document.querySelector('.display1');
const display1El = Number(display1.textContent);
const display2 = document.querySelector('.display2');
const display2El = Number(display2.textContent);
// console.log(display1.textContent);
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const newGame = document.querySelector('.refresh');
const roller1 = document.querySelector('.roll1');
const roller2 = document.querySelector('.roll2');
// console.log(roller2.textContent);

score1.textContent = 0;
score2.textContent = 0;
display1.textContent = 0;
display1.textContent = 0;
let score = 0;
let activePlayer = 1;
//const score = Number(score1.textContent);

dice.classList.add('hidden');

// const diceRoll2 = Math.floor(Math.random() * 6) + 1;

roller1.addEventListener('click', function () {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  roller1.style.cursor = 'pointer';
  dice.src = `image/dice-${diceRoll}.png`;
  //   console.log(diceRoll1);

  //display2.textContent = diceRoll;

  if (diceRoll !== 1) {
    // score1.textContent = 'Winner!';
    //display1.textContent = diceRoll;
    score += diceRoll;
    document.querySelector(`.display${activePlayer}`).textContent = diceRoll;
    document.querySelector(`.score${activePlayer}`).textContent = score;
    // document.querySelector('.score2').textContent = score;
  } else {
    score = 0;
    document.querySelector(`.score${activePlayer}`).textContent = 0;
    document.querySelector(`.display${activePlayer}`).textContent = 0;
    // activePlayer = activePlayer === 1 ? 2 : 1;
    if (activePlayer === 1) {
      activePlayer = 2;
      document.querySelector(`.display${activePlayer}`).textContent = diceRoll;
      display1.textContent = 0;
      document.querySelector(`.score${activePlayer}`).textContent = score;
    } else if (activePlayer === 2) {
      activePlayer = 1;
      document.querySelector(`.display${activePlayer}`).textContent = diceRoll;
      display2.textContent = 0;
      document.querySelector(`.score${activePlayer}`).textContent = score;
    }
    // document.querySelector(`.display${activePlayer}`).textContent = diceRoll;
  }
  //   if (document.querySelector(`.score${activePlayer}`).textContent >= 10) {
  //     document.querySelector(`.score${activePlayer}`).textContent = 'Winner';
  //   }
});
//console.log(score`${activePlayer}`);
// roller2.addEventListener('click', function () {
//   diceRoll2;
//   dice.classList.remove('hidden');
//   roller2.style.cursor = 'pointer';
//   dice.src = `image/dice-${diceRoll2}.png`;
//   //   console.log(diceRoll2);
//   display2.textContent = diceRoll2;

//   //   if (diceRoll1 > diceRoll2) {
//   //     score1.textContent += 10;
//   //   } else if (diceRoll1 === diceRoll2) {
//   //     score1.textContent = 10;
//   //   } else {
//   //     score2.textContent += 10;
//   //   }
// });
// console.log(typeof display1El);
// console.log(typeof display2El);
// console.log(typeof score1.textContent);
// // console.log(score);
// // console.log(typeof score);
