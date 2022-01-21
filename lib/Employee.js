class Employee  {
    constructor(name, id, address, officenumber) {
    this.name = name;
    this.id = id;
    this.email= address;
    this.getName = () =>  name;
    this.getId = () => id;
    this.getEmail = () => address;
    this.getRole = () => "Employee";
    }
}

module.exports = Employee;