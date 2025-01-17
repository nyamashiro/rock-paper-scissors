//create global variables humanScore and computerScore
let humanScore = 0;
let computerScore = 0;
//initialize these variables with value of 0

// create a function getComputerChoice
function getComputerChoice() {

  // initialize a variable "computerChoice" to store computer's choice
  let computerChoice;

  // generate a random number between 0-2
  let num = Math.floor(Math.random() * 3)

  // if random number is 0, assign the string "rock" to computerChoice variable
  if (num === 0) {
    computerChoice = "rock"
    // if random number is 1, assign the string "paper" to computerChoice variable
  } else if (num === 1) {
    computerChoice = "paper"
    // if random number is 2, assign the string "scissors" to computerChoice variable
  } else {
    computerChoice = "scissors"
  }
  // return the variable
  return computerChoice
}

//create a function getHumanChoice
function getHumanChoice() {

  //ask user for their input (rock, paper or scissors) and assign it to the variable humanChoice
  let humanChoice = prompt("What is your choice?").toLowerCase();

  //return the valid input
  return humanChoice
}

//create function called playRound that takes in two parameters: humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
  //compare the two variables, and determine a winner based on RPS rules
  if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    
    //output a string for e.g. "YOu win/lose! Paper beats Rock"
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)

    //increment the humanScore or computerScore variable based on the winner of the round
    humanScore++
  } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
    
    //output a string for e.g. "YOu win/lose! Paper beats Rock"
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`)

    //increment the humanScore or computerScore variable based on the winner of the round
    computerScore++
  } else {
    
    //output a string for e.g. "YOu win/lose! Paper beats Rock"
    console.log("It's a tie!")
  }
}

//program begins to run from here, when we create these variables, they are assigned the return value of the functions. The functions automatically run when the page is loaded
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

console.log(humanScore, computerScore)



