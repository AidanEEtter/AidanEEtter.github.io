/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH = $("#board").width();
  const BOARD_HEIGHT = $("#board").height();

  // Movement values

  var KEYCODE = {
    UPLEFT: 87,
    UPRIGHT: 38,
    DOWNLEFT: 83,
    DOWNRIGHT: 40,
  };

  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);

 

  // Game Item Objects
  function gameItem(id, speedX, speedY) {
    var gameItem = {};
    gameItem.id = id;
    gameItem.x = parseFloat($(id).css("left"));
    gameItem.y = parseFloat($(id).css("top"));
    gameItem.speedX = speedX;
    gameItem.speedY = speedY;
    gameItem.width = $(id).width();
    gameItem.height = $(id).height();
    return gameItem;
  }
  var ball = gameItem("#ball", 0, 0);
  var leftPaddle = gameItem("#leftPaddle", 0, 0);
  var rightPaddle = gameItem("#rightPaddle", 0, 0);
  function startBall() {
    var randomNumX = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedX = randomNumX;
    console.log(ball.speedX)
    var randomNumY = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = randomNumY;
     console.log(ball.speedY)
  }

  function wallCollision(id) {
    if (id.x > BOARD_WIDTH || id.x < 0) {
      
    }
  }

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
  startBall();

  // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    moveObject(ball);
    moveObject(leftPaddle);
    moveObject(rightPaddle)
  }

  /* 
  Called in response to events.
  */
  
  function handleKeyDown(event) {
    if (event.which === KEYCODE.UPLEFT) {
      //console.log("W pressed");
      leftPaddle.speedY = -10
    } else if (event.which === KEYCODE.DOWNLEFT) {
      //console.log("S pressed");
      leftPaddle.speedY = 10
    } else if (event.which === KEYCODE.UPRIGHT) {
      //console.log("UP pressed");
      rightPaddle.speedY = -10
    } else if (event.which === KEYCODE.DOWNRIGHT) {
      //console.log("DOWN pressed");
      rightPaddle.speedY = 10
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEYCODE.UPLEFT) {
      //console.log("W let go");
      leftPaddle.speedY = 0
    } else if (event.which === KEYCODE.DOWNLEFT) {
      //console.log("S let go");
      leftPaddle.speedY = 0
    } else if (event.which === KEYCODE.UPRIGHT) {
      //console.log("UP let go");
      rightPaddle.speedY = 0
    } else if (event.which === KEYCODE.DOWNRIGHT) {
      //console.log("DOWN let go");
      rightPaddle.speedY = 0
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function moveObject(obj) {
    obj.x += obj.speedX;
    obj.y += obj.speedY;
    $(obj.id).css("left", obj.x);
    $(obj.id).css("top", obj.y);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
