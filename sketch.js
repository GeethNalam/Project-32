const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base;
var hexagon;
var slingShot;


function setup() {
  var cavas = createCanvas(1600,500);
  engine = Engine.create();
    world = engine.world;
  block8 = new Block(330+400,225,30,40);
  block9 = new Block(360+400,225,30,40);
  block10 = new Block(390+400,225,30,40);
  block11 = new Block(420+400,225,30,40);
  block12 = new Block(450+400,225,30,40);
  block13 = new Block(360+400,195,30,40);
  block14 = new Block(390+400,195,30,40); 
  block15 = new Block(420+400,195,30,40);
  block16 = new Block(390+400,155,30,40);
  
  base = new Base(390+400,250,500,10);
  hexagon = new Base(200,400,20,20);

  polygon = Bodies.circle(50,200,20);
      World.add(world,polygon);
 slingShot = new Slingshot(hexagon.body,{x:330, y:200});
}

function draw() {
  background("blue");  
  Engine.update(engine);
  drawSprites();
 
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  base.display();
  hexagon.display();
  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}

async function getBackgroundImage(){
  var responce = await fetch("http://worldimeapi.org.api.timezone/Asia.Kolkata");
  if(hour >= 06 ** hour<=18){
    bg = "white";
  }else{
    bg = "black";
  }
}