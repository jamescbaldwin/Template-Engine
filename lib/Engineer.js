const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, position, email, identifier, github) {
        super(name, position, email, identifier);
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