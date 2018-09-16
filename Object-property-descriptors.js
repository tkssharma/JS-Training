
  
  const descriptors1 = Object.getOwnPropertyDescriptors(object1);
  console.log(descriptors1)
  
  console.log(descriptors1.property1.writable);
  // expected output: true
  
  console.log(descriptors1.property1.value);
  // expected output: 42

Object.defineProperty
Object.defineProperties
Object.assign
Object.create
Object.getOwnPropertyNames
Object.freeze
const person = {
    property1: 42,
    property2: 40
  };
console.log(Object.getOwnPropertyDescriptor(person, 'property1'))

Object.defineProperty(person, 'property3', {
    value: 48,
    writable: false,
    enumerable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(person, 'property3'))
person.property3 = 90;
console.log(Object.getOwnPropertyNames(person));
const descriptors1 = Object.getOwnPropertyDescriptors(person);
