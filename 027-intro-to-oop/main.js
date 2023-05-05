class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName || "Matthew";
    this._lastName = lastName || "Spachy";
    this._age = age || 100;
  }
  getFirstName() { return this._firstName; }
  setFirstName(firstName) { this._firstName = firstName; }
  getLastName() { return this._lastName; }
  setLastName(lastName) { this._lastName = lastName; }
  getAge() { return this._age; }
  setAge(age) { this._age = age; }
  greet() {
    console.log(`Hello, my name is ${this.getFirstName()}. I am ${this.getAge()} years old.`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, classList) {
    super(firstName, lastName, age);
    this._classList = classList || [];
  }
  getClassList() { return this._classList; }
  setClassList(classList) { this._classList = classList; }
  greet() {
    console.log(`Hello, my name is ${this.getFirstName()}. I am ${this.getAge()} years old. I am taking ${this.getClassList().join(', ')} this semester.`);
  }
}

const rio = new Student("Rio", "Waller", 39, ["Math", "Science", "English"]);
rio.greet();
const matthew = new Person();
matthew.greet();