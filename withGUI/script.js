let reset = () => {
  location.reload();
}

let end = () => {
  const buttons = Array.from(document.querySelectorAll('.btn-outline-light'));
  buttons.forEach(key => key.classList.add('disabled'));
}

let removeTransition = (e) => {
  const buttons = Array.from(document.querySelectorAll('.btn'));
  const lastPlays = Array.from(document.querySelectorAll('.pulse'));
  buttons.forEach(key => key.addEventListener('click', key.classList.remove('played')));
  buttons.forEach(key => key.addEventListener('click', key.classList.remove('pulse')));
}


let computerPlay = () => {
    let compMove = Math.floor(Math.random()*3);
    switch(compMove) {
      case 0:
        document.getElementById('compRock').classList.add('played');
        document.getElementById('compRock').classList.add('pulse');
        return 'rock';
      case 1:
        document.getElementById('compPaper').classList.add('played');
        document.getElementById('compPaper').classList.add('pulse');
        return 'paper';
      case 2:
        document.getElementById('compScissors').classList.add('played');
        document.getElementById('compScissors').classList.add('pulse');
        return 'scissors';
    }
}

let playRound = (playerSelection, computerSelection) => {
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

let playerWins = 0;
let computerWins = 0;

let game = (e) => {
  const gameResultsDiv = document.getElementById('gameResults');
  const score = document.getElementById('score');
  const winnerAnnouncement = document.getElementById('winner');
  const resetButton = document.getElementById('resetButton');
  gameResultsDiv.style.display = 'flex';
  if (playerWins == 5) {
    resetButton
    return;
  };
  if (computerWins == 5) {
    resetButton();
    return;
  };
  playerSelection = e.currentTarget.id;
  removeTransition();
  const button = document.getElementById(playerSelection);
  button.classList.add('played');
  button.classList.add('pulse');
  let computerSelection = computerPlay();
  let currentRound = playRound(playerSelection, computerSelection)
  if (currentRound == 'You win!') {
    playerWins++;
  } else if (currentRound == 'You lose!') {
    computerWins++;
  }
  score.textContent = `You: ${playerWins} || Computer: ${computerWins}`;
  if (playerWins == 5) {
    winnerAnnouncement.textContent = 'YOU BEAT THE COMPUTER!';
    resetButton.style.display = 'flex';
    end();
    return;
  };
  if (computerWins == 5) {
    winnerAnnouncement.textContent = 'THE COMPUTER BEAT YOU!';
    resetButton.style.display = 'flex';
    end();
    return;
  };
}

document.getElementById('rock').addEventListener('click', game);
document.getElementById('paper').addEventListener('click', game);
document.getElementById('scissors').addEventListener('click', game);

document.getElementById('reset').addEventListener('click', reset);
