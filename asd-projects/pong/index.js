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

  var scoreLeft = 0
  var scoreRight = 0

  // initialize score display
  $("#player1Score").text(scoreLeft)
  $("#player2Score").text(scoreRight)

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
    ball.x = BOARD_WIDTH / 2
    ball.y = BOARD_HEIGHT / 2
  }
  function startPaddle() {
    leftPaddle.x = 0
    rightPaddle.x = BOARD_WIDTH - rightPaddle.width
  }

  function wallCollision(id) {
    if (id.y + id.height > BOARD_HEIGHT) {
     if (id === ball) {
      id.speedY = id.speedY * -1
     }
     else {
      id.y -= id.speedY
     }
    }
    else if (id.y < 10) {
     if (id === ball) {
      id.speedY = id.speedY * -1
     }
     else {
      id.y -= id.speedY
     }
    }
  }

  function doCollide(obj1, obj2) {
    if (obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y) {
      return true
    }
      else {
        return false
      }
  }


  function ballScore() {
    if (ball.x < 0){
      scoreRight += 1
      $("#player2Score").text(scoreRight)
      startBall()
    }
    else if (ball.x > BOARD_WIDTH - ball.width) {
      scoreLeft += 1
      $("#player1Score").text(scoreLeft)
      startBall()
    }
  }

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
  startBall();
  startPaddle()

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
    moveObject(rightPaddle);
    wallCollision(leftPaddle)
    wallCollision(rightPaddle)
    wallCollision(ball)
    ballScore()
    if (doCollide(ball, leftPaddle) === true) {
      ball.speedX = ball.speedX * -1
    }
    if (doCollide(ball, rightPaddle) === true) {
      ball.speedX = ball.speedX * -1
    }
    if (scoreLeft === 10 || scoreRight === 10){
      endGame()
    }
    }
    
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
    }
      if (event.which === KEYCODE.UPRIGHT) {
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
