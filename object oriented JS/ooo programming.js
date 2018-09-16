//Namespacing
//Objects
//Objects Literals
//Construction Functions
//Inheritance


MyApp.users = {
    // properties
    existingUsers: [1,2,3],
    // methods
    renderUsersHTML: function() {
      //
    }
};


var dog = {
    // properties
    breed: 'Bulldog',
    // methods
    bark: function() {
      console.log('Woof!');
    },
  };
  // accessing methods and properties
  dog.bark();



  function User( name, email ) {
    // properties
    this.name = name;
    this.email = email;
    // methods
    this.sayHey = function() {
     console.log( 'Hey, I’m ' + this.name );
    };
  }
  // instantiating the object
  var steve = new User( 'Steve', 'steve@hotmail.com' );
  // accessing methods and properties
  steve.sayHey();



  function User( name, email ) {
    // properties
    this.name = name;
    this.email = email;
  }
  // methods
  User.prototype.sayHey = function() {
    console.log( 'Hey, I’m ' + this.name );
  }
  // instantiating the object
  var steve = new User( 'Steve', 'steve@hotmail.com' );
  // accessing methods and properties
  steve.sayHey();




  // the user object
function User( name, email, role ) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
  User.prototype.sayHey = function() {
    console.log( 'Hey, I’m an ' + role);
  }
  // the editor object inherits from user
  function Editor( name, email ) {
  }
  // To set up the prototype chain, we create a new object using
  // the User prototype and assign it to the Editor prototype
  Editor.prototype = Object.create( User.prototype );
  // Now we can access all the properties and methods
  // of User from the Editor object
  var david = new Editor( "David", "matthew@medium.com" );
  