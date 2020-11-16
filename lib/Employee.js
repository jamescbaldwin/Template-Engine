class Employee {
    constructor(name, identifier, email, credential) {
        this.name = name;
        this.identifier = identifier;
        this.email = email;
        this.credential = credential;
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

    promptCredential() {
        return this.credential;
    }
}

module.exports = Employee;