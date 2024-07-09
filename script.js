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

let playerScore = 0;
let computerScore = 0;

const score = document.querySelector(".score")

score.textContent = `${playerScore} - ${computerScore}`;

const newGameBtn = document.querySelector(".new-game");

newGameBtn.style.display = "none";

const btnsContainer = document.querySelector(".rps-container");
const playerText = document.querySelector(".player-choice-text");
const computerText = document.querySelector(".computer-choice-text");
const result = document.querySelector(".result");

btnsContainer.addEventListener("click", playRound);

function playRound(e) {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }

    const playerChoice = e.target.dataset.playerChoice;
    if (!playerChoice) {
        return;
    }
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        playerText.textContent = `You chose: ${playerChoice}`;
        computerText.textContent = `Computer chose: ${computerChoice}`;
        result.textContent = `Draw!`;
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
    score.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore === 5) {
        result.textContent = `You win the first to 5!`;
        newGameBtn.style.display = "inline-block";
    } else if (computerScore === 5) {
        result.textContent = `You lose the first to 5!`;
        newGameBtn.style.display = "inline-block";
    }
}

newGameBtn.addEventListener("click", playNewGame);

function playNewGame() {
    playerScore = 0;
    computerScore = 0;
    score.textContent = `${playerScore} - ${computerScore}`;
    newGameBtn.style.display = "none";
    playerText.textContent = ``;
    computerText.textContent = ``;
    result.textContent = ``;
}