/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharImg = function CharImg(img, sX, sY, sWidth, sHeight, width, height) {
  _classCallCheck(this, CharImg);

  this.img = img;
  this.sX = sX;
  this.sY = sY;
  this.sWidth = sWidth;
  this.sHeight = sHeight;
  this.width = width;
  this.height = height;
};

exports.default = CharImg;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(2);

var _player2 = _interopRequireDefault(_player);

var _block = __webpack_require__(4);

var _block2 = _interopRequireDefault(_block);

var _button = __webpack_require__(6);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('main');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 700;
    this.canvas.height = 700;
    this.player = new _player2.default(this.canvas);
    this.start = false;
    this.blocks = {
      moving: new _block2.default(-60, 500, 60, 20, this.canvas),
      tutorial: new _block2.default(-60, 350, 60, 20, this.canvas),
      floating: new _block2.default(200, 770, 80, 20, this.canvas),
      floating2: new _block2.default(0, 770, 50, 20, this.canvas)
    };
    this.buttons = {};
    this.makeBlocks();
    this.makeButtons();
    this.theme = document.getElementById('theme');
    this.playSong = true;
  }

  _createClass(Game, [{
    key: 'makeBlocks',
    value: function makeBlocks() {
      // => main platforn
      // => S stands for secret
      this.blocks['main'] = new _block2.default(0, 676, 40, 50, this.canvas);
      this.blocks['main1'] = new _block2.default(50, 676, 40, 50, this.canvas);
      this.blocks['main2'] = new _block2.default(100, 676, 40, 50, this.canvas);
      this.blocks['main3'] = new _block2.default(150, 676, 40, 50, this.canvas);
      this.blocks['main4'] = new _block2.default(200, 676, 40, 50, this.canvas);
      this.blocks['main5'] = new _block2.default(250, 676, 40, 50, this.canvas);
      // => Platform above player or ap
      this.blocks['ap1'] = new _block2.default(0, 566, 40, 20, this.canvas);
      this.blocks['ap2'] = new _block2.default(50, 566, 40, 50, this.canvas);
      this.blocks['ap4'] = new _block2.default(620, 566, 40, 50, this.canvas);
      // => second row or sr
      this.blocks['sr1'] = new _block2.default(670, 546, 40, 20, this.canvas);
      this.blocks['sr2'] = new _block2.default(0, 450, 40, 20, this.canvas);
      // => third row or tr
      this.blocks['tr1'] = new _block2.default(0, 270, 40, 20, this.canvas);
      // => secret doors
      this.blocks['1stDoor'] = new _block2.default(580, 500, 15, 88, this.canvas);
    }
  }, {
    key: 'makeButtons',
    value: function makeButtons() {
      this.buttons['1'] = new _button2.default(248, 650, 20, 30, this.canvas);
      this.buttons['3'] = new _button2.default(8, 538, 20, 30, this.canvas);
      this.buttons['4'] = new _button2.default(675, 520, 20, 30, this.canvas);
      this.buttons['5'] = new _button2.default(8, 419, 20, 30, this.canvas);
    }
  }, {
    key: 'renderBlocks',
    value: function renderBlocks() {
      var _this = this;

      var grounded = void 0;
      Object.values(this.blocks).forEach(function (block) {
        block.render();
        _this.player.isColliding(block);
        if (!grounded) {
          grounded = _this.player.shouldFall(block);
        }
      });
      if (!grounded) {
        this.player.grounded = false;
      }
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      Object.values(this.buttons).forEach(function (button) {
        button.render();
      });
    }
  }, {
    key: 'renderSecrets',
    value: function renderSecrets() {
      if (this.player.first) {
        this.blocks['Smain'] = new _block2.default(350, 646, 40, 50, this.canvas);
        this.blocks['Smain2'] = new _block2.default(400, 606, 40, 50, this.canvas);
        this.blocks['Smain3'] = new _block2.default(450, 566, 40, 50, this.canvas);
        this.buttons['2'] = new _button2.default(455, 540, 20, 30, this.canvas);
        delete this.buttons['1'];
      }
      if (this.player.second) {
        delete this.buttons['2'];
        this.blocks['Sap1'] = new _block2.default(350, 566, 40, 50, this.canvas);
        this.blocks['Sap2'] = new _block2.default(250, 566, 40, 50, this.canvas);
        this.blocks['Sap3'] = new _block2.default(150, 566, 40, 50, this.canvas);
        delete this.blocks['main1'];
        delete this.blocks['main2'];
        delete this.blocks['main3'];
        delete this.blocks['main4'];
        delete this.blocks['main5'];
      }
      if (this.player.third) {
        delete this.blocks['1stDoor'];
        delete this.buttons['3'];
        this.blocks['ap3'] = new _block2.default(530, 566, 40, 50, this.canvas);
      }
      if (this.player.fourth) {
        delete this.buttons['4'];
        delete this.blocks['Smain'];
        delete this.blocks['Smain2'];
        delete this.blocks['Smain3'];
        delete this.blocks['Sap1'];
        delete this.blocks['Sap2'];
        delete this.blocks['Sap3'];
        this.blocks['Ssr1'] = new _block2.default(450, 546, 40, 20, this.canvas);
        this.blocks['Ssr2'] = new _block2.default(350, 546, 40, 20, this.canvas);
        this.blocks['Ssr3'] = new _block2.default(250, 546, 40, 20, this.canvas);
        this.blocks['Ssr4'] = new _block2.default(200, 500, 40, 20, this.canvas);
        this.blocks['Ssr5'] = new _block2.default(150, 450, 40, 20, this.canvas);
        this.blocks['Ssr6'] = new _block2.default(100, 400, 40, 20, this.canvas);
      }
      if (this.player.fifth) {
        delete this.buttons['5'];
        delete this.blocks['Ssr1'];
        delete this.blocks['Ssr2'];
        delete this.blocks['Ssr3'];
        delete this.blocks['Ssr4'];
        delete this.blocks['Ssr5'];
        delete this.blocks['Ssr6'];
        this.blocks.moving.x += 1;
        this.blocks['1stDoor'] = new _block2.default(550, 450, 15, 50, this.canvas);
        this.blocks['2ndDoor'] = new _block2.default(400, 450, 15, 50, this.canvas);
        this.blocks['3rdDoor'] = new _block2.default(300, 450, 15, 50, this.canvas);
        this.blocks['4thDoor'] = new _block2.default(150, 450, 15, 50, this.canvas);
        this.buttons['6'] = new _button2.default(675, 420, 20, 30, this.canvas);
        this.blocks['6thPlat'] = new _block2.default(670, 450, 40, 20, this.canvas);
        delete this.blocks['ap1'];
        delete this.blocks['ap2'];
        delete this.blocks['ap3'];
        delete this.blocks['ap4'];
      }
      if (this.player.sixth) {
        delete this.buttons['6'];
        delete this.blocks['1stDoor'];
        delete this.blocks['2ndDoor'];
        delete this.blocks['3rdDoor'];
        delete this.blocks['4thDoor'];
        this.buttons['8'] = new _button2.default(8, 239, 20, 30, this.canvas);
        this.buttons['7'] = new _button2.default(205, 324, 20, 30, this.canvas);
        this.blocks['1st'] = new _block2.default(570, 450, 40, 20, this.canvas);
        this.blocks['2nd'] = new _block2.default(470, 440, 40, 20, this.canvas);
        this.blocks['3rd'] = new _block2.default(380, 410, 40, 20, this.canvas);
        this.blocks['4th'] = new _block2.default(290, 380, 40, 20, this.canvas);
        this.blocks['5th'] = new _block2.default(200, 355, 40, 20, this.canvas);
      }
      if (this.player.seventh) {
        delete this.buttons['7'];
        delete this.blocks['5th'];
        delete this.blocks['sr2'];
        this.blocks.floating.y -= 2;
        this.blocks['6th'] = new _block2.default(140, 200, 40, 20, this.canvas);
        if (this.blocks.floating && this.blocks.floating.y < -10) {
          this.blocks.floating.y = 770;
        }
      }
      if (this.player.boss) {
        delete this.buttons['7'];
        delete this.buttons['8'];
        delete this.blocks['1st'];
        delete this.blocks['2nd'];
        delete this.blocks['3rd'];
        delete this.blocks['4th'];
        delete this.blocks['5th'];
        delete this.blocks['floating'];
        delete this.blocks['sr1'];
        delete this.blocks['tr1'];
        delete this.blocks['main'];
        delete this.blocks['6th'];
        delete this.blocks['6thPlat'];
        this.blocks.floating2.y -= 2;
        this.buttons['win'] = new _button2.default(670, 92, 20, 30, this.canvas);
        this.blocks['boss'] = new _block2.default(355, 120, 40, 20, this.canvas);
        this.blocks['boss3'] = new _block2.default(465, 120, 40, 20, this.canvas);
        this.blocks['boss5'] = new _block2.default(565, 120, 40, 20, this.canvas);
        this.blocks['boss7'] = new _block2.default(665, 120, 40, 20, this.canvas);
        this.blocks['1st'] = new _block2.default(50, 350, 40, 50, this.canvas);
        this.blocks['2nd'] = new _block2.default(100, 300, 40, 50, this.canvas);
        this.blocks['3rd'] = new _block2.default(150, 250, 40, 50, this.canvas);
        this.blocks['4th'] = new _block2.default(200, 200, 40, 50, this.canvas);
        this.blocks['5th'] = new _block2.default(250, 150, 40, 50, this.canvas);
      }

      if (this.player.won) {
        delete this.buttons['win'];
      }
    }
  }, {
    key: 'renderText',
    value: function renderText() {
      this.ctx.font = '20px "Press Start 2P"';
      this.ctx.fillStyle = 'white';
      this.ctx.fillText('Read above && press N to start a new game!', 100, 250, 500);
    }
  }, {
    key: 'renderWinMessage',
    value: function renderWinMessage() {
      this.ctx.font = '20px "Press Start 2P"';
      this.ctx.fillStyle = 'white';
      this.ctx.fillText('You did it! You won! Press R to restart!', 100, 250, 500);
    }
  }, {
    key: 'renderGameOver',
    value: function renderGameOver() {
      this.ctx.font = '20px "Press Start 2P"';
      this.ctx.fillStyle = 'white';
      this.ctx.fillText('You lost! Try again...  Press s to try again!', 100, 250, 500);
    }
  }, {
    key: 'toggleMusic',
    value: function toggleMusic() {
      if (this.playSong) {
        this.theme.play();
      } else {
        this.theme.pause();
      }
    }
  }, {
    key: 'restart',
    value: function restart() {
      this.blocks = {
        moving: new _block2.default(-60, 500, 60, 20, this.canvas),
        tutorial: new _block2.default(-60, 350, 60, 20, this.canvas),
        floating: new _block2.default(200, 770, 80, 20, this.canvas),
        floating2: new _block2.default(0, 770, 50, 20, this.canvas)
      };
      this.player.checkpoint = { x: 20, y: 620 };
      this.makeBlocks();
      this.makeButtons();
      this.player.lives = 3;
      this.player.first = false;
      this.player.second = false;
      this.player.third = false;
      this.player.fourth = false;
      this.player.fifth = false;
      this.player.sixth = false;
      this.player.seventh = false;
      this.player.boss = false;
      this.player.won = false;
      this.player.lost = false;
      delete this.buttons['win'];
      delete this.blocks['boss'];
      delete this.blocks['boss3'];
      delete this.blocks['boss5'];
      delete this.blocks['boss7'];
      delete this.blocks['1st'];
      delete this.blocks['2nd'];
      delete this.blocks['3rd'];
      delete this.blocks['4th'];
      delete this.blocks['5th'];
      delete this.buttons['2'];
      delete this.buttons['6'];
      delete this.buttons['7'];
      delete this.buttons['8'];
      this.player.x = 0;
      this.player.y = 620;
      this.start = true;
    }
  }, {
    key: 'render',
    value: function render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (this.start && !this.player.won && !this.player.lost) {
        delete this.blocks.tutorial;
        this.toggleMusic();
        this.player.physics();
        this.renderSecrets();
        this.renderButtons();
        this.renderBlocks();
        if (this.player.y > this.canvas.height) {
          this.player.lives -= 1;
          this.player.x = this.player.checkpoint.x;
          this.player.y = this.player.checkpoint.y;
          if (this.player.fifth && !this.player.sixth) {
            this.blocks.moving.x = -60;
          }
          if (this.player.lives === 0) {
            this.player.lost = true;
          }
        }
      } else if (this.player.lost) {
        this.start = false;
        this.renderGameOver();
        this.theme.pause();
      } else if (this.player.won) {
        this.start = false;
        this.renderWinMessage();
        this.theme.pause();
      } else {
        this.renderText();
        this.blocks.tutorial.render();
        this.blocks.tutorial.x += 1;
      }
      requestAnimationFrame(this.render.bind(this));
    }
  }]);

  return Game;
}();

