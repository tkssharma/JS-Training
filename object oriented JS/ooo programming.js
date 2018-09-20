//Namespacing
//Objects
//Objects Literals
//Construction Functions
//Inheritance
var MyApp = {};
var MyApp = (function(){
  // code

})();
MyApp.users = {
  // properties
  existingUsers: [1, 2, 3],
  // methods
  renderUsersHTML: function() {
    //
  }
};

var dog = {
  // properties
  breed: "Bulldog",
  // methods
  bark: function() {
    console.log("Woof!");
  }
};
// accessing methods and properties
dog.bark();

// object literal 
var objectLiteralPerson = {
  // setting property
  name: "Bob Benson",
  // declare function
  greet() {
    // 'this' refers to current object
    console.log("Hello, I'm " + this.name);
  }
};

//---------------------///---------------------/
// factory function
function createPerson(name){
  return {
   name: name,
   greet: function() {console.log("Hello, I'm" + this.name);}
 }
}
var person = createPerson("Jack Johnson");

//---------------------///---------------------/

function Person(name) {
  // 1    
  this.name = name;
  this.greet = function() {
      console.log("Hello, I'm " + this.name);
  }
}
//2
var person = new Person("Jack Johnson");

//---------------------///---------------------/

function User(name, email) {
  // properties
  this.name = name;
  this.email = email;
  // methods
  this.sayHey = function() {
    console.log("Hey, I’m " + this.name);
  };
}
// instantiating the object
var steve = new User("Steve", "steve@hotmail.com");
// accessing methods and properties
steve.sayHey();


//---------------------///---------------------/


function User(name, email) {
  // properties
  this.name = name;
  this.email = email;
}
// methods
User.prototype.sayHey = function() {
  console.log("Hey, I’m " + this.name);
};
// instantiating the object
var steve = new User("Steve", "steve@hotmail.com");
// accessing methods and properties
steve.sayHey();

// the user object
function User(name, email, role) {
  this.name = name;
  this.email = email;
  this.role = role;
}
User.prototype.sayHey = function() {
  console.log("Hey, I’m an " + role);
};
// the editor object inherits from user
function Editor(name, email) {}
// To set up the prototype chain, we create a new object using
// the User prototype and assign it to the Editor prototype
Editor.prototype = Object.create(User.prototype);
//Editor.prototype = new User('name'...);

// Now we can access all the properties and methods
// of User from the Editor object
var david = new Editor("David", "matthew@medium.com");

//---------------------///---------------------/


class Person {
  constructor(name){
      this.name = name;
  }
 greet() {
  console.log("Hello, I'm " + this.name);
  }
}

// To implement inheritance 
class Athlete extends Person {
 
// You have to call super() before you invoke "this"
  constructor(name,sport) {
      super(name)
      this.sport = sport
  }
}


/*
Object Oriented Javascript - Object Literals

Object Oriented Javascript - Updating Properties

Object Oriented Javascript - Method Chaining

Object Oriented Javascript - function Inheritance

Object Oriented Javascript - function object using constructor new

Object Oriented Javascript - function prototype and object proto

Object Oriented Javascript - prototype chain and proto chain

Object Oriented Javascript - Constructors (under the hood)

Object Oriented Javascript - Prototype

Object Oriented Javascript - Prototype Inheritance
*/