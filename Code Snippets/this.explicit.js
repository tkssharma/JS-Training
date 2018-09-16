function greet() {
    console.log( this.name );
}

var person = {
    name: 'Alex'
};

greet.call( person, 'hello');

function greet() {
    console.log( this.name );
}

var person = {
    name: 'Alex'
};

greet.apply( person, [args]); // Alex


var sayMyName = function () {
    console.log('My name is ' + this.name);
  };

  var jake = {
    name: 'Jake'
  }

  var sayMyName = sayMyName.bind(jake);
  sayMyName(); // 'My name is Jake'


  var MyObject = function (){
    this.name = 'MyObjectName';
    this.myProperty = 'property';
  };
  
  MyObject.prototype.doStuff = function (action) {
    console.log(this.name + ' is ' + action + '!');
  }
  
  var obj = new MyObject();
  
  setTimeout(obj.doStuff.bind(obj), 1000, 'awesome');