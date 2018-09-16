
/*

A new object is created
this is bound to the new object
Unless the function returns its own object, 
the call will return the constructed object

*/
var x = {};
var y = new Object();
function hello(){};
// new fn() => new object => this is bound 
var x = new hello();


function Person(name) {
    this.name = name
}
var person = new Person("Alex")
console.log(person.name) // Alex
// NEW Fn is doing 

function New(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    //var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
   // if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
     //   return ret;
   // }
    return res;
}



var obj = New(Person, 1, 2);