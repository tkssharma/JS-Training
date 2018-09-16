


Rest parameters
From the definition we saw earlier, rest parameters collect all the remaining elements into an array. This allows us to do really neat function definitions. Let's see how we put them to use.

function add(x, y) {
  return x + y;
}

add(1, 2, 3, 4, 5) // returns 3
The above function call returns 3, this is because in Javascript it is possible to call a function with any number of arguments. However, only the fist two arguments will be counted.

With rest parameters we can gather any number of arguments into an array and do what we want with them. So we can re-write the add function like this:

function add(...args) {
  let result = 0;

  for (let arg of args) result += arg;

  return result
}

add(1) // returns 1
add(1,2) // returns 3
add(1, 2, 3, 4, 5) // returns 15


function xyz(x, y, ...z) {
    console.log(x, ' ', y); // hey hello
  
    console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
    console.log(z[0]); // wassup
    console.log(z.length); // 4
  }
  
  xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")



  const arr = ["Joy", "Wangari", "Warugu"];
  const newArr = ["joykare", ...arr];

  const arr = [1, 2, 3];
  const arr2 = [...arr];