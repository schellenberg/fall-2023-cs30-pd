// Fireworks OOP Demo

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background("black");
  for (let i = theFireworks.length - 1; i >= 0; i--) {
    theFireworks[i].update();
    theFireworks[i].display();
    if (theFireworks[i].isDead()) {
      theFireworks.splice(i, 1);
    }
  }
}

function mousePressed() {
  for (let i = 0; i < 50; i++) {
    let theFirework = new Firework(mouseX, mouseY);
    theFireworks.push(theFirework);
  }
}

class Firework {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.alpha = 255;
  }

  isDead() {
    return this.alpha <= 0;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    //make more transparent every frame
    this.alpha -= 1;
  }

  display() {
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.radius*2);
  }
}