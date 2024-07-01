#! /usr/bin/env node
import inquirer from "inquirer";
console.log("hint : number is between 1 to 15");
let randomNumber = Math.floor(Math.random() * 15) + 1;
let answer = await inquirer.prompt({
    name: "number",
    message: "choose a number",
    type: "number",
});
if (answer.number === randomNumber) {
    console.log("you are correct");
}
else {
    console.log("wrong");
}
console.log(randomNumber);
