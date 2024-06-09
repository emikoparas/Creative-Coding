function setup(){createCanvas(400, 400);}

function draw(){
  background(60, 0, 80);//background color to dark purple

  //the body outline
  stroke(255);//outline color to white
  strokeWeight(2);//outline weight
  fill(140,70,200);//body color to light purple
  ellipse(200,280,100,180);//body ellipse

  //the head outline
  fill(120,50,170);//head color to darker purple
  ellipse(200,140,130,160);//Head ellipse

  //the eyes
  fill(255);//eye color to white
  ellipse(170,140,40,40); //left eye
  ellipse(230,140,40,40); //right eye

  //the pupils
  fill(0);//pupil color to black
  ellipse(170,140,30,30);//left pupil
  ellipse(230,140,30,30);//right pupil

  //the teeth
  strokeWeight(2);//stroke weight for teeth
  line(180,180,185,190);//left tooth 1
  line(185,190,190,180);//left tooth 2
  line(210,180,215,190);//right tooth 1
  line(215,190,220,180);//right tooth 2

  //the horns
  strokeWeight(5);//stroke weight for horns
  stroke(255);//horn color to white
  line(170,100,120,50);//left horn
  line(230,100,280,50);//right horn
  
  //circles at the ends of the horns
  fill(255);//circle color to white
  ellipse(120, 50, 15, 15);//left horn end
  ellipse(280, 50, 15, 15);//right horn end

  //the arms
  strokeWeight(4);//stroke weight for arms
  fill(140,70,200);//arm color to light purple
  ellipse(120,270,30,70);//left arm
  ellipse(280,270,30,70);//right arm

  //the legs
  fill(140,70,200);//leg color to light purple
  ellipse(180,370,40,40);//left leg
  ellipse(220,370,40,40);//right leg

  //the feet
  fill(140,70,200);//feet color to light purple
  ellipse(180,380,20,10);//left foot
  ellipse(220,380,20,10);//right foot

  //the antenna
  strokeWeight(3);//stroke weight for antenna
  stroke(255);//antenna color to white
  line(200,80,200,120);//antenna
}


