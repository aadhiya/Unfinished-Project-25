
var BP1, BP2, BP3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperIMG=loadImage("paper.png")
	binIMG=loadImage("dustbin green.png")	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ball = new Paper(150, 300, 50)
	ground = new Ground(400, 680, 800, 20)

	Engine.run(engine);

	dustbinSprite=createSprite(width/2 + 315, height-45, 150,20);
	dustbinSprite.addImage(binIMG)
	dustbinSprite.scale=0.5

	/*BP1 = createSprite(width/2 + 380, height-90, 20, 100)
	BP1.shapeColor = "red"
	BP2 = createSprite(width/2 + 315, height-45, 150, 20)
	BP2.shapeColor = "red"
	BP3 = createSprite(width/2 + 230, height - 85, 20, 100)
	BP3.shapeColor = "red"*/
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball.display()
 ground.display()
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 85, y: -125});
	}
}

