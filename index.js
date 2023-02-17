const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const promptUser = () =>
inquirer.prompt( [
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your README?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Add your instructions for installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
    },
     {
        type: 'checkbox',
        message: 'Choose your license',
        name: 'license',
        choices: ["MIT", "ISC", "Apache License 2.0", "GNU GPLv2"],
    },
    {
        type: 'input',
        message: 'Enter your contribution guidelines',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter your test instructions',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your GitHub Username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },
]);

// function to write README file
const generateREADME = (data) => {
    generateMarkdown(data);
}

// function to initialize program
async function init() {
    promptUser()
    .then((data) => writeFileAsync('SampleREADME.md', generateREADME(data)))
    .then(() => console.log("Successfully written to sampleREADME"))
    .catch((err) => console.log(err))
}

// function call to initialize program
init();
