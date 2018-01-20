import CharImg from '../sprite';

class Bass {
  constructor() {
    this.bass = new Image();
    this.bass.src = 'assets/bass.png';
    this.bass_sword = new Image();
    this.bass_sword.src = 'assets/bass_sword.png';
    this.bassLeft = new Image();
    this.bassLeft.src = 'assets/bass_left.png'
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
      leftIdleAnim: new CharImg(this.bassLeft, 300, 0, 50, 58),
      leftMoveAnim1: new CharImg(this.bassLeft, 302, 130, 50, 58),
      leftMoveAnim2: new CharImg(this.bassLeft, 245, 130, 50, 58),
      leftMoveAnim3: new CharImg(this.bassLeft, 188, 130, 50, 58),
      rightMoveAnim1: new CharImg(this.bassLeft, 0, 130, 50, 58),
      rightMoveAnim2: new CharImg(this.bassLeft, 60, 130, 50, 58),
      rightMoveAnim3: new CharImg(this.bassLeft, 120, 130, 50, 58)
    };
  }
}

export default Bass;
