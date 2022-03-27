// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown.js');
const { writeFile } = require('./utils/generateReadme.js');

// TODO: Create an array of questions for user input
const questions = [
    {question: "What is your project title?"}, // 0
    {question: "Please describe this project:"}, // 1
    {question: "How do you install and run this project?"}, // 2
    {question: "Why did you build this project?"}, // 3
    {question: "What problem does it solve?"}, // 4
    {question: "Select a License:"}, // 5
    {question: "What third-party assets were required to build this project?"}, //6
    {question: "What is your GitHub username?"}, //7
    {question: "What is your email address?"} // 8
];

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
            type: 'list',
            name: 'arr_5',
            message: questions[5].question,
            choices: ['MIT', 'Apache', 'None'],
            filter(val) {
                return val.toLowerCase();
            },
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
            name: 'arr_6',
            message: questions[6].question,
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
            name: 'arr_7',
            message: questions[7].question,
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
            name: 'arr_8',
            message: questions[8].question,
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

