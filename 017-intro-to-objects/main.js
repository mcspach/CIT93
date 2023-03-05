const myArr = []

const myObj = {
   name: "Morty",
   age: 75,
   hobbies: ["joking", "running", "chess", "photography"],
   computer: {
    make: 'macbook',
    OS: 'macOS'
   },
   myGreeting: function(person) {
    console.log(this)
    return `${this.name} who loves ${this.hobbies[0]} says: What is Up, ${person}!`
   }
}

const greeting = myObj.myGreeting('Hoss')
console.log(greeting)
