var movingRect, fixedRect, edges;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  movingRect.debug = true;
  fixedRect.debug = true;
  movingRect.velocityX = -7;
  fixedRect.velocityX = 7;
} 

function draw() {
  background(0);
  
  // if( (movingRect.y <= fixedRect.y + 55) && (movingRect.y >= fixedRect.y - 55) && (movingRect.x <= fixedRect.x + 65) && (movingRect.x >= fixedRect.x - 65)){
  //   movingRect.shapeColor = "green";
  //   fixedRect.shapeColor = "green";
  // } else {
  //   movingRect.shapeColor = "red";
  //   fixedRect.shapeColor = "red";
  // }
    if((movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2) 
    && (movingRect.x - fixedRect.x > - (movingRect.width/2 + fixedRect.width/2 )) 
    && (movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2) 
    && (movingRect.y - fixedRect.y > - (movingRect.height/2 + fixedRect.height/2 ))){
      movingRect.velocityY = -(movingRect.velocityY);
      movingRect.velocityX = -(movingRect.velocityX);
      fixedRect.velocityY = -(fixedRect.velocityY);
      fixedRect.velocityX = -(fixedRect.velocityX);
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    } else {
       movingRect.shapeColor = "red";
       fixedRect.shapeColor = "red";
    }
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;
  drawSprites();
}
