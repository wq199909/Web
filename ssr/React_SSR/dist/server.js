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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?modules!./src/component/Header/index.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?modules!./src/component/Header/index.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "._1i_jOoWTm6Q-7oQm5YEt-t{\n    background: #333;\n    color: #fff;\n    height: 40px;\n    line-height: 40px;\n    width: 100%;\n}\n\n._1i_jOoWTm6Q-7oQm5YEt-t a{\n    color: inherit;\n    text-decoration: none;\n    margin-left: 50px;\n}", ""]);
// Exports
exports.locals = {
	"header": "_1i_jOoWTm6Q-7oQm5YEt-t"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?modules!./src/pages/Home/index.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?modules!./src/pages/Home/index.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../assets/dog.jpeg */ "./src/assets/dog.jpeg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "._1Q9AvbuD5FobMqbQT7YSnm{\n    border:1px solid #333;\n    background: rgb(108, 197, 226);\n}\n._1Q9AvbuD5FobMqbQT7YSnm:hover{\n    background: lightblue;\n}\n._3AFwmFUZPhk0HS8-McgHfI{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 300px;\n    height: 300px;\n}", ""]);
// Exports
exports.locals = {
	"beauty_button": "_1Q9AvbuD5FobMqbQT7YSnm",
	"bg": "_3AFwmFUZPhk0HS8-McgHfI"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}

function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);

      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === void 0 ? false : _ref$prepend,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

  var ids = [];

  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;

    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;

    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;
//# sourceMappingURL=insertCss.js.map


/***/ }),

/***/ "./src/assets/dog.jpeg":
/*!*****************************!*\
  !*** ./src/assets/dog.jpeg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./img/dog.f2503.jpeg");

/***/ }),

/***/ "./src/component/Header/index.css":
/*!****************************************!*\
  !*** ./src/component/Header/index.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?modules!./index.css */ "./node_modules/css-loader/dist/cjs.js?modules!./src/component/Header/index.css");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/component/Header/index.jsx":
/*!****************************************!*\
  !*** ./src/component/Header/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/component/Header/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);



function index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, "\u9996\u9875"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/movies"
  }, "\u7535\u5F71"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/admin"
  }, "\u540E\u53F0\u7BA1\u7406"));
}

/***/ }),

/***/ "./src/pages/Admin/Home/index.jsx":
/*!****************************************!*\
  !*** ./src/pages/Admin/Home/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u540E\u53F0\u7BA1\u7406\u9996\u9875");
}

/***/ }),

/***/ "./src/pages/Admin/NotFound/index.jsx":
/*!********************************************!*\
  !*** ./src/pages/Admin/NotFound/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Admin Not Found"));
}

/***/ }),

/***/ "./src/pages/Admin/SystemManage/index.jsx":
/*!************************************************!*\
  !*** ./src/pages/Admin/SystemManage/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u7CFB\u7EDF\u7BA1\u7406");
}

/***/ }),

/***/ "./src/pages/Admin/UserManage/index.jsx":
/*!**********************************************!*\
  !*** ./src/pages/Admin/UserManage/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u7528\u6237\u7BA1\u7406");
}

/***/ }),

/***/ "./src/pages/Admin/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/Admin/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouteApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);



function RouteApp({
  route
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u540E\u53F0\u9875\u9762"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/admin/user"
  }, "\u7528\u6237\u7BA1\u7406"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    style: {
      marginLeft: "100px"
    },
    to: "/admin/sys"
  }, "\u7CFB\u7EDF\u7BA1\u7406")), Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__["renderRoutes"])(route.routes));
}

/***/ }),

/***/ "./src/pages/Front.jsx":
/*!*****************************!*\
  !*** ./src/pages/Front.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouteApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/component/Header */ "./src/component/Header/index.jsx");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);



function RouteApp({
  route
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: "50px"
    }
  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__["renderRoutes"])(route.routes)));
}

/***/ }),

