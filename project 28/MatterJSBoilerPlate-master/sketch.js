
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new Tree(550,500,500,500);
	ground1 = new Ground(400, 695, 800, 10);
	stone1 = new Stone(200, 350, 40, 40);
	mango1 = new Mango(500, 400, 40, 40);
	mango2 = new Mango(450, 300, 40, 40);
	mango3 = new Mango(340, 390, 40, 40);
	mango4 = new Mango(630, 320, 40, 40);
	mango5 = new Mango(750, 400, 40, 40);
	chain1 = new chain(stone1.body, {x: 210, y: 620});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(55);
  
  drawSprites();
 
  ground1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  image(boyImage, 250, 660, 125, 175);
  chain1.display();
  stone1.display();
  detectcollision(stone1, mango1);
  detectcollision(stone1, mango2);
  detectcollision(stone1, mango3);
  detectcollision(stone1, mango4);
  detectcollision(stone1, mango5);
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});
	stone1.x = mouseX
	stone1.y = mouseY
}

function mouseReleased(){
    chain1.fly();
}

function detectcollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.width/1.5+lstone.width/2){
	Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x:235, y:420})
		chain1.attach(stone1.body);
	}
}
