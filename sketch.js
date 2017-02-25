/* still not sure where I am going with my project but I decided to just
play around for a bit and see where it goes. This is the result of that.
*/


function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(200, 200, 250);
  thing(10, 10, 10);
  thing(100, 25, 100);
  thing(20, 25, 50);
  thing(200, 200, 75);
}

function thing(x, y, d){
  
  	for (x; x<400; x+=30){
      strokeWeight(5);
      stroke(100, 100, 250);
      line(x, y, mouseX+d, mouseY+d);
    }//x for loop end
  
}// thing end