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
    const block = new Block(850, 550, 50, 50, this.canvas);
    block.render();
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.render();
    this.renderBlocks();
    requestAnimationFrame(this.render.bind(this));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.render();

  document.addEventListener('keydown', (e) => {
    console.log(e.key);
    game.player.keysPressed[e.code] = true;
  });

  document.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowUp') {
      game.player.keysPressed[e.code] = true;
    } else {
      game.player.keysPressed[e.code] = false;
    }
  });
});
