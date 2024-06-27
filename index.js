// TODO: Include packages needed for this application

const inquirer = require("inquirer")


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {inquirer.prompt([
    {
        type:"input",
        message:"Enter your projects title",
        name:"title",
    },
    {
        type:"input",
        message:"Write a description of your project",
        name:"description",
    },
    {
        type:"input",
        message:"Write the instruction to install your project",
        name:"install",
    },
    {
        type:"input",
        message:"Describe the usage of your application",
        name:"usage",
    },
    {
        type:"input",
        message:"Include any contributors for this project",
        name:"contribution",
    },
    {
        type:"input",
        message:"Write some tests that were used for this project",
        name:"testInstruction",
    },
    {
        type:"list",
        message:"Select a license that was used for this repository",
        name:"license",
        choices: ["MIT", "Apache license 2.0", "Microsoft Public License", "Academic Free License v3.0", "Educational Community License v2.0", "ISC"],

    },
    {
        type:"input",
        message:"Enter your GitHub username",
        name:"gitUserName",
    },
    {
        type:"input",
        message:"Enter your email",
        name:"email",
    },

    
]).then(response =>{
    console.log(response);
})
}

// Function call to initialize app
init();
