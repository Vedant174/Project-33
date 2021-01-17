var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var score = 0;
  var particle;
  var count = 0;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var gamestate = "Play";

// var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(25)
  // text(mouseX+","+mouseY, 100,600)
  text("Score : "+score,20,30);

  text("500",17,525);

  text("500",97,525);

  text("500",177,525);

  text("100",257,525);

  text("100",337,525);

  text("100",417,525);

  text("100",497,525);

  text("200",577,525);

  text("200",647,525);

  text("200",727,525);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();
     var p = particle.body.position;

     if(p.y>760)
     {
          if(p.x < 250){
            score=score+500;
            particle=null;
            if(count>=5) gamestate = "end";
          }else  if(p.x>=250 && p.x<=500){
            score=score+100;
            particle=null;
            if(count>=5) gamestate = "end";
          }else {//if(p>500)
            score=score+200;
            particle=null;
            if(count>=5) gamestate = "end";
          }
        
      }
   }
    if(gamestate === "end"){
      textSize(60);
      text("Game Over",width/2,height/2);

    }
   


}

function mousePressed(){
  if(gamestate!=="end")
  {
    count++;
    // particle=new Particle(mouseX, 10, 10, 10);
    particle=new Particle(random(10,390), 10, 10, 10);
  }
}