
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

// lives ease
  if (mouseIsPressed && value == 1) {
    lives = lives - 1;
  }
  
  if (mouseIsPressed && value == 0){
    lives = lives + 1;
  }
  
  if (lives >= 100) {
    beach();
    
  }

//lives count
	fill (255);
  noStroke();
  textSize(20);
  text ('lives remaining:', 30, 370);
  text ( lives, 175, 370);
  
//if lives < 0
  if (lives <= 0) {
    background(255);
    fill(0);
    noStroke();
    textSize(40);
    text ('GAME OVER', 175, 200)
    
    
  }
}

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
  	print("testing");
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

function beach(){
  background(142, 251, 255);
  ellipseMode(CENTER);
}



