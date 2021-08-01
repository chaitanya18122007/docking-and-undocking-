var bg, iss , s1,s2,s3,s4
var hasDocked = false
function preload(){
  bg =  loadImage("spacebg.jpg")
  iss = loadImage("iss.png")
  s1 = loadImage("spacecraft1.png")
  s2 = loadImage("spacecraft2.png")
  s3 = loadImage("spacecraft3.png")
  s4 = loadImage("spacecraft4.png")

}
function setup() {

  createCanvas(600,350);
  sc1 = createSprite(285 , 240);
  sc1.addImage(s1);
  sc1.scale = 0.15
  iss1 = createSprite(330 , 130);
  iss1.addImage(iss);
  iss1.scale = 0.4
  iss1.setCollider("circle",-59.5,0,5)
  iss1.debug = true




}

function draw() {
  background(bg);
  if(!hasDocked){
    sc1.x = sc1.x +random(-1,1)
  }
  sc1.addImage(s1)
  if(keyDown("UP_ARROW")) {
    sc1.y = sc1.y-3
  }
  if(keyDown("DOWN_ARROW")) {
    sc1.y = sc1.y+3
    sc1.addImage(s2)
  }
  if(keyDown("LEFT_ARROW")) {
    sc1.x = sc1.x-3
    sc1.addImage(s4)
  }
  if(keyDown("RIGHT_ARROW")) {
    sc1.x = sc1.x+3
    sc1.addImage(s3)
  }
  if(sc1.isTouching(iss1)){
    textSize(25)
    fill("white")
    text("Docking Successful" , 200,300)
  
  }

  drawSprites();
}
