const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const Intern = require("./lib/Intern");
const Engineer = require('./lib/Engineer');
const employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const genTeam = require('./src/page-template.js');
// const styles = require('./dist/style.css');

const team = [];

const questions = [
    'What is the name of the team manager?',
    'What is their employee ID?',
    'What is their email address?',
    'What is their office number?',
    'Would you like to add an engineer or intern, or are you finished?'
];

const internquestions = [
    'What is the name of the intern?',
    'What is their employee ID?',
    'What is their email address?',
    'What is their school?',
    'Would you like to add another engineer or intern, or are you finished?'
];

const engquestions = [
    'What is the name of the engineer?',
    'What is their employee ID?',
    'What is their email address?',
    'What is their GitHub username?',
    'Would you like to add another engineer or intern, or are you finished?'
];

function writeToFile(fileName, print) {
    fs.writeFile(`${fileName}.html`, print, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Successful");
    })
}

function getIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: internquestions[0],
            name: "internname"
           },
           {
            type: "input",
            message: internquestions[1],
            name: "internid"
           },
           {
            type: "input",
            message: internquestions[2],
            name: "internaddress"
           },
           {
            type: "input",
            message: internquestions[3],
            name: "internschool"
           },
           {
            type: "list",
            message: internquestions[4],
            name: "internaddition",
            choices: ["Engineer", "Intern", "No, generate my team"]
           },
    ])
    .then((answers) => {
        var {internname, internid, internaddress, internschool, internaddition} = answers;
        const intern = new Intern(internname, internid, internaddress, internschool);
        team.push(intern);
        if (answers.internaddition==="Engineer"){
            getEngineer();
        } if (answers.internaddition==="Intern") {
            getIntern();
        } else {
            var fileName = 'Team Contacts';
            var data = team;
            var print = genTeam(data);
            writeToFile(fileName, print);
        }
    
    
    })
    .catch(err => {
        console.log(err);
    })

}

function getEngineer () {
    inquirer.prompt ([
        {
            type: "input",
            message: engquestions[0],
            name: "internname"
           },
           {
            type: "input",
            message: internquestions[1],
            name: "engid"
           },
           {
            type: "input",
            message: engquestions[2],
            name: "engaddress"
           },
           {
            type: "input",
            message: engquestions[3],
            name: "enggithub"
           },
           {
            type: "list",
            message: engquestions[4],
            name: "engaddition",
            choices: ["Engineer", "Intern", "No, generate my team"]
           },
    ])
    .then ((answers) =>{
        var {engname, engid, engaddress, enggithub, engaddition} = answers;
        const engineer = new Engineer(engname, engid, engaddress, enggithub);
        team.push(engineer);
        if (answers.engaddition==="Engineer"){
            getEngineer();
        } if (answers.engaddition==="Intern") {
            getIntern();
        } else {
            var fileName = 'Team Contacts';
            var data = team;
            var print = genTeam(data);
            writeToFile(fileName, print);
        }
    })
    .catch(err => {
        console.log(err);
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
        team.push(leader);
        if (answers.addition==="Intern") {
            getIntern();
        } if (answers.addition==="Engineer") {
            getEngineer();
        } else {
            var fileName = 'Team Contacts';
            var data = team;
            var print = genTeam(data);
            writeToFile(fileName, print);
        }
    })
    .catch(err => {
        console.log(err);
    })
};

// Function call to initialize app
init();
