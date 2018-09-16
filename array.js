const items = Array.from({
    "0": "a",
    "1": "b",
    "2": "c",
    "length": 3
}, c => c.toUpperCase());
// items = ["A", "B", "C"];
console.log(items);
const els = Array.from(document.querySelectorAll("p"));
const args = Array.from(arguments);


var a = [1, 2, 3],
b = [4, 5, 6],
aAndB = a.concat(b);
// aAndB = [1, 2, 3, 4, 5, 6]
// ... => []
const a = [1, 2, 3],
b = [4, 5, 6],
aAndB = [...a, ...b];
console.log(aAndB)

// array copy 
var a = [1, 2, 3],
b = a.map(function(i) { return i; });

var a = [1, 2, 3],
b = a.slice(0);

const a = [1, 2, 3],
  b = [...a];