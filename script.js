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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`\nYou chose ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`);
            console.log(`Computer chose ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
            console.log(`Draw! You both chose ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`);
            console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`\nYou chose ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`);
            console.log(`Computer chose ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
            console.log(`You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
            humanScore++;
            console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
        } else {
            console.log(`\nYou chose ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`);
            console.log(`Computer chose ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
            console.log(`You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`);
            computerScore++;
            console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`\nYour final score: ${humanScore}, Computer final score: ${computerScore}`);
    if (humanScore === computerScore) {
        console.log("Draw!");
    } else if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

playGame();