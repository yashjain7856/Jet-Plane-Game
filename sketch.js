let blackJet;
let whiteJet;
let timer=30;
let blackJetImage;
let whiteJetImage;
const ROTATE_AMOUNT = 0.05;

function preload() {
	blackJetImage = loadImage("black-jet.png");
  whiteJetImage = loadImage("white-jet.png");
  backgroundImage = loadImage("backdrop.jpg");
}

function setup() {
  createCanvas(500, 500);
  blackJet = new Jet(blackJetImage, false);
  whiteJet = new Jet(whiteJetImage, true);
}

function draw() {
  background(backgroundImage);
  
  // add the enemy bullets into the update function
  blackJet.update(whiteJet);
  whiteJet.update(blackJet);
  
  blackJet.draw();
  whiteJet.draw(); 
    
  textSize(80);
  fill(0);
  text(blackJet.score, 350, 140);
  
  fill(255);
  text(whiteJet.score, 350, 70);

  textSize(50);
  fill(255);
  text(timer, 210, 490);
  if(timer<=0)
  {
    noLoop();
    background(0,0,0,0,5)
    textSize(50);
    fill(255);
    text("Game Over", 100, 250);
    if(whiteJet.score>blackJet.score)
    {
      text("White Wins", 100, 350);
    }
    else if (whiteJet.score<blackJet.score)
    {
      text("Black Wins", 100, 350);
    }
    else 
    {
      text("It's a tie!", 100, 350);
    }
  }
}
setInterval(function(){ timer = timer-1; },1000);

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
  	blackJet.rotateAmount = ROTATE_AMOUNT;
  } else if (keyCode === LEFT_ARROW) {
  	blackJet.rotateAmount = -ROTATE_AMOUNT;
  } else if (keyCode === 68) {
    // d
		whiteJet.rotateAmount = ROTATE_AMOUNT;
  } else if (keyCode === 65) { 
  	// a
    whiteJet.rotateAmount = -ROTATE_AMOUNT;
  } else if (keyCode === UP_ARROW) {
    blackJet.shoot();
  } else if (keyCode === 87) {
  	// w
    whiteJet.shoot();
  }
}

function keyReleased() {
	if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
  	blackJet.rotateAmount = 0;
  } else if (keyCode === 65 || keyCode === 68) {
  	whiteJet.rotateAmount = 0;
  }
}

