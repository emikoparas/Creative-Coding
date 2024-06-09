function setup(){
  createCanvas(400, 400);
  background(240);

  //variables for the pattern
  let rows=6;
  let cols=6;
  let spacing=width/(cols + 1);
  let rectSize=spacing*0.8;

  //loops to draw the pattern
  for(let y=0;y<rows;y++){
    for(let x=0;x<cols;x++){
      //position of rectangle
      let posX=(x+1)*spacing;
      let posY=(y+1)*spacing;

      //fill color based on alternating pattern
      let fillColor;
      if((x+y)%2===0){
        fillColor=color(148,0,211);//purple
      }else{
        fillColor=color(65,105,225);//blue
      }

      //fill color and draw rectangle
      fill(fillColor);
      rectMode(CENTER);
      rect(posX,posY,rectSize,rectSize);
    }
  }
}



