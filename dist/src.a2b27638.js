// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/impresi/lib/impresi.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("impresi", [], factory);
	else if(typeof exports === 'object')
		exports["impresi"] = factory();
	else
		root["impresi"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _background = _interopRequireDefault(__webpack_require__(/*! ./lib/background */ "./src/lib/background.js"));

var _heading = _interopRequireDefault(__webpack_require__(/*! ./lib/heading */ "./src/lib/heading.js"));

var _blurb = _interopRequireDefault(__webpack_require__(/*! ./lib/blurb */ "./src/lib/blurb.js"));

var _group = _interopRequireDefault(__webpack_require__(/*! ./lib/group */ "./src/lib/group.js"));

var _action = _interopRequireDefault(__webpack_require__(/*! ./lib/action */ "./src/lib/action.js"));

var _image = _interopRequireDefault(__webpack_require__(/*! ./lib/image */ "./src/lib/image.js"));

var _styles = __webpack_require__(/*! ./styles */ "./src/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(void 0, function () {
  'use strict';

  var Impresi = function () {
    var Impresi =
    /*#__PURE__*/
    function () {
      function Impresi(boardId) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        _classCallCheck(this, Impresi);

        if (!boardId) {
          throw new Error('ID for board is required');
        }

        this.board = document.querySelector('#' + boardId);

        if (!this.board) {
          throw new Error('No HTML element with the ID: ' + boardId);
        }

        this.options = options;
        this.groups = [];
        this.screenIndex = 0; // this.index = 0;

        this.isFirebaseEnabled;
        this.init();
      }

      _createClass(Impresi, [{
        key: "init",
        value: function init() {
          this.getStyles();
          this.setListeners();
          this.displayLoader();

          if (this.options && this.options.data) {
            this.addScreens(this.options.data);
          }

          console.log('init', this.options);

          if (this.options && this.options.fbConfig) {
            this.initFirebase();
          }
        }
      }, {
        key: "initFirebase",
        value: function initFirebase() {
          firebase.initializeApp(this.options.fbConfig); // const snapshot = await firebase.firestore().collection('screens').get()
          // return snapshot.docs.map(doc => doc.data());

          console.log('init fb');
          firebase.firestore().collection("appState").doc("currentScreen").onSnapshot(function (doc) {
            console.log("Current data: ", doc.data());
          });
          this.isFirebaseEnabled = true; //firebase.initializeApp(this.options.fbConfig);
          // const snapshot = await firebase.firestore().collection('screens').get()
          // return snapshot.docs.map(doc => doc.data());
          // console.log('init fb')
          // firebase.firestore().collection("appState").doc("currentScreen")
          //   .onSnapshot(function (doc) {
          //     console.log("Current data: ", doc.data());
          //   });
          // console.log('init fb 2')
          // this.firestore.collection('appState').doc("currentScreen").add('1');
          // console.log('init fb 3')
        }
      }, {
        key: "updateFirebase",
        value: function updateFirebase() {
          if (this.isFirebaseEnabled) {
            console.log('fb 1');
            firebase.firestore().collection("appState").doc("currentScreen").set({
              index: this.screenIndex
            }).then(function () {
              console.log("Document successfully written!");
            }).catch(function (error) {
              console.error("Error writing document: ", error);
            });
          }
        }
      }, {
        key: "setListeners",
        value: function setListeners() {
          var _this = this;

          var self = this;

          document.body.onkeyup = function (e) {
            //increment keys: space, down, right or enter
            if (e.keyCode === 32 || e.keyCode === 40 || e.keyCode === 39 || e.keyCode === 13) {
              if (_this.screenIndex - 1 < _this.groups.length) {
                if (_this.screenIndex < _this.groups.length - 1) {
                  _this.increment();
                }

                self.next(); // 
              }
            } //decrement keys: up or left


            if (e.keyCode === 38 || e.keyCode === 37) {
              if (_this.screenIndex > 0) {
                _this.decrement();

                self.previous(self.screenIndex === self.groups.length);
              }
            }
          };
        }
      }, {
        key: "getStyles",
        value: function getStyles() {
          //core styles
          var styleEl = document.createElement('style');
          styleEl.type = 'text/css';
          styleEl.innerHTML = _styles.styles;
          this.board.appendChild(styleEl); //animation styles

          styleEl = document.createElement('style');
          styleEl.type = 'text/css';
          styleEl.innerHTML = '@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");';
          this.board.appendChild(styleEl);
        }
      }, {
        key: "displayLoader",
        value: function displayLoader() {
          var overlay = document.createElement('div');
          overlay.classList.add('overlay');
          var loader = document.createElement('div');
          loader.innerHTML = '<div></div><div></div>';
          loader.classList.add('lds-ripple');
          overlay.appendChild(loader);
          document.body.appendChild(overlay);
        }
      }, {
        key: "createBackground",
        value: function createBackground(options) {
          return new _background.default(this, options);
        }
      }, {
        key: "createHeading",
        value: function createHeading(text, options) {
          return new _heading.default(this, text, options);
        }
      }, {
        key: "createBlurb",
        value: function createBlurb(text, options) {
          return new _blurb.default(this, text, options);
        }
      }, {
        key: "createImage",
        value: function createImage(src, options) {
          return new _image.default(this, src, options);
        }
      }, {
        key: "addActions",
        value: function addActions(options) {
          if (options.out) {
            this.addGroup('out', options);
          }

          if (options.in) {
            this.addGroup('in', options);
          }

          return this;
        }
      }, {
        key: "addGroup",
        value: function addGroup(actionName, options) {
          var actions = [];
          options[actionName].forEach(function (item) {
            var action = new _action.default(item);
            actions.push(action);
          });
          var group = new _group.default(actionName, actions);
          this.groups.push(group);
        }
      }, {
        key: "next",
        value: function next() {
          var group = this.groups[this.screenIndex];

          if (group.actionName === 'out') {
            if (!group.actions.length) {
              throw new Error('No actions provided.');
            }

            group.stop();
            this.increment();
            this.next();
          } else {
            group.run(); // if (this.screenIndex < this.groups.length - 1) {
            //   this.increment();
            // }
          }
        }
      }, {
        key: "previous",
        value: function previous(isLast) {
          if (this.screenIndex !== 1) {
            if (!isLast) {
              this.decrement();
            }

            var group = this.groups[this.screenIndex];

            if (group.actionName === 'in') {
              if (!group.actions.length) {
                throw new Error('No actions provided.');
              }

              group.stop();

              if (isLast) {
                this.decrement();
                this.previous(true);
              } else {
                this.previous(this.screenIndex === this.groups.length - 1);
              }
            } else {
              group.run();
              this.screenIndex--;
              window.location.hash = "screen".concat(this.screenIndex);
            }
          }
        }
      }, {
        key: "start",
        value: function start() {
          if (!this.groups.length) {
            throw new Error('No groups of actions have been added yet.');
          }

          if (window.location.hash) {
            // Fragment exists
            var frag = window.location.hash;

            if (frag.match('^#screen[0-9]+$')) {
              var matches = frag.match('[0-9]+');

              if (matches) {
                this.screenIndex = parseInt(matches[0]);
              }

              if (this.screenIndex > 0 && this.screenIndex <= this.groups.length / 2 + 1) {
                for (var i = 0; i < this.screenIndex; i++) {
                  this.next();
                }
              } else {
                this.screenIndex = 1;
                window.location.hash = 'screen1';
                this.next();
              }
            }
          } else {
            this.next();
            this.screenIndex++;
            window.location.hash = 'screen1';
          }

          document.querySelector('.overlay').classList.add('hide');
        }
      }, {
        key: "increment",
        value: function increment() {
          if (this.screenIndex !== this.groups.length - 1) {
            this.screenIndex++;
            window.location.hash = "screen".concat(this.screenIndex);
            this.updateFirebase();
          }
        }
      }, {
        key: "decrement",
        value: function decrement() {
          if (this.screenIndex > 0) {
            this.screenIndex--;
            window.location.hash = "screen".concat(this.screenIndex);
            this.updateFirebase();
          }
        }
      }, {
        key: "getFirebaseScreens",
        value: function getFirebaseScreens(config) {
          var getData = function () {
            var _ref = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var snapshot;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return firebase.firestore().collection('screens').get();

                    case 2:
                      snapshot = _context.sent;
                      return _context.abrupt("return", snapshot.docs.map(function (doc) {
                        return doc.data();
                      }));

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function getData() {
              return _ref.apply(this, arguments);
            };
          }();

          // var config = {
          //   apiKey: "AIzaSyCCBjfvjBGp8Yd09lv1GEI46S2FjnfXuso",
          //   authDomain: "impresi-93d55.firebaseapp.com",
          //   databaseURL: "https://impresi-93d55.firebaseio.com",
          //   projectId: "impresi-93d55",
          //   storageBucket: "impresi-93d55.appspot.com",
          //   messagingSenderId: "83130091195"
          // };
          firebase.initializeApp(config);
          getData().then(function (data) {
            var transformedData = transformFirebaseData(data);
            return transformedData;
          });
        }
      }, {
        key: "transformFirebaseData",
        value: function transformFirebaseData(firebaseData) {
          var data = {};
          var screens = [];
          Object.keys(firebaseData.screens).forEach(function (key, index) {
            var firebaseScreen = firebaseData.screens[key];
            var screen = {};
            screen.id = key;
            var resources = [];
            Object.keys(firebaseScreen).forEach(function (key, index) {
              var group = firebaseScreen[key];
              Object.keys(group).forEach(function (key, index) {
                resources.push(screen[key]);
              });
              screen[key] = resources;
            });
            screens.push(screen);
          });
          data.screens = screens;
          return data;
        }
      }, {
        key: "addScreens",
        value: function addScreens(config) {
          if (config.firebaseConfig) {
            config.screens = this.getFirebaseScreens(config.firebaseConfig);
          }

          var self = this;

          if (!config.screens) {
            throw new Error('No screens exist in the data.');
          }

          config.screens.forEach(function (screen) {
            Object.keys(screen).forEach(function (key, index) {
              // key: the name of the object key
              // index: the ordinal position of the key within the object 
              var configActions = screen[key];
              var actions = [];

              if (key === 'in' || key === 'out') {
                configActions.forEach(function (resource) {
                  if (!resource.type) {
                    throw new Error('All items must have a type.');
                  }

                  if (!resource.id) {
                    throw new Error('All items must have an id.');
                  }

                  if (!resource.options) {
                    resource.options = {};
                  }

                  resource.options.id = resource.id;

                  switch (resource.type) {
                    case 'background':
                      var bg = self.createBackground(resource.options);
                      actions.push(new _action.default(bg));
                      break;

                    case 'heading':
                      var h = self.createHeading(resource.text, resource.options);
                      actions.push(new _action.default(h));
                      break;

                    case 'blurb':
                      var b = self.createBlurb(resource.text, resource.options);
                      actions.push(new _action.default(b));
                      break;

                    case 'image':
                      var i = self.createImage(resource.src, resource.options);
                      actions.push(new _action.default(i));
                      break;

                    default:
                      return;
                  }
                });
                var group = new _group.default(key, actions);
                self.groups.push(group);
              }
            });
          });
        } // addResources(data) {
        //   if (!data.resources) {
        //     throw new Error('No resources exist in the data.');
        //   }
        //   let items = [];
        //   data.resources.forEach(resource => {
        //     if (!resource.type) {
        //       throw new Error('All items must have a type.');
        //     }
        //     if (!resource.id) {
        //       throw new Error('All items must have an id.');
        //     }
        //     if (!resource.options) {
        //       resource.options = {};
        //     }
        //     resource.options.id = resource.id;
        //     switch (resource.type) {
        //       case 'background':
        //         items.push(this.createBackground(resource.options));
        //         break;
        //       case 'heading':
        //         items.push(this.createHeading(resource.text, resource.options));
        //         break;
        //       case 'blurb':
        //         items.push(this.createBlurb(resource.text, resource.options));
        //         break;
        //       case 'image':
        //         items.push(this.createImage(resource.src, resource.options));
        //         break;
        //       default:
        //         return;
        //     }
        //   });
        //   let actions = data.actions;
        //   actions.forEach(action => {
        //     for (var key in action) {
        //       if (action.hasOwnProperty(key)) {
        //         let actionsObj = {};
        //         actionsObj[key] = [];
        //         let itemIds = action[key];
        //         itemIds.forEach(itemId => {
        //           for (let item of items) {
        //             if (item.id == itemId) {
        //               actionsObj[key].push(item);
        //               break;
        //             }
        //           }
        //         });
        //         this.addActions(actionsObj);
        //       }
        //     }
        //   });
        // }

      }]);

      return Impresi;
    }();

    global.Impresi = Impresi;
    return Impresi;
  }();

  return Impresi;
}); // /**!
//  * @fileOverview A Javascript library for creating beautiful slide presentations.
//  * @version 0.0.3
//  * @license
//  * Copyright (c) 2019 Richard Lovell and contributors
//  *
//  * Permission is hereby granted, free of charge, to any person obtaining a copy
//  * of this software and associated documentation files (the 'Software'), to deal
//  * in the Software without restriction, including without limitation the rights
//  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  * copies of the Software, and to permit persons to whom the Software is
//  * furnished to do so, subject to the following conditions:
//  *
//  * The above copyright notice and this permission notice shall be included in all
//  * copies or substantial portions of the Software.
//  *
//  * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  * SOFTWARE.
//  */
// import Background from './lib/background';
// import Heading from './lib/heading';
// import Blurb from './lib/blurb';
// import Group from './lib/group';
// import Action from './lib/action';
// import Image from './lib/image';
// import { styles } from './styles';
// (function (global, factory) {
//   typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
//     typeof define === 'function' && define.amd ? define(factory) :
//       (global.Impresi = factory());
// }(this, (function () {
//   'use strict';
//    var Impresi = function () {
//   class Impresi {
//     constructor(boardId, data, options = []) {
//       if (!boardId) {
//         throw new Error('ID for board is required');
//       }
//       this.board = document.querySelector('#' + boardId);
//       if (!this.board) {
//         throw new Error('No HTML element with the ID: ' + boardId);
//       }
//       this.options = options;
//       this.groups = [];
//       this.screenIndex = 0;
//       this.index = 0;
//       if (data) {
//         this.addResources(data);
//       }
//       this.init();
//     }
//     init() {
//       this.getStyles();
//       this.setListeners();
//       this.displayLoader();
//     }
//     setListeners() {
//       let self = this;
//       document.body.onkeyup = e => {
//         //increment keys: space, down, right or enter
//         if (
//           e.keyCode === 32 ||
//           e.keyCode === 40 ||
//           e.keyCode === 39 ||
//           e.keyCode === 13
//         ) {
//           if (this.index < this.groups.length - 1) {
//             self.next();
//             this.screenIndex++;
//             window.location.hash = `screen${this.screenIndex}`;
//           }
//         }
//         //decrement keys: up or left
//         if (e.keyCode === 38 || e.keyCode === 37) {
//           if (this.index > 0) {
//             self.previous(self.index === self.groups.length - 1);
//           }
//         }
//       };
//     }
//     getStyles() {
//       //core styles
//       let styleEl = document.createElement('style');
//       styleEl.type = 'text/css';
//       styleEl.innerHTML = styles;
//       this.board.appendChild(styleEl);
//       //animation styles
//       styleEl = document.createElement('style');
//       styleEl.type = 'text/css';
//       styleEl.innerHTML =
//         '@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");';
//       this.board.appendChild(styleEl);
//     }
//     displayLoader() {
//       let overlay = document.createElement('div');
//       overlay.classList.add('overlay');
//       let loader = document.createElement('div');
//       loader.innerHTML = '<div></div><div></div>';
//       loader.classList.add('lds-ripple');
//       overlay.appendChild(loader);
//       document.body.appendChild(overlay);
//     }
//     createBackground(options) {
//       return new Background(this, options);
//     }
//     createHeading(text, options) {
//       return new Heading(this, text, options);
//     }
//     createBlurb(text, options) {
//       return new Blurb(this, text, options);
//     }
//     createImage(src, options) {
//       return new Image(this, src, options);
//     }
//     addActions(options) {
//       if (options.out) {
//         this.addGroup('out', options);
//       }
//       if (options.in) {
//         this.addGroup('in', options);
//       }
//       return this;
//     }
//     addGroup(actionName, options) {
//       let actions = [];
//       options[actionName].forEach(item => {
//         let action = new Action(item);
//         actions.push(action);
//       });
//       let group = new Group(actionName, actions);
//       this.groups.push(group);
//     }
//     next() {
//       let group = this.groups[this.index];
//       if (group.actionName === 'out') {
//         if (!group.actions.length) {
//           throw new Error('No actions provided.');
//         }
//         group.stop();
//         this.increment();
//         this.next();
//       } else {
//         group.run();
//         if (this.index < this.groups.length - 1) {
//           this.increment();
//         }
//       }
//     }
//     previous(isLast) {
//       if (this.index !== 1) {
//         if (!isLast) {
//           this.decrement();
//         }
//         let group = this.groups[this.index];
//         if (group.actionName === 'in') {
//           if (!group.actions.length) {
//             throw new Error('No actions provided.');
//           }
//           group.stop();
//           if (isLast) {
//             this.decrement();
//             this.previous(true);
//           } else {
//             this.previous(this.index === this.groups.length - 1);
//           }
//         } else {
//           group.run();
//           this.screenIndex--;
//           window.location.hash = `screen${this.screenIndex}`;
//         }
//       }
//     }
//     start() {
//       if (!this.groups.length) {
//         throw new Error('No groups of actions have been added yet.');
//       }
//       if (window.location.hash) {
//         // Fragment exists
//         let frag = window.location.hash;
//         if (frag.match('^#screen[0-9]+$')) {
//           var matches = frag.match('[0-9]+');
//           if (matches) {
//             this.screenIndex = parseInt(matches[0]);
//           }
//           if (this.screenIndex > 0 && this.screenIndex <= this.groups.length / 2 + 1) {
//             for (let i = 0; i < this.screenIndex; i++) {
//               this.next();
//             }
//           } else {
//             this.screenIndex = 1;
//             window.location.hash = 'screen1';
//             this.next();
//           }
//         }
//       } else {
//         this.next();
//         this.screenIndex++;
//         window.location.hash = 'screen1';
//       }
//       document.querySelector('.overlay').classList.add('hide');
//     }
//     increment() {
//       if (this.index !== this.groups.length - 1) {
//         this.index++;
//       }
//     }
//     decrement() {
//       if (this.index > 0) {
//         this.index--;
//       }
//     }
//     addResources(data) {
//       if (!data.resources) {
//         throw new Error('No resources exist in the data.');
//       }
//       let items = [];
//       data.resources.forEach(resource => {
//         if (!resource.type) {
//           throw new Error('All items must have a type.');
//         }
//         if (!resource.id) {
//           throw new Error('All items must have an id.');
//         }
//         if (!resource.options) {
//           resource.options = {};
//         }
//         resource.options.id = resource.id;
//         switch (resource.type) {
//           case 'background':
//             items.push(this.createBackground(resource.options));
//             break;
//           case 'heading':
//             items.push(this.createHeading(resource.text, resource.options));
//             break;
//           case 'blurb':
//             items.push(this.createBlurb(resource.text, resource.options));
//             break;
//           case 'image':
//             items.push(this.createImage(resource.src, resource.options));
//             break;
//           default:
//             return;
//         }
//       });
//       let actions = data.actions;
//       actions.forEach(action => {
//         for (var key in action) {
//           if (action.hasOwnProperty(key)) {
//             let actionsObj = {};
//             actionsObj[key] = [];
//             let itemIds = action[key];
//             itemIds.forEach(itemId => {
//               for (let item of items) {
//                 if (item.id == itemId) {
//                   actionsObj[key].push(item);
//                   break;
//                 }
//               }
//             });
//             this.addActions(actionsObj);
//           }
//         }
//       });
//     }
//   }
//   global.Impresi = Impresi;
//   return Impresi;
//    }();
//    return Impresi;
// })));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/lib/absolute-item.js":
/*!**********************************!*\
  !*** ./src/lib/absolute-item.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _item = _interopRequireDefault(__webpack_require__(/*! ./item */ "./src/lib/item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AbsoluteItem =
