function Manager(name, id, address, officenumber) {
    this.name = name;
    this.id = id;
    this.address=address;
    this.officenumber=officenumber;
    this.getRole = () =>  "Manager";
    this.getOfficeNumber = () => officenumber;
    this.getName = () => name;
    this.getId = () => id;
    this.getEmail = () => address;
}

module.exports = Manager;