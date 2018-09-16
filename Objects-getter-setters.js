
var obj = {
    _message : 'hello',
    set message(msg){
       this._message = msg;
    },
    get message(){
        return _message
    }
}

obj.message = 'hello';
obj.message



let person = {
    _name: 'Johnson Ogwuru',
    _age: 137,
    set age(newage){
      if(typeof newage === 'number'){
        this._age = newage;
        console.log('valid input')
      }
      else{
        return 'Invalid input';
      }
    },

    get age(){
      console.log(`${this._name} is ${this._age} old`);
      return this._age
    }

  };

  person.age = 'Thirty-nine';
  person.age = 39;
  console.log(person.age);


  var person = {
    firstName: 'Jimmy',
    lastName: 'Smith',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName (name) {
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
}

person.fullName = 'Jack Franklin';
console.log(person.firstName); // Jack
console.log(person.lastName) // Franklin



var person = {
    firstName: 'Jimmy',
    lastName: 'Smith'
};

Object.defineProperty(person, 'fullName', {
    get: function() {
        return firstName + ' ' + lastName;
    },
    set: function(name) {
        var words = name.split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
});

person.fullName = "hello tarun"
console.log(person.firstName);


Object.defineProperty(person, 'age', {
    value: 42,
    writable: true
});

