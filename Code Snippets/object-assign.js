'use strict';

// Merge an object
let first = {name: 'Tony'};
let last = {lastName: 'Stark'};
let person = Object.assign(first, last);
console.log(person);
// {name: 'Tony', lastName: 'Stark'}
console.log(first);
// first = {name: 'Tony', lastName: 'Stark'} as the target also changed

// Merge multiple sources
let a = Object.assign({foo: 0}, {bar: 1}, {baz: 2});
console.log(a);
// {foo: 0, bar: 1, baz: 2}

// Merge and overwrite equal keys
let b = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
console.log(b);
// {foo: 2}

// Clone an object
let obj = {person: 'Thor Odinson'};
let clone = Object.assign({}, obj);
console.log(clone);
// {person: 'Thor Odinson'}