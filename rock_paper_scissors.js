const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
  game('rock');
});

paper.addEventListener('click', () => {
  game('paper');
});

scissors.addEventListener('click', () => {
  game('scissors');
});

let userWins = 0,
  computerWins = 0;

function game(move) {
  const computerMove = getComputerMove(),
  userMove = move;
  const winner = oneRound(userMove, computerMove);
  displayScore();
  displayWinner(winner);
}

function getComputerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.ceil(Math.random() * 3) - 1];
}

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

function displayScore() {
  const winCount = document.querySelector('.wins');
  winCount.setAttribute('style', 'display: flex;');
  winCount.innerHTML = `<p>User Wins: ${userWins} <br> Computer Wins: ${computerWins}</p>`;
}

function displayWinner(winner) {
  const announceWinner = document.querySelector('.round-winner');
  announceWinner.style.cssText = 'display: flex;';

  if (winner === 1) {
    announceWinner.textContent = 'You Win';
    userWins++;
  }
  else if (winner === 2) {
    announceWinner.textContent = 'Computer Wins';
    computerWins++;
  }
  else {
    announceWinner.textContent = 'Draw Match';
  }
}
