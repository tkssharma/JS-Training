function Plant() {
  this.country = "Mexico";
  this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor = function() {
  console.log("I am a " + this.name + " and my color is " + this.color);
};

// Add the amIOrganic method to the Plant prototype property
Plant.prototype.amIOrganic = function() {
  if (this.isOrganic) console.log("I am organic, Baby!");
};

function Fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
Fruit.prototype = new Plant();

// Creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit("Banana", "Yellow");

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana


// Object.prototype Properties Inherited by all Objects
//These inherited properties and methods are constructor, hasOwnProperty (), isPrototypeOf (), propertyIsEnumerable (), toLocaleString (), toString (), and valueOf (). ECMAScript 5 also adds 4 accessor methods to Object.prototype.
// Here is another example of the prototype chain:

function People () {
this.superstar = "Michael Jackson";
}
// Define "athlete" property on the People prototype so that "athlete" is accessible by all objects that use the People () constructor.
People.prototype.athlete = "Tiger Woods";

var famousPerson = new People ();
famousPerson.superstar = "Steve Jobs";

// The search for superstar will first look for the superstar property on the famousPerson object, and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain. 
console.log (famousPerson.superstar); // Steve Jobs

// Note that in ECMAScript 5 you can set a property to read only, and in that case you cannot overwrite it as we just did.

// This will show the property from the famousPerson prototype (People.prototype), since the athlete property was not defined on the famousPerson object itself.
console.log (famousPerson.athlete); // Tiger Woods

// In this example, the search proceeds up the prototype chain and find the toString method on Object.prototype, from which the Fruit object inherited—all objects ultimately inherits from Object.prototype as we have noted before.
console.log (famousPerson.toString()); // [object Object]



// Initialize constructor functions
function Hero(name, level) {
    this.name = name;
    this.level = level;
  }
  
  function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
  
    this.weapon = weapon;
  }
  
  function Healer(name, level, spell) {
    Hero.call(this, name, level);
  
    this.spell = spell;
  }
  
  // Link prototypes and add prototype methods
  Warrior.prototype = Object.create(Hero.prototype);
  Healer.prototype = Object.create(Hero.prototype);
  
  Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
  }
  
  Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
  }
  
  Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
  }
  
  // Initialize individual character instances
  const hero1 = new Warrior('Bjorn', 1, 'axe');
  const hero2 = new Healer('Kanin', 1, 'cure');