const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, position, identifier, email, credential) {
        super(name, position, identifier, email, credential);
        this.credential = github;
    }

    promptPosition() {
        return "Engineer";
    }
}

module.exports = Engineer
// const engineer = new Engineer(param1, param2);
// engineer.printInfo();