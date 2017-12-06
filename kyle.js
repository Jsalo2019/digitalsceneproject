function drawMoonLight() {
  for (var i = 0; i < 1000; i++) {
    penRGB(0, 0, 26, 1);
    moveTo(randomNumber(0, 320), randomNumber(0, 320));
    dot(1000);
  }
}
function drawPerson() {
  //Setting up coordinates
  moveTo(randomNumber(0, 400), randomNumber(360, 380));
  //colorsetup
  penRGB(0, 255, 255, 1);
  // Draw Head
  penWidth(3);
  dot(10);
   //draw upper body will make the arms and sets up the lower body for directions. 
  //It also changes the size of the upper body for randomized heights. 
  drawUpperBody();
  //draw lower body will make the legs for you 
 drawLowerBody();
}
function drawUpperBody(__) {
  penDown();
  turnLeft(90);
  turnLeft(90);
  moveForward(randomNumber(15, 25));
  turnLeft(90);
  moveForward(25);
  turnLeft(90);
  turnLeft(90);
  moveForward(25);
  moveForward(25);
  moveBackward(25);
  turnLeft(90);
}
//Made by Kyle Mora 
function drawLowerBody() {
   moveForward(randomNumber(15, 30));
  turnLeft(45);
  moveForward(25);
  moveBackward(25);
  turnRight(90);
  moveForward(25);
  penUp();
}
//Made by Kyle Mora 
function drawAllPeople() {
  for (var i = 0; i < 4; i++) {
    turnTo(0);
    drawPerson();
