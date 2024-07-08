"use strict";

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 2) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Choose rock, paper or scissors!");
        if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors") {
            return humanChoice.toLowerCase();
        } else {
            alert("You have entered rock, paper or scissors incorrectly! Please try again!");
        }
    }
}


let playerScore = 0;
let computerScore = 0;

const btnsContainer = document.querySelector(".container");

btnsContainer.addEventListener("click", playRound);

function playRound(e) {
    const playerChoice = e.target.dataset.playerChoice;
    if (!playerChoice) {
        return;
    }
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        console.log(`\nYou chose ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}`);
        console.log(`Computer chose ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
        console.log(`Draw! You both chose ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}`);
        console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`);
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        console.log(`\nYou chose ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}`);
        console.log(`Computer chose ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
        console.log(`You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
        playerScore++;
        console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`);
    } else {
        console.log(`\nYou chose ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}`);
        console.log(`Computer chose ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
        console.log(`You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}`);
        computerScore++;
        console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`);
    }
}

console.log(`\nYour final score: ${playerScore}, Computer final score: ${computerScore}`);
if (playerScore === computerScore) {
    console.log("Draw!");
} else if (playerScore > computerScore) {
    console.log("You win!");
} else {
    console.log("You lose!");
}