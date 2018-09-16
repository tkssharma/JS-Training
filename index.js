function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework("math", function() {
  alert("Finished my homework");
});

function mySandwich(param1, param2, callback) {
  alert("Started eating my sandwich.\n\nIt has: " + param1 + ", " + param2);
  callback();
}

mySandwich("ham", "cheese", function() {
  alert("Finished eating my sandwich.");
});




function mySandwich(param1, param2, callback) {
    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

mySandwich('ham', 'cheese', 'vegetables');