document.addEventListener('DOMContentLoaded', function () {
  var game = new Game();
  game.render();

  document.addEventListener('keydown', function (e) {
    if (e.code === 'KeyQ') {
      game.playSong = !game.playSong;
    }
    if (e.code === 'KeyN') game.start = true;
    if (e.code === 'KeyR' && game.player.won) {
      game.restart();
    }
    if (e.code === 'KeyS' && game.player.lost) {
      game.restart();
    }
    game.player.keysPressed[e.code] = true;
  });

  document.addEventListener('keyup', function (e) {
    game.player.keysPressed[e.code] = false;
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprite = __webpack_require__(0);

var _sprite2 = _interopRequireDefault(_sprite);

var _bass = __webpack_require__(3);

var _bass2 = _interopRequireDefault(_bass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(stage) {
    _classCallCheck(this, Player);

    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = 0;
    this.y = 620;
    this.width = 35;
    this.height = 45;
    this.speed = 5;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.grounded = false;
    this.falling = true;
    this.gravity = 0.7;
    this.slide = 0.75;
    this.keysPressed = {};
    this.animation = new _bass2.default().animation;
    this.currImg = this.animation.idleAnim;
    this.frames = 0;
    this.direction = 'right';
    this.isColliding = this.isColliding.bind(this);
    this.lives = 3;
    this.checkpoint = { x: 20, y: 620 };
  }

  _createClass(Player, [{
    key: 'changeDirection',
    value: function changeDirection() {
      if (this.keysPressed.Comma) {
        this.direction = 'left';
      }
      if (this.keysPressed.Period) {
        this.direction = 'right';
      }
    }
  }, {
    key: 'moveRight',
    value: function moveRight() {
      if (this.keysPressed.ArrowRight) {
        this.direction = 'right';
        if (this.velX < this.speed) this.velX++;
        if (this.frames === 1) {
          if (this.direction === 'right') {
            this.currImg = this.animation.rightAnim1;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.rightMoveAnim1;
          }
        }
        if (this.frames === 17) {
          if (this.direction === 'right') {
            this.currImg = this.animation.rightAnim3;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.rightMoveAnim3;
          }
        }
        if (this.frames === 27) {
          if (this.direction === 'right') {
            this.currImg = this.animation.rightAnim2;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.rightMoveAnim2;
          }
        }
      }
    }
  }, {
    key: 'moveLeft',
    value: function moveLeft() {
      if (this.keysPressed.ArrowLeft && !this.keysPressed.ArrowRight) {
        this.direction = 'left';
        if (this.velX > -this.speed) this.velX--;
        if (this.frames === 1) {
          if (this.direction === 'right') {
            this.currImg = this.animation.leftAnim1;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftMoveAnim1;
          }
        }
        if (this.frames === 17) {
          if (this.direction === 'right') {
            this.currImg = this.animation.leftAnim3;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftMoveAnim3;
          }
        }
        if (this.frames === 27) {
          if (this.direction === 'right') {
            this.currImg = this.animation.leftAnim2;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftMoveAnim2;
          }
        }
      }
    }
  }, {
    key: 'jump',
    value: function jump() {
      if (this.keysPressed.ArrowUp) {
        if (this.grounded || this.velY === 0) {
          this.jumping = true;
          this.velY = -9;
          this.grounded = false;
        }
        if (this.jumping) {
          if (this.frames === 1) {
            if (this.direction === 'right') {
              this.currImg = this.animation.jumpAnim1;
            } else if (this.direction === 'left') {
              this.currImg = this.animation.leftJumpAnim1;
            }
          }
          if (this.frames === 5) {
            if (this.direction === 'right') {
              this.currImg = this.animation.jumpAnim2;
            } else if (this.direction === 'left') {
              this.currImg = this.animation.leftJumpAnim2;
            }
          }
          if (this.frames === 10) {
            if (this.direction === 'right') {
              this.currImg = this.animation.jumpAnim3;
            } else if (this.direction === 'left') {
              this.currImg = this.animation.leftJumpAnim3;
            }
          }
        }
      }
    }
  }, {
    key: 'shoot',
    value: function shoot() {
      if (this.keysPressed.Space) {
        if (this.frames === 2) {
          if (this.direction === 'right') {
            this.currImg = this.animation.shootAnim1;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftShootAnim1;
          }
        }
        if (this.frames === 5) {
          if (this.direction === 'right') {
            this.currImg = this.animation.shootAnim2;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftShootAnim2;
          }
        }
        if (this.frames === 10) {
          if (this.direction === 'right') {
            this.currImg = this.animation.shootAnim3;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftShootAnim3;
          }
        }
        if (this.frames === 15) {
          if (this.direction === 'right') {
            this.currImg = this.animation.shootAnim4;
          } else if (this.direction === 'left') {
            this.currImg = this.animation.leftShootAnim4;
          }
        }
        if (this.frames === 45) this.frames = 0;
      }
    }
  }, {
    key: 'idle',
    value: function idle() {
      if (!this.keysPressed.ArrowRight && !this.keysPressed.ArrowLeft && !this.keysPressed.ArrowUp && !this.keysPressed.Space) {
        this.frames = 0;
        if (this.direction === 'right') {
          this.currImg = this.animation.idleAnim;
        }
        if (this.direction === 'left') {
          this.currImg = this.animation.leftIdleAnim;
        }
      }
    }
  }, {
    key: 'renderFace',
    value: function renderFace() {
      this.ctx.drawImage(this.animation.face.img, this.animation.face.sX, this.animation.face.sY, this.animation.face.sWidth, this.animation.face.sHeight, 0, 0, 50, 50);
    }
  }, {
    key: 'physics',
    value: function physics() {
      if (this.x + this.width > this.stage.width) {
        this.x = this.stage.width - this.width;
      }
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.y < 0) {
        this.velY = 0;
        this.y = 0;
      }
      if (this.x >= 235 && this.y === 631) this.first = true;
      if (this.x >= 437 && this.y === 521) {
        this.second = true;
        this.checkpoint.x = 450;
        this.checkpoint.y = 470;
      }
      if (this.x <= 10 && this.y === 521) this.third = true;
      if (this.x >= 650 && this.y === 501) this.fourth = true;
      if (this.x <= 10 && this.y === 405) {
        this.fifth = true;
        this.checkpoint.x = 9;
        this.checkpoint.y = 395;
      }
      if (this.x >= 650 && this.y === 405) {
        this.sixth = true;
        this.checkpoint.x = 655;
        this.checkpoint.y = 390;
      }
      if (this.x <= 220 && this.y === 310) {
        this.seventh = true;
        this.checkpoint.x = 566;
        this.checkpoint.y = 390;
      }
      if (this.x <= 10 && this.y <= 225 && this.y >= 223) {
        this.seventh = false;
        this.boss = true;
      }
      if (this.boss) {
        this.checkpoint.x = 55;
        this.checkpoint.y = 290;
      }
      if (this.x >= 655 && this.y === 75) {
        this.won = true;
      }
      this.velX *= this.slide;
      this.velY += this.gravity;
      if (this.grounded) this.velY = 0;

      this.x += this.velX;
      this.y += this.velY;

      this.frames++;
      this.changeDirection();
      this.moveRight();
      this.moveLeft();
      this.jump();
      this.shoot();
      this.idle();
      this.renderFace();
      this.ctx.drawImage(this.currImg.img, this.currImg.sX, this.currImg.sY, this.currImg.sWidth, this.currImg.sHeight, this.x, this.y, this.width, this.height);
    }
  }, {
    key: 'isColliding',
    value: function isColliding(obj) {
      var vX = this.x + this.width / 2 - (obj.x + obj.width / 2);
      var vY = this.y + this.height / 2 - (obj.y + obj.height / 2);
      var hWidth = this.width / 2 + obj.width / 2;
      var hHeight = this.height / 2 + obj.height / 2;
      if (Math.abs(vX) < hWidth && Math.abs(vY) < hHeight) {
        var oX = hWidth - Math.abs(vX);
        var oY = hHeight - Math.abs(vY);
        if (oX >= oY) {
          if (vY < 0) {
            this.y -= oY;
            this.grounded = true;
            // this.keysPressed.ArrowUp = false;
          } else if (vY > 0) {
            this.y += oY + 5;
            this.velY = 0;
          }
        } else {
          if (vX > 0) {
            this.x += oX;
            this.velX = 0;
          } else {
            this.x -= oX;
            this.velX = 0;
          }
        }
      }
    }
  }, {
    key: 'shouldFall',
    value: function shouldFall(obj) {
      if (this.x + this.width >= obj.x && this.x < obj.x + obj.width) {
        if (this.y + this.height === obj.y) {
          return true;
        }
      } else {
        return false;
      }
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sprite = __webpack_require__(0);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bass = function Bass() {
  _classCallCheck(this, Bass);

  this.bass = new Image();
  this.bass.src = 'assets/bass.png';
  this.bassLeft = new Image();
  this.bassLeft.src = 'assets/bass_left.png';
  this.bassFace = new Image();
  this.bassFace.src = 'assets/bass-face.gif';
  this.animation = {
    idleAnim: new _sprite2.default(this.bass, 0, 0, 50, 58),
    leftAnim1: new _sprite2.default(this.bass, 302, 130, 50, 58),
    leftAnim2: new _sprite2.default(this.bass, 245, 130, 50, 58),
    leftAnim3: new _sprite2.default(this.bass, 188, 130, 50, 58),
    rightAnim1: new _sprite2.default(this.bass, 0, 130, 50, 58),
    rightAnim2: new _sprite2.default(this.bass, 60, 130, 50, 58),
    rightAnim3: new _sprite2.default(this.bass, 120, 130, 50, 58),
    jumpAnim1: new _sprite2.default(this.bass, 180, 65, 50, 58),
    jumpAnim2: new _sprite2.default(this.bass, 120, 65, 50, 58),
    jumpAnim3: new _sprite2.default(this.bass, 60, 65, 50, 58),
    shootAnim1: new _sprite2.default(this.bass, 180, 246, 50, 58),
    shootAnim2: new _sprite2.default(this.bass, 180, 495, 50, 58),
    shootAnim3: new _sprite2.default(this.bass, 120, 495, 50, 58),
    shootAnim4: new _sprite2.default(this.bass, 120, 435, 50, 58),
    leftIdleAnim: new _sprite2.default(this.bassLeft, 300, 0, 50, 58),
    leftMoveAnim1: new _sprite2.default(this.bassLeft, 302, 130, 50, 58),
    leftMoveAnim2: new _sprite2.default(this.bassLeft, 245, 130, 50, 58),
    leftMoveAnim3: new _sprite2.default(this.bassLeft, 188, 130, 50, 58),
    rightMoveAnim1: new _sprite2.default(this.bassLeft, 0, 130, 50, 58),
    rightMoveAnim2: new _sprite2.default(this.bassLeft, 60, 130, 50, 58),
    rightMoveAnim3: new _sprite2.default(this.bassLeft, 120, 130, 50, 58),
    leftJumpAnim1: new _sprite2.default(this.bassLeft, 120, 65, 50, 58),
    leftJumpAnim2: new _sprite2.default(this.bassLeft, 180, 65, 50, 58),
    leftJumpAnim3: new _sprite2.default(this.bassLeft, 240, 65, 50, 58),
    leftShootAnim1: new _sprite2.default(this.bassLeft, 120, 246, 50, 58),
    leftShootAnim2: new _sprite2.default(this.bassLeft, 120, 495, 50, 58),
    leftShootAnim3: new _sprite2.default(this.bassLeft, 240, 495, 50, 58),
    leftShootAnim4: new _sprite2.default(this.bassLeft, 240, 435, 50, 58),
    face: new _sprite2.default(this.bassFace, 0, 0, 46, 54)
  };
};

exports.default = Bass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _platform = __webpack_require__(5);

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function () {
  function Block(x, y, width, height, stage) {
    _classCallCheck(this, Block);

    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.platform = new _platform2.default().animation.platform;
  }

  _createClass(Block, [{
    key: 'render',
    value: function render() {
      this.ctx.drawImage(this.platform.img, this.platform.sX, this.platform.sY, this.platform.sWidth, this.platform.sHeight, this.x, this.y, this.width, this.height);
    }
  }]);

  return Block;
}();

exports.default = Block;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sprite = __webpack_require__(0);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Platform = function Platform() {
  _classCallCheck(this, Platform);

  this.platform = new Image();
  this.platform.src = 'assets/platform.png';
  this.animation = {
    platform: new _sprite2.default(this.platform, 0, 10, 71, 30)
  };
};

exports.default = Platform;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprite = __webpack_require__(0);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = function () {
  function Button(x, y, width, height, stage) {
    _classCallCheck(this, Button);

    this.animate = new Image();
    this.animate.src = 'assets/orb.gif';
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.ctx = stage.getContext('2d');
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      this.ctx.drawImage(this.animate, 0, 0, 25, 38, this.x, this.y, this.width, this.height);
    }
  }]);

  return Button;
}();

exports.default = Button;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map