function setup() {
    createCanvas(1000, 500);
    background("lightGreen");
  }
  
  function draw() {
  
    stroke("blue");
    fill("white");
  
    //console.log(mouseISPressed);
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 15);
    }
  }
  