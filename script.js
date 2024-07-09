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

const playerScoreText = document.querySelector(".player-score-text")
const computerScoreText = document.querySelector(".computer-score-text")

playerScoreText.textContent = `${playerScore}`;
computerScoreText.textContent = `${computerScore}`;

const newGameBtn = document.querySelector(".new-game");

newGameBtn.style.display = "none";

const btnsContainer = document.querySelector(".rps-container");
const playerChoiceText = document.querySelector(".player-choice-text");
const computerChoiceText = document.querySelector(".computer-choice-text");
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
        playerChoiceText.textContent = `You chose: ${playerChoice}`;
        computerChoiceText.textContent = `Computer chose: ${computerChoice}`;
        result.textContent = `Draw!`;
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        playerChoiceText.textContent = `You chose: ${playerChoice}`;
        computerChoiceText.textContent = `Computer chose: ${computerChoice}`;
        result.textContent = `You win!`;
        playerScore++;
    } else {
        playerChoiceText.textContent = `You chose: ${playerChoice}`;
        computerChoiceText.textContent = `Computer chose: ${computerChoice}`;
        result.textContent = `You lose!`;
        computerScore++;
    }
    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;

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
    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;
    newGameBtn.style.display = "none";
    playerChoiceText.textContent = ``;
    computerChoiceText.textContent = ``;
    result.textContent = ``;
}