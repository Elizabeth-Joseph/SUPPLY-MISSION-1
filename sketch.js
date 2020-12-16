//declaring the variables

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
//loading the images

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {

//creating the canvas
	createCanvas(800, 700);

//changing the rect mode to center
	rectMode(CENTER);

//creating the package sprite
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

//creating the elicopter sprite
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

//creating the ground sprite
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="black"

////creating the engine
	engine = Engine.create();

//creating the my own world
	world = engine.world;

//creating the package body
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});

//adding the bodies to the world
	World.add(world, packageBody);
	

//creating the Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 

//running the engine
	Engine.run(engine);
  
}


function draw() {

//changing the rect mode to center
  rectMode(CENTER);

//clearing the background
  background("lightblue");

  

//assigning same x and y position to packageSprite and packageBody
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

//displaying the sprites
  drawSprites();
 
}

function keyPressed() {

//codes to be executed when down arrow is pressed
 if (keyCode === DOWN_ARROW) {

//dropping the package when down arrow is pressed
	Matter.Body.setStatic(packageBody, isStatic=false)
    
  }
}



