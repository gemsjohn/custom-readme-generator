const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
    const licenseLink = "https://choosealicense.com/licenses/mit/"
    return licenseLink;

  } else if (license == "apache") {
    const licenseLink = "http://www.apache.org/licenses/"
    return licenseLink;

  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return(`<p>${renderLicenseBadge(license)}</p><p>${renderLicenseLink(license)}</p>`);
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  if (!data) {
    return'';
  }
  const test = renderLicenseSection(data.arr_5);
  console.log("Data:", data.arr_5);
  return `
  # ${data.arr_0}

  ## <h2>Description</h2>
  ${data.arr_1}
  
  ## <h2>Table of Contents</h2>
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#Contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## <h2>Installation</h2>
  ${data.arr_2}

  ## <h2>Usage</h2>
  ${data.arr_3}
  ${data.arr_4}

  ## <h2>License</h2>
  <div>${test}</div>

  ## <h2>Contributing</h2>
  <p>placeholder</p>
  ## <h2>Tests</h2>

  ## <h2>Questions</h2>

`;
}

module.exports = { generateMarkdown };