/*#__PURE__*/
function (_Item) {
  _inherits(AbsoluteItem, _Item);

  function AbsoluteItem(impresi, options) {
    var _this;

    _classCallCheck(this, AbsoluteItem);

    _this = _possibleConstructorReturn(this, (AbsoluteItem.__proto__ || Object.getPrototypeOf(AbsoluteItem)).call(this, impresi, options));

    if (options.x == undefined) {
      _this.options.x = 10; //default
    }

    if (options.y == undefined) {
      _this.options.y = 10; //default
    }

    return _this;
  }

  _createClass(AbsoluteItem, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(AbsoluteItem.prototype.__proto__ || Object.getPrototypeOf(AbsoluteItem.prototype), "addElement", this).call(this, elementName);

      this.element.style.left = "".concat(this.options.x, "vw");
      this.element.style.top = "".concat(this.options.y, "vh");
    }
  }]);

  return AbsoluteItem;
}(_item.default);

exports.default = AbsoluteItem;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/action.js":
/*!***************************!*\
  !*** ./src/lib/action.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Action =
/*#__PURE__*/
function () {
  function Action(item) {
    _classCallCheck(this, Action);

    this.item = item;
    this.inAnimationName = this.item.options.inAnimationName != undefined ? item.options.inAnimationName : "fadeIn";
    this.outAnimationName = item.options.outAnimationName != undefined ? item.options.outAnimationName : "fadeOut";
  }

  _createClass(Action, [{
    key: "run",
    value: function run() {
      this.item.element.classList.remove("hide");
      this.item.element.classList.remove(this.outAnimationName);
      this.item.element.classList.add("animated", this.inAnimationName);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.item.element.classList.remove("animated", this.inAnimationName);
      this.item.element.classList.add(this.outAnimationName);
      this.item.element.classList.add("hide");
    }
  }]);

  return Action;
}();

