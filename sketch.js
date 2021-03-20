var bat;
var halloween;
var play;
var bat,batAnimation;
var gameState="serve";
var stars;
var Background;


function preload(){
    playButton=loadImage("Images/play.png");
    instructionImage=loadImage("Images/instruction.png");
    batAnimation=loadAnimation("Images/bat-0.png","Images/bat-1.png","Images/bat-2.png","Images/bat-3.png");
    blackbg=loadImage("Images/black bg.png");
    
    
function setup(){
   createCanvas(1800,900);
  
    play=createSprite(734,637,60,60);
    play.addImage(playButton);
    play.scale=1.4;

    bat=createSprite(734,400,80,80);
    bat.addAnimation("flying",batAnimation);
    bat.velocityY=4;
    bat.velocityY=bat.velocityY+0.8;
    bat.scale=0.7;
    
    instruction=createSprite(1000,637,60,60);
   instruction.addImage(instructionImage);

   maxHeight=createSprite(927,24,1660,17);
   maxHeight.shapeColor="black";
   maxHeight.scale=2;

   minHeight=createSprite(849,876,1660,17);
   minHeight.shapeColor="black";

   minHeight.velocityX=-4;
   minHeight.addImage(minHeightImage);
    bombGroup=new Group();
}
function draw(){
    background(blackbg);
    textSize(20);
    fill("white");
    text(mouseX+","+mouseY,mouseX,mouseY);
    if(gameState==="serve"){
        play.visible=true;
        bat.visible=false;
        bat.velocityY=0;
       


        
        if(mousePressedOver(play)){
            gameState="play";
        }
    }

    if(gameState==="play"){
        play.visible=false;
       bat.visible=true;
        instruction.visible=false;
        
        if(keyDown(UP_ARROW) && bat.y>=95){
        bat.velocityY=-7;
        }
        else if(bat.y>=750){
            bat.velocityY=0
        }
       else{
           bat.velocityY=5;
       }
       if(minHeight.x<1800){
           minHeight.width=minHeight.width+100;
       }
        
       }
    drawSprites();
}
}