
//-----------------------------------------------------------------------------//


var p1 = new Object(); // 'new Object()' create and return empty object -> {}
var p2 = new Object(); // 'new Object()' create and return empty object -> {}

console.log(p1); // empty object -> {}

console.log(p2); // empty object -> {}

// p1 and p2 are pointers to different objects
console.log(p1.__proto__); // false

console.log(p1.prototype); // undefined

// empty object which is in fact Object.prototype
console.log(p1.__proto__); // {}

// empty object to which p1.__proto__ points
console.log(Object.prototype); // {}

console.log(p1.__proto__ === Object.prototype); // true

// null, which is in fact Object.prototype.__proto__
console.log(p1.__proto__.__proto__); // null

console.log(Object.prototype.__proto__); // null















//-------------------------------------------------------------------------//

// new Object ({})  // part 2


const person = {
    name: 'no name',
    lastName: 'no lastName',
    age: -1
}

// 'new Object(person)' return 'person', which is pointer to the object ->
//  -> { name: 'no name', lastName: 'no lastName', age: -1 }
var p1 = new Object(person);

// 'new Object(person)' return 'person', which is pointer to the object ->
//  -> { name: 'no name', lastName: 'no lastName', age: -1 }
var p2 = new Object(person);

// person, p1 and p2 are pointers to the same object
console.log(p1 === p2); // true
console.log(p1 === person); // true
console.log(p2 === person); // true

p1.name = 'John'; // change 'name' by 'p1'
p2.lastName = 'Doe'; // change 'lastName' by 'p2'
person.age = 25; // change 'age' by 'person'

console.log(person);











//------------------------------------------------------------//


var person = {
    name: 'no name',
    lastName: 'no lastName',
    age: -1,
    getInfo: function getName() {
       return `${this.name} ${this.lastName}, ${this.age}!`;
}
}

var p1 = Object.create(person);
var p2 = Object.create(person);

// 'p1.__proto__' and 'p2.__proto__' points to
// the same object -> 'person'
// { name: 'no name', lastName: 'no lastName', age: -1, getInfo: [Function: getName] }
console.log(p1.__proto__.__proto__);
console.log(p2.__proto__.__proto__);
console.log(p1.__proto__ === p2.__proto__); // true

console.log(person.__proto__); // {}(which is the Object.prototype)

// 'person', 'p1' and 'p2' are different
console.log(p1 === person); // false
console.log(p1 === p2); // false
console.log(p2 === person); // false

p1.name = 'bla bla';
p2.lastName ='hello';

console.log(person);







//------------------------------------------------------------------//





// function Object(){}
// Object.prototype => {}

Object.create(Object.prototype); // part 4

// 'Object.create(Object.prototype)' :
// 1. create and return empty object -> {}.
// 2. add to 'p1' property '__proto__', which is link to 'Object.prototype'
var p1 = Object.create(Object.prototype);

// 'Object.create(Object.prototype)' :
// 1. create and return empty object -> {}.
// 2. add to 'p2' property '__proto__', which is link to 'Object.prototype'
var p2 = Object.create(Object.prototype);

console.log(p1); // {}

console.log(p2); // {}

console.log(p1 === p2); // false

console.log(p1.prototype); // undefined

console.log(p2.prototype); // undefined

console.log(p1.__proto__ === Object.prototype); // true

console.log(p2.__proto__ === Object.prototype); // true