var PLAY = 1;
var END = 0;
var gameState = PLAY;

var backgroundImg,obstacleImg,particleImg,playerImg;
var player,obstacle,particle;

var score=0;

var gameOver, restart;


function preload(){
  
  obstacle = loadImage("images/Obstacle.png");

  playerImg = loadImage("images/Player.png");
  backgroundImg = loadImage("images/Background.png");
  particleImg = loadImage("images/Particle.png");

}

function setup() {
  createCanvas(600, 400);

 
  
  player = createSprite(150,180,20,50);
  player.addImage(playerImg);
  player.scale = 0.1;


  
 
  
  
}

function draw() {
    background(220)
   

  drawSprites();
}

function reset(){
 
  
}