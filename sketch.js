function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(245);

  // Diagonal background shapes
  noStroke();
  fill(255, 210, 0, 120);
  quad(0, 450, 150, 300, 600, 0, 600, 150);

  fill(0, 150, 160, 120);
  quad(0, 150, 450, 600, 600, 450, 150, 0);

  // Outer black circle
  noFill();
  stroke(0);
  strokeWeight(14);
  ellipse(300, 300, 420);

  // Core circles
  noStroke();
  fill(220, 30, 40, 170);
  ellipse(300, 300, 140);

  fill(120, 0, 140, 150);
  ellipse(350, 260, 80);

  fill(0, 150, 90, 150);
  ellipse(260, 340, 90);

  fill(255, 200, 0, 160);
  ellipse(220, 280, 50);

  fill(0, 120, 150, 160);
  ellipse(380, 330, 60);

  // Lines
  stroke(0);
  strokeWeight(2);
  line(200, 200, 400, 350);
  line(180, 280, 420, 240);
  line(240, 420, 360, 180);
  line(300, 160, 300, 440);
}
