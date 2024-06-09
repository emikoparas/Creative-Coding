let mic; 
let colours=[//color combinations 
  ["#ff4e50","#fc913a"],//red and orange
  ["#3f51b1","#5a55ae"],//indigo and purple
  ["#16a085","#f4d03f"],//green and yellow
  ["#3498db","#2c3e50"],//blue and dark Blue
  ["#8e44ad","#2c3e50"]//purple and dark Blue
]
function setup(){
	createCanvas(windowWidth,windowHeight);
	background(255);//background color to white
	mic=new p5.AudioIn();//audio from the mic 
	mic.start();
}
function draw(){
	let micLevel=mic.getLevel()*height*3;//adjust mic level
	let x=random(width);//randomize x position
	let y=random(height);//randomize y position
	let [col1,col2]=random(colours);//random color combination
	let col=lerpColor(color(col1),color(col2), 0.5);//blend colors
	fill(col);
	rect(x,y,micLevel,micLevel);//rectangle at random position
}