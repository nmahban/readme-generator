// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: `input`,
    name: `title`,
    message: `What is your project title?`,
  },
  {
    type: `input`,
    name: `description`,
    message: `Write a short description of your project:`,
  },
  {
    type: `input`,
    name: `installation`,
    message: `Provide installation instructions:`,
  },
  {
    type: `input`,
    name: `usage`,
    message: `Provide usage instructions:`,
  },
  {
    type: `input`,
    name: `contributing`,
    message: `Provide contribution guidelines:`,
  },
  {
    type: `input`,
    name: `installation`,
    message: `Provide test instructions:`,
  },
  {
    type: `list`,
    name: `license`,
    message: `Choose a license for your project:`,
    choices: [`MIT`, `Apache-2.0`, `GPL-3.0`, `BSD-3-Clause`, `None`],
  },
  {
    type: `input`,
    name: `githubUsername`,
    message: `Wuat is your GitHub username?`,
  },
  {
    type: `input`,
    name: `email`,
    message: `What is your email address?`,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Success`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile(`READMME.md`, readmeContent);
  });
}

// Function call to initialize app
init();
