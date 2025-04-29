function setup() {
  createCanvas(900, 900);
}
let olhoX;
let olhoY;
function draw( ){
  background("rgb(256,150,27)");
  fill("pink")
circle(450,450,500);// rosto
  fill("white")
circle(350,400,140);// olho esquerdo
circle(550,400,140);// olho direito
line(600,550,300,550);// boca
  fill("#3F51B5")
triangle(443,459,500,530,400,530);// nariz
line(369,313,240,310);// Sobrancelha esquerda
  line(636,322,500,315);// Sobrancelha direita
  olhoX = map(mouseX, 20, 500, 349, 403);
  olhoY = map(mouseY, 20, 500, 547, 395),
  circle(olhoX, olhoY, 10);// nova pupila esquerda
  circle(olhoX + 150, olhoY, 10);// nova pupila direita
  if (mouseIsPressed) {
   console.log(mouseX, mouseY);
   }
 }