/***/ "./src/pages/Home/index.css":
/*!**********************************!*\
  !*** ./src/pages/Home/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?modules!./index.css */ "./node_modules/css-loader/dist/cjs.js?modules!./src/pages/Home/index.css");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/pages/Home/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/pages/Home/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_dog_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/dog.jpeg */ "./src/assets/dog.jpeg");
/* harmony import */ var _store_action_couter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/action/couter */ "./src/store/action/couter.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);






const Counter = function ({
  number,
  onIncrease,
  onDecrease
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Number: ", number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a.beauty_button,
    onClick: onIncrease
  }, "\u52A0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a.beauty_button,
    onClick: onDecrease
  }, "\u51CF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a.bg
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_dog_jpeg__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: ""
  }));
};

function mapStateToProps(state) {
  return {
    number: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease() {
      dispatch(Object(_store_action_couter__WEBPACK_IMPORTED_MODULE_3__["increase"])());
    },

    onDecrease() {
      dispatch(Object(_store_action_couter__WEBPACK_IMPORTED_MODULE_3__["decrease"])());
    }

  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Counter));

/***/ }),

/***/ "./src/pages/Movies/index.jsx":
/*!************************************!*\
  !*** ./src/pages/Movies/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_action_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/action/movies */ "./src/store/action/movies.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);




function Page({
  movies = [],
  loadMovies
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (window.requestPath === "/movies") {
      console.log(movies);
    } else {
      loadMovies && loadMovies();
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Movies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, movies.map(m => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: m._id
  }, m.name))));
}

Page.loadData = async function (store) {
  await store.dispatch(Object(_store_action_movies__WEBPACK_IMPORTED_MODULE_1__["fetchMovies"])());
};

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies() {
      dispatch(Object(_store_action_movies__WEBPACK_IMPORTED_MODULE_1__["fetchMovies"])());
    }

  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Page));

/***/ }),

/***/ "./src/pages/NotFound/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/NotFound/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function index(props) {
  props.staticContext && (props.staticContext.resCode = 404);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Not Found"));
}

/***/ }),

/***/ "./src/routes/RouteApp.jsx":
/*!*********************************!*\
  !*** ./src/routes/RouteApp.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouteApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/component/Header */ "./src/component/Header/index.jsx");
/* harmony import */ var _RouteConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RouteConfig */ "./src/routes/RouteConfig.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);




function RouteApp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_3__["renderRoutes"])(_RouteConfig__WEBPACK_IMPORTED_MODULE_2__["default"]));
}

/***/ }),

/***/ "./src/routes/RouteConfig.js":
/*!***********************************!*\
  !*** ./src/routes/RouteConfig.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/Home */ "./src/pages/Home/index.jsx");
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/NotFound */ "./src/pages/NotFound/index.jsx");
/* harmony import */ var _pages_Movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/Movies */ "./src/pages/Movies/index.jsx");
/* harmony import */ var _pages_Front__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/Front */ "./src/pages/Front.jsx");
/* harmony import */ var _pages_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/Admin */ "./src/pages/Admin/index.jsx");
/* harmony import */ var _pages_Admin_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/Admin/Home */ "./src/pages/Admin/Home/index.jsx");
/* harmony import */ var _pages_Admin_NotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/pages/Admin/NotFound */ "./src/pages/Admin/NotFound/index.jsx");
/* harmony import */ var _pages_Admin_SystemManage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/pages/Admin/SystemManage */ "./src/pages/Admin/SystemManage/index.jsx");
/* harmony import */ var _pages_Admin_UserManage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/pages/Admin/UserManage */ "./src/pages/Admin/UserManage/index.jsx");









