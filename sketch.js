var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


line=new Divisions(600,800,10,600)
line1=new Divisions(400,800,10,600)
line2=new Divisions(200,800,10,600)
line3=new Divisions(200,800,10,600)
line4=new Divisions(300,800,10,600)
line5=new Divisions(500,800,10,600)
line6=new Divisions(200,800,10,600)
line7=new Divisions(700,800,10,600)
  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
if(frameCount%60===0){

particles.push(new Particle(random(100,700),10,10))
score=score+1

}
for(var j = 0;j<particles.length;j++)
{

  particles[j].display()
}

  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
line.display()
line1.display()
line2.display()
line3.display()
line4.display()
  line5.display()
line6.display(
  line7.display()
)
}