const gameWords = ['ROCK', 'PAPER', 'SCISSORS'];
let computerSelection, playerSelection, paragraph, playerText, computerText, playerSelectionText, ComputerSelectionText;
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerWord = gameWords[randomNumber];
    return computerWord;
}

function playRound(e) {
    computerSelection = computerPlay();
    playerSelection = event.target.id.toUpperCase();
    paragraph = document.querySelector('#game-text');
    playerText = document.querySelector('#player-score');
    computerText = document.querySelector('#computer-score');
    playerSelectionText = document.querySelector('#player-selection');
    computerSelectionText = document.querySelector('#computer-selection');

       if (gameWords.includes(playerSelection) === false) {
            computerScore ++;
            paragraph.textContent = 'Invalid selection.  You lose!';
        } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
            computerScore ++;
            paragraph.textContent = 'You lose!  Rock beats scissors.';
        } else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
            computerScore ++;
            paragraph.textContent = 'You lose!  Rock beats scissors.';
        } else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
            computerScore ++;
            paragraph.textContent = 'You lose!  Scissors beats paper.';
        } else if (computerSelection === playerSelection) {
            paragraph.textContent = 'Tie game.  There is no winner!'
        } else {
            playerScore ++;
            paragraph.textContent = 'You are the winner!'
        }

        playerText.textContent = `Your Score: ${playerScore}`;
        computerText.textContent = `Computer Score: ${computerScore}`;
        playerSelectionText.textContent = `Your Selection: ${playerSelection}`;
        computerSelectionText.textContent = `Computer Selection: ${computerSelection}`;

        if (computerScore >= 5) {
            paragraph.classList.add('winner');
            computerText.classList.add('winner');
            paragraph.textContent = 'The computer won the game!!!';
        } else if (playerScore >= 5) {
            paragraph.classList.add('winner');
            playerText.classList.add('winner');
            paragraph.textContent = 'You won the game!!!';
        } 
    };

function newGame () {
    playerScore = 0;
    computerScore = 0;
    playerText.classList.remove('winner');
    computerText.classList.remove('winner');
    paragraph.classList.remove('winner');
    paragraph.textContent = 'Click a button to start the game!';
    playerText.textContent = `Your Score: ${playerScore}`;
    computerText.textContent = `Computer Score: ${computerScore}`;
    playerSelectionText.textContent = 'Your Selection:';
    computerSelectionText.textContent = 'Computer Selection:';
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

button.addEventListener('click', playRound);
  });

  const newGameButton = document.querySelector('#new-game');

newGameButton.addEventListener('click', newGame)



