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

var _block = __webpack_require__(2);

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
  }

  _createClass(Game, [{
    key: 'renderBlocks',
    value: function renderBlocks() {
      for (var i = 0; i <= 1; i++) {
        new _block2.default(i * 100, i * 10, 100, 20, this.canvas);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.player.render();
      this.player.physics();
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
    game.player.keysPressed[e.code] = false;
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(stage) {
    _classCallCheck(this, Player);

    this.stage = stage;
    this.ctx = this.stage.getContext('2d');
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.speed = 3;
    this.velX = 0;
    this.velY = 0;
    this.jumping = false;
    this.grounded = false;
    this.gravity = 0.2;
    this.slide = 0.8;
    this.keysPressed = {};
    this.bass = new Image();
    this.bass.src = 'assets/bass.png';
  }

  _createClass(Player, [{
    key: 'move',
    value: function move() {
      if (this.keysPressed.ArrowRight) {
        if (this.velX < this.speed) this.velX++;
      }
      if (this.keysPressed.ArrowLeft) {
        if (this.velX > -this.speed) this.velX--;
      }
      if (this.keysPressed.ArrowUp) {
        if (this.grounded) {
          this.jumping = true;
          this.velY = -(this.speed * 2);
          this.grounded = false;
        }
      }
      this.ctx.drawImage(this.bass, 0, 370, 50, 58, this.x, this.y, this.width, this.height);
    }
  }, {
    key: 'physics',
    value: function physics() {
      if (this.x > this.stage.width - this.width) {
        this.x = this.stage.width - this.width;
      }
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.y < 0) {
        this.velY = 0;
        this.y = 0;
      }
      if (this.y > this.stage.height - this.height) {
        this.y = this.stage.height - this.height;
        this.grounded = true;
        this.velY = 0;
      }

      if (!this.grounded) this.velY += this.gravity;

      console.log();
      this.velX *= this.slide;
      this.x += this.velX;
      this.y += this.velY;
      this.move();
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
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Block;
}();

exports.default = Block;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map