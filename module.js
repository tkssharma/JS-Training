// Person Module
var Person = function ( name ) {
    // Do some stuff here    
    // do ur own stuff 
    var x =90;
    var getData = function(){};
    this.y = 80;
    this.sayHello = function(){
        getData();
    }
}
// Create a person named Foo
var Foo = new Person('Foo');
// Create a person named Bar
var Bar = new Person('Bar')


// Person Module
var Person = (function ( name ) {
    // Private variables and functions that
    // ..cannot be accessed outside this Module
    var age     = 0,
        isAlive = true,
        name    = name || 'Un-named';
    
    var growOld = function () { 
        age++; 
    }

    var die = function () {
        isAlive = false;
        console.log(isAlive);
    }
    return {
        die : die ,
        growOld : growOld
    }
})();
Person.die()

//----------------------------------------------------//


// Person Module
var Person = function ( name ) {
    
    // Private variables and functions
    // All the properties and methods contained by 
    // ..this object being returned will be public
    // ..and will be accessible in the global scope.
    return {
        passTime: function() {

        },

        speak : function () {

        }
    }
}