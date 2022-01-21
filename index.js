const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const employee = require('./lib/Employee.js');
const engineer = require('./lib/Engineer.js');
const intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const genTeam = require('./src/page-template.js');
const peeps = [];

const questions = [
    'What is the name of the team manager?',
    'What is their employee ID?',
    'What is their email address?',
    'What is their office number?',
    'Would you like to add an engineer or intern, or are you finished?'
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Successful");
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
   {
    type: "input",
    message: questions[0],
    name: "name"
   },
   {
    type: "input",
    message: questions[1],
    name: "id"
   },
   {
    type: "input",
    message: questions[2],
    name: "address"
   },
   {
    type: "input",
    message: questions[3],
    name: "officenumber"
   },
   {
    type: "list",
    message: questions[4],
    name: "addition",
    choices: ["Engineer", "Intern", "No, generate my team"]
   },
])
   .then((answers) => {
        var {name, id, address, officenumber, addition} = answers;
        const leader = new Manager(name, id, address, officenumber);
        peeps.push(leader);
        if (answers.addition==="Intern") {
            getIntern();
        } if (answers.addition==="Engineer") {
            getEngineer();
        }
        var fileName = 'Team Contacts';
        // var data = answers;
        genTeam(data);
        var data = genTeam(data);
        writeToFile(fileName, data);
       
    })
    .catch(err => {
        console.log(err);
    })
};

// Function call to initialize app
init();
