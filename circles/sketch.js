// Recursive Circles

let theColors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "pink", "white", "brown", "grey"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let depth = 4;
  fractalCircle(width/2, width, depth);
}

function fractalCircle(x, diameter, depth) {
  fill(theColors[depth]);
  circle(x, height/2, diameter);

  if (depth > 0) {
    //left side
    fractalCircle(x - diameter/4, diameter/2, depth-1);

    //right side
    fractalCircle(x + diameter/4, diameter/2, depth-1);
  }
}