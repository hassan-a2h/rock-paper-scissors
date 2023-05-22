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
  computerWins = 0,
  draws = 0;

function game(move) {
  if (userWins === 5 || computerWins === 5) {
    const parent = document.querySelector('.display-result');
    gameOver(parent);
    return;
  }

  const computerMove = getComputerMove(),
  userMove = move;
  const winner = oneRound(userMove, computerMove);
  (winner === 1) ? userWins++ : (winner === 2) ? computerWins++ : draws++;
  displayScore();
  displayWinner();
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
  winCount.innerHTML = `<p>User Wins: ${userWins} <br> Computer Wins:
                        ${computerWins}<br>Draws: ${draws}</p>`;
}

function displayWinner() {
  let announceWinner;

  if (userWins === 5 || computerWins === 5) {
    announceWinner = document.querySelector('.round-winner');
    announceWinner.style.cssText = 'display: flex;';
  }

  if (userWins === 5) {
    announceWinner.innerHTML = '<p>You Win</p>';
    announceWinner.style.cssText += 'background-color: green; color: black;';
  }
  else if (computerWins === 5) {
    announceWinner.innerHTML = '<p>Computer Wins</p>';
    announceWinner.style.cssText += 'background-color: red; color: white;';
  }
}

function gameOver(parent) {
  if (document.querySelector('.game-over-message')) {
    return;
  }
  const message = document.createElement('div');
  message.innerHTML = '<p> Game Over </p>';
  message.classList.add('wins', 'game-over-message');
  message.style.cssText += 'display:flex; background-color:black; color:white';
  parent.appendChild(message);
}
