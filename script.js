const buttons = document.querySelector(".buttons");
const buttonsContainer = document.querySelector(".buttons-container");
const results = document.querySelector(".results");
const display = document.querySelector(".display")
const playerScore = document.querySelector(".player-score");
const opponentScore = document.querySelector(".computer-score");
const playerDisplay = document.querySelector(".player-choice");
const computerDisplay = document.querySelector(".computer-choice");

const showResults = document.createElement("div");
const showWinner = document.createElement("div");
const playerChoiceImg = document.createElement("img");
const computerChoiceImg = document.createElement("img");
const playAgainButton = document.createElement("button");

let humanScore = 0;
let computerScore = 0;

buttons.addEventListener("click", (e) => {
  let choice = e.target;
  let playerSelection = "";
  let computerSelection = "";

  switch (choice.id) {
    case "rock":
      computerSelection = getComputerChoice()
      playerSelection = "rock";
      playRound(playerSelection, computerSelection)
      playerChoiceImg.src = "./images/rock.png"
      playerDisplay.insertBefore(playerChoiceImg, playerScore);
      break;
    case "paper":
      computerSelection = getComputerChoice()
      playerSelection = "paper";
      playRound(playerSelection, computerSelection)
      playerChoiceImg.src = "./images/paper.png"
      playerDisplay.insertBefore(playerChoiceImg, playerScore);
      break;
    case "scissors":
      computerSelection = getComputerChoice()
      playerSelection = "scissors";
      playRound(playerSelection, computerSelection)
      playerChoiceImg.src = "./images/scissors.png"
      playerDisplay.insertBefore(playerChoiceImg, playerScore);
      break;
  }
  declareWinner();
})

function getComputerChoice() {
  let computerChoice;

  // generate a random number between 0-2
  let num = Math.floor(Math.random() * 3)
  if (num === 0) {
    computerChoice = "rock"
    computerChoiceImg.src = "./images/rock.png"
    computerDisplay.insertBefore(computerChoiceImg, opponentScore);
  } else if (num === 1) {
    computerChoice = "paper"
    computerChoiceImg.src = "./images/paper.png"
    computerDisplay.insertBefore(computerChoiceImg, opponentScore);
  } else {
    computerChoice = "scissors"
    computerChoiceImg.src = "./images/scissors.png"
    computerDisplay.insertBefore(computerChoiceImg, opponentScore);
  }
  return computerChoice
}

function playRound(humanChoice, computerChoice) {
  if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    showResults.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
    showResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else {
    showResults.textContent = `It's a tie! You both chose ${humanChoice}`;
  }
  results.appendChild(showResults);
  playerScore.textContent = `${humanScore}`;
  opponentScore.textContent = `${computerScore}`;

}

function playAgain() {
  buttons.remove();
  playAgainButton.textContent = "Play Again";
  buttonsContainer.appendChild(playAgainButton);
}

function newGame() {
  playAgainButton.remove();
  buttonsContainer.appendChild(buttons);
  playerChoiceImg.remove();
  computerChoiceImg.remove();
  showResults.remove();
  showWinner.remove();
  playerScore.textContent = `${humanScore}`;
  opponentScore.textContent = `${computerScore}`;
}

playAgainButton.addEventListener("click", newGame)

function declareWinner() {
  if (humanScore === 5) {
    showWinner.textContent = (`Player: ${humanScore}, Computer: ${computerScore}. You are the ultimate Rock Paper Scissors champion!`);
    results.appendChild(showWinner);
    playAgain();
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    showWinner.textContent = (`Player: ${humanScore}, Computer: ${computerScore}. You lost to the computer`);
    results.appendChild(showWinner);
    playAgain();
    humanScore = 0;
    computerScore = 0;
  }
}