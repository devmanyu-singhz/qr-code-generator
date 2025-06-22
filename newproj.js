//below is the code for this project (node.js)...still a prototype

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    message: "Enter the URL: ", 
    name: "url"
  }])
  .then((answers) => {
    console.log(answers.url);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });








