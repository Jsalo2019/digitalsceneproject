function drawMoonLight() {
  for (var i = 0; i < 1000; i++) {
    penRGB(185, 85, 215, 1);
    moveTo(randomNumber(0, 320), randomNumber(0, 320));
    dot(1000);
  }
}
function drawPerson() {
  // Draw Head
  penWidth(3);
  dot(10);
  // Draw Upper Body
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
  //Draw Lower Body
  moveForward(randomNumber(15, 30));
  turnLeft(45);
  moveForward(25);
  moveBackward(25);
  turnRight(90);
  moveForward(25);
}