// Declaring all the variables and dependencies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const makeReadme = require("./utils/makeReadme")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompts asking the user questions to populate in the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Please enter the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter a description of the installation process: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Please enter the project usage?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for the application: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What to do to raise issues ?"
        },
        {
            type: "input",
            name: "username",
            message: "Please provide your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email address: "
        }
    ]);
} 

// Async function right here
  async function init() {
    try {
        // Ask the questions and then generate responses
        const answers = await promptUser();
        const generateContent = makeReadme(answers);
        // Writing the new README.md to dist directory of the project
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully appended to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  