

const readmeGenerator = ({title, description,install, usage, constribution, license, testInstruction,
    gitUserName, email
 }) =>{

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

${constribution}
## License

This repository is covered under the ${license} license

## Tests

${testInstruction}


## Questions

* GitHub Profile: [${gitUserName}](https://github.com/${gitUserName})

If you have any additional questions contact me by email at ${email}



`


}

module.exports = {readmeGenerator};