exports.default = Action;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/background.js":
/*!*******************************!*\
  !*** ./src/lib/background.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _item = _interopRequireDefault(__webpack_require__(/*! ./item */ "./src/lib/item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Background =
/*#__PURE__*/
function (_Item) {
  _inherits(Background, _Item);

  function Background(impresi) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Background);

    _this = _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, impresi, options));

    _set(Background.prototype.__proto__ || Object.getPrototypeOf(Background.prototype), "defaultInAnimationName", "fadeIn", _this);

    _this.addElement("div");

    return _this;
  }

  _createClass(Background, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(Background.prototype.__proto__ || Object.getPrototypeOf(Background.prototype), "addElement", this).call(this, elementName);

      this.element.classList.add("background", "item");

      if (this.options.imageUrl) {
        var image = document.createElement("img");
        image.src = this.options.imageUrl;
        this.element.appendChild(image);
      } else if (this.options.backgroundColor) {
        this.element.style.backgroundColor = this.options.backgroundColor;
      }
    }
  }]);

  return Background;
}(_item.default);

exports.default = Background;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/blurb.js":
/*!**************************!*\
  !*** ./src/lib/blurb.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _textItem = _interopRequireDefault(__webpack_require__(/*! ./text-item.js */ "./src/lib/text-item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Blurb =
