// Recursive Circles

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fractalCircle(width/2, width);
}

function fractalCircle(x, diameter) {
  circle(x, height/2, diameter);

  if (diameter > 50) {
    //left side
    fractalCircle(x - diameter/4, diameter/2);

    //right side
    fractalCircle(x + diameter/4, diameter/2);
  }
}