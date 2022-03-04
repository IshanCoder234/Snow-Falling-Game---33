const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgimage,rand
var snow=[]
function preload(){
  bgimage=loadImage("snow1.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    

}

function draw(){
    background(bgimage);
    Engine.update(engine);
    rand=Math.round(random(1,4))
    strokeWeight(5);
    if(frameCount%5===0){
      snow.push(new Snow(random(0,800),30,30))
    }
    for(var s=0;s<snow.length;s++){
      snow[s].display();
    }
    drawSprites();
}