/*#__PURE__*/
function (_TextItem) {
  _inherits(Blurb, _TextItem);

  function Blurb(impresi, text) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Blurb);

    _this = _possibleConstructorReturn(this, (Blurb.__proto__ || Object.getPrototypeOf(Blurb)).call(this, impresi, options));
    _this.text = text;
    _this.zIndex = 2;
    _this.defaultFontSize = 1.5;

    _this.addElement("div");

    return _this;
  }

  _createClass(Blurb, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(Blurb.prototype.__proto__ || Object.getPrototypeOf(Blurb.prototype), "addElement", this).call(this, elementName);

      this.element.style.maxWidth = "".concat(this.options.width, "vw");
      this.element.classList.add("blurb", "item");
      this.element.style.zIndex = this.zIndex;
      var p = document.createElement("p");
      p.innerHTML = this.text;

      _get(Blurb.prototype.__proto__ || Object.getPrototypeOf(Blurb.prototype), "setChildOptions", this).call(this, p);

      this.element.appendChild(p);
    }
  }]);

  return Blurb;
}(_textItem.default);

exports.default = Blurb;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/group.js":
/*!**************************!*\
  !*** ./src/lib/group.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Group =
/*#__PURE__*/
function () {
  function Group(actionName, actions) {
    _classCallCheck(this, Group);

    this.actionName = actionName;
    this.actions = actions;
  }

  _createClass(Group, [{
    key: "run",
    value: function run() {
      var i = 0;
      this.actions.forEach(function (action) {
        action.run();
        i++;
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var i = 0;
      this.actions.forEach(function (action) {
        action.stop();
        i++;
      });
    }
  }]);

  return Group;
}();

exports.default = Group;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/heading.js":
/*!****************************!*\
  !*** ./src/lib/heading.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _textItem = _interopRequireDefault(__webpack_require__(/*! ./text-item.js */ "./src/lib/text-item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Heading =
/*#__PURE__*/
function (_TextItem) {
  _inherits(Heading, _TextItem);

  function Heading(impresi, text) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Heading);

    _this = _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).call(this, impresi, options));
    _this.text = text;
    _this.zIndex = 1;
    _this.defaultFontSize = 2;

    _this.addElement("div");

    return _this;
  }

  _createClass(Heading, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(Heading.prototype.__proto__ || Object.getPrototypeOf(Heading.prototype), "addElement", this).call(this, elementName);

      this.element.classList.add("heading", "item");
      var h1 = document.createElement("h1");
      this.element.style.zIndex = this.zIndex;
      h1.innerHTML = this.text;

      _get(Heading.prototype.__proto__ || Object.getPrototypeOf(Heading.prototype), "setChildOptions", this).call(this, h1);

      this.element.appendChild(h1);
    }
  }]);

  return Heading;
}(_textItem.default);

