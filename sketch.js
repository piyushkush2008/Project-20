var car;
var wall;
var Speed,Weight;

function setup(){
createCanvas(1600,400);

Speed=random(55,80);
Weight=random(400,1500)

car=createSprite(50,200,50,50);
wall=createSprite(1000,200,50,height/2)
}

function draw(){
background(0);
car.velocityX=Speed;
if(wall.x-car.x<(wall.width/2+car.width/2)){

car.velocityX=0;

var Deformation=0.5*Weight*Speed*Speed/22500

if(Deformation<100){

car.shapeColor=color(0,255,0)

}
if(Deformation>100 && Deformation<180){

car.shapeColor=color(230,0,230) 

}
if(Deformation>180){
car.shapeColor=color(255,0,0) 
}
}
drawSprites();    
}
