const buttons = document.querySelector(".buttons-container");
const results = document.querySelector(".results");
const playerScore = document.querySelector(".player-score");
const opponentScore = document.querySelector(".computer-score");

const showResults = document.createElement("div");
const showWinner = document.createElement("div");
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
      break;
    case "paper":
      computerSelection = getComputerChoice()
      playerSelection = "paper";
      playRound(playerSelection, computerSelection)
      break;
    case "scissors":
      computerSelection = getComputerChoice()
      playerSelection = "scissors";
      playRound(playerSelection, computerSelection)
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
  } else if (num === 1) {
    computerChoice = "paper"
  } else {
    computerChoice = "scissors"
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


function declareWinner() {
  if (humanScore === 5) {
    showWinner.textContent = (`Player: ${humanScore}, Computer: ${computerScore}. You are the ultimate Rock Paper Scissors champion!`);
    results.appendChild(showWinner)
    humanScore = 0;
    computerScore = 0;
    //remove RPS buttons and replace with Play again button
    //remove winner declaration div/text
  } else if (computerScore === 5) {
    showWinner.textContent = (`Player: ${humanScore}, Computer: ${computerScore}. You lost to the computer`);
    results.appendChild(showWinner)
    humanScore = 0;
    computerScore = 0;
  } else {
    if (humanScore < 5 && computerScore < 5) {
      if (humanScore > computerScore) {
        console.log(`Player: ${humanScore}, Computer: ${computerScore}.`)
      } else if (humanScore < computerScore) {
        console.log(`Player: ${humanScore}, Computer: ${computerScore}.`)
      } else {
        console.log(`Player: ${humanScore}, Computer: ${computerScore}.`)
      }
    }
  }
}