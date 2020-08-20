//how wide each block of the grid is in pixels
//you can change the size of the blocks and the number or rows and columns to add
//or reduce complexity
//how wide a block in the grid is
var blockSize = 20;
//how many columns in the grid
var columns = 30;
//how many rows in the grid
var rows = 15;
//these are the three colours that are used in the composition
//color for screen is represented in red, green and blue
//0 would mean no red and 255 would mean maximum red
//try playing around with the colour values and seeing what happens
//CHANGE RGB COLOR VALUES BETWEEN 0 and 255
//To find rgb colours type 'RGB color slider' into Google Search, this comes up with a Google RBG slider tool
//Edit these below inside the start of setup()
var colorOne;
var colorTwo;
var colorThree;

//the probability of each of the above colours of being selected
//must add up to 100
//CHANGE THE VALUES BELOW AND SEE WHAT HAPPENS, REMEMBER THEY MUST ADD UP TO 100
var colorOneProbability = 15;
var colorTwoProbability = 15;
var colorThreeProbability = 70;

function setup() {
	colorOne = color(0, 0, 0);
	colorTwo = color(255, 100, 50);
	colorThree = color(50, 90, 200);
	var sketchWidth = blockSize * columns;
  var sketchHeight = blockSize * rows;
	var canvas = createCanvas(sketchWidth, sketchHeight);
	//this is not so important for you, just leave as it is!
	canvas.parent('sketch-holder');
	noFill();
}






function draw() {
	background(255);
  for (var x=0; x<width; x+=blockSize) {
    for (var y=0; y<height; y+=blockSize) {
      push();
      translate(x, y);
      noStroke();
      fill(0);
      var rn = random(1);
      if (rn<0.5) {
        ellipse(x, y, 10, 10);
      }
      noFill();
      stroke(selectColour());
      var r = ceil(random(0, 4));
      if (r==1) {
        arc(blockSize, 0, blockSize*2, blockSize*2, HALF_PI, PI);
      } else if (r==2) {
        arc(0, 0, blockSize*2, blockSize*2, 0, HALF_PI);
      } else if (r==3) {
        arc(blockSize, blockSize, blockSize*2, blockSize*2, PI, PI+HALF_PI);
      } else if (r==4) {
        arc(0, blockSize, blockSize*2, blockSize*2, PI+HALF_PI, TWO_PI);
      }
      pop();
    }
  }
  noLoop();
}

function selectColour () {
  var r = random(1);
  if (r< (colorOneProbability/100)) {
    return colorOne;
  } else if (r>(colorOneProbability+colorTwoProbability)/100) {
    return colorThree;
  } else {
    return colorTwo;
  }
}


function mousePressed () {
  redraw();
}
