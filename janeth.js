penRGB(0, 0, 0, 1);
dot(900);
drawAllshooting();
drawAllstars();
function drawAllstars(n) {
  for (var i = 0; i < 40; i++) {
    moveTo(randomNumber(5, 317), randomNumber(60, 300));
    drawStar();
    penUp();
  }
}
function drawStar() {
  penRGB(255, 255, 255, 1);
  penDown();
  dot(3);
  drawPlus();
  penRGB(255, 255, 255, .4);
  dot(6);
  penUp();
}
function drawAllshooting(__) {
  for (var i = 0; i < 3; i++) {
    moveTo(randomNumber(28, 320), randomNumber(80, 305));
    drawShootingstar();
  }
}
function drawShootingstar() {
  penDown();
  penRGB(204, 0, 255, .4);
  drawTail();
  penRGB(255, 255, 230, .4);
  drawTail();
  penRGB(51, 153, 255, .4);
  drawTail();
  penRGB(255, 255, 255, 1);
  dot(3);
  penRGB(255, 255, 255, .4);
  dot(6);
  penUp();
}
function drawTail() {
  penDown();
  penWidth(4);
  moveForward(30);
  moveBackward(30);
  turnRight(10);
  penUp();
}
function drawPlus() {
  penDown();
  penWidth(.5);
  moveForward(8);
  moveBackward(16);
  moveForward(8);
  turnRight(90);
  moveForward(8);
  moveBackward(16);
  moveForward(8);
  penUp();
}
hide();
