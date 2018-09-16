const people = [
  { 'name': 'John Doe', 'age': 16 },
  { 'name': 'John Doe', 'age': 30 },
  { 'name': 'John Doe', 'age': 40 }
 ];

const peopleBetween18And20 = (collection) => {
    const results = [];
   
    for (let i = 0; i < collection.length; i++) {
      const person = collection[i];
   
      if (person.age >= 18 && person.age <= 20) {
        results.push(person);
      }
    }
    return results;
  };

  //-----------------------------------------------//
  const people = [
    { 'name': 'John Doe', 'age': 16 },
    { 'name': 'John Doe', 'age': 16 },
    { 'name': 'John Doe', 'age': 16 }
   ];

   const coffeeLovers = ['John Doe', 'Liam Smith'];
   const ageAbove18 = function(person) {
     return  person.age >= 18; 
    }
   const addCoffeeLoverProperty = people
     .filter(function(person) {
       return person.age >= 18;
     })
     .map(function(person) {
       for (var i of coffeeLovers) {
         if (i === person.name) {
           return person;
         }
       }
     });

