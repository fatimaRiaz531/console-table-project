#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


// user input
let userInput = await inquirer.prompt({
    name:"num1",
    message: chalk.bold.green("Please enter your number:"),
    type: "number",
    validate: (input)=> {
        const num2 = parseInt(input)
        if(isNaN(num2)){                                 //NaN means not a number
            return chalk.bold.italic.bgBlue("Please enter the numeric number")
        }
     else{
        return true
     }
    }
})


//  user input value
let userNum: number = userInput.num1

// logic for table
for (let index:number = 1; index <= 12; index++) {
    let result:number = userNum* index
    console.log(`${userNum} x ${index} = ${result}`)                     // 2 x 1 =2
    
    
}