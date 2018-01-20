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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

var _block = __webpack_require__(3);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('main');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 900;
    this.canvas.height = 600;
    this.player = new _player2.default(this.canvas);
    this.blocks = [];
    this.makeBlocks();
  }

  _createClass(Game, [{
    key: 'makeBlocks',
    value: function makeBlocks() {
      for (var i = 0; i < 18; i++) {
        this.blocks.push(new _block2.default(i * 50, 500, 50, 50, this.canvas));
      }
      this.blocks.push(new _block2.default(600, 400, 50, 50, this.canvas));
      this.blocks.push(new _block2.default(400, 350, 50, 50, this.canvas));
    }
  }, {
    key: 'renderBlocks',
    value: function renderBlocks() {
      var _this = this;

      this.blocks.forEach(function (block) {
        block.render();
        _this.player.isColliding(block);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.player.render();
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprite = __webpack_require__(2);

var _sprite2 = _interopRequireDefault(_sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(stage) {
    _classCallCheck(this, Player);

    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = 0;
    this.y = 200;
    this.width = 60;
    this.height = 75;
    this.speed = 3;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.grounded = false;
    this.gravity = 0.3;
    this.slide = 0.8;
    this.keysPressed = {};
    this.bass = new Image();
    this.bass.src = 'assets/bass.png';
    this.bass_sword = new Image();
    this.bass_sword.src = 'assets/bass_sword.png';
    this.movingAnimation = '';
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
      shootAnim2: new _sprite2.default(this.bass, 180, 490, 50, 58),
      shootAnim3: new _sprite2.default(this.bass, 120, 490, 50, 58),
      shootAnim4: new _sprite2.default(this.bass, 120, 435, 50, 58)
    };
    this.currImg = this.animation.idleAnim;
    this.frames = 0;
    this.isColliding = this.isColliding.bind(this);
  }

  _createClass(Player, [{
    key: 'animate',
    value: function animate() {
      this.frames++;
      if (this.keysPressed.ArrowRight) {
        if (this.velX < this.speed) this.velX++;
        if (this.frames === 7) {
          this.currImg = this.animation.rightAnim1;
        }
        if (this.frames === 17) {
          this.currImg = this.animation.rightAnim3;
        }
        if (this.frames === 27) {
          this.currImg = this.animation.rightAnim2;
        }
      }
      if (this.keysPressed.ArrowLeft) {
        if (this.velX > -this.speed) this.velX--;
        if (this.frames === 7) {
          this.currImg = this.animation.leftAnim1;
        }
        if (this.frames === 17) {
          this.currImg = this.animation.leftAnim3;
        }
        if (this.frames === 27) {
          this.currImg = this.animation.leftAnim2;
        }
      }
      if (this.keysPressed.ArrowUp) {
        if (this.grounded) {
          this.jumping = true;
          this.velY = -(this.speed * 2);
          this.grounded = false;
        }
        if (this.jumping) {
          if (this.frames === 1) {
            this.currImg = this.animation.jumpAnim1;
          }
          if (this.frames === 5) {
            this.currImg = this.animation.jumpAnim2;
          }
          if (this.frames === 10) {
            this.currImg = this.animation.jumpAnim3;
          }
        }
      }
      if (this.keysPressed.Space) {
        if (this.frames === 4) {
          this.currImg = this.animation.shootAnim1;
        }
        if (this.frames === 8) {
          this.currImg = this.animation.shootAnim2;
        }
        if (this.frames === 16) {
          this.currImg = this.animation.shootAnim3;
        }
        if (this.frames === 24) {
          this.currImg = this.animation.shootAnim4;
        }
        if (this.frames === 40) this.frames = 0;
      }
      if (!this.keysPressed.ArrowRight && !this.keysPressed.ArrowLeft && !this.keysPressed.ArrowUp && !this.keysPressed.Space) {
        this.frames = 0;
        this.currImg = this.animation.idleAnim;
      }
      this.ctx.drawImage(this.currImg.img, this.currImg.sX, this.currImg.sY, this.currImg.sWidth, this.currImg.sHeight, this.x, this.y, this.width, this.height);
      // this.ctx.drawImage(this.bass_sword, 108, 0,
      //   50, 58, this.x,
      //   this.y, this.width, this.height);
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
      // if (this.y > this.stage.height - this.height) {
      //   this.y = this.stage.height - this.height;
      //   this.grounded = true;
      //   this.frames = 0;
      //   this.velY = 0;
      //   this.keysPressed.ArrowUp = false;
      // }

      if (!this.grounded) this.velY += this.gravity;

      this.velX *= this.slide;
      this.x += this.velX;
      this.y += this.velY;
      this.animate();
    }
  }, {
    key: 'isColliding',
    value: function isColliding(obj) {
      // if (this.x < obj.x + obj.width &&
      // this.x + this.width > obj.x &&
      // this.y < obj.y + obj.height &&
      // this.height + this.y > obj.y) {
      //   this.velX = 0;
      //   // console.log('collidng on the x brooooo');
      // }

      if (this.y < obj.y + obj.height && this.y + this.height > obj.y && this.x < obj.x + obj.width && this.width + this.x > obj.x) {
        if (this.velY > 0) {
          this.y = obj.y - this.height;
          this.grounded = true;
        } else if (this.velY < 0) {
          this.y = obj.y + obj.height;
          this.grounded = false;
        }
        this.frames = 0;
        this.velY = 0;
        this.keysPressed.ArrowUp = false;
        // console.log('Im colliding bro on the y');
      } else {
          // this.grounded = false;
        }
    }
  }, {
    key: 'render',
    value: function render() {
      this.physics();
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),
/* 2 */
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
/* 3 */
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
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Block;
}();

exports.default = Block;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map