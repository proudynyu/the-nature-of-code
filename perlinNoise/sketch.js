var xoff_1 = 0;
var xoff_2 = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  var x = map(noise(xoff_1), 0, 1, 0, width);
  var y = map(noise(xoff_2), 0, 1, 0, width);

  xoff_1 += 0.01;
  xoff_2 -= 0.01;

  ellipse(x, y, 24, 24);
}