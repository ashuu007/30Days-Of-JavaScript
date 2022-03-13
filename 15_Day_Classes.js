// Creating a class Person

class Person {

    // Creating a constructor
    constructor(firstName, secondName) {
        console.log(this);
        this.firstName = firstName;
        this.secondName = secondName;
        this.skills = ["HTML", "CSS", "JavaScript"];
    }

    // Declaring a Class Method (User defined function)
    getFullName() {
        const fullName = this.firstName + " " + this.secondName;
        return fullName;
    }

    // Getter Method
    get getFirstName() {
        return this.firstName;
    }

    // Setter Method
    set setSkills(skill) {
        this.skills.push(skill);
    }

    // Static Method - Called directly on Class not on instances like: Date.now()
    static staticMethod() {
        console.log("This is Static Method");
    }
}

// Creating object with name person of Class Person without Parameter
const person = new Person();
console.log(person);

// Creating object with name person of Class Person
const person1 = new Person("Asabeneh", "Yetayeh");
console.log(person1);
let fullName = person1.getFullName();
console.log(fullName);

// Using the geeter method
console.log(person1.getFirstName);

// Adding skill in Array using Setter Method
console.log(person1.skills);
person1.setSkills = "React";
console.log(person1.skills);

// Static method
// person1.staticMethod(); // This line will give an Error
Person.staticMethod();

// Inheritance

class Student extends Person {
    constructor(country) {
        this.country = country;
    }
}

let student = new Student("Ashish", "Vishwakarma");
console.log(student);