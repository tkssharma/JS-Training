var person = Object.create(null);

typeof(person) // Object
console.log(person) // Object with prototype object as null

// Set property to person object
person.name = "Virat";

console.log(person) // Object with name as property and prototype as null





prototypeObject = {
	fullName: function(){
		return this.firstName + " " + this.lastName		
	}
}
var person = Object.create(prototypeObject)

console.log(person) // Object with prototype object as prototypeObject and no properties

// Adding properties to the person object
person.firstName = "Virat";
person.lastName = "Kohli";

person.fullName() // Virat Kohli


/// Object.create 2nd argument — propertiesObject
/*
Data descriptors are

configurable
enumerable
value
writable
Access descriptors are

get
set
*/

prototypeObject = {
	fullName: function(){
		return this.firstName + " " + this.lastName		
	}
}

var person = Object.create(prototypeObject, {
      'firstName': {
	value: "Virat", 
	writable: true, 
	enumerable: true
      },
      'lastName': {
	value: "Kohli",
	writable: true,
	enumerable: true
      }
})

//************************************************ */
// Object inheritance 

var superHuman = {
    usePower: function () {
        console.log(this.superPower + "!");
    }
};

var banshee = Object.create(superHuman, {
    name: { value: "Silver Banshee" },
    superPower: { value: "sonic wail" }
});

// Outputs: "sonic wail!"
banshee.usePower();

var superHero = Object.create(superHuman, {
    allegiance: { value: "Good" },
    saveTheDay: {
        value: function () {
            console.log(this.name + " saved the day!");
        }
    }
});

var marvel = Object.create(superHero, {
    name: { value: "Captain Marvel" },
    superPower: { value: "magic" }
});

// Outputs: "Captain Marvel saved the day!"
marvel.saveTheDay();