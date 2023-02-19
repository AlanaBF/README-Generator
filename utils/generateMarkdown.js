// function to generate markdown for README
function generateMarkdown(data) {

  // Function to render the license badge at the top of the page under the title.
  function renderLicenseBadge(license) {
    //variable to display license badge depending on choice
    const badges = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      apachelicense2: '[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      gnugplv3: '[![License: GNU GPLv3](https://img.shields.io/badge/License-GPL_v3-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-3.0.en.html)',
    }
    return badges[license]
  }

  // Function to render the license link under the license section of the README
  function renderLicenseLink(license) {
    const licenseLinks = {
      mit: "[MIT](https://choosealicense.com/licenses/mit/)",
      isc: "[ISC](https://choosealicense.com/licenses/isc/)",
      apachelicense2: "[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)",
      gnugplv3: "[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)",
    }
    return licenseLinks[license]
  }

  // Generate table of contents based on user response.
  let addToContents = ''

  if (data.description !== '') {
    addToContents += `
* [Description](#Description)`}

  if (data.installation !== '') {
    addToContents += `
* [Installation](#Installation)`}

  if (data.usage !== '') {
    addToContents += `
* [Usage](#Usage)`}

  if (data.license !== '') {
    addToContents += `
* [License](#License)`}

  if (data.contributing !== '') {
    addToContents += `
* [Contributing](#Contributing)`}

  if (data.tests !== '') {
    addToContents += `
* [Tests](#Tests)`}

  if (data.github !== '' && data.email !== '') {
    addToContents += `
* [Questions](#Questions)`}

  // Returns the README markdown and calls for the functions to do their thing
  return ` 
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
${addToContents}

## Description 
${data.description}

## Installation 
*To install the necessary dependencies run the following command*\n
${data.installation}

## Usage 
*You can use this application by running*\n
${data.usage}

## Contributing   
*If contributing fork and pull request. List of collaborators*\n
${data.contributing}

## Tests 
*To run tests, run the following command*\n
${data.tests}

## License 
*This project is licensed under* ${renderLicenseLink(data.license)}

## Questions
*Contact me if you have any questions or need to report a problem. Alternatively open an issue.*
\n
Find me on GitHub: [${data.username}](https://github.com/${data.username})
\n
Email: [${data.email}](mailto:${data.email})
`
}

module.exports = generateMarkdown;
