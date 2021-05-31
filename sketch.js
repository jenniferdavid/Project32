
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot, bg;
var score = 0;

function preload(){
  polygonImg=loadImage("polygon.png");
  getBackground();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);

    boxs1 = new Box(640,175,30,40);
    boxs2 = new Box(670,175,30,40);
    boxs3 = new Box(700,175,30,40);
    boxs4 = new Box(730,175,30,40);
    boxs5 = new Box(760,175,30,40);
    boxs6 = new Box(670,135,30,40);
    boxs7 = new Box(700,135,30,40);
    boxs8 = new Box(730,135,30,40);
    boxs9 = new Box(700,95,30,40);

    polygon = Bodies.circle(160,100,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:200, y:100});
}

function draw(){
    Engine.update(engine);

    if(bg)
    {background(bg);}

   // background("black"); 
    text("SCORE: "+score,750,40)
    
    fill("blue");
    box1.display();
    box2.display();
    box1.score();
    box2.score();
    fill("teal");
    box3.display();
    box4.display();
    box3.score();
    box4.score();
    fill("magenta");
    box5.display();
    box6.display();
    box7.display();
    box5.score();
    box6.score();
    box7.score();
    fill("brown");
    box8.display();
    box9.display();
    box8.score();
    box9.score();
    fill("turquoise");
    box10.display();
    box11.display();
    box12.display();
    box10.score();
    box11.score();
    box12.score();
    fill("orange");
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    fill("purple");
    boxs1.display();
    boxs2.display();
    boxs3.display();
    boxs1.score();
    boxs2.score();
    boxs3.score();
    fill("green");
    boxs4.display();
    boxs5.display();
    boxs6.display();
    boxs4.score();
    boxs5.score();
    boxs6.score();
    fill("red");
    boxs7.display();
    boxs8.display();
    boxs9.display();
    boxs7.score();
    boxs8.score();
    boxs9.score();

    ground.display();
    stand1.display();
    stand2.display();
    slingshot.display();    

    imageMode(CENTER)
    image(polygonImg ,polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
}
}

async function getBackground(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "yellow"; 
    }
    else{
        bg = "brown"; 
    }

}