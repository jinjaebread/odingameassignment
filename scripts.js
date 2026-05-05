let humanScore = 0;
let computerScore = 0;
const h3 = document.querySelector("h3");
const h1 = document.querySelector("h1");
const para = document.querySelector("p");


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
    const p = document.createElement("p");
    if (humanChoice == "rock" && computerChoice == "rock") {
        p.textContent += "You tie! Rock meets Rock.";
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        p.textContent += "You tie! Paper meets Paper.";
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        p.textContent += "You tie! Scissors meets Scissors.";
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        p.textContent += "You lose! Paper beats rock.";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        p.textContent += "You win! Rock beats Scissors.";
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") { 
        computerScore += 1;
        p.textContent += "You lose! Rock beats Scissors.";
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        p.textContent += "You win! Scissors beats Paper.";
    }
    else if (humanChoice == "paper" && computerChoice == "rock") { 
        computerScore += 1;
        p.textContent += "You win! Paper beats Rock.";
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        humanScore += 1;
        p.textContent += "You lose! Scissors beats Paper.";
    }

    para.appendChild(p);

    h3.textContent = (humanScore + " : " + computerScore);
    if (humanScore == 5) {
        //You Win!
        h1.textContent = "You Win!"
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
    else if (computerScore == 5) {
        //You Lose!
        h1.textContent = "You Lose!"
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
}

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorBtn.textContent = "Scissors"

rockBtn.addEventListener("click", function(e) {
    const p = document.createElement("p");
    p.textContent += "You played Rock";
    para.appendChild(p);
    let humanChoice = "rock";
    playRound(humanChoice, getComputerChoice());
});
paperBtn.addEventListener("click", function(e) {
    const p = document.createElement("p");
    p.textContent += "You played Paper";
    para.appendChild(p);
    let humanChoice = "paper";
    playRound(humanChoice, getComputerChoice());
});
scissorBtn.addEventListener("click", function(e) {
    const p = document.createElement("p");
    p.textContent += "You played Scissors";
    para.appendChild(p);
    let humanChoice = "scissors";
    playRound(humanChoice, getComputerChoice());
});

const div = document.querySelector("div");
div.appendChild(rockBtn);
div.appendChild(paperBtn);
div.appendChild(scissorBtn);
