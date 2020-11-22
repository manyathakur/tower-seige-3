
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const bind = Matter.Constraint;

var score = 0,back,img;

function preload(){
  time();
}

function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
  world = engine.world;

  dust = new Ground(400,700,200,600);
  dust2 = new Ground(670,600,300,600);
  dust3 = new Ground(100,700,200,600);

  ball = new wall(320,410,30);
  ball1 = new wall(350,410,30);
  ball2 = new wall(380,410,30);
  ball3 = new wall(410,410,30);
  ball4 = new wall(440,410,30);
  ball5 = new wall(470,410,30);

  wall1 = new wall(320,380,30);
  wall2 = new wall(350,380,30);
  wall3 = new wall(380,380,30);
  wall4 = new wall(410,380,30);
  wall5 = new wall(455,380,60);

  wall6 = new wall(335,350,60);
  wall7 = new wall(470,350,30);
  wall8 = new wall(320,330,30);
  wall9 = new wall(410,330,150);

  wal = new wall(540,290,30);
  wal2 = new wall(570,290,30);
  wal3 = new wall(600,290,30);
  wal4 = new wall(630,290,30);
  wal5 = new wall(660,290,30);
  wal6 = new wall(540,260,30);
  wal7 = new wall(570,260,30);
  wal8 = new wall(600,260,30);
  wal9 = new wall(630,260,30);
  wal10= new wall(660,260,30);
  wal11 = new wall(540,230,30);
  wal12 = new wall(570,230,30);
  wal13 = new wall(600,230,30);
  wal14 = new wall(630,230,30);
  wal15 = new wall(660,230,30);
  wal16 = new wall(540,200,30);
  wal17 = new wall(570,200,30);
  wal18 = new wall(600,200,30);
  wal19 = new wall(630,200,30);
  wal20 = new wall(660,200,30);

  block = new stone(150,200);
  bloc = new stone(100,250);

  shoot = new sling(block.rock,{x:150,y:200});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  if(img){ 
    background(img);
  }

  dust.earth();
  dust2.earth();
  dust3.earth();

  ball.block();
  ball.count();

  ball1.block();
  ball1.count();

  ball2.block();
  ball2.count();
  
  ball3.block();
  ball3.count();

  ball4.block();
  ball5.block();

  wall1.block();
  wall1.count();

  wall2.block();
  wall3.block();
  wall4.block();
  wall5.block();
  wall6.block();
  wall7.block();
  wall8.block();
  wall9.block();

  wal.block();
  wal2.block();
  wal3.block();
  wal4.block();
  wal5.block();
  wal6.block();
  wal7.block();
  wal8.block();
  wal9.block();
  wal10.block();
  wal11.block();
  wal12.block();
  wal13.block();
  wal14.block();
  wal15.block();
  wal16.block();
  wal17.block();
  wal18.block();
  wal19.block();
  wal20.block();

  ball4.count();
  ball5.count();

  wall2.count();
  wall3.count();
  wall4.count();
  wall5.count();
  wall6.count();
  wall7.count();
  wall8.count();
  wall9.count();

  wal.count();
  wal2.count();
  wal3.count();
  wal4.count();
  wal5.count();
  wal6.count();
  wal7.count();
  wal8.count();
  wal9.count();
  wal10.count();
  wal11.count();
  wal12.count();
  wal13.count();
  wal14.count();
  wal15.count();
  wal16.count();
  wal17.count();
  wal18.count();
  wal19.count();
  wal20.count();

  bloc.show();

  stroke(rgb(random(0,255),random(0,255),random(0,255)));
  text(" score "+score,720,50);
  
}
function mouseDragged(){
  if(bloc.rock.position.x < 200){
    Matter.Body.setPosition(bloc.rock,{x:mouseX,y:mouseY});
  }
  else{
    Matter.Body.setPosition(bloc.rock,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
    shoot.detach();
}
function keyPressed(){
  if(keyCode === 8){
    shoot.attach(block.rock);
  }
  if(keyCode === 32){
    shoot.attach(bloc.rock);
  }
}
async function time(){
  var api = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var format = await api.json();

  var chrono = format.datetime;
  var final = chrono.slice(11,13);

  if(final > 06 && final < 16){
    back = "back.jpg";
  }
  else{
    back = "bacground1.jpg";
  }
  img = loadImage(back);
  console.log(final);
} 
