let humanScore = 0;
let computerScore = 0;
const h3 = document.querySelector("h3");
const h1 = document.querySelector("h1");

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    if (randNum == 0) {
        return "rock";
    }
    else if (randNum == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("You tie! Rock meets Rock.");
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("You tie! Paper meets Paper.");
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("You tie! Scissors meets Scissors.");
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        console.log("You lose! Paper beats rock.");
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        console.log("You win! Rock beats Scissors.");
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") { 
        computerScore += 1;
        console.log("You lose! Rock beats Scissors.");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        console.log("You win! Scissors beats Paper.");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") { 
        computerScore += 1;
        console.log("You win! Paper beats Rock.");
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        humanScore += 1;
        console.log("You lose! Scissors beats Paper.");
    }

    h3.textContent = (humanScore + " : " + computerScore);
    if (humanScore == 5) {
        //You Win!
        h1.textContent = "You Win!"
        rockBtn.disabled = "disabled";
        paperBtn.disabled = "disabled";
        scissorBtn.disabled = "disabled";
    }
    else if (computerScore == 5) {
        //You Lose!
        h1.textContent = "You Lose!"
        rockBtn.disabled = "disabled";
        paperBtn.disabled = "disabled";
        scissorBtn.disabled = "disabled";
    }
}

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorBtn.textContent = "Scissors"

rockBtn.addEventListener("click", function(e) {
    console.log("You played Rock")
    let humanChoice = "rock";
    playRound(humanChoice, getComputerChoice());
});
paperBtn.addEventListener("click", function(e) {
    console.log("You played Paper")
    let humanChoice = "paper";
    playRound(humanChoice, getComputerChoice());
});
scissorBtn.addEventListener("click", function(e) {
    console.log("You played Scissors")
    let humanChoice = "scissors";
    playRound(humanChoice, getComputerChoice());
});

const div = document.querySelector("div");
div.appendChild(rockBtn);
div.appendChild(paperBtn);
div.appendChild(scissorBtn);
