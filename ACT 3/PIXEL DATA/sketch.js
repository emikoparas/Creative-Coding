let img;
let pixelSize=100;//size of the pixel circles
function preload(){
  img=loadImage('beach.jpg');
}
function setup(){
  createCanvas(600,400);
  img.resize(width,height);
}
function draw(){
  background(255);
  image(img,0,0);
  //pixel color under mouse position
  let x=mouseX;
  let y=mouseY;
  let c=img.get(x,y);
  //pixel as circle
  noStroke();
  fill(c);
  ellipse(x,y,pixelSize,pixelSize);
}
