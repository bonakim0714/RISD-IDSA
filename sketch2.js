function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#101010');
}

function draw() {

	background('#101010');
	if (mouseIsPressed) {
		fill(random(255),random(255),random(255),50)
	} else{
		fill('#101010')
		stroke(255,80);
	}
	ellipse(mouseX, mouseY, 120, 120);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight,);
}
