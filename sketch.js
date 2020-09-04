var object1, object2;

function setup() {
  createCanvas(1200,800);
  object1 = createSprite(400, 100, 50, 80);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(400, 800,80,30);
  object2.shapeColor = "green";
  object2.debug = true;
  object3 = createSprite(200,400,150,50);
  object3.velocityX = 3;
  object4 = createSprite(100,300,150,50);

  object2.velocityY = -5;
  object1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  BounceOff(object3,object2);

  drawSprites();
}
