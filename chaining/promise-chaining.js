new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function(result) {
    // (**)

    alert(result); // 1
    return result * 2;
  })
  .then(function(result) {
    // (***)

    alert(result); // 2
    return result * 2;
  })
  .then(function(result) {
    alert(result); // 4
    return result * 2;
  });
// ES6 
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});


// Make a request for user.json
fetch('/article/promise-chaining/user.json')
// Load it as json
.then(response => response.json())
// Make a request to github
.then(user => fetch(`https://api.github.com/users/${user.name}`))
// Load the response as json
.then(response => response.json())
// Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
.then(githubUser => {
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  setTimeout(() => img.remove(), 3000); // (*)
});