const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var box5, box6, box7,box8;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(250,500,250);
  rope = new Rope(hero.body, { x: 250, y: 300 });
  monster = new Monster(1100,400,250);

  //tower 1
  box1 = new Box(570, 565, 70, 70);
  box2 = new Box(570, 530, 70, 70);
  box3 = new Box(570, 295, 70, 70);
  box4 = new Box(570, 260, 70, 70); 
  box5 = new Box(570, 225, 70, 70);

  // tower 2
  box6 = new Box(670, 565, 70, 70);
  box7 = new Box(670, 530, 70, 70);
  box8 = new Box(670, 295, 70, 70);
  box9 = new Box(670, 260, 70, 70); 
  box10 = new Box(670, 225, 70, 70);
  box11 = new Box(670, 180, 70, 70);

  // tower 3
  box12 = new Box(770, 565, 70, 70);
  box13 = new Box(770, 530, 70, 70);
  box14 = new Box(770, 295, 70, 70);
  box15 = new Box(770, 260, 70, 70); 
  box16 = new Box(770, 225, 70, 70);
  box17 = new Box(770, 180, 70, 70);
  box18 = new Box(770, 145, 70, 70);

  // falling boxes
  box19 = new Box(870, 180, 70, 70);
  box20 = new Box(870, 145, 70, 70);
  box21 = new Box(870, 260, 70, 70); 
  box22 = new Box(870, 565, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  //tower 1
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  //tower 2
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
 
  //tower 3 
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  //falling boxes
  box19.display();
  box20.display();
  box21.display();
  box22.display();


  hero.display();
  rope.display();
  monster.display();

  console.log('x'+ mouseX);

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body , {x:mouseX , y:mouseY})
}

function mouseReleased(){
  rope.fly();
}
