// function to generate markdown for README
function generateMarkdown(data) {
return `
  # ${data.title}
  `
//variable to display license badge depending on choice
const displayLicenseBadge = (data.choices); 
  `if (data.choices === MIT) {
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)};
  if (data.choices === ISC) {
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)};
  if (data.choices === Apache License 2.0) {
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)};
  if (data.choices === GNU GPLv2) {
  [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)};
`

// Generate table of contents based on user response.
const addToContents = `## Table of Contents`;

if(data.description !== '') { addToContents += `
*[Description](#description)`};

if(data.installation !== '') { addToContents += `
*[Installation](#installation)`};

if(data.usage !== '') { addToContents += `
*[Usage](#usage)`};

if(data.license !== '') { addToContents += `
*[License](#license)`};

if(data.contributing !== '') { addToContents += `
*[Contributing](#contributing)`};

if(data.tests !== '') { addToContents += `
*[Tests](#tests)`};

if(data.questions !== '') { addToContents += `
*[Questions](#questions)`};

// Add the following headings to the README
const addtoMarkdown = 
`
  ## Description 
  *Describe the what,why,how of the project*
  ${data.description};

  ## Table of Contents
  ${addToContents()}

  ## Installation 
  *Steps required to install*
  ${data.installation};

  ## Usage 
  *Instructions and examples for use*
  ${data.usage};

  ## Contributing   
  *List your collaborators*
  ${data.contributing};

  ## Tests 
  *Tests for application*
  ${data.tests};

  ## License 
  *What you and other users can and cannot do with the project*
  ${data.choices};

  ## Questions
  *Contact if you have any questions*
  GitHub: @${data.github};
  Email: ${data.email};

`;
}

module.exports = generateMarkdown;
