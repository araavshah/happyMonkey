
var monkey , monkey_running;
var ground;
var banana, bananaImage, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
  background("255");

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
    text("survivalTime: "+ survivalTime, 240,50);

  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  food();
  spawnObstacles();
  
  
  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
   monkey.collide(ground);

  drawSprites();
}

function food(){
  if( frameCount % 80 === 0) {
    var banana = createSprite(400,400,100,100);
    banana.y = Math.round(random(124, 200));
    banana.addImage(bananaImage);
    banana.scale=0.09;
    banana.velocityX = -3;
    food.lifetime = 100;
    bananaGroup.add(banana);      
  }
}

function spawnObstacles(){
  if( frameCount % 300 === 0) {
    var obstacle = createSprite(300, 370,100,100);
    obstacle.y = Math.round(random(330, 326));
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-3;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
}
}



