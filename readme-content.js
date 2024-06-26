

const readmeGenerator = ({title, description,install, usage, constribution, license, testInstruction,
    gitUserName, email
 }) =>{

    return `
    # ${title}

    ![image]({https://img.shields.io/badge/${license} license-blue})

    ## Table of Contents
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Tests](#tests)
    -[Questions](#questions)

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

    -GitHub Profile: [${gitUserName}](https://github.com/${gitUserName})

    If you have any additional questions contact me by email at ${email}


        
        `


}

module.exports = {readmeGenerator};