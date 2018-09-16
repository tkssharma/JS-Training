var y = {};

// This is the way we would normally create an object, but note that another way to accomplish this is with the object constructor: 

var y = new Object();
console.log(Object.getPrototypeOf(y));


var y = [];
y.__proto__;
// [constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, …]


y.__proto__.__proto__;
//Output
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …}


y.__proto__ === Array.prototype;            // true
y.__proto__.__proto__ === Object.prototype; // true
// We can also use the isPrototypeOf() method to accomplish this.

Array.prototype.isPrototypeOf(y);      // true
Object.prototype.isPrototypeOf(Array); // true
y instanceof Array; // true
