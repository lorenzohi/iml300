let bubbles = [];
let mySound, bloodImg, play;

function setup() {
  createCanvas(windowWidth, 1516);

  for (let i = 0; i < 100; i++) {
    bubbles[i] = new Bubble(300, 200, 10);
  }
}

function draw() {
  background(242, 237, 231);

  for (let i = 0; i < bubbles.length; i++) {

    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = random(0, 800);
    this.y = random(0, 800);
    this.r = r;
    this.speed = random(1, 5);
  }

  move() {
    this.x = this.x + this.speed;
    this.y = this.y + this.speed;
    if (this.x > height) {
      this.x = 0;
    }
    if (this.y > width) {
      this.y = 0;
    }
  }
  show() {
    stroke(93, 107, 143);
    line(this.y, this.x, this.y + 20, this.x + 20);
  }
}
