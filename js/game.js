import Player from './player';

class Game {
  constructor() {
    this.canvas = document.getElementById('main');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 900;
    this.canvas.height = 500;
    this.player = new Player();
  }

  render() {
    var that = this;
    document.addEventListener('keydown', (e) => {
      debugger
      this.player.move(e.key);
    });

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'purple';
    this.ctx.fillRect(this.player.x,
      this.player.y, this.player.width, this.player.height);

    requestAnimationFrame(this.render.bind(this));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.render();
});
