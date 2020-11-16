const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, position, identifier, email, credential) {
        super(name, position, identifier, email, credential);
        this.credential = officeNumber;
    }

    promptPosition() {
        return "Manager";
    }
}

module.exports = Manager;
// const manager = new Manager(param1, param2);
// manager.printInfo();