const myArr = []

const myObj = {
   name: "Morty",
   age: 75,
   likes: 0,
   hobbies: ["joking", "running", "chess", "photography"],
   computer: {
    make: 'macbook',
    OS: 'macOS'
   },
   myGreeting: function(person) {
    console.log(this)
    return `${this.name} who loves ${this.hobbies[0]} says: What is Up, ${person}!`
   },
   increaseLikes: function() {
    this.likes++
   }
}

const brandNewObj = myObj
brandNewObj.increaseLikes()
// brandNewObj.name = "Bingo" - passed by referewnce because its an object.

const greeting = myObj.myGreeting('Hoss')
console.log(greeting)

console.log(myObj.computer.make.length)

let monkey = "monkey"
let monkey2 = monkey
console.log(monkey2) 
console.log(monkey)
monkey2 = "Not monkey"
console.log(monkey2) // changed
console.log(monkey) // not changed
monkey = "Still monkey"
console.log(monkey2) // changed?
console.log(monkey) // changed

for (key in myObj) {
    console.log(`${key} and value ${myObj[key]}`)
}

// const sideKicks = {
//     batman: "Robin",
//     greenHornet: "Kato",
//     mario: "Luigi"
// }

// const superHero = {
//     level: 1,
//     name: "BatMan",
//     secretIdentity: "Bruce Wayne",
//     vehicle: "Batmobile",
//     sideKick: sideKicks.batman,
//     priveledgedWhiteMale: true,
//     levelUp: function (level) {
//         console.log(`Previous level: ${this.level}`)
//         this.level++
//     }
// }

// console.log(superHero.level)
// superHero.levelUp(superHero.level)
// console.log(`${superHero.name} has a sisekick named ${superHero.sideKick}. and he is currently at level ${superHero.level}`)
// superHero.levelUp(superHero.level)
// console.log(`${superHero.name} has a sisekick named ${superHero.sideKick}. and he is currently at level ${superHero.level}`)
