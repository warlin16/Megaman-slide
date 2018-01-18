class Player {
  constructor(stage) {
    this.stage = stage;
    this.x = 0;
    this.y = 600;
    this.width = 50;
    this.height = 50;
    this.moving = false;
    this.speed = 3;
    this.velX = 0;
    this.velY = 0;
    this.falling = true;
    this.ctx = this.stage.getContext('2d');
    this.gravity = 0.8;
  }

  move(key) {
    if (key === 'ArrowRight' && this.moving) {
      this.velX++;
    } else if (key === 'ArrowLeft' && this.moving) {
      this.velX--;
    } else if (key === 'ArrowUp' && this.moving) {
      this.velY -= 2;
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
      this.y = 0;
    }
    if (this.y > this.stage.height - this.height) {
      this.y = this.stage.height - this.height;
    }
    if (this.falling) {
      this.y += (this.velY + this.gravity);
    }
  }

  render() {
    const bass = new Image();
    bass.src = 'assets/bass.png';
    this.ctx.clearRect(0, 0, this.stage.width, this.stage.height);
    this.ctx.drawImage(bass, 0, 0, 50, 58,
      this.x, this.y, this.width, this.height);
  }
}


export default Player;
