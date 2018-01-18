import Player from './player';

class Game {
  constructor() {
    this.canvas = document.getElementById('main');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 900;
    this.canvas.height = 500;
    this.player = new Player(this.canvas);
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'purple';
    this.ctx.fillRect(this.player.x,
      this.player.y, this.player.width, this.player.height);

      this.player.x += this.player.velX;
      this.player.physics();
    requestAnimationFrame(this.render.bind(this));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.render();

  document.addEventListener('keydown', (e) => {
    game.player.moving = true;
    game.player.move(e.key);
  });

  document.addEventListener('keyup', () => {
    game.player.moving = false;
    game.player.velX = 0;
    game.player.velY = 0;
  });
});