exports.default = Heading;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/image.js":
/*!**************************!*\
  !*** ./src/lib/image.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _absoluteItem = _interopRequireDefault(__webpack_require__(/*! ./absolute-item */ "./src/lib/absolute-item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Image =
/*#__PURE__*/
function (_AbsoluteItem) {
  _inherits(Image, _AbsoluteItem);

  function Image(impresi, src, options) {
    var _this;

    _classCallCheck(this, Image);

    _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, impresi, options));

    _set(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), "defaultInAnimationName", "slideInUp", _this);

    _this.src = src;
    _this.zIndex = 1;

    _this.addElement('img');

    return _this;
  }

  _createClass(Image, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), "addElement", this).call(this, elementName);

      if (this.options.width) {
        this.element.style.maxWidth = "".concat(this.options.width, "vw");
        this.element.style.overflow = "hidden";
      } // this.options.inAnimationName = this.options.inAnimationName != undefined
      //     ? this.options.inAnimationName : this.defaultInAnimationName;


      this.element.classList.add("image", "item");
      this.element.style.zIndex = this.zIndex;
      this.element.src = this.src;
    }
  }]);

  return Image;
}(_absoluteItem.default);

exports.default = Image;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/item.js":
/*!*************************!*\
  !*** ./src/lib/item.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Item =
/*#__PURE__*/
function () {
  function Item(impresi, options) {
    _classCallCheck(this, Item);

    this.board = impresi.board;
    this.options = options;
    this.element;

    _get(Item.prototype.__proto__ || Object.getPrototypeOf(Item.prototype), "defaultInAnimationName", this); //resources created through JSON data provide an ID through the options


    if (options.id) {
      this.id = options.id;
    }
  }

  _createClass(Item, [{
    key: "addElement",
    value: function addElement(elementName) {
      this.element = document.createElement(elementName);
      this.board.appendChild(this.element);
      this.options.inAnimationName = this.options.inAnimationName != undefined ? this.options.inAnimationName : this.defaultInAnimationName;
    }
  }]);

  return Item;
}();

