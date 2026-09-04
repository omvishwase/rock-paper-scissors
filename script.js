let humanScore = 0, computerScore = 0;
const values = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const num = Math.floor(Math.random()*3);
    return values[num];
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice");
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    if(humanChoice === "paper" && computerChoice === "rock") {
        const text = "You win! Paper beats Rock";
        addResultDiv(text);
        humanScore++
        displayScore(humanScore, computerScore);
    } else if(humanChoice === "rock" && computerChoice === "scissors") {
        const text = "You win! Rock beats Scissors";
        addResultDiv(text);
        humanScore++
        displayScore(humanScore, computerScore);
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        const text = "You win! Scissors beats Paper";
        addResultDiv(text);
        humanScore++
        displayScore(humanScore, computerScore);
    } else if(humanChoice === "paper" && computerChoice === "scissors") {
        const text = "You lose! Scissors beats Paper";
        addResultDiv(text);
        computerScore++
        displayScore(humanScore, computerScore);
    } else if(humanChoice === "rock" && computerChoice === "paper") {
        const text = "You lose! Paper beats Rock";
        addResultDiv(text);
        computerScore++
        displayScore(humanScore, computerScore);
    } else if(humanChoice === "scissors" && computerChoice === "rock") {
        const text = "You lose! Rock beats Scissors";
        addResultDiv(text);
        computerScore++
        displayScore(humanScore, computerScore);
    } else {
        const text = "It's a tie!";
        addResultDiv(text);
        displayScore(humanScore, computerScore);
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let hChoice = e.target.id;
        let cChoice = getComputerChoice();
        // console.log(e.target.id)
        playRound(cChoice, hChoice);
    });
});

function addResultDiv(text) {
    const buttonDiv = document.getElementById("btn-div");
    
    const resultDiv = document.createElement("div");
    resultDiv.className = "result-div";

    const textSpan = document.createElement("span");
    textSpan.textContent = text;
    
    //appending code
    resultDiv.append(textSpan);
    buttonDiv.append(resultDiv);
}

function displayScore(humanScore, computerScore) {

    const buttonDiv = document.getElementById("btn-div");
    const scoreDiv = document.createElement("div");
    scoreDiv.className = "score-div";

    const textSpan = document.createElement("span");
    textSpan.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;

    //appending code
    scoreDiv.append(textSpan);
    buttonDiv.append(scoreDiv);
    const winnerText = humanScore === 5 ? "Human Wins!" :computerScore === 5 ? "Computer Wins!"  : null;

    if(winnerText) {
        const textDiv = document.createElement("h1");
        textDiv.textContent = winnerText;
        scoreDiv.append(textDiv);
        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.remove();
        })
    }     
}
