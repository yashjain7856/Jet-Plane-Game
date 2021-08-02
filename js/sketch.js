let blackJet;
let whiteJet;
let timer=30;
let blackJetImage;
let whiteJetImage;
const ROTATE_AMOUNT = 0.05;

function preload() {
	blackJetImage = loadImage("images/black-jet.png");
  whiteJetImage = loadImage("images/white-jet.png");
}

function setup() {
  let wid=displayWidth*0.8;
  let hig=displayHeight*0.8;
  createCanvas(wid, hig);
  blackJet = new Jet(blackJetImage, false);
  whiteJet = new Jet(whiteJetImage, true);
}

function draw() {
  let wid=displayWidth*0.8;
  let hig=displayHeight*0.8;
  background(89,89,89);
  
  // add the enemy bullets into the update function
  blackJet.update(whiteJet);
  whiteJet.update(blackJet);
  
  blackJet.draw();
  whiteJet.draw(); 
    
  textSize(80);
  fill(0);
  text(blackJet.score, 40, 70);
  
  fill(255);
  text(whiteJet.score, wid-200, 70);

  textSize(50);
  fill(255);
  text(timer, wid/2, hig-30);
  if(timer<=0)
  {
    noLoop();
    textSize(50);
    fill(255);
    text("Game Over", wid/2-100, hig/2-50);
    if(whiteJet.score>blackJet.score)
    {
      text("White Wins!", wid/2-100, hig/2+50);
    }
    else if (whiteJet.score<blackJet.score)
    {
      text("Black Wins!", wid/2-100, hig/2+50);
    }
    else 
    {
      text("It's a tie!", wid/2-100, hig/2+50);
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
