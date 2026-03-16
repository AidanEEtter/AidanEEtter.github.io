/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects

  //create walker
  var walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
    id: "#walker",
  };

  //create friend
  var friend = {
    x: 10,
    y: 10,
    speedX: 0,
    speedY: 0,
    id: "#friend",
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */

  // magic number key
  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    W: 87,
    A: 65,
    S: 83,
    D: 68,
    SPACE: 32,
  };

  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem(walker);
    redrawGameItem(walker);
    wallCollision(walker);
    repositionGameItem(friend);
    redrawGameItem(friend);
    wallCollision(friend);
  }

  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */

  // detect what direction pressed
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("left pressed");
      walker.speedX = -5;
    } else if (event.which === KEY.UP) {
      console.log("up pressed");
      walker.speedY = -5;
    } else if (event.which === KEY.RIGHT) {
      console.log("right pressed");
      walker.speedX = 5;
    } else if (event.which === KEY.DOWN) {
      console.log("down pressed");
      walker.speedY = 5;
    } else if (event.which === KEY.W) {
      console.log("W pressed");
      friend.speedY = -5;
    } else if (event.which === KEY.A) {
      console.log("A pressed");
      friend.speedX = -5;
    } else if (event.which === KEY.S) {
      console.log("S pressed");
      friend.speedY = 5;
    } else if (event.which === KEY.D) {
      console.log("D pressed");
      friend.speedX = 5;
    }
    // Check if objct updates correctly
    else if (event.which === KEY.SPACE) {
      console.log("Walker position:", walker.x, walker.y);
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {
      console.log("left unpressed");
      walker.speedX = 0;
    } else if (event.which === KEY.UP) {
      console.log("up unpressed");
      walker.speedY = 0;
    } else if (event.which === KEY.RIGHT) {
      console.log("right unpressed");
      walker.speedX = 0;
    } else if (event.which === KEY.DOWN) {
      console.log("down unpressed");
      walker.speedY = 0;
    } else if (event.which === KEY.W) {
      console.log("W unpressed");
      friend.speedY = 0;
    } else if (event.which === KEY.A) {
      console.log("A unpressed");
      friend.speedX = 0;
    } else if (event.which === KEY.S) {
      console.log("S unpressed");
      friend.speedY = 0;
    } else if (event.which === KEY.D) {
      console.log("D unpressed");
      friend.speedX = 0;
    }
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

  // move object
  function repositionGameItem(object) {
    object.x += object.speedX;
    object.y += object.speedY;
  }

  // display moved object on screen
  function redrawGameItem(gameObject) {
    $(gameObject.id).css("left", gameObject.x);
    $(gameObject.id).css("top", gameObject.y);
  }

  // stop object from going out of bounds
  function wallCollision(object) {
    if (object.x + 50 >= $("#board").width() || object.x <= 0) {
      object.x -= object.speedX;
    }
    if (object.y + 50 >= $("#board").height() || object.y <= 0) {
      object.y -= object.speedY;
    }
  }
}
