/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
 
 // Movement values
 
  var KEYCODE = {
  UPLEFT: 87,
  UPRIGHT: 38,
  DOWNLEFT: 83,
  DOWNRIGHT: 40
};

$(document).on("keydown", handleKeyDown);
$(document).on("keyup", handleKeyUp);

function handleKeyDown(event) {
  if (event.which === KEYCODE.UPLEFT) {
    console.log("W pressed");
  }
  else if (event.which === KEYCODE.DOWNLEFT){
    console.log("S pressed")
  }
  else if (event.which === KEYCODE.UPRIGHT) {
    console.log("UP pressed");
  }
  else if (event.which === KEYCODE.DOWNRIGHT){
    console.log("DOWN pressed")
  }
}

function handleKeyUp(event) {
  if (event.which === KEYCODE.UPLEFT) {
    console.log("W let go");
  }
  else if (event.which === KEYCODE.DOWNLEFT){
    console.log("S let go")
  }
  else if (event.which === KEYCODE.UPRIGHT) {
    console.log("UP let go");
  }
  else if (event.which === KEYCODE.DOWNRIGHT){
    console.log("DOWN let go")
  }
}


  
  // Game Item Objects
function gameItem(id, x, y, width, height, speedX, speedY){
  var gameItem = {};
  gameItem.id = id;
  gameItem.x = x;
  gameItem.y = y;
  gameItem.speedX = speedX;
  gameItem.speedY = speedY;
  gameItem.width = width;
  gameItem.height = height
  return gameItem
}
function startBall() {
  var randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  gameItem(ball, parseFloat($("#board").css("left")), parseFloat($("board").css("top")), randomNum, randomNum)
}



  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);    
                         // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {

  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
