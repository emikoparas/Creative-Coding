function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(255, 255, 153); //set background color to pleasant yellow
  
  //the car body
  stroke(0); //black outline
  fill(255); //white color
  rect(200, 200, 200, 50); //main body
  rect(250, 150, 100, 50); //top part
  
  //the wheels
  fill(255); //white color
  ellipse(250, 270, 50, 50); //left wheel
  ellipse(350, 270, 50, 50); //right wheel
  
  //the spoiler attached to the back of the main body
  rect(180, 180, 40, 20); // Spoiler
}