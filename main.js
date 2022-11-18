img = "";
status = "";
objects = [];

function preload(){
img = loadImage("cream.jpg")
img = loadImage("box.jpg")
img = loadImage("buds.jpg")
img = loadImage("pen.jpg")
img = loadImage("remote.jpg")
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 640, 420);
    
    if(status !="")
    {
     r = random(255);
     g = random(255);
     b = random(255);
     objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) 
        {
         document.getElementById("status").innerHTML = "Status : Object Detected";  
         document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
    
         fill("rgb");
         percent = floor(objects[i].confidence * 100);
         text(objects[i].label + " "+percent + "%", objects[i].x + 15, objects[i].y + 15);
         noFill();
         stroke("rgb");
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    
    }