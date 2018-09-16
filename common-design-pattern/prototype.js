var TeslaModelS = function() {
    this.numWheels    = 4;
    this.manufacturer = 'Tesla';
    this.make         = 'Model S';
  }
  
  TeslaModelS.prototype.go = function() {
    // Rotate wheels
  }
  
  TeslaModelS.prototype.stop = function() {
    // Apply brake pads
  }


Starter
Guides
Coding
Courses
Written
Posts
Really
Cool Stuff

Search scotchy scotch...

#
react
#
angular
#
vue
#
node.js
#
javascript
#
laravel
#
php
#
css
#
api
#
authentication
#
editors
#
code-challenge
#
html5
#
testing

4 JavaScript Design Patterns You Should Know
Devan Patel
(@devanp92)
July 10, 2016
103 Comments
505,044 Views
4 JavaScript Design Patterns You Should Know
#javascript
416
Beginner's course to:
Get Started with Vue.js
The Scotchmas Day 2 giveaway can be found at the end of this article.

Every developer strives to write maintainable, readable, and reusable code. Code structuring becomes more important as applications become larger. Design patterns prove crucial to solving this challenge - providing an organization structure for common issues in a particular circumstance.

Related Course: Getting Started with JavaScript for Web Development
JavaScript web developers frequently interact with design patterns, even unknowingly, when creating applications.

Although there is a diverse list of design patterns used in certain circumstances, JavaScript developers tend to use some patterns customarily more than others.


In this post, I want to discuss these common patterns to expose ways to improve your programming repertoire and dive deeper into the JavaScript internals.

The design patterns in question include the following:

Module
Prototype
Observer
Singleton
Each pattern consists of many properties, though, I will emphasize the following key points:

Context: Where/under what circumstances is the pattern used?
Problem: What are we trying to solve?
Solution: How does using this pattern solve our proposed problem?
Implementation: What does the implementation look like?
Module Design Pattern
JavaScript modules are the most prevalently used design patterns for keeping particular pieces of code independent of other components. This provides loose coupling to support well-structured code.

For those that are familiar with object-oriented languages, modules are JavaScript "classes". One of the many advantages of classes is encapsulation - protecting states and behaviors from being accessed from other classes. The module pattern allows for public and private (plus the lesser-know protected and privileged) access levels.

Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes - that is, a closure that protect variables and methods (however, it will return an object instead of a function). This is what it looks like:


(function() {

    // declare private variables and/or functions

    return {
      // declare public variables and/or functions
    }

})();

Here we instantiate the private variables and/or functions before returning our object that we want to return. Code outside of our closure is unable to access these private variables since it is not in the same scope. Let's take a more concrete implementation:


var HTMLChanger = (function() {
  var contents = 'contents'

  var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  }

  return {
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined
Notice that callChangeHTML binds to the returned object and can be referenced within the HTMLChanger namespace. However, when outside the module, contents are unable to be referenced.

Revealing Module Pattern
A variation of the module pattern is called the Revealing Module Pattern. The purpose is to maintain encapsulation and reveal certain variables and methods returned in an object literal. The direct implementation looks like this:


var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined


var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype.go = function() {
  // Rotate wheels
}

TeslaModelS.prototype.stop = function() {
  // Apply brake pads
}



var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype = {
  go: function() {
    // Rotate wheels
  },
  stop: function() {
    // Apply brake pads
  }
}