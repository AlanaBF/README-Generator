const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');


// array of questions for user

    inquirer.prompt([
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
            choices: ["mit", "isc", "apachelicense2", "gnugplv2"],
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
    ])
   

    .then((data) => {
        fs.writeFile('sampleREADME.md', `${generateMarkdown(data)}`,
        (err) => (err ? console.error(err) : console.log('Successfully wrote to index.html'))
        )
    })