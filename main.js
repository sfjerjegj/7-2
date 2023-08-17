class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class User extends Person {
    constructor(name, surname, password) {
        super(name, surname);
        this._password = password;
    }

    printWithPassword(password) {
        if (password === this._password) {
            console.log(`Name: ${this.name}\nSurname: ${this.surname}`);
        } else {
            console.log("Access denied. Incorrect password.");
        }
    }
}

const user = new User("John", "Doe", "securepassword");

user.printWithPassword("wrongpassword");

user.printWithPassword("securepassword");
