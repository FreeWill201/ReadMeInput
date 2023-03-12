// Make sure to use word wrap to easily read all comments!
// The below code, lines 3-4 establish variables that reference certain functionality

const inquirer = require("inquirer");
const fs = require("fs");

// Lines 8-66 establish the paramters for the prompts and their functionality with regards to how they are written in the README.md

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
    {
      type: "input",
      name: "Github",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "Email",
      message: "What is your Email Address?",
    },
  ])
  .then((answers) => {
    // Lines 72-82 ensure the prompts are properly registering after entering the appropriate input through the CLI

    console.log(`Title: ${answers.title}`);
    console.log(`Description: ${answers.description}`);
    console.log(`Table Of Contents: ${answers.TableOfContents}`);
    console.log(`Installation: ${answers.installation}`);
    console.log(`Usage: ${answers.Usage}`);
    console.log(`License: ${answers.License}`);
    console.log(`Contributors: ${answers.Contributors}`);
    console.log(`Tests: ${answers.Tests}`);
    console.log(`Questions: ${answers.Questions}`);
    console.log(`Github Username: ${answers.Github}`);
    console.log(`Email: ${answers.Email}`);

    // The below variable makes it so the answer to the Github prompt is attatched to a link that will access any Github Profile through the inputed Github Username

    const githubLink = `https://github.com/${answers.Github}`;

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

    // The below code, lines 111-162 make it so the markdown text is properly formatted and recorder to the written README.md file after answer the prompts through the CLI

    const readmeContent = `## ${answers.title}

  ## License-Badge

  ${licenseBadge}  
  
  ## Description

  ${answers.description}
  
  ## Table of Contents
  
  ${answers.TableOfContents}

  Alread existing Table Of Contents sections

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license-badge)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
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
  
  Questions asked: ${answers.Questions}?

  Check out my other projects on [Github](${githubLink})!  

  If you have any questions, feel free to contact me at [${answers.Email}](mailto:${answers.Email})!
  
  `;

    // This code below, lines 166-175 ensures a file, in this case a README.md file, is written

    writeToFile("README.md", readmeContent);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`README file has been created!`);
  });
}
