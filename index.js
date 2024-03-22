#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number",
    }
]);
if (randomnumber === answer.userGuessNumber) {
    console.log("Congratulation! you guessed right number between 1-10.");
}
else {
    console.log("You guessed wrong number.");
}
