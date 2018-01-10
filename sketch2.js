function setup() {
  createCanvas(1700, 900);
  background('#101010')
}

function draw() {
  if (mouseIsPressed) {
    fill(random(255),random(255),random(255),50)
  } else {
    fill('#101010');
    stroke(255,80);
  }
  ellipse(mouseX, mouseY, 130,130);
}
