var roofBody,bobBody1,bobBody2,bobBody3,bobBody4,bobBody5,ropeBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roofBody = new roof(400,50,600,50);

	bobBody1 = new bob(200,600,80);
	bobBody2 = new bob(300,600,80);
	bobBody3 = new bob(400,600,80);
	bobBody4 = new bob(500,600,80);
	bobBody5 = new bob(600,600,80);

	ropeBody1 = new Rope(bobBody1.body, { x: 200, y: 75 });
	ropeBody2 = new Rope(bobBody2.body, { x: 300, y: 75 });
	ropeBody3 = new Rope(bobBody3.body, { x: 400, y: 75 });
	ropeBody4 = new Rope(bobBody4.body, { x: 500, y: 75 });
	ropeBody5 = new Rope(bobBody5.body, { x: 600, y: 75 });

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  roofBody.display();
  bobBody1.display();
  bobBody2.display();
  bobBody3.display();
  bobBody4.display();
  bobBody5.display();

  ropeBody1.display();
  ropeBody2.display();
  ropeBody3.display();
  ropeBody4.display();
  ropeBody5.display();
}
function mouseDragged(){
	Matter.Body.setPosition(bobBody1.body, { x: mouseX, y: mouseY})
}