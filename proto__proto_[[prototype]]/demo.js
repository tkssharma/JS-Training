//
//The prototype is a property on a constructor function that sets 
// what will become the __proto__ property on the constructed object.

// Q : [[prototype]] vs __proto__ vs prototype


//The chain of objects connected by the [[Prototype]] property is called the prototype chain

//  The __proto__ is an accessor property of the Object.prototype object.
//  It exposes the internal prototype linkage ( [[Prototype]]) of an object through 

function Foo(name) {
    this.name = name;
  }
  var b = new Foo('b');
  var a = new Foo('a');
  b.say = function() {
    console.log('Hi from ' + this.whoAmI());
  }
  console.log(a.__proto__ === Foo.prototype); // true
  console.log(a.__proto__ === b.__proto__); // true

  // a.__proto__ exposes the [[Prototype]] that points to the Foo.prototype



  function Foo(y) {
    this.y = y;
  }
  Foo.prototype.x = 10;
  Foo.prototype.calculate = function (z) {
    return this.x + this.y + z;
  };

  //Create instance b using the object Foo:
  
  var b = new Foo(20);
  b.calculate(30); // 60
  console.log(
    b.__proto__ === Foo.prototype, // true
    b.__proto__.calculate === Foo.prototype.calculate // true
    b.__proto__.calculate === b.calculate, // true
    Foo === b.constructor, // true
    Foo === Foo.prototype.constructor, // true
  );

/*

  Notes:
  [[Prototype]]An object specifies its prototype via the internal property
  
  __proto__ brings direct access to [[Prototype]] to the language(by speakingjs.com).
  
  prototype is the object that is used to build __proto__ when you create an object with new.
  
  prototype is not available on the instances themselves (or other objects), but only on the constructor functions.
  
  prototype is only available on functions since they are copied from Function and Object, but in anything else it is not. However, __proto__ is available everywhere.
  

  */
  
  ( new Foo ).__proto__ === Foo.prototype  //true
  ( new Foo ).prototype === undefined      //true