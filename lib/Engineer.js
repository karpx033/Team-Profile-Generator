const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, address, GitHub) {
        super(name, id, address, GitHub)
        this.github=GitHub;
        this.getGithub = () => GitHub;
        this.getRole = () =>  "Engineer";
    }
}

module.exports = Engineer;