var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(600,400,50,80);
 fixedRect.shapeColor = "green";
 fixedRect.debug = true;
 movingRect = createSprite(400,200,200,200);
 movingRect.shapeColor = "green";
 movingRect.debug = true;
 obj1=createSprite(100,100,100,100);
 obj2=createSprite(200,100,100,100);
 obj3=createSprite(300,100,100,100);
 obj4=createSprite(250,150,100,100);
 obj1.shapeColor="blue";
 obj2.shapeColor="green";
 obj3.shapeColor="red";
 obj4.shapeColor="purple";
}

function draw() {
  background(0,0,0);
movingRect.x =World.mouseX;
movingRect.y = World.mouseY;
if(isTouching(movingRect,obj1,obj2,obj3,obj4)){
  movingRect.shapeColor="black";
  obj1.shapeColor="black";
  obj2.shapeColor="black";
  obj3.shapeColor="black";
  obj4.shapeColor="black";
}

else{
  movingRect.shapeColor="green";
  obj1.shapeColor="blue";
  obj2.shapeColor="green";
  obj3.shapeColor="red";
  obj4.shapeColor="purple";
}


drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x<object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
     && object2.y - object1.y < object2.height/2 + object1.height/2){
   return true;
   }
   else{
   return false;
   }
}