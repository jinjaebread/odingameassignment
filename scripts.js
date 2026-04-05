let humanScore, computerScore = 0;

function getComputerChoice() {
    let randNum = Math.random();

    if (randNum >= 0) {
        return "rock";
    }
    else if (randNum < 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
        humanScore, computerScore += 1;
        console.log("You tie! Rock meets Rock.");
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        humanScore, computerScore += 1;
        console.log("You tie! Paper meets Paper.");
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        humanScore, computerScore += 1;
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
    else {
        humanScore += 1;
        console.log("You win! Scissors beats Paper.");
    }

    return humanScore, computerScore;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);