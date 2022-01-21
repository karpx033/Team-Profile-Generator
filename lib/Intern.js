const Employee = require("./Employee");

class Intern extends Employee {
    constructor(internname, internid, internaddress, internschool) {
        super(internname, internid, internaddress, internschool)
        this.school=internschool;
        this.getSchool = () => internschool;
        this.getRole = () =>  "Intern";
    }
}

module.exports = Intern;