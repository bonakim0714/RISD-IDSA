function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#101010');
}
var style = 0;

function draw() {
  fill(random(10),random(255),random(50),50);
  stroke(255,90);


	// if (mouseIsPressed) {
	// 	fill(random(255),random(255),random(255),50)
	// } else{
	// 	fill('#101010')
	// 	stroke(255,80);
	// }

  if(style == 0){
  } else if (style == 1){
     fill('#101010');
   }

       ellipse(mouseX, mouseY, 120, 120);
}

function mouseClicked(){
  if(style == 0){
    style = 1;
  } else if (style == 1){
    style = 0; //makes it not so colorful
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight,[noRedraw]);
}
