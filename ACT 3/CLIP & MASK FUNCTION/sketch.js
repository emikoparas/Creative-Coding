let img;
let maskShape;
function preload(){
  img=loadImage('beach.jpg');
}
function setup(){
  createCanvas(600,400);
  img.resize(200,200);//image to fit the shape
  //mask shape (in this case, a circle)
  maskShape=createGraphics(width,height);
  maskShape.background(0);//background
  maskShape.fill(255);//fill
  maskShape.ellipse(width/2,height/2,200,200);//circle mask
  //apply mask to image
  img.mask(maskShape);
}
function draw(){
  background(220);//solid color background
  fill(255,0,0);//fill color for the shape
  ellipse(width/2,height/2,200,200);//a red circle
  image(img, width/2-img.width/2,height/2-img.height/2);
}

