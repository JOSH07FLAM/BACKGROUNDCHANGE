
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
if (keyIsDown(RIGHT_ARROW)){
  background ("cyan")
}
if (keyIsDown(LEFT_ARROW)){
  background ("red")
}
if (keyIsDown(UP_ARROW)){
  background ("pink")
}
if (keyIsDown(DOWN_ARROW)){
  background ("green")
}
}




