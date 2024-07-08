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
const playerText = document.querySelector(".player-choice");
const computerText = document.querySelector(".computer-choice");
const result = document.querySelector(".result");

btnsContainer.addEventListener("click", playRound);

function playRound(e) {
    const playerChoice = e.target.dataset.playerChoice;
    if (!playerChoice) {
        return;
    }
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        playerText.textContent = `You chose: ${playerChoice}`;
        computerText.textContent = `Computer chose: ${computerChoice}`;
        result.textContent = `Draw!`
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        playerText.textContent = `You chose: ${playerChoice}`;
        computerText.textContent = `Computer chose: ${computerChoice}`;
        result.textContent = `You win!`;
        playerScore++;
    } else {
        playerText.textContent = `You chose: ${playerChoice}`;
        computerText.textContent = `Computer chose: ${computerChoice}`;
        result.textContent = `You lose!`;
        computerScore++;
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