exports.default = Item;
module.exports = exports["default"];

/***/ }),

/***/ "./src/lib/text-item.js":
/*!******************************!*\
  !*** ./src/lib/text-item.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _absoluteItem = _interopRequireDefault(__webpack_require__(/*! ./absolute-item */ "./src/lib/absolute-item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextItem =
/*#__PURE__*/
function (_AbsoluteItem) {
  _inherits(TextItem, _AbsoluteItem);

  function TextItem(impresi, options) {
    var _this;

    _classCallCheck(this, TextItem);

    _this = _possibleConstructorReturn(this, (TextItem.__proto__ || Object.getPrototypeOf(TextItem)).call(this, impresi, options));

    _set(TextItem.prototype.__proto__ || Object.getPrototypeOf(TextItem.prototype), "defaultInAnimationName", "slideInUp", _this);

    return _this;
  }

  _createClass(TextItem, [{
    key: "addElement",
    value: function addElement(elementName) {
      _get(TextItem.prototype.__proto__ || Object.getPrototypeOf(TextItem.prototype), "addElement", this).call(this, elementName);

      if (this.options.width) {
        this.element.style.maxWidth = "".concat(this.options.width, "vw");
        this.element.style.overflow = "hidden";
      }

      if (this.options.backgroundColor) {
        this.element.style.backgroundColor = this.options.backgroundColor;
      }
    }
  }, {
    key: "setChildOptions",
    value: function setChildOptions(child) {
      child.style.fontSize = "".concat(this.getFontSize(), "vw");

      if (this.options.fontColor) {
        child.style.color = this.options.fontColor;
      }
    }
  }, {
    key: "getFontSize",
    value: function getFontSize() {
      return this.options.fontSize != undefined ? this.options.fontSize : this.defaultFontSize;
    }
  }]);

  return TextItem;
}(_absoluteItem.default);

