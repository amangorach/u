var bg, bgImg;
var bottomGround;
var topGround;
var balloon, balloonImg;
var ob1, ob2, ob3, ot1, ot2;
var reset;
var obsticlesg;
function preload(){
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png.png","assets/balloon2.png.png","assets/balloon3.png.png")
}
function setup(){
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;
topGround = createSprite(200,10,800,20);
topGround.visible = false;
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
obsticlesg=createGroup(ob1,ob2,ob3);
}
function draw() {
background("black");
if(keyDown("space")) {
balloon.velocityY= balloon.velocityY-0.3;
}
balloon.velocityY = balloon.velocityY+0.1;
drawSprites();
}
