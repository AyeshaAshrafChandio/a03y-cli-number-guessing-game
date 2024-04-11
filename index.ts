#!/usr/bin/env node
import inquirer from "inquirer";

// 1] computer will genetate a random number - Done.
//2] guessing number for user input
//3] compare together and show result
const randomNumber =Math.floor(Math.random() * 5 + 1);
console.log (randomNumber);


const answer = await inquirer.prompt([

   {
    name: "userGuessedNumber",
type :"number",
  message :" please guess a number between 5-10:" ,
  },
]);
if(answer.userGuessedNumber === randomNumber ){
   console.log("Congratulations you guessed right number.");
}else {
    console.log("you guessed wrong number");
}