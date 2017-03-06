//adjective: UNFAIR
//by: Madison Lutz
//references/credit given when necessary in the comments

var sunset = [];
var yCord = 0.0;
var i;
var sMeter;
var lasRandX;
var lasRandY;
var tarRandX;
var tarRandY;
var value = 1;
var lives = 50;

function setup() { 
  cursor(CROSS);
  createCanvas(600, 400);
  ellipseMode(CENTER);
  stroke(0);
  
  sunset [0] = color(255, 255, 73);
  sunset [1] = color(255, 221, 0);
  sunset [2] = color(255, 178, 0);
  sunset [3] = color(255, 127, 0);
  sunset [4] = color(255, 67, 0);

} 

function draw() { 

	background(0);
  
//target focus circle
  strokeWeight(1);
	noFill();
  stroke('red');
//circle shooter aiming thing
  ellipse(mouseX,mouseY, 17, 17);

//return to start
	if (second()==0 || second()==1 || second()==2) {
    start(100,200,40);
    tarRandX = 0;
    tarRandY = 0;
    lives = 50;
  }//if end
  
//targets begin random movement
  else {
    tarRandX = random(50,550);
  	tarRandY = random(50,350);
  } //else end
  
//if the laser hits a randomly moving target display 'HIT!' 
  if (tarRandX == lasRandX && tarRandY == lasRandY && mouseIsPressed && value == 1){
    hit(533, 30, 20);
  }//if end
  
//if the laser misses a randomly moving target display 'MISS!'
  if (tarRandX != lasRandX && tarRandY != lasRandY && mouseIsPressed && value == 1){
    miss(533, 30, 20);
  }//if end
  
//easy mode hit 
  if (value == 0 && mouseIsPressed){
    hit(543, 30, 20);
  }//if end
  
//moving target if value == 1
  if (value == 1) {
  	target (tarRandX, tarRandY);
    standard(27, 30, 20);
  }
  
//moving target if value == 0
  if (value == 0) {
  	target (lasRandX, lasRandY);
    easy(27,30,20);
  }
  
//countdown meter
  meter();
  
//green lasers
  laser();

// lives
  if (mouseIsPressed && value == 1) {
    lives = lives - 1;
  }
  
  if (mouseIsPressed && value == 0){
    lives = lives + 1;
  }
  
  if (lives >= 100) {
    beach();
    value = 2;
    
    
  }


//lives count
  if (value == 0 || value == 1){
    fill (255);
    noStroke();
    textSize(20);
    text ('lives remaining:', 30, 370);
    text ( lives, 175, 370);
  }

  
//if lives < 0
  if (lives <= 0) {
    background(0);
    fill('red');
    noStroke();
    textSize(40);
    text ('GAME OVER', 175, 200)
    
    
  }
  
print (value); //checking to make sure the different modes work
  
} //draw end

function meter(){
  sMeter = second()*5;
  fill('red');
  noStroke();
  rect(550, 50+sMeter, 25, 300-sMeter);
  noFill();
  strokeWeight(5);
  stroke(255);
  rect(550, 50, 25, 300);
  
}

function laser(){
  if (mouseIsPressed) {
  	lasRandX = random(50,550);
  	lasRandY = random(50, 350);
  	stroke(0, 255, 4);
  	line(mouseX, mouseY, lasRandX, lasRandY);

  }
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

function start(x, y, s){
  fill(255);
  noStroke();
  textSize(s);
  text("RETURN TO START", x, y); 
} //start end

function hit(x, y, s){
  fill('green');
  noStroke();
  textSize(s);
  text("HIT!", x, y);
} //hit end

function miss(x, y, s){
  fill('red');
  noStroke();
  textSize(s);
  text("MISS!", x, y);
} //miss end

function keyPressed() {
  if (value === 0) {
    value = 1;
    print('1');
  } else {
    value = 0;
    print('0');
  }
} //keyPressed end

function standard(x, y, s){
  fill(255);
  noStroke();
  textSize(s);
  text("standard mode", x, y);
} //miss end

function easy(x, y, s){
  fill(255);
  noStroke();
  textSize(s);
  text("easy mode", x, y);
} //miss end

function beach (){
  background(191, 251, 255);
  sun();
  water();
  winner(200, 350, 40);
}


function sun (){
	
/*so this is how I want this to look but I am not sure I understand
  why this way of coding it is producing these results. I tried commenting
  out sections to see how it work and I am still a little confused. For
  example if you comment out "r = r +40;" and then change "r++" to "r+=40"
  why does the stroke color change?
*/
  for (var r = 0; r<=300; r++){
    for(var i = 0; i<=4; i++){
      noFill();
			strokeWeight(10);
      stroke(sunset[i]);
      ellipse(300, 250, 200+r, 200+r);
    	r = r + 40;
    } //i for-loop end
  } //r for-loop end
 
  
  noStroke();
  fill(sunset[0])
  ellipse(300,250,200,200);
    
    
}//sun end

function water (){
  //this way of creating waves comes from the p5js.org examples
  //https://p5js.org/examples/math-noise-wave.html
  //I've included notes to show that I understand what is happening line by line
  
  noStroke(); //I added this because I didn't want a black stroke along the top of the wave
  fill(0, 169, 255); //I changed the fill color to an ocean-like blue
 
  beginShape(); //this way of creating waves begins by creating a polygon

    var xCord = 0; //the xCord is the value for the x coordinate of the noise
  
		/* the noise function in p5.js returns the Perlin noise
    value at a specific coordinate.The Perline noise value is like 
    random () but more natural. It can be determined in 1D, 2D, or 3D
    depending on the supplied coordinates. Here I am just using x and y
    so it will only return values along the x and y axis. That is why my
    waves move up and down and side to side by not front to back.
    */

    for (var x = 0; x <= width; x += 10) { 
    /*this for-loop creates vertices of the polygon...
      because it is in a for-loop where the x value is increasing by 10
      each time through it is creating a new vertex every 10 pixels as 
      long as x is less than or equal to the width
    */

      var y = map(noise(xCord, yCord), 0, 1, 200,300);
      /* (above) this determines the y value of the vertices by mapping
      	 the noise values from 0 to 1 to be 200 to 300. This keeps the 
         waves from getting to high. They stay between 200 and 300. If
         you were to change these values the waves would get either bigger
         (bigger dips) or calmer (shallower dips).
      */
      vertex(x, y); //this creates a new vertex
      xCord += 0.03; //at the end of the for loop the xCord value increase
      //playing with this value also changes whether your have calm or stormy seas

    }

   	yCord += 0.01; //everytime through the water function the yCord increase
    vertex(width, height); //vertex at the bottom right corner
    vertex(0, height); //vertex at the bottom left corner
  endShape(CLOSE); //closes the ocean polygon
  
}

function winner(x, y, s){
  fill(255);
    noStroke();
    textSize(s);
    text("YOU WON!", x, y);
}



