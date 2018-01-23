import Platform from './sprites/platform';

class Block {
  constructor(x, y, width, height, stage) {
    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.platform = new Platform().animation.platform;
  }

  render() {
    this.ctx.drawImage(this.platform.img,
    this.platform.sX, this.platform.sY, this.platform.sWidth,
    this.platform.sHeight, this.x, this.y, this.width, this.height);
  }
}

export default Block;
