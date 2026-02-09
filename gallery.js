function setup() {
  createCanvas(600, 600);
  background(245);
  noLoop();
}

function draw() {
  for (let i = 0; i < 6; i++) {
    push();
    translate(random(width), random(height));
    scale(0.3);
    drawMini();
    pop();
  }
}

function drawMini() {
  stroke(0);
  noFill();
  ellipse(0, 0, 200);

  fill(random(255), random(255), random(255), 150);
  noStroke();
  ellipse(random(-30, 30), random(-30, 30), random(40, 80));
}
