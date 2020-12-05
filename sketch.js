const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine=Engine.create();
  world=engine.world;

ground=new Ground(240,745,480,20);

for (var i=0; i<=innerWidth; i=i+80 ){
  divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

for (var j=40; j<=width; j=j+50 ){
  plinkos.push(new Plinko(j,75));
  }

for (var k=15; k<=width-10; k=k+50 ){
  plinkos.push(new Plinko(k,175));
  }

for (var l=40; l<=width; l=l+50 ){
  plinkos.push(new Plinko(l,275));
  }
  
for (var p=15; p<=width-10; p=p+50 ){
  plinkos.push(new Plinko(p,375));
  }
  
  Engine.run(engine);

}

function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();
  
  if (frameCount%90===0){
    particles.push(new Particles(random(width/2-10, width/2+20),10));//
  }

  for (var m=0; m<plinkos.length; m++ ){
    plinkos[m].display();
  }

  for (var n=0; n<particles.length; n++ ){
    particles[n].display();
  }

  for (var o=0; o<divisions.length; o++ ){
    divisions[o].display();
  }
}