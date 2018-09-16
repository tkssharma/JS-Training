/*
By default, “this” refers to global object which is global in case of NodeJS and window object in case of browser
When a method is called as a property of object, then “this” refers to the parent object
When a function is called with “new” operator then “this” refers to the newly created instance.
*/


function foo () {
	console.log("Simple function call");
	console.log(this === window); 
}

foo();	//prints true on console
console.log(this === window) //Prints true on console.

//-----------//

(function(){
    console.log("Anonymous function invocation");
    // this global => window 
	console.log(this === window);
})();
// Prints true on console

//-----------//

function foo () {
	'use strict';
	console.log("Simple function call")
    console.log(this === window); 
    // false 
}

foo();

//-----------//

function Person(fn, ln) {
	this.first_name = fn;
	this.last_name = ln;

	this.displayName = function() {
		console.log(`Name: ${this.first_name} ${this.last_name}`);
	}
}

let person = new Person("John", "Reed");
person.displayName();  // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName();  // Prints Name: Paul Adams

//-----------//

function Person(fn, ln) {
	this.first_name = fn;
	this.last_name = ln;

	this.displayName = function() {
		console.log(`Name: ${this.first_name} ${this.last_name}`);
	}
}

let person = new Person("John", "Reed");
person.displayName(); // Prints Name: John Reed

let person2 = new Person("Paul", "Adams");
person2.displayName(); // Prints Name: Paul Adams

person.displayName.call(person2); // Here we are setting value of this to be person2 object
//Prints Name: Paul Adams

//-----------//

function foo () {
	'use strict';
	console.log("Simple function call")
	console.log(this === window); 
}

let user = {
	count: 10,
	foo: foo,
	foo1: function() {
		console.log(this === window);
	}
}

user.foo()  // Prints false because now “this” refers to user object instead of global object.

let fun1 = user.foo1;
fun1() // Prints true as this method is invoked as a simple function.

user.foo1()  // Prints false on console as foo1 is invoked as a object’s method