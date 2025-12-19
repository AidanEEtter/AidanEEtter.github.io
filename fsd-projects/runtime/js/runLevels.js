var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createSawBlade(width , hight){

      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

      sawBladeHitZone.x = width;
      sawBladeHitZone.y = hight;
      game.addGameItem(sawBladeHitZone);

      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = hitZoneSize * -1
      obstacleImage.y = hitZoneSize * -1
    }

    createSawBlade(900, 300)
    createSawBlade(900, 200)

    function createEnemy(x, y) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);

    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);

    enemy.velocityX = -1;
    enemy.rotationalVelocity = -10;

    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-50)
    };

    enemy.onProjectileCollision = function () {
      game.increaseScore(100);
      enemy.fadeOut();
    } 
  }
    createEnemy(600, groundY - 50);
    createEnemy(500, groundY - 50);
    createEnemy(700, groundY - 50);

    function createReward(x,y){
    var reward = game.createGameItem("reward", 25);
    var coin = draw.rect(50, 50, "gold");
    coin.x = -25;
    coin.y = -25;
    reward.addChild(coin);

    reward.x = x;
    reward.y = y;
    game.addGameItem(coin);
    }

    createReward(120, 234)
    
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
