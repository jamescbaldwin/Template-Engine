const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, position, identifier, email, credential) {
        super(name, position, identifier, email, credential);
        this.credential = school;
    }

    promptPosition() {
        return "Intern";
    }
}

module.exports = Intern;
// const intern = new Intern(param1, param2);
// intern.printInfo();