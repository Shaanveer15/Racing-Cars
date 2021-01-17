var form,player,game;
var database; 
var gameState=0;
var playerCount;
var allPlayers;
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img,groundimg,trackimg;

function preload(){
car1img=loadImage("Images/car1.png");
car2img=loadImage("Images/car2.png");
car3img=loadImage("Images/car3.png");
car4img=loadImage("Images/car4.png");
trackimg=loadImage("Images/track.jpg");
}

function setup(){

    canvas=createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
   game=new Game();
   game.getState();
   game.Start();

}

function draw(){
if(playerCount===4){
    game.update(1)}
  if(gameState===1){
clear ()
game.Play();
  }
  if(gameState===2){
    game.end();
  }
}



