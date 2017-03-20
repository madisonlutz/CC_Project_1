//PROJECT 1
//adjective: UNFAIR
//by: Madison Lutz
//references/credit given when necessary in the comments

/* 
		HOW TO PLAY:
		- There are two modes (easy and standard)
    - You can switch between modes by pressing any key.
    - Click to shoot the lasers.
    - Dip below 0 lives and you lose.
    - Exceed 100 lives and you win.
    - Game restarts every minute and returns to standard mode. 
    - The red meter on the right tracks the time.
    - The player begins with 50 lives at the start of the game. 

*/

var sunset = [];
var yCord = 0.0;
var i;
var sMeter;
var lasRandX;
var lasRandY;
var tarRandX;
var tarRandY;
var value = 1; //start in standard mode
var lives = 50;

function setup() { 
  cursor(CROSS);
  createCanvas(windowWidth, windowHeight);
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
  ellipse(mouseX,mouseY, 17, 17);

//return to start
	if (second()==0 || second()==1 || second()==2) {
    start((width/2)-200, (height/2),40); //return to start text
    tarRandX = 0;
    tarRandY = 0;
    lives = 50;
    value = 1;
  }//if end
  
//targets begin random movement
  else {
    tarRandX = random(50,(width-100));
  	tarRandY = random(50,(height-100));
  } //else end
  
//if the laser hits a randomly moving target display 'HIT!' (standard)
  if (tarRandX == lasRandX && tarRandY == lasRandY && mouseIsPressed && value == 1){
    hit(mouseX+20, mouseY+50, 50);
  }//if end
  
//if the laser misses a randomly moving target display 'MISS!' (standard)
  if (tarRandX != lasRandX && tarRandY != lasRandY && mouseIsPressed && value == 1){
    miss(mouseX+20, mouseY+50, 50);
  }//if end
  
//easy mode hit 
  if (value == 0 && mouseIsPressed){
    hit(mouseX+20, mouseY+50, 50);
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
  if (second()<=60 && second()>40){
  	meter('red');
  }
  
  if (second()<=40 && second()>20){
  	meter('yellow');
  }
  
  if (second()<=20 && second()>0){
  	meter('green');
  }
  
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
    text ('lives remaining:', 30, (height-30));
    text ( lives, 175, (height-30));
  }

  
//if lives < 0
  if (lives <= 0) {
    background(0);
    fill('red');
    noStroke();
    textSize(40);
    text ('GAME OVER', (width/2)-100, (height/2))  
  }
  
print (value); //checking to make sure the different modes work
  
} //draw end

function meter(f){ //creating the time meter on the right
  sMeter = second()*5;
  fill(f);
  noStroke();
  rect((width-50), 50+sMeter, 25, 300-sMeter);
  noFill();
  strokeWeight(5);
  stroke(255);
  rect((width-50), 50, 25, 300);
} //meter end


function laser(){ //creating the laser
  if (mouseIsPressed) {
  	lasRandX = random(50,550);
  	lasRandY = random(50, 350);
  	stroke(0, 255, 4); //neon green color
  	line(mouseX, mouseY, lasRandX, lasRandY);
  } //if mouseIsPressed end
}	//laser end

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
  } 
  else {
    value = 0;
    print('0');
  }
} //keyPressed end

function standard(x, y, s){
  fill(255);
  noStroke();
  textSize(s);
  text("standard mode", x, y);
} //standard end

function easy(x, y, s){
  fill(255);
  noStroke();
  textSize(s);
  text("easy mode", x, y);
} //easy end

function beach (){ //creating the winner screen
  background(191, 251, 255);
  sun();
  water();
  winner((width/2)-90, (height/2)+200, 40);
} //beach end


function sun (){
  for (var r = 0; r<=300; r++){ //creating the rays around the sun
    for(var i = 0; i<=4; i++){
      noFill();
			strokeWeight(10);
      stroke(sunset[i]); //fill with colors stored in my array
      ellipse(width/2, height/2, 200+r, 200+r);
    	r = r + 40;
    } //i for-loop end
  } //r for-loop end
	noStroke();
  fill(sunset[0])
  ellipse(width/2, height/2,200,200); //creating the main sun 
}//sun end

function water (){
  /* This way of creating waves comes from the p5js.org examples.
  	 The original by Daniel Shiffman.
  	 https://p5js.org/examples/math-noise-wave.html
  	 I've included notes to show that I understand what is happening
     line by line and adapted the code as needed.
  */
  
  noStroke(); //I added this because I didn't want a black stroke along the top of the wave
  fill(0, 169, 255); //I changed the fill color to an ocean-like blue
 
  beginShape(); //this way of creating waves begins by creating a polygon

    var xCord = 0; //the xCord is the value for the x coordinate of the noise
  
		/* the noise function in p5.js returns the Perlin noise
    value at a specific coordinate.The Perline noise value is like 
    random () but more natural. It can be determined in 1D, 2D, or 3D
    depending on the supplied coordinates. Here I am just using x and y
    so it will only return values along the x and y axis. That is why my
    waves move up and down and span the width of the screen 
    but the wave don't move front to back (depth).
    */

    for (var x = 0; x <= width; x += 10) { 
    /*this for-loop creates vertices of the polygon...
      because it is in a for-loop where the x value is increasing by 10
      each time through it is creating a new vertex every 10 pixels as 
      long as x is less than or equal to the width
    */

      var y = map(noise(xCord, yCord), 0, 1, (height/2),(height/2)+50);
      /* (above) this determines the y value of the vertices by mapping
      	 the noise values from 0 to 1 to be 200 to 300. This keeps the 
         waves from getting too high. They stay between 200 and 300. If
         you were to change these values the waves would get either bigger
         (bigger dips) or calmer (shallower dips).
      */
      vertex(x, y); //this creates a new vertex
      xCord += 0.03; //at the end of the for loop the xCord value increase
      //playing with this value also changes whether your have calm or stormy seas

    }

   	yCord += 0.01; //everytime through the water function the yCord increase
    vertex(windowWidth, windowHeight); //vertex at the bottom right corner
    vertex(0, windowHeight); //vertex at the bottom left corner
  endShape(CLOSE); //closes the ocean polygon
  
}

function winner(x, y, s){
  fill(255);
    noStroke();
    textSize(s);
    text("YOU WON!", x, y);
}



