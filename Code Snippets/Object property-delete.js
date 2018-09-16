

var Employee = {
    age: 28,
    name: 'abc',
    designation: 'developer'
  }
  Object.getOwnPropertyDescriptor(Employee, 'age')
  console.log(delete Employee.name);   // returns true
  console.log(delete Employee.age);    // returns true
  
  // When trying to delete a property that does 
  // not exist, true is returned 
  console.log(delete Employee.salary); // returns true


  var Employee = {};
  Object.defineProperty(Employee, 'name', {configurable: false});
  
  console.log(delete Employee.name);  // returns false




  var nameOther = 'XYZ';
  
  // We can access this global property using:
  Object.getOwnPropertyDescriptor(window, 'nameOther');  
  
  // output: Object {value: "XYZ", 
  //                  writable: true, 
  //                  enumerable: true,
  //                  configurable: false}
  // Since "nameOther" is added using with the
  // var keyword, it is marked as "non-configurable"
  
  delete nameOther;   // return false



  var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
  delete trees[3];
  console.log(trees)