stat = "";
objects=[];
function preload(){
img= loadImage("fruit basket.jpg");    
}

function setup(){
canvas = createCanvas(400,400);
canvas.position(450,120);
objectDetecter = ml5.objectDetector('cocossd',modalLoaded);
}
function draw(){
image(img,0,0,400,400)    
}
function modalLoaded(){
    
stat = true;
objectDetecter.detect(img , gotResults);    
}
function gotResults(error,results){
if(error){
console.log(error);    
}
console.log(results)
objects=results;
}
function draw(){
image(img,0,0,400,400);
if(stat != ""){
for(i = 0;i < objects.length; i++){
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + "" + percent+"%", objects[i].x, objects[i].y);
    noFill()
    stroke("#96595d");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }    
}    
}

