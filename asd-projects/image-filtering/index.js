// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
   applyFilter(noMoreGreen);
   applyFilterNoBackground(increaseGreenByBlue);
  applyFilter(increaseBluebyLot);
  
   // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction){
  for (var i = 0 ; i < image.length ; i++){
    for (var o = 0 ; o < image[i].length ; o++){
      var pixel = image[i][o]
      var pixelArray = rgbStringToArray(pixel)
      // This is where I’ll modify the color values later
      filterFunction(pixelArray)
      var updatedPixel = rgbArrayToString(pixelArray)
      image[i][o] = updatedPixel 
      
     // test loop use 
     // console.log(image[i][o])
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function

  function applyFilterNoBackground(filterFunction){
    var backgroundColor = image[0][0];
    for (var i = 0 ; i < image.length ; i++){
      for (var o = 0 ; o < image[i].length ; o++){
        if (image[i][o] !== backgroundColor){
          var pixel = image[i][o]
          var pixelArray = rgbStringToArray(pixel)
          filterFunction(pixelArray)
          var updatedPixel = rgbArrayToString(pixelArray)
          image[i][o] = updatedPixel
        }
     }
    }
  }

// TODO 6: Create the keepInBounds function

  function keepInBounds(num){
    if (num < 0) {
      return 0
    }
    else if (num > 255) {
      return 255
    }
    else {
      return num
    }
  }

// TODO 4: Create reddify filter function

  function reddify(array){
    array[RED] = 200
  }

// TODO 7 & 8: Create more filter functions

//create decreaseBlue
  function decreaseBlue(array){
    array[BLUE] -= 50
    array[BLUE] = keepInBounds(array[BLUE])
  }

//create increaseGreenByBlue
  function increaseGreenByBlue(array){
    array[GREEN] += array[BLUE]
    array[GREEN] = keepInBounds(array[GREEN])
  }

// CHALLENGE code goes below here

//create increaseBluebyLot
  function increaseBluebyLot(array){
    array[BLUE] += 100
    array[BLUE] = keepInBounds(array[BLUE])
  }

//create noMoreRed
  function noMoreRed(array){
    array[RED] = 0
    array[RED] = keepInBounds(array[RED])
  }

//create noMoreGreen
  function noMoreGreen(array){
    array[GREEN] = 0
    array[GREEN] = keepInBounds(array[GREEN])
  }