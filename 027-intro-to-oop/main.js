class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName || "Matthew";
    this._lastName = lastName || "Spachy";
    this._age = age || 100;
  }
  getfirstName() { return this._firstName; }
  setfirstName(firstName) { this._firstName = firstName; }
  greet() {
    console.log(`Hello, my name is ${this.getfirstName()}. I am ${this._age} years old.`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, classList) {
    super(firstName, lastName, age);
    this._classList = classList || [];
  }
  greet() {
    console.log(`Hello, my name is ${this._firstName}. I am ${this._age} years old. I am taking ${this._classList.join(', ')} this semester.`);
  }
}

const rio = new Student("Rio", "Waller", 39, ["Math", "Science", "English"]);
rio.greet();
const matthew = new Person();
matthew.greet();