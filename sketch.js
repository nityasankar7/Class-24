const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var pig1,pig2;
var log1,log2,log3,log4;
var box3,box4,box5;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    log1= new Log(800,300,300,PI/2);
    pig1= new pig(800,320);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    ground = new Ground(600,height,1200,20)
    pig2= new pig(800,270);
    log2= new Log(810,180,300,PI/2);
    box5 = new Box(800,150,70,70);
    log3= new Log(860,120,120,-PI/7);
    log4= new Log(740,120,140,PI/7);
    bird1 = new bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    box3.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();


}