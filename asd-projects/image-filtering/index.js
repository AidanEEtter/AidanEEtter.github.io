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
  applyFilter()
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(){
  for (var i = 0 ; i < image.length ; i++){
    for (var o = 0 ; o < image[i].length ; o++){
      var pixel = image[i][o]
      var pixelArray = rgbStringToArray(pixel)
      // This is where I’ll modify the color values later
      pixelArray[0] = 200 
      var updatedPixel = rgbArrayToString(pixelArray)
      image[i][j] = updatedPixel 
      
     // test loop use 
     // console.log(image[i][o])
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function


// TODO 6: Create the keepInBounds function


// TODO 4: Create reddify filter function


// TODO 7 & 8: Create more filter functions


// CHALLENGE code goes below here
