// function to generate markdown for README
function generateMarkdown(data) {

  function renderLicenseBadge(license) {
    //variable to display license badge depending on choice
    const badges = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      apachelicense2: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      gnugplv2: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',

    }
    return badges[license]
  }

  // Generate table of contents based on user response.
  let addToContents = ''

  // ## Table of Contents

  if (data.description !== '') {
    addToContents += `
- [Description](##Description)`}

  if (data.installation !== '') {
    addToContents += `
- [Installation](##Installation)`}

  if (data.usage !== '') {
    addToContents += `
- [Usage](##Usage)`}

  if (data.license !== '') {
    addToContents += `
- [License](##License)`}

  if (data.contributing !== '') {
    addToContents += `
- [Contributing](##Contributing)`}

  if (data.tests !== '') {
    addToContents += `
- [Tests](##Tests)`}

  if (data.github !== '' && data.email !== '') {
    addToContents += `
- [Questions](##Questions)`}

  return ` 
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  ${addToContents}

  ## Description 
  *Describe the what, why, how of the project*\n
  ${data.description}

  ## Installation 
  *Steps required to install*\n
  ${data.installation}

  ## Usage 
  *Instructions and examples for use*\n
  ${data.usage}

  ## Contributing   
  *List your collaborators*\n
  ${data.contributing}

  ## Tests 
  *Tests for application*\n
  ${data.tests}

  ## License 
  *This project is licensed under the chosen license below*\n
  ${data.license}

  ## Questions
  *Contact me if you have any questions or need to report a problem*
  \n
  GitHub: @${data.github}
  \n
  Email: ${data.email}
`
}


module.exports = generateMarkdown;
