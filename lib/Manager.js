const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, position, email, identifier, officeNumber) {
        super(name, position, email, identifier);
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