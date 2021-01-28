var canvas;
var music;
var surface1,surface2,surface3,surface4;
var ball,edjust;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     surface1=createSprite(0,580,360,30)
     surface1.shapeColor ="green"
     surface2=createSprite(295,580,200,30)
     surface2.shapeColor="blue"
     surface3=createSprite(515,580,200,30)
     surface3.shapeColor="orange"
     surface4=createSprite(740,580,220,30)
     surface4.shapeColor="pink"

    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="white"
    ball.velocityX=4
    ball.velocityY=9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()

ball.bounceOff(edges)
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor="green"
    }
    if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
        ball.velocityX=0
        ball.velocityY=0
        ball.shapeColor="blue"
    }
    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor="orange"
    }
    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor="pink"
    }
drawSprites()}
