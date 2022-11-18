img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage("cream.jpg")
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center(); 
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
    }

    function gotResult(error, results)  {
        if(error) {
            console.log(error);
        }
        console.log(results);
        objects = results;
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