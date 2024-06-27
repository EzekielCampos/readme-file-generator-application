
// This function uses deconstructing syntax for the parameters so that the variables can be used in the function
const readmeGenerator = ({title, description,install, usage, contribution, license, testInstruction,
    gitUserName, email
 }) =>{
// Returns a string with all the content of a README and the parameters in the corresponding places to generate a new file 
    return `
# ${title}

[![License: ${license}](https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd9eb5aaca434fac4f1c34_License-${license}-blue.svg)](/LICENSE)


## Table of Contents
-[Description](#description)
<br/>
-[Installation](#installation)
<br/>
-[Usage](#usage)
<br/>
-[Contributing](#contributing)
<br/>
-[License](#license)
<br/>
-[Tests](#tests)
<br/>
-[Questions](#questions)
<br/>

## Description

${description}

## Installation

${install}

## Usage

${usage}
## Contributing

${contribution}
## License

This repository is covered under the ${license} license

## Tests

${testInstruction}


## Questions

* GitHub Profile: [${gitUserName}](https://github.com/${gitUserName})

If you have any additional questions contact me by email at ${email}

`
}

// Exports method allows the readmeGenerator function to be used in other files if needed
module.exports = {readmeGenerator};