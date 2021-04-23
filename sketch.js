
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(320,600,40);
bob2=new Bob(360,600,40);
bob3=new Bob(400,600,40);
bob4=new Bob(440,600,40);
bob5=new Bob(480,600,40);
roof=new Roof(400,300,300,20);
rope1=new Rope(bob1.body,roof.body);
rope2=new Rope(bob2.body,roof.body);
rope3=new Rope(bob3.body,roof.body);
rope4=new Rope(bob4.body,roof.body);
rope5=new Rope(bob5.body,roof.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display(); 
 roof.display(); 
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
 drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});	
}	
}


