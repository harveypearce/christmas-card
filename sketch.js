let christmasTree;
let noseDirection = 1;
let speed = 5;
let snowmanX = 100;
let snowmanY = 75;
function setup(){

    createCanvas(600,600);

}
function preload(){
    christmasTree = loadImage("lib/mario-christmas-tree.png");
}

function polarBear(){
    fill(255);
circle(100,100,75);
circle(100,50,50);
fill(0);
circle(90,40,10);
circle(110,40,10)
fill(200,90,0);
square(100,100,10);
square(100,120,10);
square(100,80,10);
line(90,60,110,60);
rectMode(CENTER);
fill(255,165,0);
triangle(100,50,125,50,100,45);
let noseTipX = snowmanX + (25 * noseDirection);
}
function draw(){
    background(220);
    polarBear() 
    image(christmasTree,200,0,200,100);
    image(christmasTree,200,50,200,100);
    image(christmasTree,200,100,200,100);
    image(christmasTree,200,150,200,100);
    image(christmasTree,200,200,200,100);
    image(christmasTree,200,250,200,100);
    image(christmasTree,200,300,200,100);
    image(christmasTree,200,350,200,100);
    image(christmasTree,200,400,200,100);
    image(christmasTree,200,450,200,100);
    image(christmasTree,200,500,200,100);
}

function keyPressed(){
if (keyCode === LEFT_ARROW){
    noseDirection = -1;
    
}
else if (keyCode === RIGHT_ARROW){
noseDirection = 1;
}
}