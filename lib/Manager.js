const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, identifier, email, officeNumber) {
        super(name, identifier, email);
        this.officeNumber = officeNumber;
    }

    promptOfficeNumber() {
        return this.officeNumber;
    }

    promptPosition() {
        return "Manager";
    }
}

module.exports = Manager;