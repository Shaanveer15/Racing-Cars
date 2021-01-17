class Game{
consturctor(){}
getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on ("value", function(data){
        gameState=data.val();
    })
}
update(state){
    database.ref('/').update({gameState:state})
}

async Start(){
if(gameState===0){
player=new Player();
var PlayerCountRef=await database.ref('playerCount').once("value")
if(PlayerCountRef.exists()){
    playerCount=PlayerCountRef.val();
    player.getCount(); 
}

form=new Form();
form.display();
}
car1=createSprite(100,200);
car1.addImage(car1img)
car2=createSprite(300,200);
car2.addImage(car2img)
car3=createSprite(500,200);
car3.addImage(car3img)
car4=createSprite(700,200);
car4.addImage(car4img)
cars=[car1,car2,car3,car4]
}
Play(){
form.hide();
//textSize(13)
//text("gameStart", 150,100)
Player.getPlayerInfo();
if(allPlayers!==undefined){
    background("gray");
    image (trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
    var index=0
    var x=170
    var y
//var displayposition=130
for(var plr in allPlayers){
    index=index+1;
    x=x+200
    y=displayHeight-allPlayers[plr].distance
    cars[index-1].x=x;
  cars[index-1].y=y;
if(index===player.index){
    //stroke(10);
   // fill("red");
   // ellipse(x,y,70,70);
cars[index-1].shapeColor="red"
 camera.position.x=displayWidth/2
 camera.position.y=cars[index-1].y
}
textAlign(CENTER);
textSize(20);
text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+75)
}
} 
if(keyIsDown(UP_ARROW)&&Player.index!==null){
    player.distance+=25;
    player.update();
}

if(player.distance>3800){
    gameState=2;
}




drawSprites();
}
end(){
console.log("game ended")
}
}
