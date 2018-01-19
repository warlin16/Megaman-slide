import CharImg from './sprite';

class Player {
  constructor(stage) {
    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = 0;
    this.y = this.stage.height - 70;
    this.width = 50;
    this.height = 50;
    this.speed = 3;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.grounded = false;
    this.gravity = 0.3;
    this.slide = 0.8;
    this.keysPressed = {};
    this.bass = new Image();
    this.bass.src = 'assets/bass.png';
    this.movingAnimation = '';
    this.animation = {
      idleAnim: new CharImg(this.bass, 0, 0, 50, 58, this.width, this.height),
      leftAnim1: new CharImg(this.bass, 302, 130, 50, 58, this.width, this.height),
      leftAnim2: new CharImg(this.bass, 245, 130, 50, 58, this.width, this.height),
      leftAnim3: new CharImg(this.bass, 188, 130, 50, 58, this.width, this.height),
      rightAnim1: new CharImg(this.bass, 0, 130, 50, 58, this.width, this.height),
      rightAnim2: new CharImg(this.bass, 60, 130, 50, 58, this.width, this.height),
      rightAnim3: new CharImg(this.bass, 120, 130, 50, 58, this.width, this.height),
    };
    this.currImg = this.animation.idleAnim;
    this.frames = 0;

  }

  move() {
    this.frames++;
    if (this.keysPressed.ArrowRight) {
      if (this.velX < this.speed) this.velX++;
      this.movingAnimation = 'right';
      if (this.frames === 10) {
        this.currImg = this.animation.rightAnim1;
      }
      if (this.frames === 20) {
        this.currImg = this.animation.rightAnim3;
      }
      if (this.frames === 30) {
        this.currImg = this.animation.rightAnim2;
      }
    }
    if (this.keysPressed.ArrowLeft) {
      if (this.velX > -this.speed) this.velX--;
      this.movingAnimation = 'left';
      if (this.frames === 10) {
        this.currImg = this.animation.leftAnim1;
      }
      if (this.frames === 20) {
        this.currImg = this.animation.leftAnim3;
      }
      if (this.frames === 30) {
        this.currImg = this.animation.leftAnim2;
      }
    }
    if (this.keysPressed.ArrowUp) {
      if (this.grounded) {
        this.jumping = true;
        this.velY = -(this.speed * 2);
        this.grounded = false;
      }
    }
    if (!this.keysPressed.ArrowRight && !this.keysPressed.ArrowLeft) {
      this.movingAnimation = '';
      this.frames = 0;
      this.currImg = this.animation.idleAnim;
    }
    this.ctx.drawImage(this.currImg.img, this.currImg.sX, this.currImg.sY,
      this.currImg.sWidth, this.currImg.sHeight, this.x,
      this.y, this.currImg.width, this.currImg.height);
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
