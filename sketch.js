var paper ,floor,bin,bin2,bin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bin=createSprite(580,610,20,120)
	bin.shapeColor=("red")

	bin2=createSprite(750,610,20,120)
	bin2.shapeColor=("red")

	bin3=createSprite(665,660,150,20)
	bin3.shapeColor=("red")



	floor=createSprite(400,680,800,20)
	floor.shapeColor=("yellow");

	paper=createSprite(40,600,50,50);
	paper.shapeColor=("purple")




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {    
  rectMode(CENTER);
  background(0);
  
  
  
  drawSprites();
 
}


