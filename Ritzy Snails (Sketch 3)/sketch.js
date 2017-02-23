//sketch 3 - Madison Lutz
//click to make them all blink

function setup() { 
  createCanvas(800, 800);
	background (255);
} 

function draw() { 
  ellipseMode (CENTER);
	
	
//monster 1
		dress(0, 0, 244,156,245);


		if (mouseIsPressed) {
				//close eyelid
			close (0, 0, 219, 173, 255);	
		}

		else {
			open (0, 0);

		}//else end

		monacle (0, 0);

		faceplus (0, 0);

		extras (0, 0, 169,237,242);
	
//monster 2
	push ();
		scale (0.5);
		dress(-100, 0, 255, 248, 68);


		if (mouseIsPressed) {
				//close eyelid
			close (-100, 0, 139, 221, 232);	
		}

		else {
			open (-100, 0);

		}//else end

		monacle (-100, 0);

		faceplus (-100, 0);

		extras (-100, 0, 125, 33, 237);
	pop ();
	
//monster 3
	push ();
		scale (0.5);
		dress(900, 0, 63, 165, 244);


		if (mouseIsPressed) {
				//close eyelid
			close (900, 0, 255, 166, 58);	
		}

		else {
			open (900, 0);

		}//else end

		monacle (900, 0);

		faceplus (900, 0);

		extras (900, 0, 189, 242, 67);
	pop ();
}//end draw function



function dress (x, y, r, g, b){
	//dress, body?
		stroke(0);
		strokeWeight(5);
		fill(r, g, b);
		triangle(400+x, 200+y, 200+x, 600+y, 600+x, 600+y);

}

function close (x, y, r, g, b){
		//close eyelid
			stroke(0);
			strokeWeight (5);
		
		//top eyelid
			fill (r, g, b);
			arc(400+x, 200+y, 200, 200, PI, TWO_PI, CHORD);
		//bottom eyelid
			fill (250,227,228);
			arc(400+x, 200+y, 200, 200, 0, PI, CHORD);

		//eyelashes
			line (302+x, 202+y, 289+x, 216+y);
			line (322+x, 202+y, 319+x, 216+y);
			line (342+x, 202+y, 339+x, 216+y);
			line (362+x, 202+y, 359+x, 216+y);
			line (382+x, 202+y, 379+x, 216+y);
			line (402+x, 202+y, 402+x, 216+y);
			line (422+x, 202+y, 425+x, 216+y);
			line (442+x, 202+y, 445+x, 216+y);
			line (462+x, 202+y, 465+x, 216+y);
			line (482+x, 202+y, 485+x, 216+y);
			line (500+x, 202+y, 510+x, 216+y);
	}

function open (x, y){
	//open eye
		// white of eye
			stroke(0);
			strokeWeight (5);
			fill(255);
			ellipse (400+x, 200+y, 200, 200);

		//pupil
			fill(0);
			ellipse (400+x, 200+y, 100, 100);

		//reflection oval
			noStroke (); 
			fill(255);
			ellipse (412+x, 190+y, 10, 20);

		//reflection rectangle
			rect (427+x, 180+y, 8, 4);

		//eyelashes
			stroke (0);
			line (300+x, 200+y, 284+x, 197+y); 
			line (303+x, 180+y, 285+x, 170+y);
			line (310+x, 157+y, 297+x, 143+y);
			line (327+x, 132+y, 316+x, 120+y);
			line (345+x, 117+y, 340+x, 99+y);
			line (371+x, 104+y, 365+x, 87+y);
			line (393+x, 100+y, 393+x, 82+y);
			line (416+x, 101+y, 421+x, 86+y);
			line (439+x, 108+y, 452+x, 91+y);
			line (460+x, 120+y, 474+x, 102+y);
			line (479+x, 139+y, 495+x, 125+y);
			line (494+x, 160+y, 510+x, 152+y);
			line (497+x, 176+y, 515+x, 168+y);
			line (500+x, 200+y, 516+x, 197+y);
	
}

function monacle (x, y){
	//monacle
		rectMode (CENTER);
		stroke(0);
		fill (240, 240, 240, 100);
		rect(400+x, 200+y, 250, 235);

	//monacle handle
		line (275+x, 211+y, 256+x, 210+y); 
		line (256+x, 210+y, 256+x, 410+y);

	//monacle reflection
		strokeWeight (1);
		line (289+x, 124+y, 309+x, 103+y);
		line (287+x, 143+y, 327+x, 102+y);
	
}

function faceplus (x, y){
	//smile
		 noFill();
		 stroke (116,6,85);
		 strokeWeight (5);
		 arc(400+x, 330+y, 20, 15, 0, PI);

	//left arm
		stroke (0);
		strokeWeight (5);
		line (307+x, 387+y, 256+x, 361+y);

	//left hand
		fill (250,227,228);
		ellipse (256+x, 361+y, 30, 30);


	//right arm
		line (494+x, 387+y, 555+x, 421+y);

	//right hand
		fill (250,227,228);
		ellipse (555+x, 421+y, 30, 30);

	//legs
		line (330+x, 602+y, 330+x, 653+y);
		line (470+x, 602+y, 470+x, 653+y);

	//feet
		fill (249,252,61);
		ellipse (315+x, 660+y, 40, 20);
		ellipse (485+x, 660+y, 40, 20);
	
}

function extras (x, y, r, g, b){
	//pockets
		fill (r, g, b);
		arc(325+x, 500+y, 50, 70, 0, PI, CHORD);
		arc(470+x, 500+y, 50, 70, 0, PI, CHORD);

	//belt or waistband
		strokeWeight (10);
		line (284+x, 436+y, 515+x, 436+y);
		strokeWeight (5);
		ellipse (402+x, 439+y, 20, 30);
	
}










