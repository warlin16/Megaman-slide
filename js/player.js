import CharImg from './sprite';
import Bass from './characters/bass';

class Player {
  constructor(stage) {
    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = 0;
    this.y = 600;
    this.width = 35;
    this.height = 45;
    this.speed = 4.5;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.grounded = false;
    this.falling = true;
    this.gravity = 0.7;
    this.slide = 0.8;
    this.stepped = false;
    this.keysPressed = {};
    this.animation = new Bass().animation;
    this.currImg = this.animation.idleAnim;
    this.frames = 0;
    this.direction = 'right';
    this.isColliding = this.isColliding.bind(this);

  }

  changeDirection() {
    if (this.keysPressed.Comma) {
      this.direction = 'left';
    }
    if (this.keysPressed.Period) {
      this.direction = 'right';
    }
  }

  moveRight() {
    if (this.keysPressed.ArrowRight) {
      if (this.velX < this.speed) this.velX++;
      if (this.frames === 1) {
        if (this.direction === 'right') {
          this.currImg = this.animation.rightAnim1;
        } else if (this.direction === 'left') {
          this.currImg = this.animation.rightMoveAnim1;
        }
      }
      if (this.frames === 17) {
        if (this.direction === 'right') {
          this.currImg = this.animation.rightAnim3;
        } else if (this.direction === 'left') {
          this.currImg = this.animation.rightMoveAnim3;
        }
      }
      if (this.frames === 27) {
        if (this.direction === 'right') {
          this.currImg = this.animation.rightAnim2;
        } else if (this.direction === 'left') {
          this.currImg = this.animation.rightMoveAnim2;
        }
      }
    }
  }

  moveLeft() {
    if (this.keysPressed.ArrowLeft && !this.keysPressed.ArrowRight) {
      if (this.velX > -this.speed) this.velX--;
      if (this.frames === 1) {
        if (this.direction === 'right') {
          this.currImg = this.animation.leftAnim1;
        } else if (this.direction === 'left') {
          this.currImg = this.animation.leftMoveAnim1;
        }
      }
      if (this.frames === 17) {
        if (this.direction === 'right'){
          this.currImg = this.animation.leftAnim3;
        } else if (this.direction === 'left') {
          this.currImg = this.animation.leftMoveAnim3;
        }
      }
      if (this.frames === 27) {
        if (this.direction === 'right') {
          this.currImg = this.animation.leftAnim2;
        } else if (this.direction === 'left') {
          this.currImg = this.animation.leftMoveAnim2;
        }
      }
    }
  }

  jump() {
    if (this.keysPressed.ArrowUp) {
      if (this.grounded) {
        this.jumping = true;
        this.velY = -(this.speed * 2);
        this.grounded = false;
      }
      if (this.jumping) {
        this.falling = true;
        if (this.frames === 1) {
          if (this.direction === 'right') {
            this.currImg = this.animation.jumpAnim1;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftJumpAnim1;
          }
        }
        if (this.frames === 5) {
          if (this.direction === 'right') {
            this.currImg = this.animation.jumpAnim2;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftJumpAnim2;
          }
        }
        if (this.frames === 10) {
          if (this.direction === 'right') {
            this.currImg = this.animation.jumpAnim3;

          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftJumpAnim3;
          }
        }
      }
    }
  }

  shoot() {
    if (this.keysPressed.Space) {
      if (this.frames === 2) {
        if (this.direction === 'right') {
          this.currImg = this.animation.shootAnim1;
        } else if (this.direction === 'left') {
          this.currImg = this.animation.leftShootAnim1;
        }
      }
      if (this.frames === 5) {
        if (this.direction === 'right') {
          this.currImg = this.animation.shootAnim2;
        } else if (this.direction === 'left') {
          this.currImg = this.animation.leftShootAnim2;
        }
      }
      if (this.frames === 10) {
        if (this.direction === 'right') {
          this.currImg = this.animation.shootAnim3;
        } else if (this.direction === 'left') {
          this.currImg = this.animation.leftShootAnim3;
        }
      }
      if (this.frames === 15) {
        if (this.direction === 'right') {
          this.currImg = this.animation.shootAnim4;
        } else if (this.direction === 'left') {
          this.currImg = this.animation.leftShootAnim4;
        }
      }
      if (this.frames === 45) this.frames = 0;
    }
  }

