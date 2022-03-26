// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown.js');
const { writeFile } = require('./utils/generateReadme.js');

// TODO: Create an array of questions for user input
const questions = [
    {question: "What is your project title?"},
    {question: "Why did you build this project?"},
    {question: "What problem does it solve?"},
    {question: "What did you learn?"},
    {question: "How do you install your project?"},
    {question: "What third-party assets were required to build this project?"}
];


// TODO: Create a function to write README file
// function writeToFile(data) {
//     generateMarkdown(data);
//     // console.log("data: ", data);
// }


// TODO: Create a function to initialize app
const init = arr => {
    if (!arr) {
         arr = [];
    }
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'arr_0',
            message: questions[0].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please provide a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'arr_1',
            message: questions[1].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please provide a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'arr_2',
            message: questions[2].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please provide a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'arr_3',
            message: questions[3].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please provide a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'arr_4',
            message: questions[4].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please provide a response!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'arr_5',
            message: questions[5].question,
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please provide a response!')
                    return false;
                }
            }
        }, 
    ])
    .then((answers) => {
        // console.log(answers);
        writeFile(generateMarkdown(answers));
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong");
        }
    });
}

// Function call to initialize app
init();

