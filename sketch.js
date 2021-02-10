  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject;
var world;
var DImg,PImg;

  function preload(){
  DImg = loadImage("dustbingreen.png");
  PImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperObject=new Paper(200,450,70);
	groundObject=new Ground();
	bin1=new Dustbin(1200,540,100,200);
	bin2=new Dustbin(1120,540,85,200);
	bin3=new Dustbin(1050,540,85,200);
	

	

	
	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  bin1.display();
  bin2.display();
  bin3.display();


  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-80});

    
  	}
}