// The below code, lines 3-9, establishes the framework for generating a README.md file when it is referenced in the index.js file

function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
