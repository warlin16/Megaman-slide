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

var _button = __webpack_require__(7);

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
    this.blocks = {};
    this.buttons = {};
    this.makeBlocks();
    this.makeButtons();
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

      // => Boss platform
      this.blocks['boss'] = new _block2.default(600, 120, 450, 5, this.canvas);
      // => Platform above player or ap
      this.blocks['ap1'] = new _block2.default(0, 566, 40, 20, this.canvas);
      this.blocks['ap2'] = new _block2.default(50, 566, 40, 50, this.canvas);
      this.blocks['ap3'] = new _block2.default(530, 566, 40, 50, this.canvas);
      this.blocks['ap4'] = new _block2.default(620, 566, 40, 50, this.canvas);
      // => second row or sr
      this.blocks['sr1'] = new _block2.default(670, 546, 40, 20, this.canvas);
      // => secret doors
      this.blocks['1stDoor'] = new _block2.default(580, 500, 3, 88, this.canvas);
    }
  }, {
    key: 'makeButtons',
    value: function makeButtons() {
      this.buttons['1'] = new _button2.default(248, 650, 20, 30, this.canvas);
      this.buttons['3'] = new _button2.default(8, 540, 20, 30, this.canvas);
      this.buttons['4'] = new _button2.default(675, 520, 20, 30, this.canvas);
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
        this.blocks['Ssr1'] = new _block2.default(450, 546, 40, 20, this.canvas);
        this.blocks['Ssr2'] = new _block2.default(350, 546, 40, 20, this.canvas);
      }
    }
  }, {
    key: 'render',
    value: function render() {
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
  }]);

  return Game;
}();

document.addEventListener('DOMContentLoaded', function () {
  var game = new Game();
  game.render();

  document.addEventListener('keydown', function (e) {
    game.player.keysPressed[e.code] = true;
  });

  document.addEventListener('keyup', function (e) {
    if (e.code === 'ArrowUp') {
      game.player.keysPressed[e.code] = true;
    } else {
      game.player.keysPressed[e.code] = false;
    }
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

var _bass = __webpack_require__(5);

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
    key: 'slash',
    value: function slash() {
      if (this.keysPressed.Slash) {
        if (this.frames === 2) {
          this.currImg = this.animation.jumpAnim1;
        }
        if (this.frames === 8) {
          this.currImg = this.animation.slashAnim1;
        }
        if (this.frames === 12) {
          this.currImg = this.animation.slashAnim2;
        }
        if (this.frames === 15) {
          this.currImg = this.animation.slashAnim3;
        }
        if (this.frames === 18) {
          this.currImg = this.animation.slashAnim4;
        }
        if (this.frames === 21) {
          this.currImg = this.animation.slashAnim5;
        }
        if (this.frames === 24) {
          this.currImg = this.animation.slashAnim6;
        }
        if (this.frames === 27) {
          this.currImg = this.animation.jumpAnim1;
        }
        if (this.frames === 30) this.frames = 0;
      }
    }
  }, {
    key: 'idle',
    value: function idle() {
      if (!this.keysPressed.ArrowRight && !this.keysPressed.ArrowLeft && !this.keysPressed.ArrowUp && !this.keysPressed.Space && !this.keysPressed.Slash) {
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
      if (this.x >= 244 && this.y === 631) this.first = true;
      if (this.x >= 437 && this.y === 521) this.second = true;
      if (this.x <= 10 && this.y === 521) this.third = true;
      if (this.x >= 650 && this.y === 501) this.fourth = true;

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
      this.slash();
      this.idle();
      this.renderFace();
      this.ctx.drawImage(this.currImg.img, this.currImg.sX, this.currImg.sY, this.currImg.sWidth, this.currImg.sHeight, this.x, this.y, this.width, this.height);
      console.log(this.x, this.y);
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
            this.keysPressed.ArrowUp = false;
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
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _platform = __webpack_require__(6);

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

var Bass = function Bass() {
  _classCallCheck(this, Bass);

  this.bass = new Image();
  this.bass.src = 'assets/bass.png';
  this.bassSword = new Image();
  this.bassSword.src = 'assets/bass_sword.png';
  this.bassLeft = new Image();
  this.bassLeft.src = 'assets/bass_left.png';
  this.bassFace = new Image();
  this.bassFace.src = 'assets/bass-face.png';
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
    slashAnim1: new _sprite2.default(this.bassSword, 0, 149, 57, 58),
    slashAnim2: new _sprite2.default(this.bassSword, 59, 149, 57, 58),
    slashAnim3: new _sprite2.default(this.bassSword, 115, 149, 59, 58),
    slashAnim4: new _sprite2.default(this.bassSword, 200, 149, 68, 58),
    slashAnim5: new _sprite2.default(this.bassSword, 270, 149, 68, 58),
    slashAnim6: new _sprite2.default(this.bassSword, 342, 149, 57, 58),
    face: new _sprite2.default(this.bassFace, 0, 0, 50, 50)
  };
};

exports.default = Bass;

/***/ }),
/* 6 */
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
    platform: new _sprite2.default(this.platform, 0, 10, 71, 36)
  };
};

exports.default = Platform;

/***/ }),
/* 7 */
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