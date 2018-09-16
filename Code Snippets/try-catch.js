/*  try — code to try that may produce errors
catch — code that will handle any errors
throw — a keyword you can use to throw your own custom errors
finally — code that will run after a try/catch block regardless of the outcome
  */

try {
  throw new Error("Yeah... Sorry");
} catch (e) {
  console.log(e);
}

try {
  // Code that we will 'try'
} catch (error) {
  // Code that handles any potential errors
} finally {
  // Code that will run at the end
}

try {
  let hello = prompt("Type hello");
  if (hello !== "hello") {
    throw new Error("Oops, you didn't type hello");
  }
} catch (e) {
  alert(e.message);
} finally {
  alert("thanks for playing!");
}
