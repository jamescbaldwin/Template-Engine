class Employee {
    constructor(name, identifier, email) {
        this.name = name;
        this.identifier = identifier;
        this.email = email;
    }

    promptName() {
        return this.name;
    }

    promptIdentifier() {
        return this.identifier;
    }

    promptEmail() {
        return this.email;
    }

    promptPosition() {
        return "Employee";
    }
   
}

module.exports = Employee;