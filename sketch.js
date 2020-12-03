
var lion,plant;

var ball, box;

function setup() {
  createCanvas(800,400);
  lion = createSprite(400, 200, 50, 50);
  lion.shapeColor = "red";

  plant = createSprite(300,200,40,40)
  plant.shapeColor = "red"

  ball = createSprite(200,0,40,40);
  ball.velocityY = 4;
  box = createSprite(200,400,50,50)
  box.velocityY = -4;
}

function draw() {
  background(0);  

  lion.x = mouseX;
  lion.y = mouseY;

  console.log(lion.x)

  if(lion.x - plant.x < lion.width/2  +  plant.width/2  &&   plant.x-lion.x  <  lion.width/2 + plant.width/2&&
    lion.y-plant.y < lion.height/2  +  plant.height/2  &&  plant.y-lion.y < lion.height/2 + plant.height/2 ){

    lion.shapeColor = "green";
    plant.shapeColor = "green"
  }
  else{
    lion.shapeColor = "red";
    plant.shapeColor = "red"
  }

  if(lion.x - plant.x < lion.width/2  +  plant.width/2  &&   plant.x-lion.x  <  lion.width/2 + plant.width/2){
    ball.velocityX = - ball.velocityX;
    box.velocityX = -box.velocityX
  }
if(lion.y-plant.y<lion.height/2+plant.height/2&& plant.y-lion.y<plant.height/2+lion.height/2){
  ball.velocityY=-ball.velocityY
  box.velocityY=box.velocityY
}
  drawSprites();
}