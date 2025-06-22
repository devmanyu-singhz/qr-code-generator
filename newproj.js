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
    const url_val = answers.url;

    var qr_img = qr.image(url_val);
    qr_img.pipe(fs.createWriteStream('Generated_QR.png'));

    fs.writeFile("user_input_URL", url_val, (err)=>{
        if(err) throw err;
        console.log("The file has been saved!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });








