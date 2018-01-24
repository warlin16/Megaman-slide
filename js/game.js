import Player from './player';
import Block from './block';
import Button from './sprites/button';

class Game {
  constructor() {
    this.canvas = document.getElementById('main');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 700;
    this.canvas.height = 700;
    this.player = new Player(this.canvas);
    this.blocks = {};
    this.buttons = {};
    this.makeBlocks();
    this.makeButtons();
  }

  makeBlocks() {
    // => main platforn
    // => S stands for secret
    this.blocks['main'] = new Block(0, 676, 40, 50, this.canvas);
    this.blocks['main1'] = new Block(50, 676, 40, 50, this.canvas);
    this.blocks['main2'] = new Block(100, 676, 40, 50, this.canvas);
    this.blocks['main3'] = new Block(150, 676, 40, 50, this.canvas);
    this.blocks['main4'] = new Block(200, 676, 40, 50, this.canvas);
    this.blocks['main5'] = new Block(250, 676, 40, 50, this.canvas);

    // => Boss platform
    this.blocks['boss'] = new Block(600, 120, 450, 5, this.canvas);
    // => Platform above player or ap
    this.blocks['ap1'] = new Block(0, 566, 40, 20, this.canvas);
    this.blocks['ap2'] = new Block(50, 566, 40, 50, this.canvas);
    this.blocks['ap3'] = new Block(530, 566, 40, 50, this.canvas);
    this.blocks['ap4'] = new Block(620, 566, 40, 50, this.canvas);
    // => second row or sr
    this.blocks['sr1'] = new Block(670, 546, 40, 20, this.canvas);
    // => secret doors
    this.blocks['1stDoor'] = new Block(580, 500, 3, 88, this.canvas);
  }

  makeButtons() {
    this.buttons['1'] = new Button(248, 650, 20, 30, this.canvas);
    this.buttons['3'] = new Button(8, 540, 20, 30, this.canvas);
    this.buttons['4'] = new Button(675, 520, 20, 30, this.canvas);
  }


  renderBlocks() {
    let grounded;
    Object.values(this.blocks).forEach(block => {
      block.render();
      this.player.isColliding(block);
      if (!grounded) {
        grounded = this.player.shouldFall(block);
      }
    });
    if (!grounded) {
      this.player.grounded = false;
    }
  }

  renderButtons() {
    Object.values(this.buttons).forEach(button => {
      button.render();
    });
  }

  renderSecrets() {
    if (this.player.first) {
      this.blocks['Smain'] = new Block(350, 646, 40, 50, this.canvas);
      this.blocks['Smain2'] = new Block(400, 606, 40, 50, this.canvas);
      this.blocks['Smain3'] = new Block(450, 566, 40, 50, this.canvas);
      this.buttons['2'] = new Button(455, 540, 20, 30, this.canvas);
      delete this.buttons['1'];
    }
    if (this.player.second) {
      delete this.buttons['2'];
      this.blocks['Sap1'] = new Block(350, 566, 40, 50, this.canvas);
      this.blocks['Sap2'] = new Block(250, 566, 40, 50, this.canvas);
      this.blocks['Sap3'] = new Block(150, 566, 40, 50, this.canvas);
    }
    if (this.player.third) {
      delete this.blocks['1stDoor'];
      delete this.buttons['3'];
    }
    if (this.player.fourth) {
      delete this.buttons['4'];
      delete this.blocks['Smain'];
      delete this.blocks['Smain2'];
      delete this.blocks['Smain3'];
      delete this.blocks['Sap1'];
      delete this.blocks['Sap2'];
      delete this.blocks['Sap3'];
      this.blocks['Ssr1'] = new Block(450, 546, 40, 20, this.canvas);
      this.blocks['Ssr2'] = new Block(350, 546, 40, 20, this.canvas);
    }
  }
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.physics();
    this.renderSecrets();
    this.renderButtons();
    this.renderBlocks();
    if (this.player.y > this.canvas.height) {
      console.log('You lost!');
    }
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
