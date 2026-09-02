let humanScore = 0, computerScore = 0;
const values = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const num = Math.floor(Math.random()*3)
    return values[num]
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice")
    return humanChoice
}

function playRound(computerChoice, humanChoice) {
    if(humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock")
        humanScore++
    } else if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors")
        humanScore++
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper")
        humanScore++
    } else if(humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper")
        computerScore++
    } else if(humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beat Rock")
        computerScore++
    } else if(humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beat Scissors")
        computerScore++
    } else {
        console.log("It's a tie!")
    }
}

