#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from 'figlet';


console.log(chalk.bgGrey(chalk.blue("TIMER")));
//sleep function
const sleep = () => {
    return new Promise((r) =>
     {setTimeout(r,1000)});
};

//timer
async function timer(mins: number, secs: number){
   while(mins >= 0){
    while(secs >= 0){
      console.clear();
      console.log(figlet.textSync(`${mins} : ${secs}`,{font: "Standard",}));
      await sleep();
      secs = secs - 1; 
    }
    mins = mins - 1;
    secs = 60;
  }
}


  
//asking time for countdown
async function Ask(){
    const answers = await inquirer.
     prompt([
       {
         type: "number",
         name: "min",
         message: "How many minutes you want \n",
       },
       {
         type: "number",
         name: "sec",
         message: "How many seconds you want \n"
       },
     ]);
  let totalSeconds = (answers.min*60) + answers.sec;
  let mins = Math.floor(totalSeconds/60);
  let secs = Math.round(((totalSeconds/60) - (Math.floor(totalSeconds/60)))*60);
  console.log(chalk.blue(`${chalk.red(`${mins}`)} minutes : ${chalk.red(`${secs}`)} seconds`));
  await sleep();
  await timer(mins , secs)
  }

await Ask()
