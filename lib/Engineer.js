const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, identifier, email, github) {
        super(name, identifier, email);
        this.github = github;
    }

    promptGithub() {
        return this.github;
    }

    promptPosition() {
        return "Engineer";
    }
}

module.exports = Engineer;