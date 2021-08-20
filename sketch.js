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
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
    computerBase=new ComputerBase(width-1700,600,450,200);
    playerBase=new PlayerBase(width-400,600,450,200);
    player=new Player(width-400,320,200,400);
    computerPlayer=new ComputerPlayer(width-1700,320,200,400);
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
