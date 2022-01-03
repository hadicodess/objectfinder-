img = "" 
 status = "" 
 object = [] 
 text = "object" 


 function setup(){
     canvas = createCanvas(380, 380); 
     canvas.center(); 
  
     video = createCapture(VIDEO);
video.size(700, 600);
video.hide();
 }   



 function start() 
 {
    objectdetector = ml5.objectDetector('cocossd' ,modelLoaded); 
    document.getElementById("status").innerHTML = "status : Detecting object";  

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
}
   

function gotResult(error, results) 
{ if (error) 
    {
        console.log(error);
    } 
     console.log(results);
    objects = results;
     }
