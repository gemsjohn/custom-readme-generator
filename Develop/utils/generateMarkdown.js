const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseText(license) {
  if (license == "mit") {
    const licenseText = "MIT License, Copyright (c) 2022 John Martin";
    return licenseText;

  } else if (license == "apache") {
    const licenseText = "Apache License, Version 2.0, January 2004"
    return licenseText;

  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "mit") {
    const licenseLink = "https://opensource.org/licenses/MIT"
    return licenseLink;

  } else if (license == "apache") {
    const licenseLink = "http://www.apache.org/licenses/"
    return licenseLink;

  } else {
    return '';
  }
}
function renderLicenseBadge(license) {
  if (license == "mit") {
    const licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    return licenseBadge;

  } else if (license == "apache") {
    const licenseBadge= "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](http://www.apache.org/licenses/)"
    return licenseBadge;

  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // return(`<a href="${renderLicenseLink(license)}">${renderLicenseBadge(license)}</a>`);
  return(`${renderLicenseBadge(license)}`);
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  if (!data) {
    return'';
  }
  const license = renderLicenseBadge(data.arr_5);
  console.log("Data:", data.arr_5);
  return `
  # <b>${data.arr_0}</b>
  ${license}

  # <b>Table of Contents</b>
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#License)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  # Description
  <p>${data.arr_1}</p>

  # Installation
  <p>${data.arr_2}</p>

  # Usage
  <p>${data.arr_3}</p>
  <p>${data.arr_4}</p>

  # License
  <p><a href="${renderLicenseLink(data.arr_5)}">${renderLicenseText(data.arr_5)}</a></p>

  # Contributing
  <p>The following third-party asset(s) contribute to the production of this Node.js Readme Generator:</p>
  <p>${data.arr_6}</p>

  # Questions
  <p>Feel free to follow my GitHub account: <a href="https://github.com/${data.arr_7}">${data.arr_7}</a></p>
  <p>If you have any questions about this project feel free to reach me at the following email address: ${data.arr_8}</p>

`;
}

module.exports = { generateMarkdown };
