var ball;
var database;
var  position;
function setup(){
    database= firebase.database()
    console.log(database);
    
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPositon = database.ref('ball/position')
    ballPositon.on("value",readPosition,showError)
}

function draw(){
    background("green");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
function readPosition(data){
    position= data.val()
    console.log(position.x)
    ball.x=position.x ;
    ball.y=position.y ;

}
function showError(){
    console.log("Error in writting to database")
}
function changePosition(x,y){
   database.ref('ball/position').set({
  'x':position.x+x,
  'y':position.y+y
   })
    

}
