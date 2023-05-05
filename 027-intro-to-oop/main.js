class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName || "Matthew";
    this.lastName = lastName || "Spachy";
    this.age = age || 100;
  }
  greet() {
    console.log(`Hello, my name is ${this.firstName}. I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, classList) {
    super(firstName, lastName, age);
    this.classList = classList || [];
  }
  greet() {
    console.log(`Hello, my name is ${this.firstName}. I am ${this.age} years old. I am taking ${this.classList.join(', ')} this semester.`);
  }
}

const rio = new Student("Rio", "Waller", 39, ["Math", "Science", "English"]);
rio.greet();
const matthew = new Person();
matthew.greet();