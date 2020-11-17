const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, position, email, identifier, school) {
        super(name, position, email, identifier);
        this.school = school;
    }

    promptSchool() {
        return this.school;
    }

    promptPosition() {
        return "Intern";
    }
}

module.exports = Intern;