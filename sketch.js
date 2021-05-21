var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(100, 400, 50, 50);
 movingrect=createSprite(800,400,80,50);
 fixedrect.shapeColor="red"
 movingrect.shapeColor="red"
 fixedrect.velocityX=5
 movingrect.velocityX=-5
}

function draw() {
  background(0); 
  //movingrect.x=mouseX;
  //movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    &&fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2)
    {
        fixedrect.velocityX=fixedrect.velocityX*(-1)
        movingrect.velocityX=movingrect.velocityX*(-1)
    }
    if(movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      fixedrect.velocityY=fixedrect.velocityY*(-1)
      movingrect.velocityY=movingrect.velocityY*(-1)
 
    }
   
  drawSprites();
}