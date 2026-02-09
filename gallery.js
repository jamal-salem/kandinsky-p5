let cols = 3;
let rows = 2;
let cellW, cellH;

function setup() {
  createCanvas(900, 600);
  cellW = width / cols;
  cellH = height / rows;
  noLoop();
}

function draw() {
  background(245);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      push();
      translate(x * cellW + cellW / 2, y * cellH + cellH / 2);
      scale(0.35);
      drawMiniComposition();
      pop();
    }
  }
}

function drawMiniComposition() {
  let rot = random(360);
  rotate(rot);

  // outer circle
  noFill();
  stroke(30);
  strokeWeight(6);
  ellipse(0, 0, 200);

  // random circles
  noStroke();
  fill(random(255), random(255), random(255), 160);
  ellipse(random(-40, 40), random(-40, 40), random(40, 80));

  fill(random(255), random(255), random(255), 140);
  ellipse(random(-60, 60), random(-60, 60), random(30, 70));

  // lines
  stroke(20);
  strokeWeight(2);
  line(-80, -60, 80, 40);
  line(-60, 80, 60, -80);
}
