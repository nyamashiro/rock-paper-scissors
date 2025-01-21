const buttons = document.querySelector(".buttons-container");
const results = document.querySelector(".results");
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


function getHumanChoice() {
  let humanChoice = prompt("What is your choice?").toLowerCase();
  return humanChoice
}

function playRound(humanChoice, computerChoice) {
  if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    humanScore++
  } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    computerScore++
  } else {
    console.log(`It's a tie! You both chose ${humanChoice}`)
  }
}


function declareWinner() {
  if (humanScore > computerScore) {
    console.log(`Player: ${humanScore}, Computer: ${computerScore}. Player wins!`)
  } else if (humanScore < computerScore) {
    console.log(`Player: ${humanScore}, Computer: ${computerScore}. Computer wins!`)
  } else {
    console.log(`Player: ${humanScore}, Computer: ${computerScore}. It's a tie!`)
  }
}

// //create a new function playGame that will play 5 rounds of RPS
// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     //when we create these variables, they are assigned the return value of the functions. The functions automatically run when the page is loaded
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection)
//   }
//   declareWinner();
// }



