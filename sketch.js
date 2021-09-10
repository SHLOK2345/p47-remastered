const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var score=0

var gameState="PLAY"

function preload(){
  bg=loadImage("bg.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  

  engine=Engine.create()
  world=engine.world
  Engine.run(engine)

  bird1=new Bird()
  obstacle1=new Obstacle()

 
  obstacleGroup = new Group()
  obstacleGroup.add(obstacle1.body)
  obstacleGroup.add(obstacle1.body2)
  obstacleGroup.add(obstacle1.body3)
  obstacleGroup.add(obstacle1.body4)
}

function draw() {
  background(bg);  
  drawSprites();
 
if(bird1.body.position.x>200){
  textSize(30)
  text("distance:" + score,100,200,30,30)
  score++
}

if(bird1.body.isTouching(obstacleGroup)){
  gameState="END"
}
 if(gameState==="PLAY"){
  bird1.body.velocityY+=0.8

  if(keyDown("space")) {
    bird1.body.velocityY=-6
  }

  if(frameCount % 80===0){
   obstacle1=new Obstacle()
   obstacleGroup.add(obstacle1.body)
   obstacleGroup.add(obstacle1.body3)
   obstacleGroup.add(obstacle1.body4)
  }
 }

 if(gameState==="END"){
   textSize(30)
   fill("red")
   text("YOU LOSE!",bird1.body.x,height/2)

   bird1.body.velocityY=0
   obstacleGroup.setVelocityXEach(0)
   obstacleGroup.setLifetime(-1)

   
 }
 
 if(bird1.body.y>height){
   gameState="END"
 }




}

