#! /usr/bin/env node

import inquirer from "inquirer";

const randomnumber =Math.floor( Math.random() * 5 + 1);

console.log("Welcome to number guessing game!")

const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message:"Please guess a number between 1-6",
    }
]);

if(randomnumber === answer.userGuessNumber){
    console.log("Congratulation! you guessed right number between 1-10.");
}else{
    console.log("You guessed wrong number.");
}