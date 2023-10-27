// Ball OOP Demo

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255), random(100,255)); //RGBA
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.radius = random(10, 50);
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    //left and right edges
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.dx *= -1;
    }

    //top and bottom edges
    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.dy *= -1;
    }
  }

  checkCollision(otherBall) {
    let distanceApart = dist(this.x, this.y, otherBall.x, otherBall.y);
    let radiiSum = this.radius + otherBall.radius;

    if (distanceApart < radiiSum) {
      //resolve collision...
      // this.color = "red";
      // otherBall.color = "red";

      //bounce the ball
      let tempDx = this.dx;
      let tempDy = this.dy;

      this.dx = otherBall.dx;
      this.dy = otherBall.dy;

      otherBall.dx = tempDx;
      otherBall.dy = tempDy;
    }
  }
}

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  ballArray.push(new Ball(width/2, height/2));
}

function draw() {
  background(220);

  // for (let i = 0; i < ballArray.length; i++) {
  //   ballArray[i].move();
  // }

  for (let theBall of ballArray) {
    theBall.move();
    for (let otherBall of ballArray) {
      if (otherBall !== theBall) {    //don't check for self collision
        theBall.checkCollision(otherBall);
      }
    }
    theBall.display();
  }

  
}

function mousePressed() {
  ballArray.push(new Ball(mouseX, mouseY));
}