

const readmeGenerator = ({title, description,install, usage, constribution, license, testInstruction,
    gitUserName, email
 }) =>{

    return `
    # ${title}



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