var garden,rabbit;
var gardenImg,rabbitImg,apples,applesImg,select_sprites,leaves,leavesImg,orangeLeaf;orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200)
;
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {

  rabbit.x = World.mouseX;
  
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  select_sprites = Math.round(random(1,2));

  if (frameCount % 40 == 0){
    if (select_sprites == 1){
      createApples();}
    } if (frameCount % 40 == 0){
       createLeaves();
    }
      
    
    
      
    
      
    
  

  drawSprites();
}
function createApples(){
  apples = createSprite(random(50,350),40,10,10)
  apples.addImage(applesImg);
  apples.scale = 0.05;
  apples.lifetime = 59;
  apples.velocityY = 4; 

}
function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage(leavesImg);
  leaves.scale = 0.05;
  leaves.lifetime = 59;
  leaves.velocityY = 4;

}
