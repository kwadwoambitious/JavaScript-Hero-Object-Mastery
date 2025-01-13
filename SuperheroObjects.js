// 1. Object Creation Basics: Defines a superhero object with properties.
const superHero = {
  name: "Echo Blade",
  secretIdentity: "Rin Nakamura",
  powers: ["Teleportation", "Duplication", "Soundbending"],
  weaknesss: "Silence",
};

// 2. Methods and Functionality: Adds methods to the superhero object.
superHero.usePower = function (powerName) {
  // Checks if the power is in the hero's powers list and logs it.
  if (this.powers.includes(powerName)) {
    console.log(`${this.name} uses ${powerName}`);
  } else {
    console.log(`${powerName} cannot be found in ${this.name}'s powers`);
  }
};

// superHero.usePower("Duplicatio")

superHero.revealIdentity = function () {
  // Logs the secret identity of the hero.
  console.log(`The secret identity of ${this.name} is ${this.secretIdentity}`);
};
// superHero.revealIdentity()

// 3. Object Constructors: Defines a constructor function to create superhero objects.
function SuperHero(name, secretIdentity, powers, weakness) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
}

// 4. Prototypal Inheritance: Adds a method to the Superhero prototype to show weakness.
SuperHero.prototype.showWeakness = function () {
  console.log(`${this.name} weakness is ${this.weakness}`);
};

// 5. Object Iteration and Transformation: Iterates over arrays of superheroes and supervillains.
const superHeroes = [
  {
    name: "Shadow Hawk",
    secretIdentity: "Max Steele",
    powers: ["flight", "invisibility"],
    weaknesss: "light",
  },
  {
    name: "Storm Bringer",
    secretIdentity: "Lily Scott",
    powers: ["thunderbolt", "wind control"],
    weaknesss: "fire",
  },
];

const superVillains = [
  { name: "Green Goblin", strength: 5 },
  { name: "Thanos", strength: 8 },
  { name: "Venom", strength: 6 },
  { name: "Magneto", strength: 4 },
];

// // Logs all superhero names.
// superHeroes.forEach((hero) => console.log(hero.name));

// // Filters villains with strength > 5 and logs their names.
// const strongVillains = superVillains
//   .filter((villain) => villain.strength > 5)
//   .map((villain) => villain.name);
// console.log(names);
