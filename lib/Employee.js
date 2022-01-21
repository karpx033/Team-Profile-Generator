const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const Intern = require("../lib/Intern");

const questions = [
    'What is the name of the intern?',
    'What is their employee ID?',
    'What is their email address?',
    'What is their school?',
    'Would you like to add another engineer or intern, or are you finished?'
];


function getIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "internname"
           },
           {
            type: "input",
            message: questions[1],
            name: "internid"
           },
           {
            type: "input",
            message: questions[2],
            name: "internaddress"
           },
           {
            type: "input",
            message: questions[3],
            name: "internschool"
           },
           {
            type: "list",
            message: questions[4],
            name: "internaddition",
            choices: ["Engineer", "Intern", "No, generate my team"]
           },
    ])
    .then((answers) => {
        var {internname, internid, internaddress, internschool, internaddition} = answers;
        const intern = new Intern(internname, internid, internaddress, internschool);
        peeps.push(intern);
    
    
    })

}

module.exports = {
    getIntern(),
    getEngineer()
}