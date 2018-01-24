import CharImg from '../sprite';

class Button {
  constructor(x, y, width, height, stage) {
    this.animate = new Image();
    this.animate.src = 'assets/orb.gif';
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.ctx = stage.getContext('2d');
  }

  render() {
    this.ctx.drawImage(this.animate, 0, 0, 25, 38,
      this.x, this.y, this.width,
      this.height);
  }
}

export default Button;
