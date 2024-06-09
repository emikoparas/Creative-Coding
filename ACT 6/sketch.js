function setup(){
  createCanvas(600,400);
  background(240);
}
function draw(){
//draw loop needed for interactive art
}
function mouseDragged(){
  //colors representing different elements of nature
  let skyColor=color(135,206,235);//blue
  let grassColor=color(50,205,50);//green
  let sunColor=color(255,215,0);//yellow
  let mountainColor=color(139,69,19);//brown
  
  //stroke color based on position
  let strokeColor;
  if(mouseY<height*0.3){
    strokeColor=skyColor;//30% of canvas height: sky
  }else if(mouseY>height*0.7){
    strokeColor=grassColor;//70% of canvas height: grass
  }else if(mouseX>width*0.8){
    strokeColor=sunColor;//20% of canvas width: sun
  }else{
    strokeColor=mountainColor;//everywhere else: mountains
  }
  //stroke color
  stroke(strokeColor);
  //shapes at mouse position
  let size=random(20,50);
  ellipse(mouseX,mouseY,size,size);
}
