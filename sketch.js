/**
 * ==========================================
 * Kandinsky p5.js — Advanced Interactive Art
 * ==========================================
 * Features:
 * - Generative abstract composition
 * - Subtle animation
 * - Mouse interaction
 * - Sliders for control
 * - Save artwork as PNG
 * - Randomized compositions
 * - Dark / Light mode
 *
 * Author: Jamal Salem
 * ==========================================
 */

// ---------- Global State ----------
let t = 0;                     // time variable for animation
let mainSize = 140;            // core circle size
let rotationOffset = 0;        // random rotation
let darkMode = false;          // theme toggle

// UI elements
let sizeSlider, speedSlider;
let resetBtn, saveBtn, themeBtn;

// Color palettes
const lightPalette = {
  bg: [245, 245, 245],
  red: [220, 30, 40],
  yellow: [255, 200, 0],
  blue: [0, 120, 150],
  green: [0, 150, 90],
  purple: [120, 0, 140],
  black: [20, 20, 20],
};

const darkPalette = {
  bg: [20, 20, 25],
  red: [240, 80, 80],
  yellow: [240, 200, 80],
  blue: [80, 160, 200],
  green: [80, 180, 140],
  purple: [180, 120, 200],
  black: [230, 230, 230],
};

function currentPalette() {
  return darkMode ? darkPalette : lightPalette;
}

// ---------- Setup ----------
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  // UI: sliders
  sizeSlider = createSlider(80, 220, 140);
  sizeSlider.position(20, height + 20);

  speedSlider = createSlider(1, 10, 4);
  speedSlider.position(20, height + 50);

  // UI: buttons
  resetBtn = createButton("Randomize");
  resetBtn.position(220, height + 20);
  resetBtn.mousePressed(randomizeComposition);

  saveBtn = createButton("Save PNG");
  saveBtn.position(220, height + 50);
  saveBtn.mousePressed(saveArtwork);

  themeBtn = createButton("Dark / Light");
  themeBtn.position(340, height + 35);
  themeBtn.mousePressed(toggleTheme);

  // Initial random state
  randomizeComposition();
}

// ---------- Draw Loop ----------
function draw() {
  const palette = currentPalette();
  background(...palette.bg);

  t += speedSlider.value() * 0.1;
  mainSize = sizeSlider.value();

  push();
  translate(width / 2, height / 2);
  rotate(rotationOffset);
  drawComposition(palette);
  pop();
}

// ---------- Core Composition ----------
function drawComposition(palette) {
  noStroke();

  // Background planes
  fill(...palette.yellow, 120);
  quad(-300, 200, -80, 0, 300, -200, 300, -80);

  fill(...palette.blue, 120);
  quad(-300, -120, 160, 300, 300, 120, -120, -300);

  // Structural outer circle
  noFill();
  stroke(...palette.black);
  strokeWeight(14);
  ellipse(0, 0, 420);

  // Animated core circles
  noStroke();

  fill(...palette.red, 170);
  ellipse(sin(t) * 12, cos(t) * 12, mainSize);

  fill(...palette.purple, 150);
  ellipse(60 + sin(t * 0.8) * 8, -40 + cos(t * 0.8) * 8, 80);

  fill(...palette.green, 150);
  ellipse(-40 + sin(t * 1.2) * 10, 60 + cos(t * 1.2) * 10, 90);

  fill(...palette.yellow, 160);
  ellipse(-80, -20, 50);

  fill(...palette.blue, 160);
  ellipse(90, 70, 60);

  // Rhythm lines
  stroke(...palette.black);
  strokeWeight(2);
  line(-100, -100, 100, 50);
  line(-120, 20, 120, -40);
  line(-40, 120, 40, -120);
  line(0, -140, 0, 140);
}

// ---------- Interaction ----------
function mouseMoved() {
  mainSize = map(mouseX, 0, width, 100, 200);
}

// ---------- Utilities ----------
function randomizeComposition() {
  rotationOffset = random(0, 360);
  mainSize = random(100, 180);
  t = random(0, 360);
}

function saveArtwork() {
  saveCanvas("kandinsky_art", "png");
}

function toggleTheme() {
  darkMode = !darkMode;
}
