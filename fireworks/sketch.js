// Fireworks OOP Demo

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);
  for (let i = 0; i < theFireworks.length; i++) {
    theFireworks[i].update();
    theFireworks[i].display();
  }
}

function mousePressed() {
  let theFirework = new Firework(mouseX, mouseY);
  theFireworks.push(theFirework);
}

class Firework {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.color = "red";
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }

  display() {
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }
}