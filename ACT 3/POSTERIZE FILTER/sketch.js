let img;
let levels = 2;//color levels
function preload(){
  img=loadImage('beach.jpg');
}
function setup(){
  createCanvas(600,400);
  img.resize(width,height);
  posterizeImage(img,levels);
}
function posterizeImage(img,levels){
  img.loadPixels();
  for(let i= 0;i<img.pixels.length;i+=4){
    let r=img.pixels[i];
    let g=img.pixels[i+1];
    let b=img.pixels[i+2];
    //colors to a smaller number of levels
    r=round(map(r,0,255,0,levels-1))*round(255/(levels-1));
    g=round(map(g,0,255,0,levels-1))*round(255/(levels-1));
    b=round(map(b,0,255,0,levels-1))*round(255/(levels-1));
    img.pixels[i]=r;
    img.pixels[i+1]=g;
    img.pixels[i+2]=b;
  }
  img.updatePixels();
}
function draw(){
  background(255);
  image(img,0,0);
}
