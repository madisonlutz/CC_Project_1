/* Was getting stressed and frustrated working on this project. I 
suppose this is a manifestation of those adjectives. But I kind of like
where this could go!
*/



function setup() { 
  createCanvas(600, 600);
  frameRate(hour());
} 

function draw() { 

  background (second()*4.3, second()*4.3, second()*4.3);
  target ((second()*(random(10))), 300);
  target (300, (second()*(random(10))));
  target (0, (second()*(random(10))));
  target ((second()*(random(10))), 0);
  target (600, (second()*(random(10))));
  target ((second()*(random(10))), 600);
  
  dot (300, 300);
}

function target(x, y){
  	ellipseMode(CENTER);
  	noStroke();
  	fill (211, 0, 0);
  	ellipse (x, y, 100, 100);
  	fill(255);
  	ellipse (x, y, 65, 65);
  	fill (211, 0, 0);
  	ellipse (x, y, 30, 30);
} // target end
  
function crosshair (x, y){
//I am trying to get one of those little crosshair + signs to follow my
//cursor but I forget how to do that...
  
} //crosshair end
  
function dot (x, y){
  fill(255 - (second()*4.25));
  ellipse ((second()*4)+x, (second()*4)+y, 10, 10);
}