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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('main');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 900;
    this.canvas.height = 700;
    this.player = new _player2.default(this.canvas);
    this.blocks = {};
    this.makeBlocks();
  }

  _createClass(Game, [{
    key: 'makeBlocks',
    value: function makeBlocks() {
      // => main platform
      this.blocks['main'] = new _block2.default(0, 676, 900, 50, this.canvas);
      // => Boss platform
      this.blocks['boss'] = new _block2.default(600, 120, 450, 5, this.canvas);
      // => Platform above player
      this.blocks['1st'] = new _block2.default(0, 580, 30, 8, this.canvas);
      this.blocks['2nd'] = new _block2.default(150, 580, 30, 8, this.canvas);
      this.blocks['3rd'] = new _block2.default(216, 550, 1, 40, this.canvas);
      this.blocks['4th'] = new _block2.default(253, 580, 30, 8, this.canvas);
      this.blocks['5th'] = new _block2.default(350, 580, 30, 8, this.canvas);
      this.blocks['6th'] = new _block2.default(450, 580, 30, 8, this.canvas);
      this.blocks['7th'] = new _block2.default(550, 580, 30, 8, this.canvas);
      this.blocks['8th'] = new _block2.default(620, 630, 30, 8, this.canvas);
      this.blocks['9th'] = new _block2.default(657, 530, 30, 8, this.canvas);
      this.blocks['10th'] = new _block2.default(720, 620, 30, 8, this.canvas);
      this.blocks['11th'] = new _block2.default(850, 650, 55, 30, this.canvas);
      // => Second platform
      this.blocks['12th'] = new _block2.default(800, 495, 100, 8, this.canvas);
      this.blocks['13th'] = new _block2.default(750, 530, 40, 8, this.canvas);
      this.blocks['14th'] = new _block2.default(845, 465, 50, 14, this.canvas);
      this.blocks['15th'] = new _block2.default(750, 425, 40, 8, this.canvas);
      this.blocks['16th'] = new _block2.default(855, 385, 40, 8, this.canvas);
      // => Third platform
      this.blocks['17th'] = new _block2.default(700, 355, 75, 8, this.canvas);
      this.blocks['18th'] = new _block2.default(600, 395, 30, 8, this.canvas);
      this.blocks['19th'] = new _block2.default(500, 395, 30, 8, this.canvas);
      this.blocks['20th'] = new _block2.default(400, 395, 30, 8, this.canvas);
      this.blocks['21st'] = new _block2.default(300, 395, 30, 8, this.canvas);
      this.blocks['22nd'] = new _block2.default(200, 385, 30, 8, this.canvas);
      this.blocks['23rd'] = new _block2.default(75, 368, 50, 8, this.canvas);
      // => Fourth Platform
      this.blocks['24th'] = new _block2.default(0, 330, 30, 8, this.canvas);
      this.blocks['25th'] = new _block2.default(90, 300, 30, 8, this.canvas);
      this.blocks['26th'] = new _block2.default(170, 260, 30, 8, this.canvas);
      this.blocks['27th'] = new _block2.default(270, 260, 30, 8, this.canvas);
      this.blocks['28th'] = new _block2.default(370, 260, 30, 8, this.canvas);
      this.blocks['29th'] = new _block2.default(470, 260, 30, 8, this.canvas);
      this.blocks['30th'] = new _block2.default(570, 260, 30, 8, this.canvas);
      this.blocks['31st'] = new _block2.default(670, 260, 30, 8, this.canvas);
      this.blocks['32nd'] = new _block2.default(730, 230, 2, 40, this.canvas);
      this.blocks['33rd'] = new _block2.default(770, 260, 30, 8, this.canvas);
      this.blocks['34th'] = new _block2.default(880, 260, 30, 8, this.canvas);
      // => Fifth Platform
      this.blocks['35th'] = new _block2.default(10, 200, 30, 8, this.canvas);
      this.blocks['36th'] = new _block2.default(88, 225, 30, 8, this.canvas);
      this.blocks['37th'] = new _block2.default(100, 160, 30, 8, this.canvas);
      this.blocks['38th'] = new _block2.default(160, 130, 30, 8, this.canvas);
      this.blocks['39th'] = new _block2.default(20, 105, 30, 8, this.canvas);
      // => secret doors
      this.blocks['1stDoor'] = new _block2.default(580, 550, 2, 38, this.canvas);
      this.blocks['2ndDoor'] = new _block2.default(655, 500, 2, 38, this.canvas);
      this.blocks['3rdDoor'] = new _block2.default(100, 125, 2, 38, this.canvas);
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
        if (_this.player.first) {
          delete _this.blocks['1stDoor'];
        }
        if (_this.player.second) {
          delete _this.blocks['2ndDoor'];
        }
        if (_this.player.third) {
          delete _this.blocks['3rdDoor'];
        }
      });
      if (!grounded) {
        this.player.grounded = false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.player.physics();
      this.renderBlocks();
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
    this.y = 600;
    this.width = 35;
    this.height = 45;
    this.speed = 4.5;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.grounded = false;
    this.falling = true;
    this.gravity = 0.65;
    this.slide = 0.8;
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
          this.velY = -(this.speed * 2);
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
      if (this.x > 864 && this.y > 604) this.first = true;
      if (this.x > 8 && this.x < 15 && this.y === 535) this.second = true;
      if (this.x === 865 && this.y === 215) this.third = true;

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
  }

  _createClass(Block, [{
    key: 'render',
    value: function render() {
      this.ctx.fillStyle = 'cadetblue';
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Block;
}();

exports.default = Block;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map