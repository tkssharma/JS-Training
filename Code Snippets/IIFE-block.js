// Assignment of a function expression to a variable
var myFunction = function () { /* logic here */ };

// Assignment of a function expression to a property
var myObj = {
    myFunction: function () { /* logic here */ }
};

// Anything within the parentheses is part of an expression
(function () { /* logic here */ })();

// Anything after the not operator is part of an expression
!function () { /* logic here */ };

var fn = (function () {
    // logic here
    console.log(this)
})();

var fn = (function(x){
    // 
})(x)


(function (x) {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
})(x);

// ReferenceError: foo is not defined
console.log(foo);


var foo = "foo";

(function (innerFoo) {
    // Outputs: "foo"
    console.log(innerFoo);
})(foo);