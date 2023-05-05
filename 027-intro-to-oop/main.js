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

const rio = new Person("Rio", "Waller", 39);
rio.greet();
const matthew = new Person();
matthew.greet();