exports.default = TextItem;
module.exports = exports["default"];

/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var styles = "\nbody {\n  margin: 0;\n  text-align: center;\n}\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nh1,\np {\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.item {\n  visibility: hidden;\n}\n\nbody, .board {\n  overflow: hidden;\n}\n\n.animated {\n  visibility: visible;\n}\n\n.hide {\n  display: none;\n}\n\n.background {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n}\n\n.background img {\n  flex-shrink: 0;\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.heading,\n.blurb,\n.background,\n.image {\n  position: absolute;\n  background-color: #333;\n}\n\n.heading,\n.blurb {\n  padding: 15px;\n}\n\n.heading h1 {\n  font-size: 2.4em;\n}\n\n.blurb p {\n  font-size: 1.4em;\n}\n\n.heading h1,\n.blurb p {\n  margin: 0;\n  color: #fff;\n}\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  background-color: #333;\n  width: 100vw;\n  height: 100vh;\n}\n\n.lds-ripple {\n  display: inline-block;\n  position: fixed;\n  top: 40vh;\n  left: calc(50vw - 32px);\n  width: 64px;\n  height: 64px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n  }\n}\n\n\n@media only screen and (max-width: 600px) {\n  .heading:not(.hide),\n  .blurb:not(.hide),\n  .image:not(.hide){\n    position: static;\n    display: block;\n  }\n\n  .image:not(.hide) {\n    width: 100vw;\n    max-width: 100vw !important;\n  }\n\n  .heading:not(.hide) h1 {\n    font-size: 5vw;\n  }\n\n  .blurb p {\n    font-size: 4vw;\n  }\n}\n";
exports.styles = styles;

/***/ })

