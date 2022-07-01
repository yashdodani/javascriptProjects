"use strict";
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let computerChoice;
let userChoice;
let result;
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", function (e) {
    userChoice = e.target.id;
    userChoice = userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length
  console.log(randomNumber);
  if (randomNumber == 1) {
    computerChoice = "rock";
  } else if (randomNumber == 2) {
    computerChoice == "scissors";
  } else if (randomNumber == 3) {
    computerChoice == "paper";
  }
  console.log(computerChoice);
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a draw";
  } else if (computerChoice == "rock" && userChoice === "scissors") {
    result = "you lost";
  } else if (computerChoice == "rock" && userChoice === "paper") {
    result = "you win";
  } else if (computerChoice == "paper" && userChoice === "rock") {
    result = "you lost";
  } else if (computerChoice == "paper" && userChoice === "scissors") {
    result = "you win";
  } else if (computerChoice == "scissors" && userChoice === "rock") {
    result = "you win";
  } else if (computerChoice == "scissors" && userChoice === "paper") {
    result = "you lost";
  }
  console.log(result);
  resultDisplay.innerHTML = result;
}
