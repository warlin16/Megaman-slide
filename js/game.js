import Player from './player';
import Block from './block';

class Game {
  constructor() {
    this.canvas = document.getElementById('main');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 900;
    this.canvas.height = 700;
    this.player = new Player(this.canvas);
    this.blocks = [];
    this.makeBlocks();
  }

  makeBlocks() {
    // => main platform
    this.blocks.push(new Block(0, 675, 900, 50, this.canvas));
    // => Boss platform
    this.blocks.push(new Block(600, 120, 450, 5, this.canvas));
    // => Platform above player
    this.blocks.push(new Block(0, 580, 20, 8, this.canvas));
    this.blocks.push(new Block(150, 580, 30, 8, this.canvas));
    this.blocks.push(new Block(210, 550, 2, 40, this.canvas));
    this.blocks.push(new Block(250, 580, 30, 8, this.canvas));
    this.blocks.push(new Block(350, 580, 30, 8, this.canvas));
    this.blocks.push(new Block(450, 580, 30, 8, this.canvas));
    this.blocks.push(new Block(550, 580, 30, 8, this.canvas));
    this.blocks.push(new Block(620, 610, 30, 8, this.canvas));
    this.blocks.push(new Block(657, 530, 30, 8, this.canvas));
    this.blocks.push(new Block(720, 620, 30, 8, this.canvas));
    this.blocks.push(new Block(850, 650, 55, 30, this.canvas));
    // => Second platform
    this.blocks.push(new Block(800, 495, 100, 8, this.canvas));
    this.blocks.push(new Block(750, 530, 40, 8, this.canvas));
    this.blocks.push(new Block(845, 465, 50, 14, this.canvas));
    this.blocks.push(new Block(750, 425, 40, 8, this.canvas));
    this.blocks.push(new Block(855, 385, 40, 8, this.canvas));
    // => Third platform
    this.blocks.push(new Block(700, 355, 75, 8, this.canvas));
    this.blocks.push(new Block(600, 355, 30, 8, this.canvas));
    this.blocks.push(new Block(500, 355, 30, 8, this.canvas));
    this.blocks.push(new Block(400, 355, 30, 8, this.canvas));
    this.blocks.push(new Block(300, 355, 30, 8, this.canvas));
    this.blocks.push(new Block(200, 355, 30, 8, this.canvas));
    this.blocks.push(new Block(100, 355, 30, 8, this.canvas));
    // => Fourth Platform
    this.blocks.push(new Block(0, 320, 30, 8, this.canvas));
    this.blocks.push(new Block(70, 260, 30, 8, this.canvas));
    this.blocks.push(new Block(170, 260, 30, 8, this.canvas));
    this.blocks.push(new Block(270, 260, 30, 8, this.canvas));
    this.blocks.push(new Block(370, 260, 30, 8, this.canvas));
    this.blocks.push(new Block(470, 260, 30, 8, this.canvas));
    this.blocks.push(new Block(570, 260, 30, 8, this.canvas));
    this.blocks.push(new Block(670, 260, 30, 8, this.canvas));
    this.blocks.push(new Block(730, 230, 2, 40, this.canvas));
    this.blocks.push(new Block(770, 260, 30, 8, this.canvas));
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
