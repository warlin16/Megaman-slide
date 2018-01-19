class Player {
  constructor(stage) {
    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.speed = 3;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.grounded = false;
    this.gravity = 0.2;
    this.slide = 0.8;
    this.keysPressed = {};
    this.bass = new Image();
    this.bass.src = 'assets/bass.png';
  }

  move() {
    if (this.keysPressed.ArrowRight) {
      if (this.velX < this.speed) this.velX++;
    }
    if (this.keysPressed.ArrowLeft) {
      if (this.velX > -this.speed) this.velX--;
    }
    if (this.keysPressed.ArrowUp) {
      if (this.grounded) {
        this.jumping = true;
        this.velY = -(this.speed * 2);
        this.grounded = false;
      }
    }
    this.ctx.drawImage(this.bass, 0, 370, 50, 58,
      this.x, this.y, this.width, this.height);
  }

  physics() {
   if (this.x > this.stage.width - this.width) {
     this.x = this.stage.width - this.width;
   }
   if (this.x < 0) {
     this.x = 0;
   }
   if (this.y < 0) {
     this.velY = 0;
     this.y = 0;
   }
   if (this.y > this.stage.height - this.height) {
     this.y = this.stage.height - this.height;
     this.grounded = true;
     this.velY = 0;
   }

   if (!this.grounded) this.velY += this.gravity;

   console.log();
   this.velX *= this.slide;
   this.x += this.velX;
   this.y += this.velY;
   this.move();
 }

  render() {
    this.physics();
  }
}


export default Player;
