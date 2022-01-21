const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const Intern = require("../lib/Intern");

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
        peeps.push(intern);
        if (internaddition==="Engineer"){
            getEngineer();
        } if (internaddition==="Intern") {
            getIntern();
        } else {
            var fileName = 'Team Contacts';
            var data = peeps;
            genTeam(data);
            var data = genTeam(data);
            writeToFile(fileName, data);
        }
    
    
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
        const engineer = new Intern(engname, engid, engaddress, enggithub);
        peeps.push(engineer);
        if (engaddition==="Engineer"){
            getEngineer();
        } if (engaddition==="Intern") {
            getIntern();
        } else {
            var fileName = 'Team Contacts';
            var data = peeps;
            genTeam(data);
            var data = genTeam(data);
            writeToFile(fileName, data);
        }
    })
}

module.exports = {
    getIntern,
    getEngineer
}