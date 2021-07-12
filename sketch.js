const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
getBackgroundImg();
}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here

}

async function getBackgroundImg(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseType = await response.json();
    var dt = responseType.datetime;
    var hour = dt.slice(11,13);

        



    if(hour>04 && hour<06){
        bg = "sunrise1.png"
    
        
    }
    else if(hour>=06 && hour<08){
        bg = "sunrise2.png"
    }        
    else if(hour>=08 && hour<=10){
    bg = "sunrise3.png"
    }
    
    else if (hour>= 23 && hour<=0){
        bg = "sunset10.png"
    }
    else if(hour>=0 && hour<=01){
        bg = "sunset11.png"
    }
    else if (hour>=01 && hour<=04){
        bg = "sunset12.png"
    }
    

backgroundImg = loadImage(bg)
}
