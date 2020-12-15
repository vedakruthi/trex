
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivaltime;
var ground;
function preload(){
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 }



function setup() {
createCanvas(600,360);
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
  
bananaGroup=new Group();
obstacleGroup=new Group();
  
  survivaltime=0;
}


function draw() {
background("turquoise");
if (ground.x < 600){
      ground.x = ground.width/2;
}
if(keyDown("space")&&monkey.y >= 100){
monkey.velocityY=-10;
}
//adding gravity
    monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground);
console.log(frameCount);
stroke(0);
fill(0);
textSize(20);
survivaltime=Math.ceil(frameCount/frameRate());
text("survival time="+survivaltime,250,50);
spawnObstacles();
spawnBananas();
drawSprites();  
}

function spawnObstacles(){
if(World.frameCount % 120===0){
obstacle=createSprite(90,330,20,20);
obstacle.velocityX=-3;
obstacle.addImage(obstacleImage);
obstacle.lifetime=500;
obstacle.scale=0.1;
obstacle.x = Math.round(random(120,340));
obstacleGroup.add(obstacle);
 }
}
function spawnBananas(){
if(World.frameCount % 80===0){
banana=createSprite(20,80,20,20);
banana.velocityX=3;
banana.addImage(bananaImage);
banana.lifetime=500;
banana.scale=0.1;
banana.y = Math.round(random(80,100));
monkey.depth=banana.depth+1;   
bananaGroup.add(banana);
 }
}




