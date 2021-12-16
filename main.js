 img = "" 
 status = "" 
 object = []
 function setup(){
     canvas = createCanvas(380, 380); 
     canvas.center(); 
     objectdetector = ml5.objectDetector('cocossd' ,modelLoaded); 
     document.getElementById("status").innerHTML = "status : Detecting object"; 
     video = createCapture(VIDEO);
video.size(700, 600);
video.hide();
 } 
function modelLoaded() 
{
console.log("Model is Loaded!") 
status = true;  
objectdetector.detect(video, gotResult); 
} 

 function preload(){

 } 
function draw()
{
image(video, 0, 0, 380, 380); 

if (status != "") 
{ 
    r= random(255);
    g= random(255);
    b= random(255);
    objectDetector.detect(video, gotResult);
    for(i = 0; i< object.length; i++) 
    {
        document.getElementById("status").innerHTML = "status : object detected" 
        document.getElementById("number_of_objects").innerHTML = "number of objects that are detected are ..."+ object.length;

        fill(r, g ,b) 
        percent = floor(object[i].confidence * 100); 
        text(object[i].label + "" +  percent + "%", object[i].x,object[i].y); 
        noFill(); 
        stroke(r, g, b); 
        rect(object[i].x, object[i].y, object[i].width, object[i].height); 
    }
}
   

function gotResult(error, results) 
{ if (error) 
    {
        console.log(error);
    } 
     console.log(results);
    objects = results;
     }
    }