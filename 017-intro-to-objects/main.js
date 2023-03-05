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

const sideKicks = {
    batman: "Robin",
    greenHornet: "Kato",
    mario: "Luigi"
}

const superHero = {
    level: 1,
    name: "BatMan",
    secretIdentity: "Bruce Wayne",
    vehicle: "Batmobile",
    sideKick: sideKicks.batman,
    priveledgedWhiteMale: true,
    levelUp: function (level) {
        console.log(`Previous level: ${this.level}`)
        this.level++
    }
}

console.log(superHero.level)
superHero.levelUp(superHero.level)
console.log(`${superHero.name} has a sisekick named ${superHero.sideKick}. and he is currently at level ${superHero.level}`)
superHero.levelUp(superHero.level)
console.log(`${superHero.name} has a sisekick named ${superHero.sideKick}. and he is currently at level ${superHero.level}`)
