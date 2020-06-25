var w;

function setup() {
  createCanvas(600, 400);
  w = new Walker();
}

function draw() {
  background(220);
  w.walk();
  w.update();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  update = function() {
    fill(0);
    stroke(255);
    rect(this.x, this.y, 10, 10);
  }

  walk = function() {
    var dir = Math.round(Math.random()*3);
 
    if (dir === 0) {
      this.x += 0.5;
    } else if (dir === 1) {
      this.x -= 0.5;
    } else if (dir === 2) {
      this.y += 0.5;
    } else {
      this.y -= 0.5;
    }

    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height -1);
  }
}