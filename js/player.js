class Player {
  constructor(stage) {
    this.x = 100;
    this.y = 250;
    this.width = 15;
    this.height = 15;
    this.moving = false;
    this.speed = 3;
    this.velX = 0;
    this.velY = 0;
    this.falling = true;
    this.stage = stage;
    this.gravity = 0.5;
  }

  move(key) {
    if(this.velX === this.speed) this.velX--;
    if (key === 'ArrowRight' && this.moving) {
      this.velX++;
    } else if (key === 'ArrowLeft' && this.moving) {
      this.velX--;
    }
  }

  physics() {
    if (this.x > this.stage.width - this.width) {
      this.x = this.stage.width - this.width;
    }
    if (this.falling) {
      this.y += this.gravity;
    }
  }
}


export default Player;
