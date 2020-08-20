/**
	* ABOUT THIS FILE
	* This file gives an overview of the commands you can use to control the
	* colour of your shapes, it is also a starting place to play with code
	* that is a bit less complex than the code for the poster factory
**/

// setup happens once
function setup() {
	var canvas = createCanvas(400, 400);
	canvas.parent('sketch-holder');
}

// draw happens over and over
function draw() {
		background(254, 250, 223);
		//turn on to make a coloured blue background
		//background(0,0,255);
		/*
		 * BASIC COLOUR COMMANDS
		 * Below are listed some basic colour commands. To discover what they do uncomment them by removing the '//' or comment lines out  out by adding '//'. Colour commands affect all shapes drawn after they are called, and override previous commands i.e. if you call fill(0) to set the fill to black and then immediately on the next line fill(255) to set the fill to white, all shapes drawn in the following lines of code will have a white fill.

		 fill(g) sets the fill of all shapes after it is called to a greyscale. The value goes between 0 and 255. 0 being black and 255 being white
		 fill(r,g,b) sets the fill to a RGB (red, green, blue) colour. Each of the values goes between 0 and 255 and they combine to make a colour. 0 means none of the colour is added, and 255 means all of the colour is added. So fill(255,0,0) would set the fill to red
		 noFill() sets the shape to have no fill , so if the shape will be drawn with stroke only
		 noStroke() sets the shape to have no stroke, so the shape will be drawn with fill only
		 strokeWeight(w) sets the width of the stroke, 1 would be a 1 pixel wide stroke and 10 would be 10 pixels wide
		 background(g) sets the background of your sketch to a greyscale colour, always draw this before you draw your other shapes
		 background(r,g,b) sets the background to an RGB colour
		*/

		//draw a grey ellipse, I set the colour here otherwise the last colour commands I call at the end of the draw(){} code
		//will apply to this shape as the code inside draw(){}'s curley brackets loops continuously
		//if you comment out the fill, stroke and strokeWeight commands notice how the circle now draws with the fill and stroke settings that were last called at the end of draw(){} - which is navy stroke with no fill.
		//draw a grey ellipse with a 2 pixel black stroke on top left
		fill(150);
		stroke(0);
		strokeWeight(3);
		ellipse(100,100,100,100);

		//set the fill to blue, notice how the stroke commands we called just above are still in effect
		//draw a green ellipse with a 2 pixel black stroke on top left
		fill(0,200,155);
		ellipse(300,100,100,100);


		//draw a purple ellipse with no stroke on the bottom left
		fill(190, 133, 193);
		noStroke();
		ellipse(100, 300, 100,100);

		//draw an ellipse with a navy stroke of 10 pixels and no fill on the botton right
		//note these colours will apply to the first shapes you draw at start of your drawing the next time draw loops
		noFill();
		stroke(2, 15, 219);
		strokeWeight(10);
		ellipse(300, 300, 100,100);
}