  slash() {
    if (this.keysPressed.Slash) {
      if (this.frames === 2) {
        this.currImg = this.animation.jumpAnim1;
      }
      if (this.frames === 8) {
        this.currImg = this.animation.slashAnim1;
      }
      if (this.frames === 12) {
        this.currImg = this.animation.slashAnim2;
      }
      if (this.frames === 15) {
        this.currImg = this.animation.slashAnim3;
      }
      if (this.frames === 18) {
        this.currImg = this.animation.slashAnim4;
      }
      if (this.frames === 21) {
        this.currImg = this.animation.slashAnim5;
      }
      if (this.frames === 24) {
        this.currImg = this.animation.slashAnim6;
      }
      if (this.frames === 27) {
        this.currImg = this.animation.jumpAnim1;
      }
      if (this.frames === 30) this.frames = 0;
    }
  }

  idle() {
    if (!this.keysPressed.ArrowRight
      && !this.keysPressed.ArrowLeft &&
      !this.keysPressed.ArrowUp && !this.keysPressed.Space
      && !this.keysPressed.Slash) {
      this.frames = 0;
      if (this.direction === 'right') {
        this.currImg = this.animation.idleAnim;
      }
      if (this.direction === 'left') {
        this.currImg = this.animation.leftIdleAnim;
      }
    }
  }

  renderFace() {
    this.ctx.drawImage(this.animation.face.img,
      this.animation.face.sX, this.animation.face.sY,
      this.animation.face.sWidth,
      this.animation.face.sHeight, 0, 0, 50, 50);
  }

  physics() {
   if (this.x + this.width > this.stage.width) {
     this.x = this.stage.width - this.width;
   }
   if (this.y + this.height > this.stage.height) {
     this.y = this.stage.height - this.height;
     this.grounded = true;
     this.keysPressed.ArrowUp = false;
   }
   if (this.x < 0) {
     this.x = 0;
   }
   if (this.y < 0) {
     this.velY = 0;
     this.y = 0;
   }
   if (this.x > 500) this.stepped = true;
   this.velY += this.gravity;
   this.velX *= this.slide;

   if (this.grounded) this.velY = 0;

   this.x += this.velX;
   this.y += this.velY;

   this.frames++;
   this.changeDirection();
   this.moveRight();
   this.moveLeft();
   this.jump();
   this.shoot();
   this.slash();
   this.idle();
   this.renderFace();
   this.ctx.drawImage(this.currImg.img, this.currImg.sX, this.currImg.sY,
     this.currImg.sWidth, this.currImg.sHeight, this.x,
     this.y, this.width, this.height);
 }

 isColliding(obj) {
   const vX = (this.x + (this.width / 2)) - (obj.x + (obj.width / 2)),
         vY = (this.y + (this.height / 2)) - (obj.y + (obj.height / 2)),
         hWidth = (this.width / 2) + (obj.width / 2),
         hHeight = (this.height / 2) + (obj.height / 2);
   if (Math.abs(vX) < hWidth && Math.abs(vY) < hHeight) {
     const oX = hWidth - Math.abs(vX),
           oY = hHeight - Math.abs(vY);
           this.grounded = false
     if (oX >= oY) {
       if (vY < 0) {
         this.y -= oY;
         this.grounded = true;
         this.keysPressed.ArrowUp = false;
       } else if (vY > 0) {
         this.y += oY + 5;
         this.velY = 0;
       }
     } else {
       if (vX > 0) {
         this.x += oX;
         this.velX = 0;
       } else {
         this.x -= oX;
         this.velX = 0;
       }
     }
   }
 }
}


export default Player;
