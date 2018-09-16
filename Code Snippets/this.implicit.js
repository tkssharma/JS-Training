
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.fullname = function() {
  console.log(this.firstname + ' ' + this.lastname);
}

var zubaer = new Person('Zubaer', 'Ahammed');
console.log(zubaer);

var MyObject = function (){
    this.name = 'MyObjectName';
    this.myProperty = 'property';
  };
 
  MyObject.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');
  }
 
  var obj = new MyObject();
  console.log(obj);
 
  obj.doStuff('awesome'); // prints 'MyObjectName is awesome!'