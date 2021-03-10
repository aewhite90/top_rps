let computerPlay = () => {
    let compMove = Math.floor(Math.random()*3);
    switch(compMove) {
      case 0: return 'rock';
      case 1: return 'paper';
      case 2: return 'scissors';
    }
}

let playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "Draw!"
  } else if (playerSelection == 'rock') {
    let winner = (computerSelection == 'paper') ? 'You lose!' : 'You win!';
    return winner;
  } else if (playerSelection == 'paper') {
    let winner = (computerSelection == 'rock') ? 'You win!' : 'You lose!';
    return winner;
  } else {
    let winner = (computerSelection == ' rock') ? 'You lose!' : 'You win!';
    return winner;
  }
}

const computerSelection = computerPlay();

let game = () => {
  let rounds = 5;
  while (rounds > 0) {
    let playerSelection = prompt('Enter Rock, Paper, or Scissors:');
    alert(playRound(playerSelection, computerSelection));
    rounds--;
  }
}
