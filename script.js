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