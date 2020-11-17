const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,identifier, email, school) {
        super(name, identifier, email);
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
