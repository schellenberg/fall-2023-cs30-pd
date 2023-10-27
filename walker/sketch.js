// Walker OOP Demo

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 5;
    this.size = 5;

  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      //left
      this.x -= this.speed;
    }
    else {
      //right
      this.x += this.speed;
    }
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
}

let glen;
let john;
let tera_lynn;
let webster;

function setup() {
  createCanvas(windowWidth, windowHeight);
  glen = new Walker(width/2, height/2);

  john = new Walker(random(width), random(height));
  john.color = "violet";

  tera_lynn = new Walker(600, 200);
  tera_lynn.color = "blue";
  tera_lynn.size = 3;

  webster = new Walker(200, 700);
  webster.color = "green";
  webster.speed = 3;
}

function draw() {
  // background(220);
  glen.move();
  john.move();
  tera_lynn.move();
  webster.move();

  glen.display();
  john.display();
  tera_lynn.display();
  webster.display();
}
