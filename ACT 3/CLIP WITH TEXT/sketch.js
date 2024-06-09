let img;
let textLayer;
function preload() {
  img=loadImage('beach.jpg');
}
function setup(){
  createCanvas(800,400);
  //a separate graphics buffer for the text mask
  textLayer=createGraphics(width,height);
  //the text on the text layer
  textLayer.fill(255);
  textLayer.textSize(200);
  textLayer.textAlign(CENTER,CENTER);
  textLayer.text('HELLO',width/2,height/2);
  //the textLayer as a mask for the image
  img.mask(textLayer);
}
function draw(){
  //different background color
  background(100,150,200);//blue background
  //the masked image on the canvas
  image(img,0,0,width,height);
  //draw the textLayer to show the text outline
  // image(textLayer, 0, 0, width, height);
}
