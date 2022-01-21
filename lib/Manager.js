const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, address, officenumber) {
      super(name, id, address, officenumber)
      this.officeNumber=officenumber;
      this.getOfficeNumber = () => officenumber;
      this.getRole = () =>  "Manager";
  }
    
}

module.exports = Manager;