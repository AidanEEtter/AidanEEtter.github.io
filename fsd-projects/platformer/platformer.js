$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(0, 150, 200, 10, "#462BE5");
    createPlatform(250, 280, 100, 10, "#462BE5");
    createPlatform(180, 400, 40, 10, "#462BE5");
    createPlatform(50, 505, 80, 10, "#462BE5");
    createPlatform(250, 640, 10, 100, "#462BE5");
    createPlatform(400, 505, 1000, 10, "#462BE5");
    createPlatform(400, 150, 40, 10, "#462BE5");
    createPlatform(600, 200, 40, 10, "#462BE5");
    createPlatform(850, 200, 66, 10, "#462BE5", 800, 900, 5);
    createPlatform(1225, 300, 200, 10, "#462BE5")
    createPlatform(400, 505, 10, 150, "#462BE5")
    createPlatform(500, 605, 10, 135, "#462BE5")
    createPlatform(600, 505, 10, 150, "#462BE5")
    createPlatform(700, 605, 10, 135, "#462BE5")
    createPlatform(800, 505, 10, 150, "#462BE5")
    createPlatform(900, 605, 10, 135, "#462BE5")
    createPlatform(1000, 505, 10, 135, "#462BE5")
    createPlatform(1100, 605, 10, 135, "#462BE5")
    createPlatform(1200, 505, 10, 150, "#462BE5")
  

    // TODO 3 - Create Collectables
    createCollectable("great", 1300, 630, .5)
    createCollectable("great2", 1300, 230, .5)
    createCollectable("great3", 400, 300, 1, 1, 400, 1380, 10)

    // TODO 4 - Create Cannons
    createCannon("left", 200, 5000)
    createCannon("right", 700, 12000, 250, 200)
    createCannon("right", 500, 1500)
   
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
