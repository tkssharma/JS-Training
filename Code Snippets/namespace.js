/* Global variables should be reserved for objects that have system-wide 
relevance and they should be named to avoid ambiguity and minimize the risk of naming collisions.
 In practice this means you should avoid creating global objects unless they are absolutely necessary
  */

var myApp = {};

myApp.id = 0;

myApp.next = function() {
  return myApp.id++;
};

myApp.reset = function() {
  myApp.id = 0;
};

var myApp = {
  id: 0,

  next: function() {
    return this.id++;
  },

  reset: function() {
    this.id = 0;
  }
};

var myApp = (function() {
    var id = 0;
    var next = function() {
      return id++;
    }
    var reset =  function() {
      id = 0;
    }
    return {
      next: next,
      reset: reset
     };
})();

console.log(myApp.id)

console.log(myApp.next())
console.log(myApp.next())
console.log(myApp.next())


function hello(){
   var a = 90;
   var sayhellotoMe = function(){
       return a;
   }
  return {
    sayhellotoMe : sayhellotoMe
  }
}

var obj = new hello();
console.log(obj.sayhellotoMe())