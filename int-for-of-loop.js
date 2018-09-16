
function* foo(){
    yield 1;
    yield 2;
}
  var x= foo();
  console.log(x);
  console.log(x.next())
  console.log(x.next())
  console.log(x.next())
  
  console.log(foo())
  for (let o of foo()) {
    console.log(o);
  }



  let iterable = [10, 20, 30];
  
  for (let value of iterable) {
    value += 1;
    console.log(value);
  }
  // 11
  // 21
  // 31


  let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);
  
  for (let entry of iterable) {
    console.log(entry);
  }