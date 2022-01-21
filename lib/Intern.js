function Intern(internname, internid, internaddress, internschool) {
    this.name = internname;
    this.id = internid;
    this.address= internaddress;
    this.school=internschool;
    this.getRole = () =>  "Intern";
    this.getSchool = () => internschool;
    this.getName = () => internname;
    this.getId = () => internid;
    this.getEmail = () => internaddress;
}

module.exports = Intern;