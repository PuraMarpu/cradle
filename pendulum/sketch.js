const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const bind = Matter.Constraint;

function setup() {
  createCanvas(600,600);
  
  engine = Engine.create();
  world = engine.world;

  ceiling = new roof();

  bob1 = new cradle(150);
  bob2 = new cradle(230);
  bob3 = new cradle(310);
  bob4 = new cradle(390);
  bob5 = new cradle(470);

  string = new thread(bob1.newton,ceiling.body,-160,0);
  string2 = new thread(bob2.newton,ceiling.body,-80,0);
  string3 = new thread(bob3.newton,ceiling.body,0,0);
  string4 = new thread(bob4.newton,ceiling.body,80,0);
  string5 = new thread(bob5.newton,ceiling.body,160,0);

 
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background("grey"); 

  ceiling.dest();

  bob1.show();
  bob2.show();
  bob3.show();
  bob4.show();
  bob5.show();
  
  string.const();
  string2.const();
  string3.const();
  string4.const();
  string5.const();
}
function mouseDragged(){
   Body.setPosition(bob1.newton,{x:mouseX,y:mouseY});
}
