//creating the variables
var Bullet,Wall;
var Speed,Weight,Thikness;

function setup() 
{
 createCanvas(1600,400);
 
 //setting the speed,weight and thikness
 Speed = random(223,321);
 Weight = random(30,52);
 Thikness = random(22,83)

 //creating the sprites
 Bullet = createSprite(50,200,50,25);
 Bullet.velocityX = Speed;
 
 Wall = createSprite(1200,200,Thikness,height/2);
 Wall.color = (80,80,80);

}

function draw() 
{
  background("cyan");

  if(hasCollided(Bullet,Wall))
  {
    Bullet.velocityX = 0
    var Damage = 0.5*Weight*Speed*Speed/(Thikness*Thikness*Thikness)
   
   if(Damage > 10)
   {
    Wall.shapeColor = color(255,0,0);
   }
  
   if(Damage < 10)
   {
    Wall.shapeColor = color(0,225,0);
   }
  }
    drawSprites();
} 

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x+lbullet.width;
  wallRightEdge = lwall.x;

  if ( bulletRightEdge>=wallRightEdge) {
    return true
  }

  return false;
}