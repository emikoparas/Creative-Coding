let snake;
let foods=[];
let obstacles=[];
let score=0;
let gameOver=false;
let gameStarted=false;
let speed=4;//adjust game speed here
function setup(){
  createCanvas(600,400);
  frameRate(30);//lower frame rate for smoother gameplay
  resetGame();
}
function draw(){
  background(245,245,220);//beige background
  if (!gameStarted){
    displayStartScreen();
  } else if (!gameOver){
    handleInput();
    snake.update();
    snake.display();
    handleFoods();
    handleObstacles();
    displayScore();
  } else {
    displayGameOver();
  }
}
function handleInput(){
  if(keyIsDown(LEFT_ARROW)){
    snake.setDirection(-speed,0);//speed for smoother movement
  }else if(keyIsDown(RIGHT_ARROW)){
    snake.setDirection(speed,0);
  }else if(keyIsDown(UP_ARROW)){
    snake.setDirection(0,-speed);
  }else if(keyIsDown(DOWN_ARROW)){
    snake.setDirection(0,speed);
  }
}

function keyPressed(){
  if(!gameStarted&&keyCode===ENTER){
    startGame();
  }else if(gameOver&&keyCode===ENTER){
    resetGame();
  }
}
function startGame(){
  gameStarted=true;
  gameOver=false;
  resetGame();
}
function resetGame(){
  snake=new Snake();
  score=0;
  foods=[];
  obstacles=[];
  gameOver=false;
  for(let i=0;i<10;i++){
    foods.push(createVector(random(width),random(height)));
    obstacles.push(new Obstacle(random(width),random(height)));
  }
}
function handleFoods(){
  for(let i=foods.length-1;i>= 0;i--){
    fill(255,182,193);//pink color for circle
    ellipse(foods[i].x,foods[i].y,10,10);
    if(snake.eat(foods[i])){
      score++;
      foods.splice(i,1);
      foods.push(createVector(random(width),random(height)));
    }
  }
}
function handleObstacles(){
  for(let obstacle of obstacles){
    obstacle.update();
    obstacle.display();
    if(snake.collideObstacle(obstacle)){
      gameOver=true;
    }
  }
}
function displayScore(){
  fill(50);
  textSize(20);
  textAlign(LEFT,TOP);
  text("Score:"+score,20,20);
}
function displayGameOver(){
  fill(50);
  textSize(32);
  textAlign(CENTER,CENTER);
  text("Game Over",width/2,height/2);
  textSize(16);
  text("Final Score:"+score,width/2,height/2+40);
  text("Press ENTER to restart",width/2,height/2+80);
}
function displayStartScreen(){
  fill(50);
  textSize(32);
  textAlign(CENTER,CENTER);
  text("Press Enter to Start",width/2,height/2);
}
class Snake{
  constructor(){
    this.body=[createVector(width/2,height/2)];
    this.vel=createVector(speed, 0);//starting speed for smoother movement
  }
  update(){
    let head=this.body[this.body.length-1].copy();
    head.add(this.vel);
    this.body.push(head);
    if(this.body.length>score+1){
      this.body.shift();
    }
    this.checkBorders();//if the snake hits the border
  }
  display(){
    fill(135,206,250);//sky blue color for the snake
    for(let segment of this.body){
      ellipse(segment.x,segment.y,10,10);
    }
  }
  eat(pos){
    let d=dist(this.body[this.body.length-1].x,this.body[this.body.length-1].y,pos.x,pos.y);
    if(d<5){
      return true;
    }
    return false;
  }
  collideObstacle(obs){
    let head=this.body[this.body.length-1];
    let d=dist(head.x,head.y,obs.pos.x,obs.pos.y);
    if(d<10){
      return true;
    }
    return false;
  }
  setDirection(x,y){
    if(this.vel.x!=-x&&this.vel.y!=-y){
      this.vel.set(x,y);
    }
  }
  checkBorders(){
    let head=this.body[this.body.length-1];
    if(head.x<0){
      head.x=0;//bounce back from the left border
    }else if(head.x>width){
      head.x=width;//bounce back from the right border
    }else if(head.y<0){
      head.y=0;//bounce back from the top border
    }else if(head.y>height){
      head.y=height;//bounce back from the bottom border
    }
  }
}
class Obstacle{
  constructor(x,y){
    this.pos=createVector(x,y);
    this.vel=p5.Vector.random2D().mult(speed);//obstacle speed for smoother movement
  }
  update(){
    this.pos.add(this.vel);
    if (this.pos.x<0||this.pos.x>width){
      this.vel.x*=-1;
    }
    if (this.pos.y<0||this.pos.y>height){
      this.vel.y*=-1;
    }
  }
  display(){
    fill(175,238,238);//turquoise color for obstacles
    ellipse(this.pos.x,this.pos.y,20,20);
  }
}

