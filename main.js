img ="";
status = "";
objects =[];

function preload()
{
img = loadImage('dog_cat.jpg');
}


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    vidoe.size(380, 380);
    video.hide();
    
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML =" Status : Object Detected";
}

function draw() 
{
    imagevideo, 0, 0, 380, 380;

    if(status != "")
    {
        r = random(255)
        g = random(225)
        b= random(225)
        objectDetector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++)
    {
        document.getElementById("status").innetHTML = "Status :  Object Detected ";
        document.getElementById("status").innetHTML = "Number of objects detected are : "+object.length;
        fill(r, g, b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " "+ percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke(r, g, b);
        rect(objects[i].x -15, objects[i].y, objects[i].width, objects[i].height);

    }
} 

}

function modelLoaded() 
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) 
{
    if (error) {
        console.log(error);
    }

    console.log(results);
    objects = results;
}








