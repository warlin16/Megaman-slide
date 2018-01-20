import Player from './player';
import Block from './block';

class Game {
  constructor() {
    this.canvas = document.getElementById('main');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 900;
    this.canvas.height = 600;
    this.player = new Player(this.canvas);
    this.blocks = [];
    this.makeBlocks();
  }

  makeBlocks() {
    for (let i = 0; i < 18; i++) {
      this.blocks.push(new Block(i * 50, 500, 50, 50, this.canvas));
    }
    this.blocks.push(new Block(600, 400, 50, 50, this.canvas));
    this.blocks.push(new Block(400, 350, 50, 50, this.canvas));
  }

  renderBlocks() {
    this.blocks.forEach(block => {
      block.render();
      this.player.isColliding(block);
    });
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
