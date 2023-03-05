const myArr = []

const myObj = {
   name: "Morty",
   age: 75,
   hobbies: ["coding", "running", "chess", "photography"],
   computer: {
    make: 'macbook',
    OS: 'macOS'
   },
   myGreeting: function(person) {
    return `What is Up, ${person}!`
   }
}

const greeting = myObj.myGreeting('Ponchie')
console.log(greeting)
