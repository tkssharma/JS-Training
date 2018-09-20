var y = {};

// This is the way we would normally create an object, 
// but note that another way to accomplish this is with the object constructor: 

var y = new Object();
console.log(Object.getPrototypeOf(y));


var y = [];
console.log(y.__proto__);
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
x instanceof Object // true



var a  = {x :60};

var b = Object.create(a);
b.y = 90;
console.log(b.__proto__.__proto__ === a .__proto__)


var c = Object.create(b);
c.z =80;
console.log(c.__proto__.__proto__.__proto__ === a .__proto__)

console.log(c.z)
console.log(c.x)
console.log(c.y)


