// To play with the code you can change the
// number of rounds value below, at the moment
// it will loop through the code and draw dots and lines 25 times
// make this number smaller or larger to see what happens
var numberOfRounds = 25;


var dots = [];
var lines = [];
var lastDotY;
var w =450;
var h =600;
var theBackgroundColor;
var dotColour1;
var dotColour2;
var dotColour3;

function setup() {
	// you can also change the background colour
	// defined in RGB Information
	// currently set to white or 255 RED, 255 BLUE, 255 GREEN
	// notice colour is spelt color (US Spelling) in our code.
	theBackgroundColor = color(255,255,255);

	// and you could also change the dot colours
	dotColour1 = color(44,160,83);
	dotColour2 = color(0,0,0);
	dotColour3 = color(255,125,3);

	// the line colours are currently "hard coded"
	// if you really want to try something out and feel a bit more confident with code
	// try and change the line colour
	// This code is a lot more complex then we expect you to understand at this stage
	// so don't worry if you don't understand any of it.

	var canvas = createCanvas(w, h);
	//this is not so important for you, just leave as it is!
	canvas.parent('sketch-holder');
	for (var i=0; i<numberOfRounds; i++) {
    drawDot();
    drawDot();
    drawLine();
  }
}


function draw() {
	background(theBackgroundColor);
  for (var i=0; i<dots.length; i++) {
    dots[i].display();
  }
  for (var i=0; i<lines.length; i++) {
    lines[i].display();
  }
}

function mousePressed() {
   dots = [];
   lines = [];
   for (var i=0; i<numberOfRounds; i++) {
    drawDot();
    drawDot();
    drawLine();
  }

}

function drawDot () {
  var x=0;
  var y=0;
  if (lastDotY > 1) {
    x = random(width);
    y = random(-150, 150)+lastDotY;
    if (y < 0) {
      y=y+random(100);
    }
    else if (y > height) {
      y = y -random(100);
    }
  }
  else {
    x = random(width);
    y = random(height);
  }
  lastDotY = y;
	dots.push(new Dot(x,y));
}

function drawLine() {
  var l;
  if (lines.length < 1) {
    var r1 = int(random(0, dots.length));
    var r2 = int(random(0, dots.length));
    l = new LineDotDot(dots[r1], dots[r2]);
  }
  else {
    var r1 = int(random(0, dots.length));
    var r2 = int(random(0, lines.length));
    l = new LineDotLine(dots[r1], lines[r2]);
  }
	lines.push(l);
}

function Dot (px, py) {
    this.x = px;
    this.y = py;
    this.rn = random(1);
		this.size=0;
		this.c = color(0,0,0);

		if (this.rn<0.75) {
      this.size = 10;
      var r = random(1);
      if (r<0.3) {
        this.c = dotColour1;
      } else {
        this.c = dotColour2;
      }

    } else {
      this.size=25;
      this.c = dotColour3;
    }
    noStroke();


  this.display = function () {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

function LineDotDot (d1,d2) {
    this.x1 = d1.x;
    this.x2 = d2.x;
    this.y1 = d1.y;
    this.y2 = d2.y;
		this.w=0;
		this.s = color(0,0,0);

  this.display = function () {
    stroke(this.s);
    strokeWeight(this.w);
    noFill();
    line(this.x1, this.y1, this.x2, this.y2);
  }
}

function LineDotLine (d1,d2) {
    this.x1 = d1.x;
    this.y1 = d1.y;
    var r = random(1);
    this.x2 = lerp(d2.x1, d2.x2, r);
    this.y2 = lerp(d2.y1, d2.y2, r);
		this.w=0;
		this.s = color(0,0,0);
    var rn = random(1);
    if (rn<0.75) {
      this.w=1;
      this.s = color(103, 15, 43);
    }
    else {
      this.w=4;
      r = random(1);
      if (r<0.5) {
        this.s = color(209, 168, 234);
      }
      else {
        this.s = color(68, 93, 211);
      }
    }
    //println(w);


  this.display = function () {
    stroke(this.s);
    strokeWeight(this.w);
    noFill();
    line(this.x1, this.y1, this.x2, this.y2);
  }
}
