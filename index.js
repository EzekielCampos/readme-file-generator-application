// The file system module is include to perform a write to a file
const fs = require("fs");
// The inquirer module will help with CLI prompts to collected user's response
const inquirer = require("inquirer")

// Using desconstructing syntax the readmeGenerator function is avaiable to be called
const {readmeGenerator} = require("./readme-content");


function writeToFile(fileName, data) {

    // Using the writeFile method this dynamically creates a README file with the string that is created by the readmeGenerator function
    fs.writeFile(`${fileName}.md`, readmeGenerator(data),(error)=>
        error ? console.error(error) : console.log('Success!'));

}

// This function will initialize the CLI prompts when it is called and dynamically generate the README file
function init() {
    // Prompt method will give user prompts in the CLI and record the answers
    inquirer.prompt([
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

    // Once all the prompts have been answered they are condensed into an object in the response variable that can be accessed
]).then(response =>{
    // Call the writeToFile function and pass the response variable to take the users answers and place them accordingly in the README file
    writeToFile("README",response);
})
}

// This will intialize the CLI prompts for the user and dynamically create the README file
init();
