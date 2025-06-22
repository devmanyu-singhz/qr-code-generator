//below is the code for this project (node.js)...still a prototype

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{                    //object
    message: "Enter the URL: ", 
    name: "url"
  }])
  .then((answers) => {
    const url_val = answers.url;

    var qr_img = qr.image(url_val);                       //to create/generate the qr image of the url given by the user (qr-image)
    qr_img.pipe(fs.createWriteStream('Generated_QR.png'));

    fs.writeFile("user_input_URL", url_val, (err)=>{    //to create a txt file and write in it the data entered by the user
        if(err) throw err;
        console.log("The file has been saved!");
    })
  })
  .catch((error) => {                       //created locally no error seen yet
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });








