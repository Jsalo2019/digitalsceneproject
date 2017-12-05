drawBackground();
drawMoon();
drawGround();
drawAllBirds();
drawAllClouds();
function drawBackground(n) {
  penRGB(00, 00, 26, 1);
  dot(1000);
}
// Ends must be smaller than the Middle
function drawCloud(Ends, Mid) {
  penRGB(221, 224, 230, 1);
  penDown();
  dot(Ends);
  move(18, 0);
  dot(Mid);
  move(18, 0);
  dot(Mid);
  move(18, 0);
  dot(Ends);
  penUp();
}
// Only change variable for the for loop! 
function drawAllClouds() {
  for (var i = 0; i < 3; i++) {
    moveTo(randomNumber(195, 320), randomNumber(45, 140));
    drawCloud(randomNumber(12, 14), randomNumber(18, 22));
  }
}
// Change the width for fatter or skinnier bird.
function drawBird(width) {
  penRGB(115, 115, 115, 1);
  penWidth(width);
  penDown();
  turnTo(35);
  moveForward(10);
  arcRight(180, 4);
  turnTo(35);
  arcRight(180, 4);
  moveForward(10);
  penUp();
}
function drawAllBirds() {
  for (var i = 0; i < 4; i++) {
    moveTo(randomNumber(0, 300), randomNumber(200, 300));
    drawBird(3);
  }
}
function drawGround() {
  moveTo(0, 450);
  penDown();
  penWidth(100);
  penRGB(5, 108, 25, 1);
  turnTo(0);
  turnRight(90);
  moveForward(320);
  penUp();
}
// Add this fuction after the background and ground.
function drawMoon() {
  moveTo(290, 30);
  penColor("white");
  penDown();
  dot(75);
  penRGB(75, 75, 75, .1);
  dot(75);
  penUp();
  moveTo(230, 0);
}
hide();
