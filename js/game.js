import Player from './player';
import Block from './block';

class Game {
  constructor() {
    this.canvas = document.getElementById('main');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 900;
    this.canvas.height = 600;
    this.player = new Player(this.canvas);
  }

  renderBlocks() {
    for (let i = 0; i <= 1; i++) {
      new Block(i * 100, i * 10, 100, 20, this.canvas);
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.render();
    requestAnimationFrame(this.render.bind(this));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.render();

  document.addEventListener('keydown', (e) => {
    game.player.keysPressed[e.code] = true;
  });

  document.addEventListener('keyup', (e) => {
    game.player.keysPressed[e.code] = false;
  });
});
