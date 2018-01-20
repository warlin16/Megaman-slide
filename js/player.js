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
    this.bass_sword = new Image();
    this.bass_sword.src = 'assets/bass_sword.png'
    this.movingAnimation = '';
    this.animation = {
      idleAnim: new CharImg(this.bass, 0, 0, 50, 58),
      leftAnim1: new CharImg(this.bass, 302, 130, 50, 58),
      leftAnim2: new CharImg(this.bass, 245, 130, 50, 58),
      leftAnim3: new CharImg(this.bass, 188, 130, 50, 58),
      rightAnim1: new CharImg(this.bass, 0, 130, 50, 58),
      rightAnim2: new CharImg(this.bass, 60, 130, 50, 58),
      rightAnim3: new CharImg(this.bass, 120, 130, 50, 58),
      jumpAnim1: new CharImg(this.bass, 180, 65, 50, 58),
      jumpAnim2: new CharImg(this.bass, 120, 65, 50, 58),
      jumpAnim3: new CharImg(this.bass, 60, 65, 50, 58),
      shootAnim1: new CharImg(this.bass, 180, 246, 50, 58),
      shootAnim2: new CharImg(this.bass, 180, 490, 50, 58),
      shootAnim3: new CharImg(this.bass, 120, 490, 50, 58),
      shootAnim4: new CharImg(this.bass, 120, 435, 50, 58),
    };
    this.currImg = this.animation.idleAnim;
    this.frames = 0;

  }

  animate() {
    this.frames++;
    if (this.keysPressed.ArrowRight) {
      if (this.velX < this.speed) this.velX++;
      if (this.frames === 7) {
        this.currImg = this.animation.rightAnim1;
      }
      if (this.frames === 17) {
        this.currImg = this.animation.rightAnim3;
      }
      if (this.frames === 27) {
        this.currImg = this.animation.rightAnim2;
      }
    }
    if (this.keysPressed.ArrowLeft) {
      if (this.velX > -this.speed) this.velX--;
      if (this.frames === 7) {
        this.currImg = this.animation.leftAnim1;
      }
      if (this.frames === 17) {
        this.currImg = this.animation.leftAnim3;
      }
      if (this.frames === 27) {
        this.currImg = this.animation.leftAnim2;
      }
    }
    if (this.keysPressed.ArrowUp) {
      if (this.grounded) {
        this.jumping = true;
        this.velY = -(this.speed * 2);
        this.grounded = false;
      }
      if (this.jumping) {
        console.log(this.frames);
        if (this.frames === 1) {
          this.currImg = this.animation.jumpAnim1;
        }
        if (this.frames === 5) {
          this.currImg = this.animation.jumpAnim2;
        }
        if (this.frames === 10) {
          this.currImg = this.animation.jumpAnim3;
        }
      }
    }
    if (this.keysPressed.Space) {
      if (this.frames === 4) {
        this.currImg = this.animation.shootAnim1;
      }
      if (this.frames === 8) {
        this.currImg = this.animation.shootAnim2;
      }
      if (this.frames === 16) {
        this.currImg = this.animation.shootAnim3;
      }
      if (this.frames === 24) {
        this.currImg = this.animation.shootAnim4;
      }
      if (this.frames === 40) this.frames = 0;
    }
    if (!this.keysPressed.ArrowRight
      && !this.keysPressed.ArrowLeft &&
      !this.keysPressed.ArrowUp && !this.keysPressed.Space) {
      this.frames = 0;
      this.currImg = this.animation.idleAnim;
    }
    this.ctx.drawImage(this.currImg.img, this.currImg.sX, this.currImg.sY,
      this.currImg.sWidth, this.currImg.sHeight, this.x,
      this.y, this.width, this.height);
    // this.ctx.drawImage(this.bass_sword, 108, 0,
    //   50, 58, this.x,
    //   this.y, this.width, this.height);
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
     this.frames = 0;
     this.velY = 0;
     this.keysPressed.ArrowUp = false;
   }

   if (!this.grounded) this.velY += this.gravity;

   this.velX *= this.slide;
   this.x += this.velX;
   this.y += this.velY;
   this.animate();
 }

  render() {
    this.physics();
  }
}


export default Player;
