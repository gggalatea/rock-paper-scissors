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
        if (humanChoice.toLowerCase() === "rock") {
            return "rock";
        } else if (humanChoice.toLowerCase() === "paper") {
            return "paper";
        } else if (humanChoice.toLowerCase() === "scissors") {
            return "scissors";
        } else {
            alert("You have entered rock, paper or scissors incorrectly! Please try again!")
        }
    }
}

let humanScore = 0;
let computerScore = 0;