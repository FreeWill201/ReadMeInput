const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project:",
    },
    {
      type: "input",
      name: "TableOfContents",
      message: "Please highlight critical areas",
    },
    {
      type: "input",
      name: "installation",
      message: "Cite how application is created",
    },
    {
      type: "input",
      name: "Usage",
      message: "Explain how application is used",
    },
    {
      type: "list", // Use list instead of input to give a list of license options
      name: "License",
      message: "Choose a license for your project:",
      choices: ["MIT", "Apache", "GPL"],
    },
    {
      type: "input",
      name: "Contributors",
      message: "List Contributors",
    },
    {
      type: "input",
      name: "Tests",
      message: "Examples of tests",
    },
    {
      type: "input",
      name: "Questions",
      message: "Remaining Questions here",
    },
  ])
  .then((answers) => {
    console.log(`Title: ${answers.title}`);
    console.log(`Description: ${answers.description}`);
    console.log(`Table Of Contents: ${answers.TableOfContents}`);
    console.log(`Installation: ${answers.installation}`);
    console.log(`Usage: ${answers.Usage}`);
    console.log(`License: ${answers.License}`);
    console.log(`Contributors: ${answers.Contributors}`);
    console.log(`Tests: ${answers.Tests}`);
    console.log(`Questions: ${answers.Questions}`);

    // Add the appropriate license badge and notice based on user input
    let licenseBadge;
    let licenseNotice;
    switch (answers.License) {
      case "MIT":
        licenseBadge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        licenseNotice = "This project is licensed under the MIT license.";
        break;
      case "Apache":
        licenseBadge =
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        licenseNotice =
          "This project is licensed under the Apache 2.0 license.";
        break;
      case "GPL":
        licenseBadge =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        licenseNotice = "This project is licensed under the GPL v3 license.";
        break;
    }

    const readmeContent = `## ${answers.title}

  ## License Badge

  ${licenseBadge}  
  
  ## Description

  ${answers.description}
  
  ## Table of Contents
  
  ${answers.TableOfContents}
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.Usage}
  
  ## License
  
  ${licenseNotice} 
  
  ## Contributing
  
  ${answers.Contributors}
  
  ## Tests
  
  ${answers.Tests}
  
  ## Questions
  
  ${answers.Questions}`;

    writeToFile("README.md", readmeContent);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`README file has been created!`);
  });
}

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// License Badge and Notice, check

// Need Github Username interactivity, Need email address interactivity,
// Need table of contents interactivity. See BTCMP Spot Mode 9 project criteria
// Need to make sure README.md file is properly written to Github Repo, not just a file
