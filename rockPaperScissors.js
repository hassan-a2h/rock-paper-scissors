// Computer's Move
function getComputerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.ceil(Math.random() * 3) - 1];
}

// User's Move
function getUserMove() {
  // Keep prompting user, until he enters valid move
  let move;
  while (true) {
    move = prompt("Move", '');
    move = move.toLowerCase();
    if (validateUserMove(move)) {
      break;
    }
    else {
      console.log('\tInvalid Move, Please enter valid move');
    }
  }
  return move;
}

// Validate user move
function validateUserMove(move) {
  let validMoves = ['rock', 'paper', 'scissors'];
  return validMoves.includes(move);
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

// Play 5 round game
function game() {
  let userWins = 0,
  computerWins = 0;

  while(userWins < 5 && computerWins < 5) {
    const userMove = getUserMove();
    const computerMove = getComputerMove();

    const winner = oneRound(userMove, computerMove);
    switch(winner) {
      case 1:
        userWins++;
        console.log(`You Win! ${userMove} beats ${computerMove}`);
        break;
      case 2:
      computerWins++;
      console.log(`You Lose! ${computerMove} beats ${userMove}`);
      break;
      default:
        console.log('Draw!');
    }

    console.log(`User Wins: ${userWins}, Computer Wins: ${computerWins}`);
  }

  if (computerWins == 5) {
    console.log(`\tYou've lost, Computer scored 5 wins first.`);
  }
  else {
    console.log(`\tYou've Won, You scored 5 wins first.`);
  }
}

game();
