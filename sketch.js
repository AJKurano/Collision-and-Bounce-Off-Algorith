var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(10, 200, 50, 50);
  movingRect = createSprite(400, 200, 30, 30);
  movingRect.shapeColor = "blue"; 
  fixedRect.shapeColor = "green"; 
  movingRect.velocityX = -5;
  fixedRect.velocityX = 3;
}

function draw() {
  background(255,255,255);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  // if(movingRect.x - fixedRect.x < (movingRect.width + fixedRect.width)/2 &&
  // fixedRect.x - movingRect.x < (movingRect.width + fixedRect.width)/2 &&
  // movingRect.y - fixedRect.y < (movingRect.height + fixedRect.height)/2 &&
  // fixedRect.y - movingRect.y < (movingRect.height + fixedRect.height)/2){
  //   movingRect.shapeColor = "red"; 
  //   fixedRect.shapeColor = "red"; 
  // }else{
  //   movingRect.shapeColor = "blue"; 
  //   fixedRect.shapeColor = "green"; 
  // }
  if( movingRect.x - fixedRect.x < (movingRect.width + fixedRect.width)/2 &&
  fixedRect.x - movingRect.x < (movingRect.width + fixedRect.width)/2 ) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  drawSprites();
}