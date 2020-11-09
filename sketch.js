const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1;
var box2
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 box1 =new Box (200,200,50,60)
 box2 = new Box (220,100,70,100)
 ground=new Ground (200,390,400,30)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    box1.display()
    box2.display()
    ground.display()
   
} 