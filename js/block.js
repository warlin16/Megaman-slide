class Block {
  constructor(x, y, width, height, stage) {
    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  render() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Block;
