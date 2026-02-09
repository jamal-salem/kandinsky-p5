function setup() {
  createCanvas(600, 600);
  background(240);

  noFill();
  strokeWeight(18);
  stroke(0);
  ellipse(300, 300, 420, 420); // outer black circle

  // Background diagonal shapes
  noStroke();
  fill(255, 215, 0, 120);
  quad(0, 450, 150, 300, 600, 0, 600, 150);

  fill(0, 150, 150, 120);
  quad(0, 150, 450, 600, 600, 450, 150, 0);

  // Colored circles
  drawCircle(300, 300, 140, color(255, 0, 0, 160));
  drawCircle(260, 260, 90, color(255, 100, 100, 140));
  drawCircle(350, 260, 80, color(150, 0, 150, 140));
  drawCircle(300, 360, 110, color(100, 150, 0, 140));
  drawCircle(220, 330, 50, color(255, 200, 0, 160));
  drawCircle(370, 330, 60, color(0, 150, 150, 160));

  // Lines
  stroke(0);
  strokeWeight(2);
  line(200, 200, 400, 350);
  line(180, 280, 420, 240);
  line(240, 420, 360, 180);
  line(300, 160, 300, 440);
}

function drawCircle(x, y, d, c) {
  fill(c);
  noStroke();
  ellipse(x, y, d, d);
}
