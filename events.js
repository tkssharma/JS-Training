/* The user clicking the mouse over a certain element or hovering the cursor over a certain element.
The user pressing a key on the keyboard.
The user resizing or closing the browser window.
A web page finishing loading.
A form being submitted.
A video being played, or paused, or finishing play.
An error occurring.
 */

var btn = document.querySelector("button");

btn.onclick = function() {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};

var btn = document.querySelector("button");

function bgChange() {
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = bgCha;

  function bgChange(e) {
    var rndCol =
      "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    e.target.style.backgroundColor = rndCol;
    console.log(e);
  }

  btn.addEventListener("click", bgChange);
  nge;
}
