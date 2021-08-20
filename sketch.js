const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase;
var playerBase;
var player;
var computerPlayer;

function setup() {
  canvas = createCanvas(1500,800);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    computerBase=new ComputerBase(220,600,450,200);
    playerBase=new PlayerBase(1280,600,450,200);
    player=new Player(1280,320,200,400);
    computerPlayer=new ComputerPlayer(220,320,200,400);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display();
   playerBase.display();
   

   //display Player and computerplayer
   player.display();
computerPlayer.display();
}
