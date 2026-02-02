$(document).ready(function () {
  // Your code goes here
  function makeDot(top, left, elementID) {
    $("<div>")
      .appendTo(elementID)
      .css("height",15)
      .css("width", 15)
      .css("background-color", "white")
      .css("position", "absolute")
      .css("top", top)
      .css("left", left)
      .css("border-radius", 15);
  }

  function rollDie(dieID) {
    $(dieID).empty();
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    if (randomNum === 1) {
      makeDot(43, 43, dieID); // middle middle
    } else if (randomNum === 2) {
      makeDot(18, 18, dieID); // top left
      makeDot(68, 68, dieID); // bottom right
    } else if (randomNum === 3) {
      makeDot(17, 17, dieID); // top left
      makeDot(68, 68, dieID); // bottom right
      makeDot(43, 43, dieID); // middle middle
    } else if (randomNum === 4) {
      makeDot(68, 68, dieID); // bottom right
      makeDot(18, 18, dieID); // top left
      makeDot(18, 68, dieID); // bottom left
      makeDot(68, 18, dieID); // top right
    } else if (randomNum === 5) {
      makeDot(43, 43, dieID); // middle middle
      makeDot(68, 68, dieID); // bottom right
      makeDot(18, 18, dieID); // top left
      makeDot(18, 68, dieID); // bottom left
      makeDot(68, 18, dieID); // top right
    } else if (randomNum === 6) {
      makeDot(68, 18, dieID); // bottom left
      makeDot(43, 18, dieID); // middle left
      makeDot(18, 18, dieID); // top left
      makeDot(68, 68, dieID); // bottom right
      makeDot(43, 68, dieID); // middle right
      makeDot(18, 68, dieID); // top middle
    }
  }

  function handleClick() {
    rollDie("#die");
  }

  function handleClick2() {
    rollDie("#die2");
  }

   function handleClick3() {
    rollDie("#die");
    rollDie("#die2");
  }

  $("#die").on("click", handleClick);

  $("#die2").on("click", handleClick2);

  $("button").on("click", handleClick3)
});
