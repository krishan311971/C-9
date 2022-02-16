
function setup() {
  createCanvas(400,400);
  background(5100);
  box = createSprite(200,200,30,40);
}

function draw() 
{

  // write the code to change background color 
background("white");
  // to red when RIGHT_ARROW is pressed
 
if(keyIsDown(RIGHT_ARROW)){
  background("red");
}
 // to yellow when LEFT_ARROW is pressed
 if(keyIsDown(LEFT_ARROW)){
   background("yellow");
 }
 
  drawSprites();
}

