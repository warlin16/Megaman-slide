class Player {
  constructor(stage) {
    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = 0;
    this.y = 600;
    this.width = 50;
    this.height = 50;
    this.speed = 6;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.falling = true;
    this.gravity = 1.2;
    this.slide = 0.8;
    this.keysPressed = {};
  }

  move() {
    if (this.keysPressed.ArrowRight) {
      this.velX += this.speed;
    } else if (false) {
      this.velX -= this.speed;
    } else if (false) {
      this.falling = !this.falling;
      this.jumping = !this.jumping;
      this.velY -= this.speed;
      this.distance = this.y;
    }
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
      this.jumping = false;
      this.falling = true;
      this.y = 0;
    }
    if (this.y > this.stage.height - this.height) {
      this.y = this.stage.height - this.height;
    }
    if (this.jumping && this.y <= this.distance - 35) {
      this.velY = 0;
      this.jumping = false;
      this.falling = true;
    }
    if (this.falling) {
      this.y += (this.velY + this.gravity);
    }

    this.velX *= this.slide;
    this.x += this.velX;
    this.y += this.velY;
    this.move();
  }

  render() {
    const bass = new Image();
    bass.src = 'assets/bass.png';
    this.ctx.drawImage(bass, 0, 0, 50, 58,
      this.x, this.y, this.width, this.height);
  }
}


export default Player;
