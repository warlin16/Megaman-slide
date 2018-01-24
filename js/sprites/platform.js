import CharImg from '../sprite';

class Platform {
  constructor() {
    this.platform = new Image();
    this.platform.src = 'assets/platform.png';
    this.animation = {
      platform: new CharImg(this.platform, 0, 10, 71, 30),
    }
  }
}

export default Platform;
