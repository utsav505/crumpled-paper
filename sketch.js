var paper,bin,ground,bar1,bar2,bar3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paper = new Paper(200,335,25);
	
	ground = new Ground(600,350,1200,20);
	
	bar1 = new Box(800,330,200,20);
	bar2 = new Box(700,290,20,100);
	bar3 = new Box(900,290,20,100);
	
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	background(0);
	paper.display();
	ground.display();
	bar1.display();
	bar2.display();
	bar3.display();
 	drawSprites();
	keyPressed();
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-7});
	}

}

