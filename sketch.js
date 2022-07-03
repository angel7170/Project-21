
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;
var ball_options;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 900);


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,870,width,20);
	leftSide = new Ground(650,800,20,120);
	rightSide = new Ground(800,800,20,120);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	

	//Create the Bodies Here.
    ball = Bodies.circle(200,360,30,ball_options);
	World.add(world,ball);
	
}


 


function draw() {

  background(0);
  
  Engine.update(engine);

rectMode(CENTER);
 groundObj.display();
 leftSide.display();
 rightSide.display();
 ellipse(ball.position.x,ball.position.y,30);




  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
		
	}
}
