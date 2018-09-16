
Beginner's course to:
Get Started with Vue.js
Last time on the code challenge #12 we looked at problems involving the use of String Manipulation techniques. Yet to try your hands at the challenge? You can check it out here.

You can also see other fantastic submissions in the Spectrum Chat. In this post, we shall be solving these awesome challenges and you know the best part? Chris did really cool videos to better explain these challenge solutions!

The Challenge
Manipulating strings form the basis of programming in JavaScript and is important both in simple logical instances to even more complex instances. In this challenge solution, we employed the use of functions in JavaScript as well as array and string methods.

The Base Pen
A base pen was provided for you to easily get started with the project. The pen consists of JavaScript code which was basically empty function definitions with descriptions for you to fill in your code. Here is a sample of the base pen.




The Technique
As earlier stated, JavaScript functions, as well as JS string and array methods, were employed to solve this challenge. Also, things you would see in the solution are:

ES6 Syntax
Ternary Operators
Regular Expressions
Next, we shall go over each individual challenge. Whilst you see an overview of how it was solved, Chris provides an awesome and more detailed explanation in his video for each challenge.

Padded Number
https://www.youtube.com/watch?v=HGMiRv0HAss&list=PLrskRAE1nhTx1bGx9myzy4knXZtS_PIMr&index=1 In this challenge, we are required to pad individual numbers in an array such that single figures from 1-9 are padded with a preceding 0.

A padNumber() function is created, which utilizes a ternary operator to pad numbers less than 10. Subsequently, a .map() function is used to iterate over the array and apply padNumber to each number in the array.

// Pad given single numbers in array to look like "10", "05", "16", "02"
const nums = ['2', '4', '25', '10', '3'];
const padNumber = number => (+number < 10) ? `0${number}` : number;
const paddedNum = nums.map(padNumber);
console.log(paddedNum)
Camel to Title


The goal of this challenge is to convert a provided string from camelCase to Title Case.

In solving for this we took the following steps:

Split the string into an array.
Add a space before all uppercase letters using regex.
Convert all text to lowercase and trim for spaces.
Convert text array into a string and split back into an array.
Filter array for blanks.
Capitalize the first letter of each word.
Join the array into a string.
// Convert a given sentence from camelCase to Title Case
const camelCaseText = "the simplestThings in LIFE are alwaysThe best"

const clean          = text => text.toLowerCase().trim();
const capitalize     = text => `${text[0].toUpperCase()}${text.slice(1)}`;
const splitOnCapital = text => text.replace(/([A-Z])/, (match, capture) => ` ${capture}`);
const noBlanks       = text => !!text

const titleCase = text => {
  return text
    .split(" ")
    .map(splitOnCapital)
    .map(clean)
    .join(' ')
    .split(' ')
    .filter(noBlanks)
    .map(capitalize)
    .join(" ")
}

console.log(titleCase(camelCaseText))