/******/ });
});

},{}],"src/index.js":[function(require,module,exports) {
"use strict";

var _impresi = _interopRequireDefault(require("impresi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isCreateByConfig = true;
createByConfig();

function createByConfig() {
  // let config = {
  //   resources: [
  //     {
  //       id: "b1",
  //       type: "background",
  //       options: {
  //         backgroundColor: "#333"
  //       }
  //     },
  //     {
  //       id: "b1h1",
  //       type: "heading",
  //       text: "Heading 1",
  //       options: {
  //         fontSize: 3,
  //         x: 10,
  //         y: 15
  //       }
  //     },
  //     {
  //       id: "b1b1",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         width: 100,
  //         x: 10,
  //         y: 30
  //       }
  //     },
  //     {
  //       id: "b1i1",
  //       type: "image",
  //       src:
  //         "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/u4Qp-Christchurch_Art_Gallery.jpg",
  //       options: {
  //         x: 40,
  //         y: 10
  //       }
  //     },
  //     {
  //       id: "b2",
  //       type: "background",
  //       options: {
  //         imageUrl:
  //           "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/RlKT-docs.jpg"
  //       }
  //     },
  //     {
  //       id: "b2h1",
  //       type: "heading",
  //       text: "Heading 2"
  //     },
  //     {
  //       id: "b2b1",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 10
  //       }
  //     },
  //     {
  //       id: "b2b2",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 28
  //       }
  //     },
  //     {
  //       id: "b2b3",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 46
  //       }
  //     },
  //     {
  //       id: "b3",
  //       type: "background",
  //       options: {
  //         imageUrl:
  //           "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/nocD-Image%20from%20iOS.jpg"
  //       }
  //     },
  //     {
  //       id: "b3h1",
  //       type: "heading",
  //       text: "Heading 3"
  //     },
  //     {
  //       id: "b3b1",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 10
  //       }
  //     },
  //     {
  //       id: "b4",
  //       type: "background",
  //       options: {
  //         imageUrl:
  //           "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/dFOr-51947642_1046963988839118_7189620218069516288_n.jpg"
  //       }
  //     },
  //     {
  //       id: "b4b1",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 28
  //       }
  //     },
  //     {
  //       id: "b5",
  //       type: "background",
  //       options: {
  //         imageUrl:
  //           "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/1jfM-nzma.jpg"
  //       }
  //     },
  //     {
  //       id: "b5b1",
  //       type: "blurb",
  //       text: "Blurb",
  //       options: {
  //         x: 50,
  //         y: 46
  //       }
  //     },
  //     {
  //       id: "b6",
  //       type: "background",
  //       options: {
  //         backgroundColor: "#d4e3fc"
  //       }
  //     },
  //     {
  //       id: "b6h1",
  //       type: "heading",
  //       text: "Thank You :)",
  //       options: {
  //         x: 44,
  //         y: 20
  //       }
  //     }
  //   ],
  //   actions: [
  //     { in: ["b1", "b1h1", "b1b1", "b1i1"] },
  //     {
  //       out: ["b1", "b1h1", "b1b1", "b1i1"],
  //       in: ["b2", "b2h1", "b2b1", "b2b2", "b2b3"]
  //     },
  //     {
  //       out: ["b2", "b2h1", "b2b1", "b2b2", "b2b3"],
  //       in: ["b3", "b3h1", "b3b1"]
  //     },
  //     {
  //       out: ["b3"],
  //       in: ["b4", "b4b1"]
  //     },
  //     {
  //       out: ["b4"],
  //       in: ["b5", "b5b1"]
  //     },
  //     {
  //       out: ["b5", "b3h1", "b3b1", "b4b1", "b5b1"],
  //       in: ["b6", "b6h1"]
  //     }
  //   ]
  // };
  // impresi = new Impresi("board", config);
  var fbData = {
    screens: {
      s1: {
        in: {
          b1: {
            type: "background",
            options: {
              backgroundColor: "#d4e3fc"
            }
          },
          b1h1: {
            type: "heading",
            text: "Heading 1",
            options: {
              fontSize: 3,
              x: 10,
              y: 15
            }
          },
          b1b1: {
            type: "blurb",
            text: "Blurb",
            options: {
              width: 100,
              fontSize: 30,
              x: 30,
              y: 15
            }
          }
        }
      }
    }
  };
  var data = {
    screens: [{
      id: "s1",
      in: [{
        id: "b1",
        type: "background",
        options: {
          backgroundColor: "#d4e3fc"
        }
      }, {
        id: "b1h1",
        type: "heading",
        text: "Heading 1",
        options: {
          fontSize: 3,
          x: 10,
          y: 15
        }
      }, {
        id: "b1b1",
        type: "blurb",
        text: "Blurb",
        options: {
          width: 100,
          fontSize: 30,
          x: 30,
          y: 15
        }
      }]
    }, {
      id: "s2",
      in: [{
        id: "b2",
        type: "background",
        options: {
          backgroundColor: "#d4e3fc"
        }
      }, {
        id: "b2h1",
        type: "heading",
        text: "Heading 2",
        options: {
          fontSize: 3,
          x: 10,
          y: 15
        }
      }, {
        id: "b2b1",
        type: "blurb",
        text: "Blurb",
        options: {
          width: 100,
          fontSize: 30,
          x: 30,
          y: 15
        }
      }]
    }]
  };
  var config = {};
  config.data = data; //config.firebaseConfig = fbData;

  var fbConfig = {
    apiKey: "AIzaSyCCBjfvjBGp8Yd09lv1GEI46S2FjnfXuso",
    authDomain: "impresi-93d55.firebaseapp.com",
    databaseURL: "https://impresi-93d55.firebaseio.com",
    projectId: "impresi-93d55",
    storageBucket: "impresi-93d55.appspot.com",
    messagingSenderId: "83130091195"
  };
  config.fbConfig = fbConfig;
  var impresi = new _impresi.default('board', config); // firebase.initializeApp(fbConfig);
  // async function getData() {
  //   const snapshot = await firebase.firestore().collection('screens').get();
  //   await firebase.firestore().collection("appState").doc("currentScreen")
  //     .onSnapshot(function (doc) {
  //       console.log("Current data: ", doc.data());
  //     });
  //   console.log('init fb 2')
  //   // await firebase.firestore().collection('appState').doc("currentScreen").add({screen: '1'});
  //   console.log('init fb 3')
  //   firebase.firestore().collection("appState").doc("currentScreen").set({
  //     index: 0
  //   })
  //     .then(function () {
  //       console.log("Document successfully written!");
  //     })
  //     .catch(function (error) {
  //       console.error("Error writing document: ", error);
  //     });
  //   return snapshot.docs.map(doc => doc.data());
  // }
  // getData().then(function (data) {
  //   console.log(data)
  // });

  impresi.start();
}
},{"impresi":"node_modules/impresi/lib/impresi.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54190" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map