/* harmony default export */ __webpack_exports__["default"] = ([{
  key: "admin",
  path: "/admin",
  component: _pages_Admin__WEBPACK_IMPORTED_MODULE_4__["default"],
  routes: [{
    key: "home",
    path: "/admin",
    exact: true,
    component: _pages_Admin_Home__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    key: "user",
    path: "/admin/user",
    exact: true,
    component: _pages_Admin_UserManage__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, {
    key: "sys",
    path: "/admin/sys",
    exact: true,
    component: _pages_Admin_SystemManage__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, {
    key: "/admin/notfound",
    component: _pages_Admin_NotFound__WEBPACK_IMPORTED_MODULE_6__["default"]
  }]
}, {
  key: "front",
  path: "/",
  component: _pages_Front__WEBPACK_IMPORTED_MODULE_3__["default"],
  routes: [{
    key: "home",
    path: "/",
    exact: true,
    component: _pages_Home__WEBPACK_IMPORTED_MODULE_0__["default"]
  }, {
    key: "movies",
    path: "/movies",
    exact: true,
    component: _pages_Movies__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    key: "notFound",
    component: _pages_NotFound__WEBPACK_IMPORTED_MODULE_1__["default"]
  }]
}, {}]);

/***/ }),

/***/ "./src/server/App.jsx":
/*!****************************!*\
  !*** ./src/server/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_RouteApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/routes/RouteApp */ "./src/routes/RouteApp.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




function App({
  location,
  context,
  store
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    location: location,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_RouteApp__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}

/***/ }),

/***/ "./src/server/getHTML.js":
/*!*******************************!*\
  !*** ./src/server/getHTML.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getScripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScripts */ "./src/server/getScripts.js");
/* harmony import */ var _getLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLinks */ "./src/server/getLinks.js");


