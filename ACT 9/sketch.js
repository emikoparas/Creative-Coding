var table;
var barHeight=35;//the height of each bar
var barPadding=5;//the padding between bars
function preload(){
    table=loadTable("My_Data.csv","csv");
}
function setup(){
    createCanvas(600,400);
    noStroke();
    drawBars();
}
function drawBars(){
    background(255);//white background
    push();
    textSize(18);
    textStyle(BOLD);
    text('Profit/Income Chances Invest',50,50);
    textSize(14);
    textStyle(NORMAL);
    translate(50,100);//the starting position
    for(var i=0;i<table.getColumnCount();i++){
        var data=table.getColumn(i).map(parseFloat);//string values to float
        var temperature=data[1];
        //temperature is a valid number
        if(!isNaN(temperature)){
            var rectLength=map(temperature,98.6,101.2,50,250);//length to fit within canvas
            //pleasant color scheme
            var color1=color(255,204,0);//yellow
            var color2=color(0,153,255);//blue
            var lerpAm=map(temperature,98.6,101.2,0,1);
            var lerpCol=lerpColor(color1,color2,lerpAm);
            fill(lerpCol);//interpolated color
            //the bar
            rect(0,i*(barHeight+barPadding),rectLength,barHeight);
            fill(255);//text color to white
            textAlign(RIGHT);
            text(temperature.toFixed(1),rectLength-10,i*(barHeight+barPadding)+barHeight/2+5);//display temperature value centered
            fill(0);//text color back to black
            textAlign(LEFT);
            text(data[0],rectLength+10,i*(barHeight+barPadding)+barHeight/2+5); //display product names
        }
    }
    pop();
}
