const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let userMove = '',
  computerMove = getComputerMove(),
  winner = '';

rock.addEventListener('click', () => {
  const computerMove = getComputerMove(),
  userMove = 'rock';
  const winner = oneRound(userMove, computerMove);
  displayWinner(winner);
});

paper.addEventListener('click', () => {
  const computerMove = getComputerMove(),
  userMove = 'paper';
  const winner = oneRound(userMove, computerMove);
  displayWinner(winner);
});

scissors.addEventListener('click', () => {
  const computerMove = getComputerMove(),
  userMove = 'scissors';
  const winner = oneRound(userMove, computerMove);
  displayWinner(winner);
});

function displayWinner(winner) {
  const announceWinner = document.querySelector('.round-winner');
  if (winner === 1) {
    announceWinner.textContent = 'You Win';
  }
  else if (winner === 2) {
    announceWinner.textContent = 'Computer Wins';
  }
  else {
    announceWinner.textContent = 'Draw Match';
  }
}

// Playing One Round
function oneRound(userMove, computerMove) {
  if (userMove === computerMove) {
   return 0;
  }
  else if ((userMove === 'rock' && computerMove === 'scissors') ||
           (userMove === 'paper' && computerMove === 'rock') ||
           (userMove === 'scissors' && computerMove === 'paper')) {
     return 1;
   }
   else {
     return 2;
   }
 }

 // Computer's Move
function getComputerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.ceil(Math.random() * 3) - 1];
}