/* harmony default export */ __webpack_exports__["default"] = ((componentHTML, path, store) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link href="favicon.ico" rel="shortcut icon">
        ${Object(_getLinks__WEBPACK_IMPORTED_MODULE_1__["default"])()}
    </head>
    <body>
        <div id="root">${componentHTML}</div>
        <script>
            window.pageDatas = ${JSON.stringify(store.getState())};
            window.requestPath = "${path}";
        </script>
        ${Object(_getScripts__WEBPACK_IMPORTED_MODULE_0__["default"])()}
    </body>
    </html>
    `;
});

/***/ }),

/***/ "./src/server/getLinks.js":
/*!********************************!*\
  !*** ./src/server/getLinks.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const result = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync('./public/css').filter(file => file.endsWith('css')).map(file => `<link rel="stylesheet" href="/css/${file}"></link>`);
  return result.join("\n");
});

/***/ }),

/***/ "./src/server/getScripts.js":
/*!**********************************!*\
  !*** ./src/server/getScripts.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const result = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync('./public/js').filter(file => file.endsWith('js')).map(file => `<script src="/js/${file}"></script>`);
  return result.join("\n");
});

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/server/render.js");
/* harmony import */ var _services_MovieService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/MovieService */ "./src/services/MovieService.js");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2__);




const express = __webpack_require__(/*! express */ "express");

const app = express();
app.use(express.static("./public"));
app.use("/api", Object(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_2__["createProxyMiddleware"])({
  target: "http://yuanjin.tech:5005/",
  changeOrigin: true
}));
app.get("*", _render__WEBPACK_IMPORTED_MODULE_0__["default"]);
app.listen(8080, () => {
  console.log("server start on 8080");
});

/***/ }),

/***/ "./src/server/loadData.js":
/*!********************************!*\
  !*** ./src/server/loadData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadData; });
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_RouteConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/routes/RouteConfig */ "./src/routes/RouteConfig.js");


async function loadData(path, store) {
  const matchs = Object(react_router_config__WEBPACK_IMPORTED_MODULE_0__["matchRoutes"])(_routes_RouteConfig__WEBPACK_IMPORTED_MODULE_1__["default"], path);
  let proms = [];

  for (const match of matchs) {
    if (match.route.component.loadData) {
      proms.push(Promise.resolve(match.route.component.loadData(store)));
    }
  }

  return Promise.all(proms);
}

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/server/App.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTML */ "./src/server/getHTML.js");
/* harmony import */ var _loadData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadData */ "./src/server/loadData.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store/index.js");






/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const context = {};
  const store = Object(_store__WEBPACK_IMPORTED_MODULE_5__["default"])();
  await Object(_loadData__WEBPACK_IMPORTED_MODULE_4__["default"])(req.path, store);
  const componentHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], {
    location: req.path,
    context: context,
    store: store
  }));
  const html = Object(_getHTML__WEBPACK_IMPORTED_MODULE_3__["default"])(componentHTML, req.path, store);

  if (context.resCode) {
    res.status(context.resCode);
  }

  res.send(html);
});

/***/ }),

/***/ "./src/services/MovieService.js":
/*!**************************************!*\
  !*** ./src/services/MovieService.js ***!
  \**************************************/
/*! exports provided: getMovies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/services/request.js");

async function getMovies(page = 1, limit = 10) {
  let req = await _request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/movie", {
    params: {
      page,
      limit
    }
  });
  return req.data;
}

/***/ }),

/***/ "./src/services/request.js":
/*!*********************************!*\
  !*** ./src/services/request.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const config = {};

if (typeof window === "undefined") {
  // 服务器
  config.baseURL = "http://yuanjin.tech:5005/";
} else {// 浏览器
}

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(config);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/store/action/couter.js":
/*!************************************!*\
  !*** ./src/store/action/couter.js ***!
  \************************************/
/*! exports provided: actionTypes, increase, decrease */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increase", function() { return increase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrease", function() { return decrease; });
const actionTypes = {
  increase: "couter/increase",
  decrease: "couter/decrease"
};
function increase() {
  return {
    type: actionTypes.increase
  };
}
function decrease() {
  return {
    type: actionTypes.decrease
  };
}

/***/ }),

/***/ "./src/store/action/movies.js":
/*!************************************!*\
  !*** ./src/store/action/movies.js ***!
  \************************************/
/*! exports provided: actionTypes, setDatas, fetchMovies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDatas", function() { return setDatas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMovies", function() { return fetchMovies; });
/* harmony import */ var _services_MovieService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/MovieService */ "./src/services/MovieService.js");

const actionTypes = {
  setDatas: "movies/setDatas",
  fetchMovies: "movies/fetchMovies"
};
function setDatas(datas) {
  return {
    type: actionTypes.setDatas,
    payload: datas
  };
}
function fetchMovies(page = 1, limit = 10) {
  return async function (dispatch) {
    const resp = await Object(_services_MovieService__WEBPACK_IMPORTED_MODULE_0__["getMovies"])(page, limit);
    dispatch(setDatas(resp.data));
  };
}

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer/index.js");
/* harmony import */ var _action_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action/movies */ "./src/store/action/movies.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);





function makeStore() {
  let store;

  if (global.document) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], window.pageDatas, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)));
  } else {
    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a));
  }

  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (makeStore);

/***/ }),

/***/ "./src/store/reducer/counter.js":
/*!**************************************!*\
  !*** ./src/store/reducer/counter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_couter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/couter */ "./src/store/action/couter.js");

/* harmony default export */ __webpack_exports__["default"] = (function (state = 10, {
  type
}) {
  switch (type) {
    case _action_couter__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].increase:
      return state + 1;

    case _action_couter__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].decrease:
      return state - 1;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/reducer/index.js":
/*!************************************!*\
  !*** ./src/store/reducer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ "./src/store/reducer/counter.js");
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies */ "./src/store/reducer/movies.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  counter: _counter__WEBPACK_IMPORTED_MODULE_0__["default"],
  movies: _movies__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/store/reducer/movies.js":
/*!*************************************!*\
  !*** ./src/store/reducer/movies.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/movies */ "./src/store/action/movies.js");

/* harmony default export */ __webpack_exports__["default"] = (function (state = [], {
  type,
  payload
}) {
  switch (type) {
    case _action_movies__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].setDatas:
      return payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });