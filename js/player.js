class Player {
  constructor() {
    this.x = 100;
    this.y = 250;
    this.width = 15;
    this.height = 15;
    this.moving = false;
    this.speed = 3;
    this.velX = 0;
    this.velY = 0;
    this.falling = true;
  }

  move(key) {
    if (key === 'ArrowRight' && this.move) {
      if (this.velX < this.speed) {
        this.velX++;
      }
      this.x += this.velX;
    } else if (key === 'ArrowLeft' && this.move) {
      if (this.velX > -(this.speed)) {
        this.velX--;
      }
      this.x -= this.velX;
    }
  }
}


export default Player;
