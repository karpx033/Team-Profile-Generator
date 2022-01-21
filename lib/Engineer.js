function Engineer(name, id, address, GitHub) {
    this.name = name;
    this.id = id;
    this.address= address;
    this.github = GitHub;
    this.getRole = () =>  "Engineer";
    this.getGithub = () => GitHub;
    this.getName = () => name;
    this.getId = () => id;
    this.getEmail = () => address;
}

module.exports = Engineer;