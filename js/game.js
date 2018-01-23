import Player from './player';
import Block from './block';

class Game {
  constructor() {
    this.canvas = document.getElementById('main');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 900;
    this.canvas.height = 700;
    this.player = new Player(this.canvas);
    this.blocks = {};
    this.makeBlocks();
  }

  makeBlocks() {
    // => main platform
    this.blocks['main'] = new Block(0, 676, 900, 50, this.canvas);
    // => Boss platform
    this.blocks['boss'] = new Block(600, 120, 450, 5, this.canvas);
    // => Platform above player
    this.blocks['1st'] = new Block(0, 580, 30, 8, this.canvas);
    this.blocks['2nd'] = new Block(150, 580, 30, 8, this.canvas);
    this.blocks['3rd'] = new Block(216, 550, 1, 40, this.canvas);
    this.blocks['4th'] = new Block(253, 580, 30, 8, this.canvas);
    this.blocks['5th'] = new Block(350, 580, 30, 8, this.canvas);
    this.blocks['6th'] = new Block(450, 580, 30, 8, this.canvas);
    this.blocks['7th'] = new Block(550, 580, 30, 8, this.canvas);
    this.blocks['8th'] = new Block(620, 630, 30, 8, this.canvas);
    this.blocks['9th'] = new Block(657, 530, 30, 8, this.canvas);
    this.blocks['10th'] = new Block(720, 620, 30, 8, this.canvas);
    this.blocks['11th'] = new Block(850, 650, 55, 30, this.canvas);
    // => Second platform
    this.blocks['12th'] = new Block(800, 495, 100, 8, this.canvas);
    this.blocks['13th'] = new Block(750, 530, 40, 8, this.canvas);
    this.blocks['14th'] = new Block(845, 465, 50, 14, this.canvas);
    this.blocks['15th'] = new Block(750, 425, 40, 8, this.canvas);
    this.blocks['16th'] = new Block(855, 385, 40, 8, this.canvas);
    // => Third platform
    this.blocks['17th'] = new Block(700, 355, 75, 8, this.canvas);
    this.blocks['18th'] = new Block(600, 395, 30, 8, this.canvas);
    this.blocks['19th'] = new Block(500, 395, 30, 8, this.canvas);
    this.blocks['20th'] = new Block(400, 395, 30, 8, this.canvas);
    this.blocks['21st'] = new Block(300, 395, 30, 8, this.canvas);
    this.blocks['22nd'] = new Block(200, 385, 30, 8, this.canvas);
    this.blocks['23rd'] = new Block(75, 368, 50, 8, this.canvas);
    // => Fourth Platform
    this.blocks['24th'] = new Block(0, 330, 30, 8, this.canvas);
    this.blocks['25th'] = new Block(90, 300, 30, 8, this.canvas);
    this.blocks['26th'] = new Block(170, 260, 30, 8, this.canvas);
    this.blocks['27th'] = new Block(270, 260, 30, 8, this.canvas);
    this.blocks['28th'] = new Block(370, 260, 30, 8, this.canvas);
    this.blocks['29th'] = new Block(470, 260, 30, 8, this.canvas);
    this.blocks['30th'] = new Block(570, 260, 30, 8, this.canvas);
    this.blocks['31st'] = new Block(670, 260, 30, 8, this.canvas);
    this.blocks['32nd'] = new Block(730, 230, 2, 40, this.canvas);
    this.blocks['33rd'] = new Block(770, 260, 30, 8, this.canvas);
    this.blocks['34th'] = new Block(880, 260, 30, 8, this.canvas);
    // => Fifth Platform
    this.blocks['35th'] = new Block(10, 200, 30, 8, this.canvas);
    this.blocks['36th'] = new Block(88, 225, 30, 8, this.canvas);
    this.blocks['37th'] = new Block(100, 160, 30, 8, this.canvas);
    this.blocks['38th'] = new Block(160, 130, 30, 8, this.canvas);
    this.blocks['39th'] = new Block(20, 105, 30, 8, this.canvas);
    // => secret doors
    this.blocks['1stDoor'] = new Block(580, 550, 2, 38, this.canvas);
    this.blocks['2ndDoor'] = new Block(655, 500, 2, 38, this.canvas);
    this.blocks['3rdDoor'] = new Block(100, 125, 2, 38, this.canvas);
  }

  renderBlocks() {
    let grounded;
    Object.values(this.blocks).forEach(block => {
      block.render();
      this.player.isColliding(block);
      if (!grounded) {
        grounded = this.player.shouldFall(block);
      }
      if (this.player.first) {
        delete this.blocks['1stDoor'];
      }
      if (this.player.second) {
        delete this.blocks['2ndDoor'];
      }
      if (this.player.third) {
        delete this.blocks['3rdDoor'];
      }
    });
    if (!grounded) {
      this.player.grounded = false;
    }
  }
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.physics();
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
