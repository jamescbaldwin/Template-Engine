class Employee {
    constructor(name, position, email, identifier) {
        this.name = name;
        this.position = position;
        this.email = email;
        this.identifier = identifier;
    }

    promptName() {
        return this.name;
    }

    promptPosition() {
        return "Employee";
    }

    promptEmail() {
        return this.email;
    }

    promptIdentifier() {
        return this.identifier;
    }
}

module.exports = Employee;