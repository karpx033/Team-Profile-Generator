function Engineer(name, id, address, GitHub) {
    this.name = name;
    this.id = id;
    this.address= address;
    this.github = GitHub;
    this.getRole = () =>  "Engineer";
    this.getGitHub = () => GitHub;
}

module.exports = Engineer;