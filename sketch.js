var iss ,spacecraft,hasDocked;
var spacecraftImg1, issImg, spacecraftImg2,spacecraftImg3,spacecraftImg4
var bgImg;
hasDocked=false;



function preload(){
issImg = loadImage("iss.png");
bgImg = loadImage("spacebg.jpg");
spacecraftImg1 = loadImage("spacecraft1.png")
spacecraftImg2 = loadImage("spacecraft2.png");
spacecraftImg3 = loadImage("spacecraft3.png")
spacecraftImg4 = loadImage("spacecraft4.png")
	
}



function setup() {
	createCanvas(800,550);
	spacecraft= createSprite(230, 400, 50, 50);
spacecraft.addImage(spacecraftImg1);
spacecraft.scale=0.3;


	
	iss = createSprite(250,180,20,20);
iss.addImage(issImg);
iss.scale=1.0;

}

function draw() {
	background(bgImg);  
	if(!hasDocked ){
		spacecraft.x=spacecraft.x+random(-1,1);
	}

	spacecraft.velocityX=0;
 spacecraft.velocityY=0;


if (keyDown("LEFT_ARROW")){
	spacecraft.velocityX=-3;
	spacecraft.addImage(spacecraftImg3);
}
if (keyDown("RIGHT_ARROW")){
	spacecraft.velocityX=3;
	spacecraft.addImage(spacecraftImg4);
}
if (keyDown("UP_ARROW")){
	spacecraft.velocityY=-3;
	spacecraft.addImage(spacecraftImg2);
}
if (keyDown("DOWN_ARROW")){
	spacecraft.velocityY=3;
	
}
if(spacecraft.y<=iss.y+135 && spacecraft.x<=iss.x-20){
	hasDocked=true;
	textSize(26);
	fill("yellow")
	text("DOCKING  SUCCESSFULL...!",300,400);
}


	drawSprites();
}