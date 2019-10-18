/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"ssr": 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/includes/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./logs/tmp/config/full.1571366465606.js":
/*!***********************************************!*\
  !*** ./logs/tmp/config/full.1571366465606.js ***!
  \***********************************************/
/*! exports provided: name, type, template, router, redux, client, server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redux", function() { return redux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
// 核心代码中引用的配置文件
var name = "dfp-website";
var type = "react";
var template = "./src/index.ejs";
var router = __webpack_require__(/*! ../../../src/routes */ "./src/routes/index.js").default;
var redux = {
  "store": __webpack_require__(/*! ../../../src/store */ "./src/store/index.js").default,
  "syncCookie": true
};
var client = {};
var server =  true ? {
  "renderCache": false,
  "proxyRequestOrigin": {
    "protocol": "https"
  },
  "inject": __webpack_require__(/*! ../../../src/index.inject.js */ "./src/index.inject.js").default,
  "before": __webpack_require__(/*! ../../../src/server/before.js */ "./src/server/before.js").default
} : undefined;

/***/ }),

/***/ "./node_modules/history/lib/Actions.js":
/*!*********************************************!*\
  !*** ./node_modules/history/lib/Actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;
/**
 * Indicates that navigation was caused by a call to history.push.
 */

var PUSH = exports.PUSH = 'PUSH';
/**
 * Indicates that navigation was caused by a call to history.replace.
 */

var REPLACE = exports.REPLACE = 'REPLACE';
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */

var POP = exports.POP = 'POP';

/***/ }),

/***/ "./node_modules/history/lib/AsyncUtils.js":
/*!************************************************!*\
  !*** ./node_modules/history/lib/AsyncUtils.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var isSync = false,
      hasNext = false,
      doneArgs = void 0;

  var done = function done() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    isDone = true;

    if (isSync) {
      // Iterate instead of recursing if possible.
      doneArgs = args;
      return;
    }

    callback.apply(undefined, args);
  };

  var next = function next() {
    if (isDone) return;
    hasNext = true;
    if (isSync) return; // Iterate instead of recursing if possible.

    isSync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work(currentTurn++, next, done);
    }

    isSync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(undefined, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  };

  next();
};

/***/ }),

/***/ "./node_modules/history/lib/LocationUtils.js":
/*!***************************************************!*\
  !*** ./node_modules/history/lib/LocationUtils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;
exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createQuery = exports.createQuery = function createQuery(props) {
  return _extends(Object.create(null), props);
};

var createLocation = exports.createLocation = function createLocation() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Actions.POP;
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;
   true ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : undefined;
  var pathname = object.pathname || '/';
  var search = object.search || '';
  var hash = object.hash || '';
  var state = object.state;
  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
};

var isDate = function isDate(object) {
  return Object.prototype.toString.call(object) === '[object Date]';
};

var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
  if (a === b) return true;
  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);
  if (typeofA !== typeofB) return false;
  !(typeofA !== 'function') ?  true ? (0, _invariant2.default)(false, 'You must not store functions in location state') : undefined : void 0; // Not the same object, but same type.

  if (typeofA === 'object') {
    !!(isDate(a) && isDate(b)) ?  true ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : undefined : void 0;

    if (!Array.isArray(a)) {
      var keysofA = Object.keys(a);
      var keysofB = Object.keys(b);
      return keysofA.length === keysofB.length && keysofA.every(function (key) {
        return statesAreEqual(a[key], b[key]);
      });
    }

    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return statesAreEqual(item, b[index]);
    });
  } // All other serializable types (string, number, boolean)
  // should be strict equal.


  return false;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.key === b.key && // a.action === b.action && // Different action !== location change.
  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/lib/PathUtils.js":
/*!***********************************************!*\
  !*** ./node_modules/history/lib/PathUtils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;
exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
  var _parsePath = parsePath(path),
      pathname = _parsePath.pathname,
      search = _parsePath.search,
      hash = _parsePath.hash;

  return createPath({
    pathname: pathname,
    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
    hash: hash
  });
};

var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
  var _parsePath2 = parsePath(path),
      pathname = _parsePath2.pathname,
      search = _parsePath2.search,
      hash = _parsePath2.hash;

  return createPath({
    pathname: pathname,
    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
      return prefix === '?' ? prefix : suffix;
    }),
    hash: hash
  });
};

var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
  var _parsePath3 = parsePath(path),
      search = _parsePath3.search;

  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
  return match && match[1];
};

var extractPath = function extractPath(string) {
  var match = string.match(/^(https?:)?\/\/[^\/]*/);
  return match == null ? string : string.substring(match[0].length);
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';
   true ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : undefined;
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';
  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  if (location == null || typeof location === 'string') return location;
  var basename = location.basename,
      pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = (basename || '') + pathname;
  if (search && search !== '?') path += search;
  if (hash) path += hash;
  return path;
};

/***/ }),

/***/ "./node_modules/history/lib/createHistory.js":
/*!***************************************************!*\
  !*** ./node_modules/history/lib/createHistory.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/history/lib/AsyncUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _runTransitionHook = __webpack_require__(/*! ./runTransitionHook */ "./node_modules/history/lib/runTransitionHook.js");

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createHistory = function createHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getCurrentLocation = options.getCurrentLocation,
      getUserConfirmation = options.getUserConfirmation,
      pushLocation = options.pushLocation,
      replaceLocation = options.replaceLocation,
      go = options.go,
      keyLength = options.keyLength;
  var currentLocation = void 0;
  var pendingLocation = void 0;
  var beforeListeners = [];
  var listeners = [];
  var allKeys = [];

  var getCurrentIndex = function getCurrentIndex() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);
    if (currentLocation) return allKeys.indexOf(currentLocation.key);
    return -1;
  };

  var updateLocation = function updateLocation(nextLocation) {
    var currentIndex = getCurrentIndex();
    currentLocation = nextLocation;

    if (currentLocation.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
    } else if (currentLocation.action === _Actions.REPLACE) {
      allKeys[currentIndex] = currentLocation.key;
    }

    listeners.forEach(function (listener) {
      return listener(currentLocation);
    });
  };

  var listenBefore = function listenBefore(listener) {
    beforeListeners.push(listener);
    return function () {
      return beforeListeners = beforeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var listen = function listen(listener) {
    listeners.push(listener);
    return function () {
      return listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
        return result != null ? done(result) : next();
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          return callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  };

  var transitionTo = function transitionTo(nextLocation) {
    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

    pendingLocation = nextLocation;
    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

      pendingLocation = null;

      if (ok) {
        // Treat PUSH to same path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = (0, _PathUtils.createPath)(currentLocation);
          var nextPath = (0, _PathUtils.createPath)(nextLocation);
          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (nextLocation.action === _Actions.POP) {
          updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.PUSH) {
          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.REPLACE) {
          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
        }
      } else if (currentLocation && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(currentLocation.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);
        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
      }
    });
  };

  var push = function push(input) {
    return transitionTo(createLocation(input, _Actions.PUSH));
  };

  var replace = function replace(input) {
    return transitionTo(createLocation(input, _Actions.REPLACE));
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength || 6);
  };

  var createHref = function createHref(location) {
    return (0, _PathUtils.createPath)(location);
  };

  var createLocation = function createLocation(location, action) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : createKey();
    return (0, _LocationUtils.createLocation)(location, action, key);
  };

  return {
    getCurrentLocation: getCurrentLocation,
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: _PathUtils.createPath,
    createHref: createHref,
    createLocation: createLocation
  };
};

exports.default = createHistory;

/***/ }),

/***/ "./node_modules/history/lib/createMemoryHistory.js":
/*!*********************************************************!*\
  !*** ./node_modules/history/lib/createMemoryHistory.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _createHistory = __webpack_require__(/*! ./createHistory */ "./node_modules/history/lib/createHistory.js");

var _createHistory2 = _interopRequireDefault(_createHistory);

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createStateStorage = function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
};

var createMemoryHistory = function createMemoryHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (Array.isArray(options)) {
    options = {
      entries: options
    };
  } else if (typeof options === 'string') {
    options = {
      entries: [options]
    };
  }

  var getCurrentLocation = function getCurrentLocation() {
    var entry = entries[current];
    var path = (0, _PathUtils.createPath)(entry);
    var key = void 0,
        state = void 0;

    if (entry.key) {
      key = entry.key;
      state = readState(key);
    }

    var init = (0, _PathUtils.parsePath)(path);
    return (0, _LocationUtils.createLocation)(_extends({}, init, {
      state: state
    }), undefined, key);
  };

  var canGo = function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  };

  var go = function go(n) {
    if (!n) return;

    if (!canGo(n)) {
       true ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : undefined;
      return;
    }

    current += n;
    var currentLocation = getCurrentLocation(); // Change action to POP

    history.transitionTo(_extends({}, currentLocation, {
      action: _Actions.POP
    }));
  };

  var pushLocation = function pushLocation(location) {
    current += 1;
    if (current < entries.length) entries.splice(current);
    entries.push(location);
    saveState(location.key, location.state);
  };

  var replaceLocation = function replaceLocation(location) {
    entries[current] = location;
    saveState(location.key, location.state);
  };

  var history = (0, _createHistory2.default)(_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: go
  }));
  var _options = options,
      entries = _options.entries,
      current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    return (0, _LocationUtils.createLocation)(entry);
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ?  true ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : undefined : void 0;
  }

  var storage = createStateStorage(entries);

  var saveState = function saveState(key, state) {
    return storage[key] = state;
  };

  var readState = function readState(key) {
    return storage[key];
  };

  return _extends({}, history, {
    canGo: canGo
  });
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "./node_modules/history/lib/runTransitionHook.js":
/*!*******************************************************!*\
  !*** ./node_modules/history/lib/runTransitionHook.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var runTransitionHook = function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
     true ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : undefined;
  }
};

exports.default = runTransitionHook;

/***/ }),

/***/ "./node_modules/history/lib/useBasename.js":
/*!*************************************************!*\
  !*** ./node_modules/history/lib/useBasename.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _runTransitionHook = __webpack_require__(/*! ./runTransitionHook */ "./node_modules/history/lib/runTransitionHook.js");

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var useBasename = function useBasename(createHistory) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var history = createHistory(options);
    var basename = options.basename;

    var addBasename = function addBasename(location) {
      if (!location) return location;

      if (basename && location.basename == null) {
        if (location.pathname.toLowerCase().indexOf(basename.toLowerCase()) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;
          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    };

    var prependBasename = function prependBasename(location) {
      if (!basename) return location;
      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
      var pname = object.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;
      return _extends({}, object, {
        pathname: pathname
      });
    }; // Override all read methods with basename-aware versions.


    var getCurrentLocation = function getCurrentLocation() {
      return addBasename(history.getCurrentLocation());
    };

    var listenBefore = function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
      });
    };

    var listen = function listen(listener) {
      return history.listen(function (location) {
        return listener(addBasename(location));
      });
    }; // Override all write methods with basename-aware versions.


    var push = function push(location) {
      return history.push(prependBasename(location));
    };

    var replace = function replace(location) {
      return history.replace(prependBasename(location));
    };

    var createPath = function createPath(location) {
      return history.createPath(prependBasename(location));
    };

    var createHref = function createHref(location) {
      return history.createHref(prependBasename(location));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    };

    return _extends({}, history, {
      getCurrentLocation: getCurrentLocation,
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

exports.default = useBasename;

/***/ }),

/***/ "./node_modules/history/lib/useQueries.js":
/*!************************************************!*\
  !*** ./node_modules/history/lib/useQueries.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _queryString = __webpack_require__(/*! query-string */ "query-string");

var _runTransitionHook = __webpack_require__(/*! ./runTransitionHook */ "./node_modules/history/lib/runTransitionHook.js");

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var defaultStringifyQuery = function defaultStringifyQuery(query) {
  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
};

var defaultParseQueryString = _queryString.parse;
/**
 * Returns a new createHistory function that may be used to create
 * history objects that know how to handle URL queries.
 */

var useQueries = function useQueries(createHistory) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var history = createHistory(options);
    var stringifyQuery = options.stringifyQuery,
        parseQueryString = options.parseQueryString;
    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;
    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

    var decodeQuery = function decodeQuery(location) {
      if (!location) return location;
      if (location.query == null) location.query = parseQueryString(location.search.substring(1));
      return location;
    };

    var encodeQuery = function encodeQuery(location, query) {
      if (query == null) return location;
      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
      var queryString = stringifyQuery(query);
      var search = queryString ? '?' + queryString : '';
      return _extends({}, object, {
        search: search
      });
    }; // Override all read methods with query-aware versions.


    var getCurrentLocation = function getCurrentLocation() {
      return decodeQuery(history.getCurrentLocation());
    };

    var listenBefore = function listenBefore(hook) {
      return history.listenBefore(function (location, callback) {
        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
      });
    };

    var listen = function listen(listener) {
      return history.listen(function (location) {
        return listener(decodeQuery(location));
      });
    }; // Override all write methods with query-aware versions.


    var push = function push(location) {
      return history.push(encodeQuery(location, location.query));
    };

    var replace = function replace(location) {
      return history.replace(encodeQuery(location, location.query));
    };

    var createPath = function createPath(location) {
      return history.createPath(encodeQuery(location, location.query));
    };

    var createHref = function createHref(location) {
      return history.createHref(encodeQuery(location, location.query));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));
      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);
      return decodeQuery(newLocation);
    };

    return _extends({}, history, {
      getCurrentLocation: getCurrentLocation,
      listenBefore: listenBefore,
      listen: listen,
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

exports.default = useQueries;

/***/ }),

/***/ "./node_modules/koot/React/client-session-store.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/React/client-session-store.js ***!
  \*********************************************************/
/*! exports provided: save, addEventHandlerOnPageUnload, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventHandlerOnPageUnload", function() { return addEventHandlerOnPageUnload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./node_modules/koot/index.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_filter_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/filter-state */ "./node_modules/koot/libs/filter-state.js");
/* harmony import */ var _libs_filter_state__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_libs_filter_state__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var configSessionStore = JSON.parse("false");
/** @type {Boolean} 当前是否可以/允许使用 sessionStore */

var able = function () {
  if (true) return false;
  if (!window.sessionStorage) return false;
  if (!configSessionStore) return false;
  if (configSessionStore === true) return true;
  if (configSessionStore === 'all') return true;
  return Boolean(_typeof(configSessionStore) === 'object' && !Array.isArray(configSessionStore));
}();
/**
 * 保存当前 state 到 sessionStorage
 * @void
 */


var save = function save() {
  if (!able) return;
  /** @type {Object} 排除掉黑名单内的项目后的 state 对象 */

  var state = _libs_filter_state__WEBPACK_IMPORTED_MODULE_4___default()(___WEBPACK_IMPORTED_MODULE_2__["store"].getState());
  var saveState = {};

  if (configSessionStore === true || configSessionStore === 'all') {
    saveState = state;
  } else if (_typeof(configSessionStore) === 'object' && !Array.isArray(configSessionStore)) {
    // 根据配置对象存储
    var parse = function parse(obj) {
      var accumulatedKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      Object.keys(obj).forEach(function (key) {
        var currentAccumulatedKey = accumulatedKey + "[".concat(JSON.stringify(key), "]");

        if (_typeof(obj[key]) === 'object') {
          parse(obj[key], currentAccumulatedKey);
        } else if (obj[key] === true) {
          var value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(state, currentAccumulatedKey);
          if (typeof value !== 'undefined') lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(saveState, currentAccumulatedKey, value);
        }
      });
    };

    parse(configSessionStore); // console.log(configSessionStore, state, saveState);
  }

  sessionStorage.setItem(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__["sessionStoreKey"], JSON.stringify(saveState));
  return;
};
/**
 * 向 window.onunload 添加事件：保存 state
 * @void
 */

var addEventHandlerOnPageUnload = function addEventHandlerOnPageUnload() {
  if (!able) return;
  window.addEventListener('unload', save);
  return;
};
/**
 * 从 sessionStorage 中读取 state
 * @returns {Object} 存储的 state
 */

var load = function load() {
  if (!able) return {};
  return JSON.parse(sessionStorage.getItem(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__["sessionStoreKey"]) || '{}');
};

/***/ }),

/***/ "./node_modules/koot/React/client-update-page-info.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/client-update-page-info.js ***!
  \************************************************************/
/*! exports provided: default, getInjectedMetaTags, markInited */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedMetaTags", function() { return getInjectedMetaTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markInited", function() { return markInited; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @typedef Pageinfo
 * @type {Object}
 * @property {string} [title] 标题
 * @property {Array<Object.<string, string>>} [metas] meta 标签信息，需要形式为 `{[name]: value}` 对象的数组
 */
// import isEqual from 'lodash/isEqual';

/**
 * 当前已注入的 meta 标签
 * @type {Array<HTMLElement>}
 */
var injectedMetaTags; // meta 标签区域结尾的 HTML 注释代码

var nodeCommentEnd;
var inited = false;
/** @type {Pageinfo} */

var infoToChange = {
  title: '',
  metas: []
};
var changeTimeout = undefined;
/**
 * _仅限客户端_
 *
 * 更新页面信息
 * @module
 * @param {string} title 新的标题
 * @param {Array<Object.<string, string>>} metas meta 标签信息，需要形式为 `{[name]: value}` 对象的数组
 */

/* harmony default export */ __webpack_exports__["default"] = (function (title) {
  var metas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (true) return;

  if ( true && !inited) {
    setTimeout(function () {
      inited = true;
    });
    return;
  } // 判断 & 追加即将修改的内容

  /*
  // 如果新 meta 不存在于已有的 meta 列表，添加
  metas.forEach(metaNew => {
      if (!infoToChange.metas.length) infoToChange.metas.push(metaNew);
      if (
          !infoToChange.metas.every(metaExist => {
              console.log(metaNew, metaExist, isEqual(metaNew, metaExist));
              return isEqual(metaNew, metaExist);
          })
      ) {
          console.log('PUSH');
          infoToChange.metas.push(metaNew);
      }
  });
  */
  // 如果当前没有信息，设为当前信息


  if (!infoToChange.title && (!Array.isArray(infoToChange.metas) || !infoToChange.metas.length)) {
    infoToChange.title = title;
    infoToChange.metas = metas;
  }

  if (changeTimeout) return;
  changeTimeout = setTimeout(function () {
    doUpdate();
    infoToChange.title = '';
    infoToChange.metas = [];
    changeTimeout = undefined;
  });
}); //

var doUpdate = function doUpdate() {
  var title = infoToChange.title,
      metas = infoToChange.metas; // 替换页面标题

  document.title = title; // 替换 metas

  var head = document.getElementsByTagName('head')[0];
  getInjectedMetaTags().forEach(function (el) {
    return head.removeChild(el);
  });
  injectedMetaTags.forEach(function (el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  });
  injectedMetaTags = metas.filter(function (meta) {
    return _typeof(meta) === 'object';
  }).map(function (meta) {
    var el = document.createElement('meta');

    for (var key in meta) {
      el.setAttribute(key, meta[key]);
    } // el.setAttribute(__KOOT_INJECT_ATTRIBUTE_NAME__, '')


    if (nodeCommentEnd) {
      head.insertBefore(el, nodeCommentEnd);
    } else {
      head.appendChild(el);
    }

    return el;
  });
}; //

/**
 * 获取当前已注入的 meta 标签
 * @returns {Array<HTMLElement>}
 */


var getInjectedMetaTags = function getInjectedMetaTags() {
  if (!Array.isArray(injectedMetaTags)) {
    var head = document.getElementsByTagName('head')[0];
    injectedMetaTags = []; // 移除所有在 KOOT_METAS 里的 meta 标签
    // 采用 DOM 操作的初衷：如果使用 innerHTML 的字符串替换方法，浏览器可能会全局重新渲染一次，造成“闪屏”

    var childNodes = head.childNodes;
    var meetStart = false;
    var meetEnd = false;
    var i = 0;

    while (!meetEnd && childNodes[i] instanceof Node) {
      var node = childNodes[i];

      if (node.nodeType === Node.COMMENT_NODE) {
        if (node.nodeValue === "koot-inject-metas-start") meetStart = true;

        if (node.nodeValue === "koot-inject-metas-end") {
          meetEnd = true;
          nodeCommentEnd = node;
        }
      } else if (meetStart && node.nodeType === Node.ELEMENT_NODE && node.tagName === 'META') {
        injectedMetaTags.push(node);
      }

      i++;
    }
  }

  return injectedMetaTags;
};
/** _仅针对客户端_ 标记已初始化 */

var markInited = function markInited() {
  inited = true;
};

/***/ }),

/***/ "./node_modules/koot/React/component-extender.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/React/component-extender.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./node_modules/koot/index.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _get_render_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-render-props */ "./node_modules/koot/React/get-render-props.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./node_modules/koot/React/styles.js");
/* harmony import */ var _client_update_page_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-update-page-info */ "./node_modules/koot/React/client-update-page-info.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_is_render_safe__WEBPACK_IMPORTED_MODULE_9__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global __KOOT_SSR__:false */

 // import { hot } from 'react-hot-loader'
// import PropTypes from 'prop-types'


 //


 //
// 是否已挂载了组件

var everMounted = false; // const defaultPageInfo = {
//     title: '',
//     metas: []
// }

var styleMap = {};
/**
 * @type {Number}
 * _开发环境_
 * _服务器_
 * 使用该高阶组件的次数
 */

var devSSRConnectIndex = 0;
/**
 * 获取数据
 * @callback callbackFetchData
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @param {Function} dispatch Redux dispatch
 * @returns {Promise}
 */

/**
 * 判断数据是否准备好
 * @callback callbackCheckLoaded
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @returns {boolean}
 */

/**
 * 获取页面信息
 * @callback callbackGetPageInfo
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @returns {Object}
 */

/**
 * 获取同构数据的执行方法
 * @param {Object} store
 * @param {Object} props renderProps
 * @returns {Promise}
 */

var doFetchData = function doFetchData(store, renderProps, dataFetch) {
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return new Promise(function (resolve) {
    return resolve(result);
  });
  var result = dataFetch(store.getState(), renderProps, store.dispatch); // if (result === true) {
  //     isDataPreloaded = true
  //     return new Promise(resolve => resolve())
  // }

  if (Array.isArray(result)) return Promise.all(result);
  if (result instanceof Promise) return result;
  return new Promise(function (resolve) {
    return resolve(result);
  });
};
/**
 * 更新页面信息
 * @param {Object} store
 * @param {Object} props renderProps
 * @returns {Object} infos
 * @returns {String} infos.title
 * @returns {Array} infos.metas
 */


var doPageinfo = function doPageinfo(store, props, pageinfo) {
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return {};
  var defaultPageInfo = {
    title: '',
    metas: []
  };
  if (typeof pageinfo !== 'function' && _typeof(pageinfo) !== 'object') return defaultPageInfo;
  var state = store.getState();

  var infos = function () {
    if (_typeof(pageinfo) === 'object') return pageinfo;
    var infos = pageinfo(state, props);
    if (_typeof(infos) !== 'object') return defaultPageInfo;
    return infos;
  }();

  var _infos$title = infos.title,
      title = _infos$title === void 0 ? defaultPageInfo.title : _infos$title,
      _infos$metas = infos.metas,
      metas = _infos$metas === void 0 ? defaultPageInfo.metas : _infos$metas;

  if (state.localeId) {
    if (!metas.some(function (meta) {
      if (meta.name === 'koot-locale-id') {
        meta.content = state.localeId;
        return true;
      }

      return false;
    })) {
      metas.push({
        name: 'koot-locale-id',
        content: state.localeId
      });
    }
  }

  return {
    title: title,
    metas: metas
  };
}; // console.log((typeof store === 'undefined' ? `\x1b[31m×\x1b[0m` : `\x1b[32m√\x1b[0m`) + ' store in [HOC] extend')

/**
 * 高阶组件/组件装饰器：组件扩展
 * @param {Object} options 选项
 * @param {boolean|Function} [options.connect] react-redux 的 connect() 的参数。如果为 true，表示使用 connect()，但不连接任何数据
 * @param {Object|callbackGetPageInfo} [options.pageinfo]
 * @param {Object} [options.data] 同构数据相关
 * @param {callbackFetchData} [options.data.fetch]
 * @param {callbackCheckLoaded} [options.data.check]
 * @param {Object} [options.styles] 组件 CSS 结果
 * @returns {Function} 封装好的 React 组件
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (WrappedComponent) {
    // console.log((typeof store === 'undefined' ? `\x1b[31m×\x1b[0m` : `\x1b[32m√\x1b[0m`) + ' store in [HOC] extend run')
    var _options$connect = options.connect,
        _connect = _options$connect === void 0 ? false : _options$connect,
        pageinfo = options.pageinfo,
        _options$data = options.data;

    _options$data = _options$data === void 0 ? {} : _options$data;
    var _dataFetch = _options$data.fetch,
        dataCheck = _options$data.check,
        dataResetWhenUnmount = _options$data.resetWhenUnmount,
        _styles = options.styles,
        _options$ssr = options.ssr,
        ssr = _options$ssr === void 0 ? true : _options$ssr; // console.log('extend hoc run', { name, LocaleId })
    // 样式相关

    /** @type {Object} 经过 koot-css-loader 处理后的 css 文件的结果对象 */

    var styles = (!Array.isArray(_styles) ? [_styles] : _styles).filter(function (obj) {
      return _typeof(obj) === 'object' && typeof obj.wrapper === 'string';
    });
    /** @type {boolean} 是否有上述结果对象 */

    var hasStyles = Array.isArray(styles) && styles.length > 0; // console.log({ ttt, hasStyles, styles })

    /** @type {boolean} 是否有 pageinfo 对象 */

    var hasPageinfo = typeof pageinfo === 'function' || _typeof(pageinfo) === 'object'; // 同构数据相关

    /** @type {boolean} 同构数据是否已经获取成功 */
    // let isDataPreloaded = false

    /** @type {Function} 获取同构数据 */

    var dataFetch = typeof options.data === 'function' || Array.isArray(options.data) ? options.data : typeof _dataFetch === 'function' || Array.isArray(_dataFetch) ? _dataFetch : undefined; // 装饰组件

    var KootReactComponent =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(KootReactComponent, _React$Component);

      _createClass(KootReactComponent, [{
        key: "clientUpdatePageInfo",
        //
        // static contextType = StyleMapContext
        //
        value: function clientUpdatePageInfo(to) {
          if (true) return;
          if (!hasPageinfo) return;

          var _ref = typeof to === 'function' ? doPageinfo(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), to) : to || doPageinfo(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), pageinfo),
              title = _ref.title,
              metas = _ref.metas;

          Object(_client_update_page_info__WEBPACK_IMPORTED_MODULE_7__["default"])(title, metas);
        } //

      }]);

      //
      function KootReactComponent(props
      /*, context*/
      ) {
        var _this;

        _classCallCheck(this, KootReactComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(KootReactComponent).call(this, props
        /*, context*/
        ));
        /**
         * _服务器端_
         * 将组件注册到同构渲染对象中
         */

        _defineProperty(_assertThisInitialized(_this), "state", {
          loaded: typeof dataCheck === 'function' ? dataCheck(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])().getState(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(_this.props)) : undefined
        });

        _defineProperty(_assertThisInitialized(_this), "mounted", false);

        _defineProperty(_assertThisInitialized(_this), "kootClassNames", []);

        if (true) {
          var SSR =  false ? undefined : __KOOT_SSR__;

          if (SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__["needConnectComponents"]]) {
            if (false) {}

            var _SSR$connectedCompone = SSR.connectedComponents,
                connectedComponents = _SSR$connectedCompone === void 0 ? [] : _SSR$connectedCompone;
            connectedComponents.unshift(KootComponent);
          }
        }

        if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return _possibleConstructorReturn(_this);

        if (hasStyles) {
          _this.kootClassNames = styles.map(function (obj) {
            return obj.wrapper;
          });
          Object(_styles__WEBPACK_IMPORTED_MODULE_6__["append"])(_this.getStyleMap(), styles); // console.log('----------')
          // console.log('styles', styles)
          // console.log('theStyles', theStyles)
          // console.log('this.classNameWrapper', this.classNameWrapper)
          // console.log('----------')
        }

        return _this;
      }
      /**
       * 获取 styleMap
       * - 服务器端: 返回全局常量中的对照表
       * - 客户端: 直接返回本文件内的 styleMap
       */


      _createClass(KootReactComponent, [{
        key: "getStyleMap",
        value: function getStyleMap()
        /*context*/
        {
          // console.log('extend', { LocaleId })
          if (true) {
            if (false) {}
            if ((typeof __KOOT_SSR__ === "undefined" ? "undefined" : _typeof(__KOOT_SSR__)) === 'object') return __KOOT_SSR__.styleMap;
          }

          return styleMap; // return context
        } //

      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          // if (
          //     typeof prevProps.location === 'object' &&
          //     typeof this.props.location === 'object' &&
          //     prevProps.location.pathname !== this.props.location.pathname
          // )
          this.clientUpdatePageInfo();
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.mounted = true;

          if (!this.state.loaded && typeof dataFetch !== 'undefined') {
            doFetchData(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), dataFetch).then(function () {
              if (!_this2.mounted) return;

              _this2.setState({
                loaded: true
              });
            });
          }

          this.clientUpdatePageInfo();

          if (hasPageinfo && this.mounted) {
            setTimeout(function () {
              if (_this2 && _this2.mounted) {
                _this2.clientUpdatePageInfo();
              }
            }, 500);
          }

          if (everMounted) {} else {
            everMounted = true;
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this3 = this;

          this.mounted = false;

          if (hasStyles) {
            Object(_styles__WEBPACK_IMPORTED_MODULE_6__["remove"])(this.getStyleMap(), styles);
          }

          if (_typeof(dataResetWhenUnmount) === 'object') {
            setTimeout(function () {
              _this3.props.dispatch({
                type: _redux__WEBPACK_IMPORTED_MODULE_8__["RESET_CERTAIN_STATE"],
                data: dataResetWhenUnmount
              });
            });
          }
        } //

      }, {
        key: "render",
        value: function render() {
          // console.log('styles', styles)
          // console.log('this', this)
          // console.log('this.kootClassNames', this.kootClassNames)
          // console.log('this.props.className', this.props.className)
          if (true) {
            if (ssr === false) return null;
            if (ssr !== true) return ssr;
          }

          if (false) {}

          var props = Object.assign({}, this.props, {
            className: this.kootClassNames.concat(this.props.className).join(' ').trim(),
            'data-class-name': this.kootClassNames.join(' ').trim()
          });
          if (hasPageinfo) props.updatePageinfo = this.clientUpdatePageInfo.bind(this); // if (__SERVER__) console.log('extender this.state.loaded', this.state.loaded)

          if (typeof dataFetch !== 'undefined' && typeof dataCheck === 'function') props.loaded = this.state.loaded;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
        }
      }]);

      return KootReactComponent;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

    _defineProperty(KootReactComponent, "onServerRenderHtmlExtend", function (_ref3) {
      var store = _ref3.store,
          _ref3$renderProps = _ref3.renderProps,
          renderProps = _ref3$renderProps === void 0 ? {} : _ref3$renderProps;

      var _doPageinfo = doPageinfo(store, Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromServerProps"])(renderProps), pageinfo),
          title = _doPageinfo.title,
          metas = _doPageinfo.metas;

      return {
        title: title,
        metas: metas
      };
    });

    if (typeof dataFetch !== 'undefined') {
      KootReactComponent.onServerRenderStoreExtend = function (_ref2) {
        var store = _ref2.store,
            renderProps = _ref2.renderProps;
        if (typeof dataFetch === 'undefined') return new Promise(function (resolve) {
          return resolve();
        }); // console.log('onServerRenderStoreExtend')

        return doFetchData(store, Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromServerProps"])(renderProps), dataFetch);
      };
    } // if (_hot && __DEV__ && __CLIENT__) {
    //     const { hot, setConfig } = require('react-hot-loader')
    //     setConfig({ logLevel: 'debug' })
    //     KootComponent = hot(module)(KootComponent)
    // }
    // console.log(WrappedComponent);


    var KootComponent = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(KootReactComponent, WrappedComponent); // if (typeof styles === 'object' &&
    //     typeof styles.wrapper === 'string'
    // ) {
    //     KootComponent = ImportStyle(styles)(KootComponent)
    // }

    if (_connect === true) {
      KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function () {
        return {};
      })(KootComponent);
    } else if (typeof _connect === 'function') {
      KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_connect)(KootComponent);
    } else if (Array.isArray(_connect)) {
      KootComponent = react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"].apply(void 0, _toConsumableArray(_connect))(KootComponent);
    }

    return KootComponent;
  };
});

/***/ }),

/***/ "./node_modules/koot/React/get-render-props.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot/React/get-render-props.js ***!
  \*****************************************************/
/*! exports provided: fromServerProps, fromComponentProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromServerProps", function() { return fromServerProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromComponentProps", function() { return fromComponentProps; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 基于 serverProps 返回同构 props
 * @param {Object} serverProps 
 * @return {Object}
 */
var fromServerProps = function fromServerProps() {
  var serverProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // console.log(' ')
  // console.log('----------')
  // console.log(serverProps)
  // console.log('----------')
  // console.log(' ')
  return _objectSpread({}, serverProps);
};
/**
 * 基于组件 props 返回同构 props
 * @param {Object} componentProps 
 * @return {Object}
 */


var fromComponentProps = function fromComponentProps() {
  var componentProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // console.log(' ')
  // console.log('----------')
  // console.log(componentProps)
  // console.log('----------')
  // console.log(' ')
  return _objectSpread({}, componentProps);
};


/***/ }),

/***/ "./node_modules/koot/React/history.js":
/*!********************************************!*\
  !*** ./node_modules/koot/React/history.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __KOOT_CLIENT_REQUIRE_CREATE_HISTORY__ */ "./node_modules/history/lib/createMemoryHistory.js");
/* harmony import */ var _KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history/lib/PathUtils */ "./node_modules/history/lib/PathUtils.js");
/* harmony import */ var history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import history from "__KOOT_CLIENT_REQUIRE_HISTORY__"


/**
 * History Enhancer: use basename
 * 
 * Original useBasename enhancer from history also override all read methods
 * `getCurrentLocation` `listenBefore` `listen`
 * But as Diablohu tested, when read methods overrided, if the route matched used async method to get component, would fail
 * that rendering blank page and no route match event fired
 * So we only overrid write methods here. And modify the first level path in routes object to `:localeId`
 * 
 * @param {Function} createHistory
 * @returns {Object} History
 */

var kootUseBasename = function kootUseBasename(createHistory) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var history = createHistory(options);
    var basename = options.basename;

    var addBasename = function addBasename(location) {
      if (!location) return location;

      if (basename && location.basename == null) {
        if (location.pathname.toLowerCase().indexOf(basename.toLowerCase()) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;
          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    };

    var prependBasename = function prependBasename(location) {
      if (!basename) return location;
      var object = typeof location === 'string' ? Object(history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__["parsePath"])(location) : location;
      var pname = object.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : "".concat(basename, "/");
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;
      return _objectSpread({}, object, {
        pathname: pathname
      });
    }; // Override all write methods with basename-aware versions.


    var push = function push(location) {
      return history.push(prependBasename(location));
    };

    var replace = function replace(location) {
      return history.replace(prependBasename(location));
    };

    var createPath = function createPath(location) {
      return history.createPath(prependBasename(location));
    };

    var createHref = function createHref(location) {
      return history.createHref(prependBasename(location));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    };

    return _objectSpread({}, history, {
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

var historyClient;

var history = function () {
  if (false) { var historyConfig, initialState; }

  if (true) {
    return undefined;
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (history);

/***/ }),

/***/ "./node_modules/koot/React/inject/htmlLang.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/inject/htmlLang.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 注入: html 标签上的 lang 属性
 * @param {String} localeId 当前语种 ID
 * @returns {String}
 */
module.exports = function (localeId) {
  return localeId ? " lang=\"".concat(localeId, "\"") : '';
};

/***/ }),

/***/ "./node_modules/koot/React/inject/is-need-inject-critical.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koot/React/inject/is-need-inject-critical.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 检查 template 是否需要自动添加针对 critical 的注入
 * @param {String} template
 * @returns {Object}
 */
module.exports = function () {
  var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    styles: !/(content|pathname)\(['"]critical\.css['"]\)/.test(template),
    scripts: !/(content|pathname)\(['"]critical\.js['"]\)/.test(template)
  };
};

/***/ }),

/***/ "./node_modules/koot/React/inject/metas.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/React/inject/metas.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var _require = __webpack_require__(/*! ../../defaults/dev-request-uri */ "./node_modules/koot/defaults/dev-request-uri.js"),
    dll = _require.dll;
/**
 * 注入: meta 标签 HTML 代码
 * @param {Object} options
 * @param {String} [options.metaHtml]
 * @param {String} [options.localeId]
 * @param {Object} [options.compilation]
 * @returns {String}
 */


module.exports = function (_ref) {
  var _ref$metaHtml = _ref.metaHtml,
      metaHtml = _ref$metaHtml === void 0 ? '' : _ref$metaHtml;
  var r = getDevExtra();

  if (false) { var _require2, _KOOT_INJECT_METAS_START__, _KOOT_INJECT_METAS_END__; } else {
    r += "<!--".concat("koot-inject-metas-start", "-->").concat(metaHtml, "<!--").concat("koot-inject-metas-end", "-->");
  }

  return r;
};
/**
 * [开发环境] 额外内容
 */


var getDevExtra = function getDevExtra() {
  if (true) return ''; // 判断是否存在 dll 文件，如果存在，在此引入

  var fileDllClient = process.env.KOOT_DEV_DLL_FILE_CLIENT;
  if (fileDllClient && fs.existsSync(fileDllClient)) return "<script type=\"text/javascript\" src=\"".concat(dll, "\"></script>");
  return '';
};

/***/ }),

/***/ "./node_modules/koot/React/inject/scripts.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/React/inject/scripts.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var _require = __webpack_require__(/*! ../../defaults/before-build */ "./node_modules/koot/defaults/before-build.js"),
    chunkNameClientRunFirst = _require.chunkNameClientRunFirst;

var defaultEntrypoints = __webpack_require__(/*! ../../defaults/entrypoints */ "./node_modules/koot/defaults/entrypoints.js");

var readClientFile = __webpack_require__(/*! ../../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

var getClientFilePath = __webpack_require__(/*! ../../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");

var getSSRStateString = __webpack_require__(/*! ../../libs/get-ssr-state-string */ "./node_modules/koot/libs/get-ssr-state-string.js");
/**
 * 注入: JavaScript 代码
 * @param {Object} options
 * @param {Boolean} [options.needInjectCritical]
 * @param {Object} [options.injectCache]
 * @param {Object} [options.entrypoints]
 * @param {String} [options.localeId]
 * @param {String} [options.reduxHtml]
 * @param {Object} [options.compilation]
 * @param {Object} [options.SSRState]
 * @returns {String}
 */


module.exports = function (_ref) {
  var needInjectCritical = _ref.needInjectCritical,
      injectCache = _ref.injectCache,
      entrypoints = _ref.entrypoints,
      localeId = _ref.localeId,
      reduxHtml = _ref.reduxHtml,
      _ref$SSRState = _ref.SSRState,
      SSRState = _ref$SSRState === void 0 ? {} : _ref$SSRState,
      compilation = _ref.compilation;
  var ENV = "prod";
  var isDev = Boolean(ENV === 'dev' ||  true && false);
  var isProd = !isDev;

  if (isDev || typeof injectCache.scriptsInBody === 'undefined') {
    var r = ''; // 入口: critical

    if (needInjectCritical && Array.isArray(entrypoints.critical)) {
      r += entrypoints.critical.filter(function (file) {
        return path.extname(file) === '.js';
      }).map(function (file) {
        if (isDev) {
          // return `<script type="text/javascript" src="${getClientFilePath(true, file)}"></script>`;
          return combineFilePaths(true, file);
        }

        return "<script type=\"text/javascript\">".concat(readClientFile(true, file), "</script>");
      }).join('');
    } // 其他默认入口
    // console.log('defaultEntrypoints', defaultEntrypoints)
    // console.log('entrypoints', entrypoints)


    defaultEntrypoints.forEach(function (key) {
      if (Array.isArray(entrypoints[key])) {
        r += entrypoints[key].filter(function (file) {
          return /\.(js|jsx|mjs|ejs)$/.test(file);
        }).map(function (file) {
          // console.log(file)
          // if (isDev)
          // return `<script type="text/javascript" src="${getClientFilePath(true, file)}" defer></script>`
          // return `<script type="text/javascript" src="${getClientFilePath(
          //     true,
          //     file
          // )}" defer></script>`;
          return combineFilePaths(true, file);
        }).join('');
      }
    }); // 如果设置了 PWA 自动注册 Service-Worker，在此注册

    var pwaAuto =  true ? JSON.parse("false") : undefined;

    if (pwaAuto && ( false || typeof injectCache.pathnameSW === 'string')) {
      r += "<script id=\"__koot-pwa-register-sw\" type=\"text/javascript\">";

      if (isProd) {
        r += "if ('serviceWorker' in navigator) {" + "window.addEventListener('load', function() {" + // + `navigator.serviceWorker.register("${injectCache.pathnameSW}?koot=${process.env.KOOT_VERSION}",`
        "navigator.serviceWorker.register(\"".concat(injectCache.pathnameSW || JSON.parse("\"/service-worker.js\""), "?koot=0.11\",") + "{scope: '/'}" + ")" + ".catch(err => {console.log('\uD83D\uDC69\u200D\uD83D\uDCBB Service Worker SUPPORTED. ERROR', err)})" + "});" + "}else{console.log('\uD83D\uDC69\u200D\uD83D\uDCBB Service Worker not supported!')}";
      } else if (isDev) {
        r += "console.log('\uD83D\uDC69\u200D\uD83D\uDCBB No Service Worker for DEV mode.')";
      }

      r += "</script>";
    }

    injectCache.scriptsInBody = r;
  }

  return "<script type=\"text/javascript\">" + (reduxHtml ? reduxHtml : "window.__REDUX_STATE__ = {};") + "window.__KOOT_LOCALEID__ = \"".concat(SSRState.localeId || '', "\";") + "window.__KOOT_SSR_STATE__ = ".concat(getSSRStateString(SSRState), ";") + "</script>" + getClientRunFirstJS(localeId, compilation) + "".concat(injectCache.scriptsInBody);
};
/**
 * 客户端预先执行 JS 的代码
 * @param {*} localeId
 * @param {*} compilation
 * @returns {String}
 */


var getClientRunFirstJS = function getClientRunFirstJS(localeId, compilation) {
  var filename = "".concat(chunkNameClientRunFirst, ".js");

  if (false) {}

  return "<script type=\"text/javascript\">".concat(readClientFile(filename, localeId, compilation), "</script>");
};
/**
 * 返回 script 标签
 * 如果有多个结果，会返回包含多个标签的 HTML 结果
 * @param {...any} args `utils/get-client-file-path` 对应的参数
 * @returns {String} 整合的 HTML 结果
 */


var combineFilePaths = function combineFilePaths() {
  var pathnames = getClientFilePath.apply(void 0, arguments);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];
  return pathnames.map(function (pathname) {
    return "<script type=\"text/javascript\" src=\"".concat(pathname, "\" defer></script>");
  }).join('');
};

/***/ }),

/***/ "./node_modules/koot/React/inject/styles.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/React/inject/styles.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../../defaults/before-build */ "./node_modules/koot/defaults/before-build.js"),
    chunkNameExtractCss = _require.chunkNameExtractCss,
    chunkNameExtractCssForImport = _require.chunkNameExtractCssForImport;

var readClientFile = __webpack_require__(/*! ../../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

var getClientFilePath = __webpack_require__(/*! ../../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");
/**
 * 注入: CSS 代码
 * @param {Object} options
 * @param {Boolean} [options.needInjectCritical]
 * @param {Object} [options.injectCache]
 * @param {String} [options.stylesHtml]
 * @param {String} [options.localeId]
 * @param {Object} [options.filemap]
 * @param {String} [options.compilation]
 * @returns {String}
 */


module.exports = function (_ref) {
  var injectCache = _ref.injectCache,
      stylesHtml = _ref.stylesHtml,
      localeId = _ref.localeId,
      compilation = _ref.compilation;

  if (typeof injectCache.styles === 'undefined') {
    injectCache.styles = getExtracted(localeId, compilation);

    if (false) {}
  } // if (needInjectCritical && typeof filemap['critical.css'] === 'string') {
  //     injectCache.styles += getCritical()
  // }


  return injectCache.styles + stylesHtml;
}; // const getCritical = () => {
//     if (process.env.WEBPACK_BUILD_ENV === 'dev') {
//         return `<link id="__koot-critical-styles" media="all" rel="stylesheet" href="${getClientFilePath('critical.css')}" />`
//     }
//     return `<style id="__koot-critical-styles" type="text/css">${readClientFile('critical.css')}</style>`
// }


var getExtracted = function getExtracted(localeId, compilation) {
  var filename = "".concat(chunkNameExtractCss, ".css");

  if (false) {}

  var content = readClientFile(filename, localeId, compilation); // 如果内容大于 50k

  if (content.length > 50 * 1000) {
    if (false) {} else {
      return combineFilePaths(filename, localeId);
    } // return `<link id="__koot-extracted-styles" media="all" rel="stylesheet" href="${
    //     process.env.WEBPACK_BUILD_TYPE === 'spa'
    //         ? getClientFilePath(
    //               `${chunkNameExtractCssForImport}.css`,
    //               localeId
    //           )
    //         : getClientFilePath(filename, localeId)
    // }" />`;

  }

  return "<style id=\"__koot-extracted-styles\" type=\"text/css\">".concat(content, "</style>");
};
/**
 * 返回 link 标签
 * 如果有多个结果，会返回包含多个标签的 HTML 结果
 * @param {...any} args `utils/get-client-file-path` 对应的参数
 * @returns {String} 整合的 HTML 结果
 */


var combineFilePaths = function combineFilePaths() {
  var pathnames = getClientFilePath.apply(void 0, arguments);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];
  return pathnames.map(function (pathname) {
    return "<link id=\"__koot-extracted-styles\" media=\"all\" rel=\"stylesheet\" href=\"".concat(pathname, "\" />");
  }).join('');
};

/***/ }),

/***/ "./node_modules/koot/React/is-render-safe.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/React/is-render-safe.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global __KOOT_SSR__:false */
var _require = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js"),
    needConnectComponents = _require.needConnectComponents;
/**
 * 当前执行和渲染有关的操作是否安全
 * - 客户端: 永远安全
 * - 服务器端: SSR `dataToStore` 之前不安全，之后安全
 * @returns {boolean}
 */


module.exports = function () {
  if (true) {
    var SSR =  false ? undefined : __KOOT_SSR__;
    if (SSR[needConnectComponents]) return false;
    return true;
  }

  return true;
};

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actionType.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actionType.js ***!
  \*****************************************************************/
/*! exports provided: LOCATION_UPDATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_UPDATE", function() { return LOCATION_UPDATE; });
var LOCATION_UPDATE = '@@KOOT@@LOCATION_UPDATE';

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actions.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actions.js ***!
  \**************************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");

function update(location) {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"],
    location: location
  };
}

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/api.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/api.js ***!
  \**********************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions.js */ "./node_modules/koot/React/realtime-location/actions.js");

var update = function update(location) {
  return function (dispatch) {
    return dispatch(_actions_js__WEBPACK_IMPORTED_MODULE_0__["update"](location));
  };
};

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/index.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/index.js ***!
  \************************************************************/
/*! exports provided: LOCATION_UPDATE, reducer, update, REALTIME_LOCATION_REDUCER_NAME, actionUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REALTIME_LOCATION_REDUCER_NAME", function() { return REALTIME_LOCATION_REDUCER_NAME; });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCATION_UPDATE", function() { return _actionType__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"]; });

/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/koot/React/realtime-location/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/koot/React/realtime-location/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["update"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/koot/React/realtime-location/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionUpdate", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["update"]; });


var REALTIME_LOCATION_REDUCER_NAME = 'realtimeLocation';


/***/ }),

/***/ "./node_modules/koot/React/realtime-location/reducer.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/reducer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType.js */ "./node_modules/koot/React/realtime-location/actionType.js");

var initialState = {};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionType_js__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"]:
      return action.location;
  }

  return state;
});

/***/ }),

/***/ "./node_modules/koot/React/redux.js":
/*!******************************************!*\
  !*** ./node_modules/koot/React/redux.js ***!
  \******************************************/
/*! exports provided: RESET_CERTAIN_STATE, reducers, initialState, middlewares, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CERTAIN_STATE", function() { return RESET_CERTAIN_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middlewares", function() { return middlewares; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _realtime_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime-location */ "./node_modules/koot/React/realtime-location/index.js");
/* harmony import */ var _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReactApp/server/redux */ "./node_modules/koot/ReactApp/server/redux.js");
/* harmony import */ var _i18n_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n/redux */ "./node_modules/koot/i18n/redux/index.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./history */ "./node_modules/koot/React/history.js");
/* harmony import */ var _client_session_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-session-store */ "./node_modules/koot/React/client-session-store.js");
var _reducers;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import history from "__KOOT_CLIENT_REQUIRE_HISTORY__"


 // const getHistory = () => {
//     if (__SPA__) {
//         return require('react-router/lib/hashHistory')
//     }
//     return require('react-router/lib/browserHistory')
// }

/******************************************************************************
 * ┌─┐┌─┐┌┐┌┌─┐┌┬┐┌─┐┌┐┌┌┬┐┌─┐
 * │  │ ││││└─┐ │ ├─┤│││ │ └─┐
 * └─┘└─┘┘└┘└─┘ ┴ ┴ ┴┘└┘ ┴ └─┘
 *****************************************************************************/

var RESET_CERTAIN_STATE = '@@KOOT@@RESET_CERTAIN_STATE';
/******************************************************************************
 * ┌─┐┌─┐┌─┐┌─┐┌┐┌┌┬┐┬┌─┐┬  ┌─┐
 * ├┤ └─┐└─┐├┤ │││ │ │├─┤│  └─┐
 * └─┘└─┘└─┘└─┘┘└┘ ┴ ┴┴ ┴┴─┘└─┘
 *****************************************************************************/

/**
 * @type {Array}
 */

var reducers = (_reducers = {
  // 路由状态扩展
  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerReducer"]
}, _defineProperty(_reducers, _realtime_location__WEBPACK_IMPORTED_MODULE_4__["REALTIME_LOCATION_REDUCER_NAME"], _realtime_location__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _defineProperty(_reducers, _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__["SERVER_REDUCER_NAME"], _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__["serverReducer"]), _reducers);

if (_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default()()) {
  reducers.localeId = _i18n_redux__WEBPACK_IMPORTED_MODULE_6__["reducerLocaleId"]; // reducers.locales = i18nReducerLocales
}
/**
 * @type {Object}
 */


var initialState = function () {
  if (false) {}
  if (true) return {};
}();
/**
 * @type {Array}
 */

var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, Object(react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(_history__WEBPACK_IMPORTED_MODULE_8__["default"])]; // const enhancerClientModifyState = createStore => (
//     reducer,
//     preloadedState,
//     enhancer
// ) => {
//     const store = createStore(reducer, preloadedState, enhancer);
//     console.log({ store, state: store.getState() });
//     return store;
// };
// const rootReducerClientResetCertainState = (state, action) => {
//     const reset = (data, prefix = '') => {
//         for (const [key, value] of Object.entries(data)) {
//             const newKey = prefix ? `${prefix}.${key}` : key;
//             if (
//                 typeof value === 'object' &&
//                 typeof state[key] === 'object' &&
//                 !Array.isArray(state[key])
//             ) {
//                 return reset(value, newKey);
//             } else if (value === true) {
//                 console.log(newKey);
//             }
//         }
//     };
//     if (
//         __CLIENT__ &&
//         action.type === RESET_CERTAIN_STATE &&
//         typeof action.data === 'object'
//     ) {
//         reset(action.data);
//     }
// };

/**
 * 创建 redux store
 * - _注_: 与 redux 提供的 `createStore` 方法略有不同，仅需提供项目所用的 reducer 对象和中间件列表，**不需要**初始 state 对象
 * @param {Object|Function} appReducers 项目使用的 reducer，可为 `ReducersMapObject` (形式为 Object 的列表)，也可以为 `Reducer` (reducer 函数)
 * @param {Function[]} appMiddlewares 项目的中间件列表
 * @param {Function[]} appEnhancers 项目的 store 增强函数 (enhancer) 列表
 * @returns {Object} redux store
 */

var createStore = function createStore(appReducer) {
  var appMiddlewares = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var appEnhancers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  // const toCompose = [
  //     reduxApplyMiddleware(...middlewares.concat(appMiddlewares))
  // ];
  // if (__CLIENT__) toCompose.push(enhancerClientModifyState);
  var projectReducer = function () {
    if (typeof appReducer === 'function') {
      var kootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_objectSpread({}, reducers));
      return function (state, action) {
        var _sliceStateForReducer = sliceStateForReducers(state),
            appState = _sliceStateForReducer.appState,
            kootState = _sliceStateForReducer.kootState;

        return _objectSpread({}, appReducer(appState, action), {}, kootReducer(kootState, action));
      };
    } else if (_typeof(appReducer) === 'object' && !Array.isArray(appReducer)) {
      return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_objectSpread({}, appReducer, {}, reducers));
    }

    return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_objectSpread({}, reducers));
  }();

  if (!Array.isArray(appEnhancers) && appEnhancers) appEnhancers = [appEnhancers];else if (!appEnhancers) appEnhancers = [];
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(projectReducer, initialState, redux__WEBPACK_IMPORTED_MODULE_1__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, _toConsumableArray(middlewares.concat(appMiddlewares)))].concat(_toConsumableArray(appEnhancers))));
};
/******************************************************************************
 * ┬ ┬┌─┐┬  ┌─┐┌─┐┬─┐┌─┐
 * ├─┤├┤ │  ├─┘├┤ ├┬┘└─┐
 * ┴ ┴└─┘┴─┘┴  └─┘┴└─└─┘
 *****************************************************************************/

/**
 * 将当前 state 拆分为 _appState_ 和 _kootState_
 * @param {Object} state
 * @returns {Object} { appState, kootState }
 */

var sliceStateForReducers = function sliceStateForReducers(state) {
  var appState = {};
  var kootState = {};
  var keysForKootReducer = Object.keys(reducers);
  Object.keys(state).forEach(function (key) {
    if (keysForKootReducer.includes(key)) {
      kootState[key] = state[key];
    } else {
      appState[key] = state[key];
    }
  });
  return {
    appState: appState,
    kootState: kootState
  };
};

/***/ }),

/***/ "./node_modules/koot/React/redux/reset-store.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/React/redux/reset-store.js ***!
  \******************************************************/
/*! exports provided: defaultKeysToPreserve, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultKeysToPreserve", function() { return defaultKeysToPreserve; });
/**
 * 重置 store，清空所有 state
 * @param {Object} store
 * @param {string[]} [keysToPreserve]
 */
var resetStore = function resetStore(store) {
  var keysToPreserve = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultKeysToPreserve;
  var state = store.getState();
  Object.keys(state).filter(function (key) {
    return !keysToPreserve.includes(key);
  }).forEach(function (key) {
    state[key] = undefined;
    delete state[key];
  }); // 触发所有 reducer 的初始化

  store.dispatch({
    type: '@@KOOT@@STATE_RESET_REDUCER_INIT'
  });
  return store;
};
/** @type {Array} 需要保留（不需要进行删除操作）的 redux store state 属性名 */


var defaultKeysToPreserve = ['localeId', 'locales' // 'server'
];
/* harmony default export */ __webpack_exports__["default"] = (resetStore);

/***/ }),

/***/ "./node_modules/koot/React/render-template.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/render-template.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ejs = __webpack_require__(/*! ejs */ "ejs");

var readClientFile = __webpack_require__(/*! ../utils/read-client-file */ "./node_modules/koot/utils/read-client-file.js");

var getClientFilePath = __webpack_require__(/*! ../utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");
/**
 * 渲染 ejs 模板
 * @param {Object} options
 * @param {String} options.template ejs 模板内容
 * @param {Object} [options.inject={}] 注入对象
 * @param {Object} [options.state] 当前 Redux state。也可以传入 Redux store
 * @param {Object} [options.compilation] webpack compilation
 * @returns {String}
 */


module.exports = function (_ref) {
  var _ref$template = _ref.template,
      template = _ref$template === void 0 ? DEFAULT_TEMPLATE : _ref$template,
      _ref$inject = _ref.inject,
      inject = _ref$inject === void 0 ? {} : _ref$inject,
      store = _ref.store,
      state = _ref.state,
      compilation = _ref.compilation,
      ctx = _ref.ctx;
  if (_typeof(state) !== 'object' && _typeof(store) === 'object' && typeof store.getState === 'function') state = store.getState();else if (_typeof(state) === 'object' && typeof state.getState === 'function') state = state.getState();

  try {
    for (var key in inject) {
      if (typeof inject[key] === 'function') inject[key] = inject[key](template, state, ctx);
    }
  } catch (e) {
    console.log(e);
  } // 开发环境: 将 content('critical.js') 转为 pathname() 方式


  if (false) {} // console.log(template)

  var localeId = _typeof(state) === 'object' ? state.localeId : undefined;
  return ejs.render(template, {
    inject: inject,
    content: function content(filename) {
      return readClientFile(filename, localeId, compilation);
    },
    pathname: function pathname(filename) {
      return getClientFilePath(filename, localeId);
    }
  }, {});
};

var DEFAULT_TEMPLATE = "<!DOCTYPE html>\n<html>\n\n<head<%- inject.htmlLang %>>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\">\n\n    <title><%= inject.title %></title>\n\n    <base target=\"_self\">\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"format-detection\" content=\"telephone=no,email=no,address=no\">\n    <meta name=\"format-detection\" content=\"email=no\">\n    <meta name=\"format-detection\" content=\"address=no\">\n    <meta name=\"format-detection\" content=\"telephone=no\">\n    <meta name=\"HandheldFriendly\" content=\"true\">\n    <meta name=\"mobile-web-app-capable\" content=\"yes\">\n\n    <link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\">\n\n    <!-- IE/Edge/Multi-engine -->\n    <meta name=\"renderer\" content=\"webkit\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n\n    <!-- iOS Safari -->\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">\n\n    <!-- Customize -->\n    <meta name=\"theme-color\" content=\"#0092f5\" />\n\n    <%- inject.metas %>\n    <%- inject.styles %>\n</head>\n\n<body class=\"koot-system\">\n    <div id=\"root\"><%- inject.react %></div>\n    <script type=\"text/javascript\"><%- content('critical.js') %></script>\n    <%- inject.scripts %>\n</body>\n\n</html>";

/***/ }),

/***/ "./node_modules/koot/React/route-check.js":
/*!************************************************!*\
  !*** ./node_modules/koot/React/route-check.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 检查下一个路由状态和当前客户端的 location 是否一致。多用于针对基于路由代码拆分的当前路由检测。
 * @param {Object} nextState `react-router` 传入的下一个路由状态对象
 * @param {Boolean} [isAlwaysTrue=false] 是否默认为 `true`
 * @returns {Boolean}
 */
module.exports = function (nextState, isAlwaysTrue) {
  if (isAlwaysTrue || typeof location === 'undefined' || true || false) return true;
  var next = nextState.location.pathname;
  var curr = location.pathname;
  if (next.substr(0, 1) !== '/') next = '/' + next;
  if (curr.substr(0, 1) !== '/') curr = '/' + curr;
  return Boolean(next === curr);
};

/***/ }),

/***/ "./node_modules/koot/React/styles.js":
/*!*******************************************!*\
  !*** ./node_modules/koot/React/styles.js ***!
  \*******************************************/
/*! exports provided: checkAndWriteIntoHead, append, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAndWriteIntoHead", function() { return checkAndWriteIntoHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// import React from 'react'

/**
 * 生成 StyleMapContext
 */
// export const createStyleMapContext = () => {
//     return React.createContext({})
// }
// export let StyleMapContext = createStyleMapContext()

/**
 * 将样式表写入到 head 标签内
 * @param {Object} styleMap 
 */
var checkAndWriteIntoHead = function checkAndWriteIntoHead() {
  var styleMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (_typeof(styleMap) !== 'object') return;
  Object.keys(styleMap).forEach(function (wrapper) {
    var style = styleMap[wrapper];

    if (style.count > 0) {
      // 配置样式
      if (!document.getElementById(wrapper)) {
        var styleTag = document.createElement('style');
        styleTag.innerHTML = style.css;
        styleTag.setAttribute('id', wrapper);
        document.getElementsByTagName('head')[0].appendChild(styleTag);
      }
    } else {
      // 移除样式
      if (document.getElementById(wrapper)) {
        document.getElementById(wrapper).remove();
      }
    }
  });
}; // const getStyleMap = (passedMap) => {
//     if (__CLIENT__)
//         return passedMap
//     if (typeof __KOOT_SSR__ === 'object') {
//         // console.log({ LocaleId })
//         return __KOOT_SSR__.styleMap.get(LocaleId)
//     }
//     return passedMap
// }

/**
 * 追加样式
 * @param {Object} styleMap 
 * @param {Object|Array} style 
 */

var append = function append() {
  var styleMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var style = arguments.length > 1 ? arguments[1] : undefined;
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(function (theStyle) {
    return append(styleMap, theStyle);
  });
  if (_typeof(style) !== 'object') return;

  if (!styleMap[style.wrapper]) {
    styleMap[style.wrapper] = {
      css: style.css,
      count: 1
    };
  } else {
    styleMap[style.wrapper].count++;
  }

  if (false) {}
};
/**
 * 移除样式
 * @param {Object} styleMap 
 * @param {*} style 
 */

var remove = function remove() {
  var styleMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var style = arguments.length > 1 ? arguments[1] : undefined;
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(function (theStyle) {
    return remove(theStyle);
  });
  if (_typeof(style) !== 'object') return;

  if (styleMap[style.wrapper]) {
    styleMap[style.wrapper].count--;
  }
}; // export const idDivStylesContainer = '__KOOT_ISOMORPHIC_STYLES_CONTAINER__'
// /**
//  * 分析 HTML 代码，解析已有样式表，将其从 HTML 代码中移除，并返回可以直接写入到 head 标签内的样式表代码
//  * @param {String} html 
//  * @returns {String} htmlStyles
//  */
// export const parseHtmlForStyles = (html) => {
//     const matches = html.match(new RegExp(`<div id="${idDivStylesContainer}">(.*?)</div>`, 'm'))
//     if (
//         !matches ||
//         typeof matches !== 'object' ||
//         typeof matches.index === 'undefined' ||
//         typeof matches[1] === 'undefined'
//     )
//         return {
//             html,
//             htmlStyles: ''
//         }
//     return {
//         html: html.substr(0, matches.index),
//         htmlStyles: matches[1]
//     }
// }
// /**
//  * React 组件: 样式表内容容器
//  */
// export class StylesContainer extends React.Component {
//     static contextType = StyleMapContext
//     render() {
//         return (
//             <div
//                 id={idDivStylesContainer}
//                 dangerouslySetInnerHTML={{
//                     __html: Object.keys(this.context)
//                         .filter(id => !!this.context[id].css)
//                         .map(id => `<style id="${id}">${this.context[id].css}</style>`)
//                         .join('')
//                 }}
//             />
//         )
//     }
// }

/***/ }),

/***/ "./node_modules/koot/React/validate-inject.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/React/validate-inject.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var injectHtmlLang = __webpack_require__(/*! ./inject/htmlLang */ "./node_modules/koot/React/inject/htmlLang.js");

var injectMetas = __webpack_require__(/*! ./inject/metas */ "./node_modules/koot/React/inject/metas.js");

var injectStyles = __webpack_require__(/*! ./inject/styles */ "./node_modules/koot/React/inject/styles.js");

var injectScripts = __webpack_require__(/*! ./inject/scripts */ "./node_modules/koot/React/inject/scripts.js");
/**
 * 生成 ejs 使用的模板替换对象
 * @param {Object} options 当前设置
 * @param {Object} [options.injectCache={}] 静态注入对象/当前语言的静态注入缓存对象
 * @param {Object} [options.filemap={}] (当前语言的) 文件名对应表
 * @param {Object} [options.entrypoints={}] (当前语言的) 入口表
 * @param {String} [localeId] 当前语种 ID
 * @param {String} [title] 页面标题
 * @param {String} [metaHtml] meta 标签 HTML 代码
 * @param {String} [reactHtml] 已处理完毕的 React 同构结果 HTML 代码
 * @param {String} [stylesHtml] 已处理完毕的样式结果 HTML 代码
 * @param {String} [reduxHtml] 已处理完毕的 redux store 结果 HTML 代码
 * @param {Object} [SSRState] SSR 状态对象
 * @param {Object} [needInjectCritical] 是否需要自动注入 critical 内容
 * @param {Boolean} [needInjectCritical.styles=false]
 * @param {Boolean} [needInjectCritical.scripts=false]
 * @returns {Object}
 */


module.exports = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$injectCache = options.injectCache,
      injectCache = _options$injectCache === void 0 ? {} : _options$injectCache,
      _options$filemap = options.filemap,
      filemap = _options$filemap === void 0 ? {} : _options$filemap,
      _options$entrypoints = options.entrypoints,
      entrypoints = _options$entrypoints === void 0 ? {} : _options$entrypoints,
      compilation = options.compilation,
      localeId = options.localeId,
      title = options.title,
      metaHtml = options.metaHtml,
      reactHtml = options.reactHtml,
      stylesHtml = options.stylesHtml,
      reduxHtml = options.reduxHtml,
      SSRState = options.SSRState,
      _options$needInjectCr = options.needInjectCritical,
      needInjectCritical = _options$needInjectCr === void 0 ? {
    styles: false,
    scripts: false
  } : _options$needInjectCr;
  return {
    htmlLang: injectHtmlLang(localeId),
    title: title,
    metas: injectMetas({
      metaHtml: metaHtml,
      localeId: localeId,
      compilation: compilation
    }),
    styles: injectStyles({
      needInjectCritical: needInjectCritical.styles,
      injectCache: injectCache,
      filemap: filemap,
      stylesHtml: stylesHtml,
      localeId: localeId,
      compilation: compilation
    }),
    react: reactHtml,
    scripts: injectScripts({
      needInjectCritical: needInjectCritical.scripts,
      injectCache: injectCache,
      entrypoints: entrypoints,
      localeId: localeId,
      reduxHtml: reduxHtml,
      SSRState: SSRState,
      compilation: compilation
    })
  };
};

/***/ }),

/***/ "./node_modules/koot/React/validate/redux-config.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/React/validate/redux-config.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux */ "./node_modules/koot/React/redux.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/**
 * 验证 Redux 配置
 * 
 * @param {Object} kootConfigRedux Koot 配置项: `redux`
 * @returns {Object} reduxConfig
 */

var validateReduxConfig = function validateReduxConfig() {
  var kootConfigRedux = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _kootConfigRedux$sync = kootConfigRedux.syncCookie,
      syncCookie = _kootConfigRedux$sync === void 0 ? true : _kootConfigRedux$sync;
  var reduxConfig = {
    syncCookie: syncCookie
  };

  if (typeof kootConfigRedux.store === 'undefined') {
    var _kootConfigRedux$comb = kootConfigRedux.combineReducers,
        theReducers = _kootConfigRedux$comb === void 0 ? {} : _kootConfigRedux$comb;
    Object.keys(_redux__WEBPACK_IMPORTED_MODULE_1__["reducers"]).forEach(function (reducerName) {
      theReducers[reducerName] = _redux__WEBPACK_IMPORTED_MODULE_1__["reducers"][reducerName];
    });

    reduxConfig.factoryStore = function () {
      return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(theReducers), _redux__WEBPACK_IMPORTED_MODULE_1__["initialState"], redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, _toConsumableArray(_redux__WEBPACK_IMPORTED_MODULE_1__["middlewares"])));
    };
  } else if (typeof kootConfigRedux.store === 'function') {
    reduxConfig.factoryStore = kootConfigRedux.store;
  } else if (_typeof(kootConfigRedux.store) === 'object') {
    reduxConfig.store = kootConfigRedux.store;
  }

  return reduxConfig;
};

/* harmony default export */ __webpack_exports__["default"] = (validateReduxConfig);

/***/ }),

/***/ "./node_modules/koot/React/validate/router-config.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/React/validate/router-config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/error-msg */ "./node_modules/koot/libs/error-msg.js");
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_validte_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../i18n/validte-routes */ "./node_modules/koot/i18n/validte-routes.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * 验证 `react-router` 配置
 * 
 * @param {Object} kootConfigRouter Koot 配置项: `router`
 * @returns {Object} 路由配置对象，可直接供 `react-router` 使用
 */

var validateRouterConfig = function validateRouterConfig(kootConfigRouter) {
  var config = typeof kootConfigRouter === 'function' ? kootConfigRouter() : kootConfigRouter;
  if (_typeof(config) !== 'object') throw new Error(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default()('VALIDATE_ROUTER_CONFIG', 'no router config or router object invalid'));

  var _ref = function () {
    if (Array.isArray(config)) {
      return {
        childRoutes: _toConsumableArray(config)
      };
    }

    return config;
  }(),
      routes = _extends({}, _ref);

  if (!routes.path) {
    routes.path = '/';
  }

  handleIndexRoute(routes);
  Object(_i18n_validte_routes__WEBPACK_IMPORTED_MODULE_1__["default"])(routes);
  return routes;
};

/* harmony default export */ __webpack_exports__["default"] = (validateRouterConfig);
/**
 * 处理默认路由
 * @param {any} route
 */

var handleIndexRoute = function handleIndexRoute(route) {
  if (route && (!route.childRoutes || !route.childRoutes.length)) {
    return;
  }

  route.childRoutes = route.childRoutes.filter(function (child) {
    // eslint-disable-line
    if (child.isIndex) {
      /* istanbul ignore next */
      if (false) {}
      /* istanbul ignore else */


      if (!route.indexRoute) {
        delete child.path; // eslint-disable-line

        route.indexRoute = child; // eslint-disable-line

        return false;
      }
    }

    return true;
  });
  route.childRoutes.forEach(handleIndexRoute);
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/action-types.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/action-types.js ***!
  \****************************************************/
/*! exports provided: CHANGE_LANGUAGE, GET_ORIGIN_URL, TELL_CLIENT_URL, SYNC_COOKIE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LANGUAGE", function() { return CHANGE_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ORIGIN_URL", function() { return GET_ORIGIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TELL_CLIENT_URL", function() { return TELL_CLIENT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_COOKIE", function() { return SYNC_COOKIE; });
var CHANGE_LANGUAGE = '@@KOOT@@CHANGE_LANGUAGE';
var GET_ORIGIN_URL = '@@KOOT@@GET_ORIGIN_URL';
var TELL_CLIENT_URL = '@@KOOT@@TELL_CLIENT_URL';
var SYNC_COOKIE = '@@KOOT@@SYNC_COOKIE';
/* harmony default export */ __webpack_exports__["default"] = ({
  CHANGE_LANGUAGE: CHANGE_LANGUAGE,
  GET_ORIGIN_URL: GET_ORIGIN_URL,
  TELL_CLIENT_URL: TELL_CLIENT_URL,
  SYNC_COOKIE: SYNC_COOKIE
});

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* global __KOOT_SSR__:false */
var getSSRStateString = __webpack_require__(/*! ../../../../libs/get-ssr-state-string */ "./node_modules/koot/libs/get-ssr-state-string.js");
/** @type {String} 同步数据到 store 的静态方法名 */


var LIFECYCLE_DATA_TO_STORE = 'onServerRenderStoreExtend';
/** @type {String} 扩展 HTML 信息的静态方法名 */

var LIFECYCLE_HTML_EXTEND = 'onServerRenderHtmlExtend';
/**
 * 执行匹配到的组件的静态生命周期方法
 * @async
 * @param {Object} options
 * @param {Object} store Redux store 对象
 * @param {Object} renderProps 路由 `match` 结果中的属性对象，其内包含匹配到的组件的信息
 * @param {Object} ctx Koa context
 */

var executeComponentLifecycle =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref) {
    var store, renderProps, ctx, tasks, extendHtmlTasks, extractDataToStoreTask, extracHtmlExtendTask, connectedComponents, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            store = _ref.store, renderProps = _ref.renderProps, ctx = _ref.ctx;

            /** @type {Array} 需要执行的异步方法 */
            tasks = [];
            /**
             * @type {Function}
             * @async
             * 扩展 HTML 信息需要执行的方法
             * 仅执行匹配到的最深层组件对应的方法
             */

            extendHtmlTasks = [];

            extractDataToStoreTask = function extractDataToStoreTask(component) {
              if (!component) return;

              if (typeof component[LIFECYCLE_DATA_TO_STORE] === 'function') {
                var thisTask = component[LIFECYCLE_DATA_TO_STORE]({
                  store: store,
                  renderProps: renderProps,
                  ctx: ctx
                }); // component[LIFECYCLE_DATA_TO_STORE] = undefined

                if (Array.isArray(thisTask)) {
                  tasks = tasks.concat(thisTask);
                } else if (thisTask instanceof Promise || thisTask.then) {
                  tasks.push(thisTask);
                } else if (typeof thisTask === 'function') {
                  tasks.push(new Promise(
                  /*#__PURE__*/
                  function () {
                    var _ref3 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee(resolve) {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return thisTask();

                            case 2:
                              resolve();

                            case 3:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x2) {
                      return _ref3.apply(this, arguments);
                    };
                  }()));
                }
              } else if (component.WrappedComponent) {
                extractDataToStoreTask(component.WrappedComponent);
              }
            };

            extracHtmlExtendTask = function extracHtmlExtendTask(component) {
              if (!component) return;

              if (typeof component[LIFECYCLE_HTML_EXTEND] === 'function') {
                extendHtmlTasks.push(component[LIFECYCLE_HTML_EXTEND]); // component[LIFECYCLE_HTML_EXTEND] = undefined
              } else if (component.WrappedComponent) {
                extracHtmlExtendTask(component.WrappedComponent);
              }
            };
            /** @type {Array} 使用 extend 高阶组件的组件 */


            connectedComponents = function () {
              var _ref4 =  false ? undefined : __KOOT_SSR__,
                  _ref4$connectedCompon = _ref4.connectedComponents,
                  connectedComponents = _ref4$connectedCompon === void 0 ? [] : _ref4$connectedCompon;

              if (false) { var renderPropsComponents; }

              return connectedComponents;
            }(); // console.log('\n\n==========');
            // console.log({ connectedComponents });
            // console.log({ connectedComponents, renderProps });
            // console.log('==========\n\n');
            // 添加各项任务


            connectedComponents.forEach(function (component) {
              extractDataToStoreTask(component);
              extracHtmlExtendTask(component);
            }); // 旧代码
            // for (const component of renderProps.components) {
            //     /**
            //      * @type {Component}
            //      * 当前组件
            //      * component.WrappedComponent 是 redux 装饰的外壳
            //      */
            //     // const thisComponent = component && component.WrappedComponent ? component.WrappedComponent : component
            //     // extractDataToStoreTask(component)
            // }
            // 等待所有异步方法执行完毕

            _context2.next = 9;
            return Promise.all(tasks);

          case 9:
            // 扩展 HTML 相关信息
            result = {
              title: "dfp-website" || false,
              metaHtml: '',
              reduxHtml: "window.__REDUX_STATE__ = ".concat(getSSRStateString(store.getState()), ";")
            };
            extendHtmlTasks.some(function (task) {
              if (typeof task === 'function') {
                var _task = task({
                  store: store,
                  renderProps: renderProps,
                  ctx: ctx
                }),
                    thisTitle = _task.title,
                    thisMetas = _task.metas;

                var hasTitle = !!thisTitle;
                var hasMeta = Array.isArray(thisMetas) && thisMetas.length;
                if (hasTitle) result.title = thisTitle;
                if (hasMeta) result.metaHtml = thisMetas.map(function (meta) {
                  return '<meta' + Object.keys(meta).map(function (key) {
                    return " ".concat(key, "=\"").concat(meta[key], "\"");
                  }).join('') + '>';
                }).join('');
                if (hasTitle || hasMeta) return true;
              }

              return false;
            });
            return _context2.abrupt("return", result);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function executeComponentLifecycle(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (executeComponentLifecycle);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js":
/*!********************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _React_redux_reset_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../React/redux/reset-store */ "./node_modules/koot/React/redux/reset-store.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * 通过 redux 配置，初始化并获取 redux store 对象
 *
 * - 若提供产生 store 的方法 (`factoryStore`): 生成 store
 * - 若提供自生成的 store (`store`): 尝试清空 state 并触发一次所有 reducer 的初始化
 *
 * 每次访问请求时，需要生成全新的干净的 redux store，不可复用
 *
 * @param {Object} reduxConfig Redux，以下内容选其一
 * @param {Function} [reduxConfig.factoryStore] 生成 Redux Store 的方法
 * @param {Object} [reduxConfig.store] Redux Store 对象
 * @returns {Object} store
 */

var initStore = function initStore() {
  var reduxConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = reduxConfig.store,
      factoryStore = reduxConfig.factoryStore;

  if (typeof factoryStore === 'function') {
    return factoryStore();
  }

  if (_typeof(store) === 'object') {
    return Object(_React_redux_reset_store__WEBPACK_IMPORTED_MODULE_0__["default"])(store);
  }

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (initStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var afterDataToStore =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var store, ctx, localeId, callback;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, ctx = _ref.ctx, localeId = _ref.localeId, callback = _ref.callback;
            if (false) {}

            if (!(typeof callback === 'function')) {
              _context.next = 5;
              break;
            }

            _context.next = 5;
            return callback({
              ctx: ctx,
              store: store,
              localeId: localeId
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function afterDataToStore(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (afterDataToStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var beforeDataToStore =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var ctx, store, localeId, callback;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref.ctx, store = _ref.store, localeId = _ref.localeId, callback = _ref.callback;
            if (false) {}
            if (false) {}

            if (!(typeof callback === 'function')) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return callback({
              ctx: ctx,
              store: store,
              localeId: localeId
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function beforeDataToStore(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (beforeDataToStore);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var beforePreRender =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var ctx, store, localeId, callback;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref.ctx, store = _ref.store, localeId = _ref.localeId, callback = _ref.callback;
            if (false) {}

            if (!(typeof callback === 'function')) {
              _context.next = 5;
              break;
            }

            _context.next = 5;
            return callback({
              ctx: ctx,
              store: store,
              localeId: localeId
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function beforePreRender(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (beforePreRender);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony import */ var _i18n_server_use_router_redirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../i18n/server/use-router-redirect */ "./node_modules/koot/i18n/server/use-router-redirect.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_2__);
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // import isI18nEnabled from '../../../../../i18n/is-enabled'


var beforeRouterMatch =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var store, ctx, syncCookie, callback, needRedirect, cookies, data, theCookies;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, ctx = _ref.ctx, syncCookie = _ref.syncCookie, callback = _ref.callback;
            // 如果 i18n URL 使用 router 方式同时判定需要跳转，此时进行处理
            needRedirect = Object(_i18n_server_use_router_redirect__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx);

            if (!needRedirect) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", needRedirect);

          case 4:
            // 告诉前端，当前的url是啥
            store.dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_0__["TELL_CLIENT_URL"],
              data: ctx.originTrue
            }); // 把http请求带来的cookie同步到ssr的初始化redux state里
            // server.cookie 获取
            // 配置信息在koot.config.js里
            // redux.syncCookie = ['token', 'sid'] | 'token' | false

            if (syncCookie) {
              cookies = syncCookie;

              if (cookies === true) {
                store.dispatch({
                  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"],
                  data: ctx.headers.cookie || ''
                });
              } else {
                data = {};

                if (cookies === 'all') {
                  theCookies = ctx.headers.cookie || '';
                  theCookies.split(';').forEach(function (str) {
                    var crumbs = str.split('=');

                    if (crumbs.length > 1) {
                      var _crumbs = _toArray(crumbs),
                          key = _crumbs[0],
                          values = _crumbs.slice(1);

                      data[key.trim()] = values.join('=').trim();
                    }
                  });
                } else {
                  if (typeof cookies === 'string') cookies = [cookies];

                  if (Array.isArray(cookies)) {
                    // 获取需要的cookie值
                    cookies.forEach(function (c) {
                      data[c] = ctx.cookies.get(c);
                    });
                  }
                } // 同步到state中


                store.dispatch({
                  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"],
                  data: data
                });
              } // console.log({
              //     syncCookie,
              //     cookies: ctx.headers.cookie,
              //     server: store.getState().server
              // });

            }

            if (false) {}

            if (!(typeof callback === 'function')) {
              _context.next = 10;
              break;
            }

            _context.next = 10;
            return callback({
              store: store,
              ctx: ctx
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function beforeRouterMatch(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (beforeRouterMatch);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/redux.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/redux.js ***!
  \****************************************************/
/*! exports provided: CHANGE_LANGUAGE, TELL_CLIENT_URL, SYNC_COOKIE, SERVER_REDUCER_NAME, serverReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_REDUCER_NAME", function() { return SERVER_REDUCER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverReducer", function() { return serverReducer; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LANGUAGE", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LANGUAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TELL_CLIENT_URL", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["TELL_CLIENT_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SYNC_COOKIE", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"]; });

// TODO: change to one action type , like: CHANGE_BASE_INFO


var SERVER_REDUCER_NAME = 'server';
var serverReducer = function serverReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lang: 'en',
    origin: ''
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LANGUAGE"]:
      return Object.assign({}, state, {
        lang: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["TELL_CLIENT_URL"]:
      return Object.assign({}, state, {
        origin: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"]:
      return Object.assign({}, state, {
        cookie: action.data
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/root-isomorphic.jsx":
/*!***************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/root-isomorphic.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router/lib/RouterContext */ "./node_modules/react-router/lib/RouterContext.js");
/* harmony import */ var react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* global
    __KOOT_SSR__:false
*/


 // import { idDivStylesContainer, StyleMapContext } from '../../React/styles'

var Root = function Root(_ref) {
  var store = _ref.store,
      props = _objectWithoutProperties(_ref, ["store"]);

  // console.log('Root', {
  //     'in __KOOT_SSR__': __KOOT_SSR__.LocaleId
  // })
  // console.log('Root render Store', typeof Store === 'undefined' ? undefined : Store)
  return (// <StyleMapContext.Provider value={{}}>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_lib_RouterContext__WEBPACK_IMPORTED_MODULE_2___default.a, props)) // <StylesContainer />
    // </StyleMapContext.Provider>

  );
};

/* harmony default export */ __webpack_exports__["default"] = (Root);
/**
 * React 组件: 样式表内容容器
 */
// const StylesContainer = () =>
//     <div
//         id={idDivStylesContainer}
//         dangerouslySetInnerHTML={{
//             __html: Object.keys(__KOOT_SSR__.styleMap)
//                 .filter(id => !!__KOOT_SSR__.styleMap[id].css)
//                 .map(id => `<style id="${id}">${__KOOT_SSR__.styleMap[id].css}</style>`)
//                 .join('')
//         }}
//     />
// let e = Root
// if (__DEV__) {
//     const { hot, setConfig } = require('react-hot-loader')
//     setConfig({ logLevel: 'debug' })
//     e = hot(module)(Root)
// }
// export default e

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/ssr.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/ssr.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_lib_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router/lib/match */ "./node_modules/react-router/lib/match.js");
/* harmony import */ var react_router_lib_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_lib_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router/lib/useRouterHistory */ "./node_modules/react-router/lib/useRouterHistory.js");
/* harmony import */ var react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history/lib/createMemoryHistory */ "./node_modules/history/lib/createMemoryHistory.js");
/* harmony import */ var history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __KOOT_PROJECT_CONFIG_FULL_PATHNAME__ */ "./logs/tmp/config/full.1571366465606.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ */ "./node_modules/koot/index.js");
/* harmony import */ var _root_isomorphic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root-isomorphic */ "./node_modules/koot/ReactApp/server/root-isomorphic.jsx");
/* harmony import */ var _defaults_webpack_dev_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../defaults/webpack-dev-server */ "./node_modules/koot/defaults/webpack-dev-server.js");
/* harmony import */ var _defaults_webpack_dev_server__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_defaults_webpack_dev_server__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony import */ var _React_validate_router_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../React/validate/router-config */ "./node_modules/koot/React/validate/router-config.js");
/* harmony import */ var _React_validate_inject__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../React/validate-inject */ "./node_modules/koot/React/validate-inject.js");
/* harmony import */ var _React_validate_inject__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_React_validate_inject__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _React_validate_redux_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../React/validate/redux-config */ "./node_modules/koot/React/validate/redux-config.js");
/* harmony import */ var _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../React/inject/is-need-inject-critical */ "./node_modules/koot/React/inject/is-need-inject-critical.js");
/* harmony import */ var _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _React_render_template__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../React/render-template */ "./node_modules/koot/React/render-template.js");
/* harmony import */ var _React_render_template__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_React_render_template__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _React_redux_reset_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../React/redux/reset-store */ "./node_modules/koot/React/redux/reset-store.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_router_match__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-router-match */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-router-match.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_pre_render__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-pre-render */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-pre-render.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_before_data_to_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/before-data-to-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/before-data-to-store.js");
/* harmony import */ var _middlewares_isomorphic_lifecycle_after_data_to_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./middlewares/isomorphic/lifecycle/after-data-to-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/lifecycle/after-data-to-store.js");
/* harmony import */ var _middlewares_isomorphic_execute_components_lifecycle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./middlewares/isomorphic/execute-components-lifecycle */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/execute-components-lifecycle.js");
/* harmony import */ var _middlewares_isomorphic_init_store__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./middlewares/isomorphic/init-store */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/init-store.js");
/* harmony import */ var _i18n_onServerRender__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../i18n/onServerRender */ "./node_modules/koot/i18n/onServerRender/index.js");
/* harmony import */ var _i18n_server_generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../i18n/server/generate-html-redirect-metas */ "./node_modules/koot/i18n/server/generate-html-redirect-metas.js");
/* harmony import */ var _i18n_server_get_ssr_state__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../i18n/server/get-ssr-state */ "./node_modules/koot/i18n/server/get-ssr-state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* global
    __KOOT_SSR_SET_STORE__:false,
    __KOOT_SSR_SET_HISTORY__:false,
    __KOOT_LOCALEID__:false,
    __KOOT_SSR__:false
*/


var ssr =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var options,
        _options$LocaleId,
        LocaleId,
        _options$SSR,
        SSR,
        _kootConfig$redux,
        reduxConfigRaw,
        reduxConfig,
        Store,
        historyConfig,
        memoryHistory,
        History,
        syncCookie,
        i18nEnabled,
        ctx,
        thisTemplateInjectCache,
        thisEntrypoints,
        thisFilemap,
        styleMap,
        template,
        templateInject,
        _SSR$proxyRequestOrig,
        proxyRequestOrigin,
        ssrComplete,
        url,
        _ref2,
        lifecycle,
        routes,
        _ref3,
        redirectLocation,
        renderProps,
        _ref4,
        title,
        metaHtml,
        reduxHtml,
        reactHtml,
        stylesHtml,
        inject,
        body,
        origin,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            _options$LocaleId = options.LocaleId, LocaleId = _options$LocaleId === void 0 ?  false ? undefined : __KOOT_LOCALEID__ : _options$LocaleId, _options$SSR = options.SSR, SSR = _options$SSR === void 0 ?  false ? undefined : __KOOT_SSR__ : _options$SSR; // ========================================================================

            _kootConfig$redux = _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_6__["redux"], reduxConfigRaw = _kootConfig$redux === void 0 ? {} : _kootConfig$redux;
            _context.next = 5;
            return Object(_React_validate_redux_config__WEBPACK_IMPORTED_MODULE_14__["default"])(reduxConfigRaw);

          case 5:
            reduxConfig = _context.sent;
            // 生成/清理 Store
            // console.log('\x1b[36m⚑\x1b[0m' + ' Store created')
            Store = Object(_middlewares_isomorphic_init_store__WEBPACK_IMPORTED_MODULE_23__["default"])(reduxConfig); // 生成 History

            historyConfig = {
              basename: LocaleId && "undefined" === 'router' ? "/".concat(LocaleId) : '/'
            };
            /* eslint-disable react-hooks/rules-of-hooks */

            memoryHistory = react_router_lib_useRouterHistory__WEBPACK_IMPORTED_MODULE_3___default()(function () {
              return history_lib_createMemoryHistory__WEBPACK_IMPORTED_MODULE_4___default()(url);
            })(historyConfig);
            /* eslint-enable react-hooks/rules-of-hooks */

            /** @type {Object} 已生成的 History 实例 */

            History = Object(react_router_redux__WEBPACK_IMPORTED_MODULE_5__["syncHistoryWithStore"])(memoryHistory, Store);
            syncCookie = reduxConfig.syncCookie;

            if (false) {} else {
              __KOOT_SSR_SET_STORE__(Store);

              __KOOT_SSR_SET_HISTORY__(History);

              Object(___WEBPACK_IMPORTED_MODULE_7__["resetStore"])();
              Object(___WEBPACK_IMPORTED_MODULE_7__["resetHistory"])();
            } // ========================================================================
            // console.log({
            //     LocaleId,
            //     Store,
            //     History,
            //     SSR
            // })

            /** @type {Boolean} i18n 是否启用 */


            i18nEnabled = Boolean(LocaleId);
            ctx = SSR.ctx, thisTemplateInjectCache = SSR.thisTemplateInjectCache, thisEntrypoints = SSR.thisEntrypoints, thisFilemap = SSR.thisFilemap, styleMap = SSR.styleMap, template = SSR.template, templateInject = SSR.templateInject, _SSR$proxyRequestOrig = SSR.proxyRequestOrigin, proxyRequestOrigin = _SSR$proxyRequestOrig === void 0 ? {} : _SSR$proxyRequestOrig, ssrComplete = SSR.ssrComplete;
            ctx.originTrue = proxyRequestOrigin.protocol ? ctx.origin.replace(/^http:\/\//, "".concat(proxyRequestOrigin.protocol, "://")) : ctx.origin;
            ctx.hrefTrue = proxyRequestOrigin.protocol ? ctx.href.replace(/^http:\/\//, "".concat(proxyRequestOrigin.protocol, "://")) : ctx.href;
            /** @type {String} 本次请求的 URL */

            url = ctx.path + ctx.search;
            _context.next = 19;
            return initConfig(i18nEnabled);

          case 19:
            _ref2 = _context.sent;
            lifecycle = _ref2.lifecycle;
            routes = _ref2.routerConfig;
            _context.next = 24;
            return Object(_middlewares_isomorphic_lifecycle_before_router_match__WEBPACK_IMPORTED_MODULE_18__["default"])({
              ctx: ctx,
              store: Store,
              syncCookie: syncCookie,
              callback: lifecycle.beforeRouterMatch
            });

          case 24:
            if (LocaleId) {
              Store.dispatch({
                type: _action_types__WEBPACK_IMPORTED_MODULE_11__["CHANGE_LANGUAGE"],
                data: LocaleId
              });
              Object(_i18n_onServerRender__WEBPACK_IMPORTED_MODULE_24__["default"])({
                store: Store
              });
            } // 进行路由匹配


            _context.next = 27;
            return new Promise(function (resolve, reject) {
              react_router_lib_match__WEBPACK_IMPORTED_MODULE_2___default()({
                history: History,
                routes: routes,
                location: url
              }, function (error, redirectLocation, renderProps) {
                if (error) return reject(error);
                resolve({
                  redirectLocation: redirectLocation,
                  renderProps: renderProps
                });
              });
            });

          case 27:
            _ref3 = _context.sent;
            redirectLocation = _ref3.redirectLocation;
            renderProps = _ref3.renderProps;

            if (!redirectLocation) {
              _context.next = 33;
              break;
            }

            ssrComplete({
              redirect: redirectLocation.pathname + redirectLocation.search
            });
            return _context.abrupt("return");

          case 33:
            if (renderProps) {
              _context.next = 36;
              break;
            }

            ssrComplete({
              next: true
            });
            return _context.abrupt("return");

          case 36:
            // 强制更新 store: state.routing.locationBeforeTransitions
            Object.assign(Store.getState().routing.locationBeforeTransitions, {
              pathname: ctx.path,
              search: ctx.search
            }); // 渲染生命周期: beforePreRender

            _context.next = 39;
            return Object(_middlewares_isomorphic_lifecycle_before_pre_render__WEBPACK_IMPORTED_MODULE_19__["default"])({
              ctx: ctx,
              store: Store,
              localeId: LocaleId,
              callback: lifecycle.beforePreRender
            });

          case 39:
            // 确定当前访问匹配到的组件
            SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_10__["needConnectComponents"]] = true;
            SSR.connectedComponents = [];

            try {
              Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_isomorphic__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
                store: Store
              }, renderProps)));
            } catch (e) {}

            SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_10__["needConnectComponents"]] = false; // 重置 state

            Object(_React_redux_reset_store__WEBPACK_IMPORTED_MODULE_17__["default"])(Store, [].concat(_toConsumableArray(_React_redux_reset_store__WEBPACK_IMPORTED_MODULE_17__["defaultKeysToPreserve"]), ['server', 'routing'])); // 渲染生命周期: beforeDataToStore

            _context.next = 46;
            return Object(_middlewares_isomorphic_lifecycle_before_data_to_store__WEBPACK_IMPORTED_MODULE_20__["default"])({
              ctx: ctx,
              store: Store,
              localeId: LocaleId,
              callback: lifecycle.beforeDataToStore
            });

          case 46:
            _context.next = 48;
            return Object(_middlewares_isomorphic_execute_components_lifecycle__WEBPACK_IMPORTED_MODULE_22__["default"])({
              store: Store,
              renderProps: renderProps,
              ctx: ctx
            });

          case 48:
            _ref4 = _context.sent;
            title = _ref4.title;
            metaHtml = _ref4.metaHtml;
            reduxHtml = _ref4.reduxHtml;
            _context.next = 54;
            return Object(_middlewares_isomorphic_lifecycle_after_data_to_store__WEBPACK_IMPORTED_MODULE_21__["default"])({
              ctx: ctx,
              store: Store,
              localeId: LocaleId,
              callback: lifecycle.afterDataToStore
            });

          case 54:
            // SSR
            reactHtml = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_root_isomorphic__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
              store: Store
            }, renderProps))); // console.log({
            //     // __KOOT_SSR__,
            //     // thisTemplateInjectCache,
            //     // thisEntrypoints, thisFilemap,
            //     thisStyleMap,
            //     // templateInject,
            //     // proxyRequestOrigin,
            // })
            // const stylesHtml = Object.keys(thisStyleMap)
            //     .filter(id => typeof thisStyleMap[id].css === 'string')
            //     .map(id => `<style id="${id}">${thisStyleMap[id].css}</style>`)
            //     .join('')

            stylesHtml = Object.keys(styleMap).filter(function (id) {
              return typeof styleMap[id].css === 'string';
            }).map(function (id) {
              return "<style id=\"".concat(id, "\">").concat(styleMap[id].css, "</style>");
            }).join(''); // console.log('result thisStyleMap', thisStyleMap)
            // 渲染 EJS 模板

            inject = _React_validate_inject__WEBPACK_IMPORTED_MODULE_13___default()({
              injectCache: thisTemplateInjectCache,
              filemap: thisFilemap,
              entrypoints: thisEntrypoints,
              localeId: LocaleId,
              title: title,
              metaHtml: metaHtml,
              reactHtml: reactHtml,
              stylesHtml: stylesHtml,
              reduxHtml: reduxHtml,
              SSRState: _objectSpread({}, Object(_i18n_server_get_ssr_state__WEBPACK_IMPORTED_MODULE_26__["default"])()),
              needInjectCritical: _React_inject_is_need_inject_critical__WEBPACK_IMPORTED_MODULE_15___default()(template)
            });

            if (LocaleId) {
              // i18n 启用时: 添加其他语种页面跳转信息的 meta 标签
              inject.metas += Object(_i18n_server_generate_html_redirect_metas__WEBPACK_IMPORTED_MODULE_25__["default"])({
                ctx: ctx,
                proxyRequestOrigin: proxyRequestOrigin,
                localeId: LocaleId
              });
            }
            /** @type {String} HTML 结果 */


            body = _React_render_template__WEBPACK_IMPORTED_MODULE_16___default()({
              template: template,
              inject: Object.assign(_objectSpread({}, inject, {}, templateInject)),
              store: Store,
              ctx: ctx
            }); // 结果写入缓存

            if (false) {} // React SSR


            ssrComplete({
              body: body
            });

          case 61:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ssr() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 初始化 SSR 配置
 * @param {*} i18nEnabled
 */


var initConfig =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(i18nEnabled) {
    var LocaleId, _kootConfig$server, serverConfig, config;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            LocaleId =  false ? undefined : __KOOT_LOCALEID__;
            _kootConfig$server = _KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_6__["server"], serverConfig = _kootConfig$server === void 0 ? {} : _kootConfig$server;
            config = {}; // 决定路由配置 (每次请求需重新生成)

            _context2.next = 5;
            return Object(_React_validate_router_config__WEBPACK_IMPORTED_MODULE_12__["default"])(_KOOT_PROJECT_CONFIG_FULL_PATHNAME___WEBPACK_IMPORTED_MODULE_6__["router"]);

          case 5:
            config.routerConfig = _context2.sent;
            if (typeof i18nEnabled === 'undefined') i18nEnabled = Boolean(LocaleId);
            config.lifecycle = {};

            if (typeof serverConfig.onRender === 'function') {
              config.lifecycle.beforeDataToStore = serverConfig.onRender;
            } else if (_typeof(serverConfig.onRender) === 'object') {
              Object.keys(serverConfig.onRender).forEach(function (key) {
                config.lifecycle[key] = serverConfig.onRender[key];
              });
            }

            return _context2.abrupt("return", config);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function initConfig(_x) {
    return _ref5.apply(this, arguments);
  };
}();

if (true) ssr().catch(function (err) {
  __KOOT_SSR__.ssrComplete({
    error: err
  });

  console.error(err);
  throw err;
});
/* harmony default export */ __webpack_exports__["default"] = (ssr);

/***/ }),

/***/ "./node_modules/koot/defaults/before-build.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/defaults/before-build.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Webpack 打包相关的常量，包括：
 * - 文件名
 * - 代码中使用的临时常量名
 * - `koot.config.js` 的属性名
 */
module.exports = {
  // 处理项目配置相关
  keyFileProjectConfigTempFull: '__FILE_PROJECT_CONFIG_TEMP_FULL__',
  keyFileProjectConfigTempPortionServer: '__FILE_PROJECT_CONFIG_TEMP_PORTION_SERVER__',
  keyFileProjectConfigTempPortionClient: '__FILE_PROJECT_CONFIG_TEMP_PORTION_CLIENT__',
  keyFileProjectConfigTempPortionOtherClient: '__FILE_PROJECT_CONFIG_TEMP_PORTION_OTHER_CLIENT__',
  dirConfigTemp: 'logs/tmp/config',
  filenameProjectConfigTempFull: 'full.*.js',
  filenameProjectConfigTempPortionServer: 'portion.server.*.js',
  filenameProjectConfigTempPortionClient: 'portion.client.*.js',
  filenameProjectConfigTempPortionOtherClient: 'portion.client-other.*.js',
  propertiesToExtract: [['name', ''], ['type', 'react'], ['template', ''], ['templateInject', ''], ['routes', ''], ['historyType', ''], ['store', ''], ['cookiesToStore', ''], ['client', {}], ['server', {}]],
  typesSPA: ['spa', 'reactspa', 'react-spa'],
  // 打包 DLL 相关
  keyConfigBuildDll: '__BUILD_DLL__',
  filenameDll: '.dll.js',
  filenameDllManifest: '.dll.manifest.json',
  dirDll: 'dev-dll',
  // 其他项目配置项名
  keyConfigQuiet: '__QUIET__',
  keyConfigOutputPathShouldBe: '__OUTPUT_PATH_SHOULD_BE__',
  keyConfigWebpackSPATemplateInject: '__SPA_TEMPLATE_INJECT__',
  WEBPACK_OUTPUT_PATH: '__WEBPACK_OUTPUT_PATH',
  CLIENT_ROOT_PATH: '__CLIENT_ROOT_PATH',
  // 自定义 chunk
  chunkNameExtractCss: '__KOOT__EXTRACT__CSS__',
  chunkNameExtractCssForImport: '__KOOT__EXTRACT__CSS__NO__PUBLIC__PATH__',
  chunkNameClientRunFirst: '__KOOT__CLIENT__RUN__FIRST__',
  // [开发环境] 临时文件名
  filenameWebpackDevServerPortTemp: '.dev_webpack-dev-server_port',
  filenameBuilding: '.koot-building',
  filenameBuildFail: '.koot-build-fail',
  filenameSPATemplateInjectJS: '.spa-template-inject.LOCALEID.js',
  // [生产环境] 文件名
  filenameCurrentBundle: '.koot-current'
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines-server.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/defaults/defines-server.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =  false ? undefined : {
  needConnectComponents: '__NEED_CONNECT_COMPONENTS__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/defaults/defines.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  __KOOT_INJECT_ATTRIBUTE_NAME__: 'koot-inject',
  __KOOT_INJECT_METAS_START__: 'koot-inject-metas-start',
  __KOOT_INJECT_METAS_END__: 'koot-inject-metas-end',
  // hl 这个参数名是参考了Instargram
  changeLocaleQueryKey: 'hl',
  sessionStoreKey: '__KOOT_SESSION_STORE__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/dev-request-uri.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/defaults/dev-request-uri.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * [开发环境] 特殊的请求 URI
 */
module.exports = {
  dll: '/__koot_dev_dll'
};

/***/ }),

/***/ "./node_modules/koot/defaults/entrypoints.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/defaults/entrypoints.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 默认的入口
 * 
 * @module koot/defaults/entrypoints
 */
module.exports = ['client'];

/***/ }),

/***/ "./node_modules/koot/defaults/webpack-dev-server.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/defaults/webpack-dev-server.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  publicPathPrefix: '__koot_webpack_dev_server__',
  entryClientHMR: 'webpack-dev-server-client',
  hmrOptions: {// multiStep: true,
    // fullBuildTimeout: process.env.WEBPACK_BUILD_TYPE === 'spa' ? 500 : undefined,
    // requestTimeout: process.env.WEBPACK_BUILD_TYPE === 'spa' ? undefined : 1000
  }
};

/***/ }),

/***/ "./node_modules/koot/i18n/action-types.js":
/*!************************************************!*\
  !*** ./node_modules/koot/i18n/action-types.js ***!
  \************************************************/
/*! exports provided: I18N_INIT, I18N_SET_LOCALES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_INIT", function() { return I18N_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_SET_LOCALES", function() { return I18N_SET_LOCALES; });
var I18N_INIT = '@@KOOT@@I18N_INIT';
var I18N_SET_LOCALES = '@@KOOT@@I18N_SET_LOCALES';

/***/ }),

/***/ "./node_modules/koot/i18n/get-language-list-from-state.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/i18n/get-language-list-from-state.js ***!
  \****************************************************************/
/*! exports provided: getLanguagelistFromState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguagelistFromState", function() { return getLanguagelistFromState; });
/**
 * 从当前的 Redux state 中获取语言列表字符串
 * 如果 uri search 中存在 fb_locale，将该值放在第一位
 * 
 * @param {object} state 当前的 Redux state
 * 
 * @returns {string} 语言列表，使用分号(;)分割
 */
var getLanguagelistFromState = function getLanguagelistFromState(_ref) {
  var _ref$server = _ref.server,
      server = _ref$server === void 0 ? {} : _ref$server,
      routing = _ref.routing;
  var fb_locale = routing && routing.locationBeforeTransitions && routing.locationBeforeTransitions.query ? routing.locationBeforeTransitions.query.fb_locale : null;
  var lang = server.lang;
  if (fb_locale) lang = fb_locale + ';' + lang;
  return lang || '';
};
/* harmony default export */ __webpack_exports__["default"] = (getLanguagelistFromState);

/***/ }),

/***/ "./node_modules/koot/i18n/get-locales-config.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/i18n/get-locales-config.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

var locales;
/**
 * 获取 i18n 配置数组
 * @returns {Array}
 */

module.exports = function () {
  if (!Array.isArray(locales)) {
    if (isI18nEnabled()) {
      locales = JSON.parse("[[\"zh\",{},\"D:\\\\astro\\\\code\\\\jsPro\\\\Finnexus\\\\FinnexusPro\\\\src\\\\locales\\\\zh.json\",\"./locales/zh.json\"],[\"en\",{},\"D:\\\\astro\\\\code\\\\jsPro\\\\Finnexus\\\\FinnexusPro\\\\src\\\\locales\\\\en.json\",\"./locales/en.json\"]]") || [];
    } else {
      locales = [];
    }
  }

  return locales;
};

/***/ }),

/***/ "./node_modules/koot/i18n/get-type.js":
/*!********************************************!*\
  !*** ./node_modules/koot/i18n/get-type.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/**
 * 获取当前多语言配置类型
 * @returns {String}
 */


module.exports = function () {
  return isI18nEnabled() ? JSON.parse("\"default\"") || 'default' : undefined;
};

/***/ }),

/***/ "./node_modules/koot/i18n/is-enabled.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/is-enabled.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 检查当前项目是否开启多语言支持
 * @returns {Boolean}
 */
var isI18nEnabled = function isI18nEnabled() {
  if (!JSON.parse("true")) return false;
  return true;
};

module.exports = isI18nEnabled;

/***/ }),

/***/ "./node_modules/koot/i18n/locale-ids.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/locale-ids.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getLocalesConfig = __webpack_require__(/*! ./get-locales-config */ "./node_modules/koot/i18n/get-locales-config.js");

var result;
/**
 * 获取 i18n 语种列表
 * @returns {Array}
 */

module.exports = function () {
  if (!Array.isArray(result)) {
    result = getLocalesConfig();
    result = result.map(function (l) {
      return l[0];
    });
    if (!result.length) result = [''];
  }

  return result;
}();

/***/ }),

/***/ "./node_modules/koot/i18n/locales.js":
/*!*******************************************!*\
  !*** ./node_modules/koot/i18n/locales.js ***!
  \*******************************************/
/*! exports provided: locales, setLocales, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocales", function() { return setLocales; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global __KOOT_SSR__:false, __KOOT_SSR_STATE__:false */
var __devLocales = {};
/**
 * 根据当前环境，返回语言包对象的引用
 * - 客户端: 当前语种的语言包对象 (仅当多语言类型为 `store` 时)
 * - 服务器端: 所有语种语言包合集对象
 * @returns {Object}
 */

var getLocalesObject = function getLocalesObject() {
  if (true) {
    if (false) {} else if ((typeof __KOOT_SSR__ === "undefined" ? "undefined" : _typeof(__KOOT_SSR__)) === 'object') return __KOOT_SSR__.locales;
  }

  if (false) {}

  return false;
};
/**
 * @type {Object}
 * 语言包对象
 * - 客户端: 当前语种的语言包对象 (仅当多语言类型为 `store` 时)
 * - 服务器端: 所有语种语言包合集对象
 */


var locales = function () {
  return getLocalesObject() || {};
}();
var setLocales = function setLocales() {
  var newLocales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // const obj = getLocalesObject()
  if (locales) Object.assign(locales, newLocales); // console.log({ newLocales, obj, locales, 'global.__KOOT_SSR__': global.__KOOT_SSR__ })

  return locales;
};
/* harmony default export */ __webpack_exports__["default"] = (locales);

/***/ }),

/***/ "./node_modules/koot/i18n/onServerRender/index.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/i18n/onServerRender/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux */ "./node_modules/koot/i18n/redux/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var store = _ref.store;
  // console.log(1)
  if (_typeof(store) !== 'object' && typeof store.getState !== 'function') return;
  store.dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_0__["actionInit"])(store.getState())); // if (JSON.parse(process.env.KOOT_I18N_TYPE) === 'store')
  //     store.dispatch(actionLocales(store.getState()))
  // console.log(2)
});

/***/ }),

/***/ "./node_modules/koot/i18n/parse-language-list.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/i18n/parse-language-list.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/**
 * 根据输入的语言列表字符串，返回语言列表array
 * 
 * @param {string} langList 语言列表字符串，eg: zh-CN,zh;q=0.8,en;q=0.6
 * 
 * @returns {array} 语言列表
 */
/* harmony default export */ __webpack_exports__["default"] = (function (langList) {
  return langList.split(',').map(function (value) {
    return value.split(';')[0];
  });
});

/***/ }),

/***/ "./node_modules/koot/i18n/parse-locale-id.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/i18n/parse-locale-id.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parse_language_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-language-list */ "./node_modules/koot/i18n/parse-language-list.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_1__);


/**
 * 检查单项，如果和availableLocales内的项目有匹配，返回匹配，否则返回null
 * @param {string} input 检查项
 * @returns 匹配的 localeId 或 null
 */

var checkItem = function checkItem(input) {
  var id; // input = input.toLowerCase().replace(/_/g, '-')

  _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.some(function (_localeId) {
    if (_localeId == input) id = _localeId;
    return id;
  });

  var parseSeg = function parseSeg(id, localeId, str) {
    if (id) return id;
    var seg = localeId.split(str);

    if (!id) {
      _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.some(function (_localeId) {
        if (_localeId == seg[0] + '-' + seg[seg.length - 1]) id = _localeId;
        return id;
      });
    }

    if (!id) {
      _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.some(function (_localeId) {
        if (_localeId == seg[0]) id = _localeId;
        return id;
      });
    }

    return id || null;
  };

  id = parseSeg(id, input, '-');
  return id || null;
};
/**
 * 根据输入内容返回availableLocales内匹配的语言包ID(localeId)
 * 如果没有匹配，返回availableLocales的第一项
 * 注：仅为返回，没有赋值操作
 * 
 * @param {string|array} input 
 * 
 * @returns 匹配的语言包ID localeId 或 availableLocaleIds[0]
 */


var parseLocaleId = function parseLocaleId(input) {
  // 检查是否包含分号，如果是，按语言列表处理为array
  // eg: zh-CN,zh;q=0.8,en;q=0.6
  if (typeof input === 'string' && input.indexOf(';') > -1) input = Object(_parse_language_list__WEBPACK_IMPORTED_MODULE_0__["default"])(input); // 检查是否为array

  if (Array.isArray(input)) {
    var id;
    input.some(function (thisId) {
      id = checkItem(thisId);
      return id;
    });
    return id || _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];
  } else if (!input && typeof navigator !== 'undefined') return parseLocaleId(navigator.languages || navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0]);else if (input) return checkItem(input) || _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];

  return _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];
};

/* harmony default export */ __webpack_exports__["default"] = (parseLocaleId);

/***/ }),

/***/ "./node_modules/koot/i18n/redux/index.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/i18n/redux/index.js ***!
  \***********************************************/
/*! exports provided: reducerLocaleId, actionInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerLocaleId", function() { return reducerLocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionInit", function() { return actionInit; });
/* harmony import */ var _parse_language_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parse-language-list */ "./node_modules/koot/i18n/parse-language-list.js");
/* harmony import */ var _get_language_list_from_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-language-list-from-state */ "./node_modules/koot/i18n/get-language-list-from-state.js");
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse-locale-id */ "./node_modules/koot/i18n/parse-locale-id.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/i18n/action-types.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


 // import locales from '../locales'


/**
 * Redux reducer: 初始化 localeId
 * 
 * @param {*} state 
 * @param {*} action
 * 
 * @returns {*} state
 */

var reducerLocaleId = function reducerLocaleId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_3__["I18N_INIT"]:
      return action.localeId;
  }

  return state;
}; // /**
//  * Redux reducer: 初始化 locales
//  * 
//  * @param {*} state 
//  * @param {*} action
//  * 
//  * @returns {*} state
//  */
// export const reducerLocales = (state = {}, action) => {
//     switch (action.type) {
//         case I18N_SET_LOCALES:
//             return Object.assign({}, state, action.locales)
//     }
//     return state
// }

/**
 * Redux action: 初始化
 * 
 * @param {Object} state 
 * @returns {Object}
 */

var actionInit = function actionInit(state) {
  // setLocaleId(localeId)
  var localeId =  true ? init(Object(_parse_language_list__WEBPACK_IMPORTED_MODULE_0__["default"])(_typeof(state) === 'object' ? Object(_get_language_list_from_state__WEBPACK_IMPORTED_MODULE_1__["default"])(state) : state), state.localeId) : undefined; // setLocaleId(localeId)

  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_3__["I18N_INIT"],
    localeId: '' + localeId
  };
}; // /**
//  * Redux action: 设置语言包内容对象
//  * 
//  * @returns {Object}
//  */
// export const actionLocales = (state) => {
//     return {
//         type: I18N_SET_LOCALES,
//         locales: locales[state.localeId]
//     }
// }

/**
 * 服务器环境：根据语言列表，初始化i18n，获得并赋值 localeId
 * 
 * @param {array|string} langList 语言列表
 * 
 * @returns (如果已初始化)locales[localeId]
 */

var init = function init() {
  var langList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var localeId = arguments.length > 1 ? arguments[1] : undefined;

  if (true) {
    // console.log(locales[localeId])
    if (typeof langList === 'string') if (langList.indexOf(';') > -1) langList = Object(_parse_language_list__WEBPACK_IMPORTED_MODULE_0__["default"])(langList);else return init([langList], localeId);
    var parsed = Object(_parse_locale_id__WEBPACK_IMPORTED_MODULE_2__["default"])(langList); // if (parsed) setLocaleId(parsed)
    // else setLocaleId(localeId)

    if (parsed) return parsed;
    return localeId; // if (locales[localeId]) return locales[localeId]
  }
};

/***/ }),

/***/ "./node_modules/koot/i18n/server/generate-html-redirect-metas.js":
/*!***********************************************************************!*\
  !*** ./node_modules/koot/i18n/server/generate-html-redirect-metas.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__);


/**
 * 生成用以声明该页面其他语种 URL 的 meta 标签的 HTML 代码
 * @param {Object} options 
 * @param {Object} options.ctx 
 * @param {Object} options.proxyRequestOrigin Koot 配置: server.proxyRequestOrigin
 * @param {String} options.localeId 当前语种
 * @returns {String} HTML 代码
 */

var generateHtmlRedirectMetas = function generateHtmlRedirectMetas(_ref) {
  var ctx = _ref.ctx,
      localeId = _ref.localeId;
  if (!_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2___default()()) return ''; // let { href, origin } = ctx
  // if (typeof proxyRequestOrigin.protocol === 'string') {
  //     origin = origin.replace(/^http:\/\//, `${proxyRequestOrigin.protocol}://`)
  //     href = href.replace(/^http:\/\//, `${proxyRequestOrigin.protocol}://`)
  // }

  var href = ctx.hrefTrue,
      origin = ctx.originTrue;
  var isUseRouter = "undefined" === 'router';
  var html = _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a //getLocaleIds()
  .filter(function (thisLocaleId) {
    return thisLocaleId !== localeId;
  }).map(function (l) {
    var thisHref = '';

    if (isUseRouter) {
      thisHref = origin + href.replace(new RegExp("^".concat(origin)), '').replace(new RegExp("^".concat(localeId)), l).replace(new RegExp("^/".concat(localeId)), '/' + l);
    } else {
      thisHref = function () {
        if (ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]] === '') {
          return href.replace(new RegExp("".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=")), "".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=").concat(l));
        }

        if (typeof ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]] === 'string') return href.replace(new RegExp("".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=[a-zA-Z-_]+")), "".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=").concat(l));
        return href + (ctx.querystring ? "&" : href.substr(href.length - 1) === '?' ? '' : "?") + "".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=").concat(l);
      }();
    }

    if (false) {}
    return "<link rel=\"alternate\" hreflang=\"".concat(l, "\" href=\"").concat(thisHref, "\" />");
  }).join('');

  if (isUseRouter) {
    html += "<base href=\"/".concat(localeId, "\">");
  }

  return html;
};

/* harmony default export */ __webpack_exports__["default"] = (generateHtmlRedirectMetas);

/***/ }),

/***/ "./node_modules/koot/i18n/server/get-lang-from-ctx.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/i18n/server/get-lang-from-ctx.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse-locale-id */ "./node_modules/koot/i18n/parse-locale-id.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../set-cookie */ "./node_modules/koot/i18n/set-cookie.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_set_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_4__);
// import cookie from 'cookie'


/**
 * 根据 KOA Context 获取语种ID
 * @param {Object} ctx KOA Context
 * @returns {String} 匹配到的或当前项目默认语种ID
 */

var getLangFromCtx = function getLangFromCtx(ctx) {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_4___default()()) return ''; // const localeIds = getLocaleIds()
  // 根据项目设置，从 URL 中抽取语种 ID

  if (false) { var pathname; } else {
    if (ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]]) {
      if (_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.includes(ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]])) return ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]];
      ctx.redirect(ctx.url.replace(new RegExp("(\\?|&)".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=(.+)$")), '').replace(new RegExp("(\\?|&)".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=(.+)&")), ''));
      return _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];
    }
  } // 如果上一步没有结果，从 COOKIE 中获取
  // const cookies = cookie.parse(ctx.request.header.cookie || '')
  // if (cookies[process.env.KOOT_I18N_COOKIE_KEY] && cookies[process.env.KOOT_I18N_COOKIE_KEY] !== 'null')
  //     return cookies[process.env.KOOT_I18N_COOKIE_KEY]


  var cookieValue = ctx.cookies.get("spLocaleId");

  if (cookieValue && _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.includes(cookieValue)) {
    return cookieValue;
  } // console.log('ctx.cookies.get(process.env.KOOT_I18N_COOKIE_KEY)', cookieValue)
  // 如果上一步没有结果，从请求 headers 中获取


  if (ctx.header['accept-language']) {
    // const acceptLanguage = ctx.header['accept-language']
    // const acceptLanguages = acceptLanguage.split(',').map(str => str.split(';')[0])
    // console.log('acceptLanguage', acceptLanguage)
    // console.log('acceptLanguages', acceptLanguages)
    // console.log('parsed locale id', parseLocaleId(acceptLanguage))
    var localeId = Object(_parse_locale_id__WEBPACK_IMPORTED_MODULE_2__["default"])(ctx.header['accept-language']);
    if (localeId) return setLocale(localeId, ctx);
  } // 如果上一步没有结果，返回项目默认语种


  return setLocale(_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0], ctx);
};

/* harmony default export */ __webpack_exports__["default"] = (getLangFromCtx);
/**
 * 服务器环境: 设置 cookie
 * @param {*} localeId 
 */

var setLocale = function setLocale(localeId, ctx) {
  _set_cookie__WEBPACK_IMPORTED_MODULE_3___default()(localeId, ctx);
  return localeId;
};

/***/ }),

/***/ "./node_modules/koot/i18n/server/get-ssr-state.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/i18n/server/get-ssr-state.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global __KOOT_SSR__:false */

/**
 * 返回多语言相关的 SSR 状态
 * @returns {Object}
 */
var getSSRState = function getSSRState() {
  if (false) {}
  if (false) {}
  if ((typeof __KOOT_SSR__ === "undefined" ? "undefined" : _typeof(__KOOT_SSR__)) !== 'object') return {};
  return {
    localeId: __KOOT_SSR__.LocaleId,
    locales: JSON.parse("\"default\"") === 'store' ? __KOOT_SSR__.locales[__KOOT_SSR__.LocaleId] || {} : {}
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getSSRState);

/***/ }),

/***/ "./node_modules/koot/i18n/server/use-router-redirect.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/i18n/server/use-router-redirect.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_lang_from_ctx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-lang-from-ctx */ "./node_modules/koot/i18n/server/get-lang-from-ctx.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../set-cookie */ "./node_modules/koot/i18n/set-cookie.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_set_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_3__);


/**
 * URL 使用 router 方式时，在同构中间件流程的匹配 react 路由之前，检查是否需要跳转
 * 如果需要跳转，此时发送跳转请求
 * @param {Object} ctx 
 * @returns {Boolean} 是否进行跳转
 */

var useRouterRedirect = function useRouterRedirect(ctx) {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_3___default()()) return false;
  if (true) return false;
  var pathname = ctx.path;
  if (pathname.substr(0, 1) === '/') pathname = pathname.substr(1);
  pathname = pathname.split('/');

  if (!_locale_ids__WEBPACK_IMPORTED_MODULE_0___default.a.includes(pathname[0])) {
    var localeId = Object(_get_lang_from_ctx__WEBPACK_IMPORTED_MODULE_1__["default"])(ctx); // console.log('lang', lang)
    // console.log('pathname', pathname)

    pathname.unshift(localeId);
    pathname = '/' + pathname.join('/'); // 生成跳转后的地址

    var newpath = ctx.originTrue + ctx.hrefTrue.replace(new RegExp("^".concat(ctx.originTrue)), '').replace(new RegExp("^".concat(ctx.path)), pathname); // console.log('newpath', newpath)

    _set_cookie__WEBPACK_IMPORTED_MODULE_2___default()(localeId, ctx);
    return ctx.redirect(newpath);
  }

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (useRouterRedirect);

/***/ }),

/***/ "./node_modules/koot/i18n/set-cookie.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/set-cookie.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 设置 cookie
 * @param {String} localeId
 * @param {Object} ctx Koa context
 */
module.exports = function (localeId, ctx) {
  var maxDate = 365;
  var options = {};

  if (typeof process.env.KOOT_I18N_COOKIE_DOMAIN === 'string' && process.env.KOOT_I18N_COOKIE_DOMAIN) {
    options.domain = process.env.KOOT_I18N_COOKIE_DOMAIN;
  }

  if (false) {}

  if (true) {// TODO: set cookie on server
    // console.log('ctx.host', ctx.host)
    // console.log('ctx.hostname', ctx.hostname)
    // console.log(process.env.KOOT_I18N_COOKIE_KEY, localeId, { domain: ctx.hostname, ...options })
    // ctx.cookies.set(process.env.KOOT_I18N_COOKIE_KEY, localeId, {
    //     domain: ctx.hostname,
    //     maxAge: maxDate * 24 * 60 * 60 * 1000,
    //     signed: false,
    //     ...options
    // })
  }
};

/***/ }),

/***/ "./node_modules/koot/i18n/translate.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/i18n/translate.js ***!
  \*********************************************/
/*! exports provided: l, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return l; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "./node_modules/koot/index.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales */ "./node_modules/koot/i18n/locales.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var l = function () {
  if (true) {
    if (false) {} // console.log({ locales })


    if (_typeof(_locales__WEBPACK_IMPORTED_MODULE_2__["default"]) === 'object') return _locales__WEBPACK_IMPORTED_MODULE_2__["default"][___WEBPACK_IMPORTED_MODULE_1__["localeId"]];
    return {};
  }

  if (JSON.parse("\"default\"") === 'store') return _locales__WEBPACK_IMPORTED_MODULE_2__["default"];
  return false;
}();
/**
 * 翻译文本
 * 语言包中源文本中的 ${replaceKey} 表示此处需要替换，replaceKey 就是传入的 obj 中对应的值
 *
 * @param {string} key 要翻译的文本 Key
 * @param {*object} obj 文本内对应的替换内容
 *
 * @returns {string} 翻译的文本；如果语言包中没有对应的项，返回 key
 */

var translate = function translate() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var key = '';
  var str;
  var options = {};
  var keys = [];
  if (false) {}
  args.forEach(function (value, index) {
    // 如果最后一个参数是 Object，表示为选项
    if (index === args.length - 1 && _typeof(value) === 'object' && !Array.isArray(value)) {
      options = value;
      return;
    }

    if (typeof value === 'string' && value.includes('.')) {
      value.split('.').forEach(function (value) {
        return keys.push(value);
      });
      return;
    }

    keys.push(value);
  });
  var length = keys.length;

  if (args.length === 1 && _typeof(args[0]) === 'object') {
    /**
     * ! 如果只有一个 arg 且为 Object，直接返回该 Object
     */
    return args[0];
  }

  if (_typeof(keys[0]) === 'object') {
    /**
     * 第一个值为 Object，通常是客户端情况，后续值依次取前一个 Object 内对应的值
     */
    key = keys[0];
    var hasUnmatched = false;

    for (var i = 1; i < length; i++) {
      // const value = get(key, keys[i]);
      var value = key[keys[i]]; // console.log(key, value);

      if (typeof value === 'undefined') {
        hasUnmatched = true;
        break;
      } else {
        key = value;
      } // if (typeof key[keys[i]] !== 'undefined') key = key[keys[i]];

    }

    if (hasUnmatched) key = keys[length - 1];
  } else if (length === 1) {
    key = keys[0];
  } else {
    for (var _i = 0; _i < length; _i++) {
      if (_typeof(l) === 'object') {
        if (keys[_i] !== '') key += "[".concat(JSON.stringify(keys[_i]), "]");
      } else {
        key += (_i ? '.' : '') + keys[_i];
      }
    }
  } // console.log(key);
  // if (__CLIENT__) {
  //     // console.log(localeId)
  //     console.log(localeId, keys, length, key, l);
  // }


  if (typeof l === 'undefined') {
    str = key;
  } else if (_typeof(l) === 'object') {
    // str = l && typeof l[key] !== 'undefined' ? l[key] : undefined;
    str = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(l, key);
  } // const localeId = _self.curLocaleId
  // if (typeof str === 'undefined' && typeof l === 'object') {
  //     try {
  //         str = get(l, key);
  //         // str = eval('l.' + key);
  //     } catch (e) {}
  // }


  if (typeof str === 'undefined') str = key;
  if (typeof str === 'string') return str.replace(/\$\{([^}]+)\}/g, function (match, p) {
    return typeof options[p] === 'undefined' ? p : options[p];
  });
  return str;
};

/* harmony default export */ __webpack_exports__["default"] = (translate);

/***/ }),

/***/ "./node_modules/koot/i18n/validte-routes.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/i18n/validte-routes.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 根据当前项目配置，对路由对象进行改造
 * @param {Object} routes 
 * @returns {Object} routes
 */

var validateRoutes = function validateRoutes() {
  var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_0___default()()) return routes;

  if (false) {}

  return routes;
};

/* harmony default export */ __webpack_exports__["default"] = (validateRoutes);

/***/ }),

/***/ "./node_modules/koot/index.js":
/*!************************************!*\
  !*** ./node_modules/koot/index.js ***!
  \************************************/
/*! exports provided: createStore, reduxForCreateStore, extend, getLocaleId, resetLocaleId, localeId, getStore, resetStore, store, getHistory, resetHistory, history, getCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduxForCreateStore", function() { return reduxForCreateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocaleId", function() { return getLocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLocaleId", function() { return resetLocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeId", function() { return localeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetStore", function() { return resetStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistory", function() { return getHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetHistory", function() { return resetHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCache", function() { return getCache; });
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React/is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_React_is_render_safe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _React_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./React/redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __KOOT_HOC_EXTEND__ */ "./node_modules/koot/React/component-extender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_2__["default"]; });

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* global
    __KOOT_SSR__: false,
    __KOOT_STORE__: false,
    __KOOT_HISTORY__: false,
    __KOOT_LOCALEID__: false,
*/

/**
 * 手动创建 Redux Store 时需要的相关对象
 * @type {Object}
 */


var createStore = _React_redux__WEBPACK_IMPORTED_MODULE_1__["createStore"],
    reduxForCreateStore = _objectWithoutProperties(_React_redux__WEBPACK_IMPORTED_MODULE_1__, ["createStore"]);


/**
 * 通用的高阶组件/方法的装饰器
 * @type {Function}
 */

 // 其他全局变量

var getLocaleId = function getLocaleId() {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_LOCALEID__ === 'undefined') return '';
    return __KOOT_LOCALEID__ || '';
  }
};
var resetLocaleId = function resetLocaleId() {
  return localeId = getLocaleId();
};
var localeId = function () {
  return getLocaleId();
}();
var getStore = function getStore() {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_STORE__ === 'undefined') return '';
    return __KOOT_STORE__;
  }
};
var resetStore = function resetStore() {
  return store = getStore();
};
var store = function () {
  return getStore();
}();
var getHistory = function getHistory() {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_HISTORY__ === 'undefined') return '';
    return __KOOT_HISTORY__;
  }
};
var resetHistory = function resetHistory() {
  return history = getHistory();
};
var history = function () {
  return getHistory();
}(); //

var getCache = function getCache(localeId) {
  if (!_React_is_render_safe__WEBPACK_IMPORTED_MODULE_0___default()()) return {};

  if (false) {}

  if (true) {
    var SSR =  false ? undefined : __KOOT_SSR__;
    var cache = SSR.globalCache;
    if (!cache) return {};
    if (localeId === true) return cache.get(getLocaleId());
    if (localeId) return cache.get(localeId) || {};
    return cache.get('__');
  }
}; //

if (false) {}

/***/ }),

/***/ "./node_modules/koot/libs/error-msg.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/libs/error-msg.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 生成错误信息
 * @param {String} msg
 * @returns {String}
 */
var errorMsg = function errorMsg(type, msg) {
  if (typeof type === 'string' && typeof msg === 'string') return "".concat(type, "::").concat(msg);
  return type;
};

module.exports = errorMsg;

/***/ }),

/***/ "./node_modules/koot/libs/filter-state.js":
/*!************************************************!*\
  !*** ./node_modules/koot/libs/filter-state.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var itemsBlacklist = ['localeId', 'realtimeLocation', 'routing', 'server'];
/**
 * 过滤 state，将黑名单内的项目删除，并返回过滤后的 state
 *
 * 黑名单中包括：
 * - `localeId`
 * - `realtimeLocation`
 * - `routing`
 * - `server`
 *
 * @param {Object} state
 * @returns {Object}
 */

var filter = function filter(oldState) {
  return itemsBlacklist.reduce(function (state, item) {
    var _ = state[item],
        rest = _objectWithoutProperties(state, [item].map(_toPropertyKey));

    return rest;
  }, oldState);
};

module.exports = filter;

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dev-tmp.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dev-tmp.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getCwd = __webpack_require__(/*! ../utils/get-cwd */ "./node_modules/koot/utils/get-cwd.js");
/**
 * _仅针对开发环境_ 获取开发环境临时目录
 * @param {String} [cwd]
 * @param {String} [type]
 * @returns {String} 如果提供 `type`，则返回对应类型的目录
 */


module.exports = function () {
  var cwd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getCwd();
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return path.resolve(cwd, 'logs/dev', type ? ".".concat(type) : '');
};

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public-foldername.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public-foldername.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取客户端打包结果 public 目录名
 * @returns {String}
 */
module.exports = function () {
  return  false ? undefined : "public";
};

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getDirDistPublicFoldername = __webpack_require__(/*! ./get-dir-dist-public-foldername */ "./node_modules/koot/libs/get-dir-dist-public-foldername.js");
/**
 * 获取打包结果基础目录
 * 最终的打包目录是该目录下的 includes (默认情况)
 * @param {String} dist 打包结果目录
 * @param {Number} bundleVersionsKeep 
 * @returns {String}
 */


module.exports = function (dist, bundleVersionsKeep) {
  if (!result) {
    var base = path.resolve(dist, getDirDistPublicFoldername());

    if (true) {
      // console.log({
      //     result,
      //     base,
      //     'process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER': process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER
      // })
      result = path.resolve(base, "koot-1571366465640");
    } else {}
  }

  return result;
};

var result;

/***/ }),

/***/ "./node_modules/koot/libs/get-log-msg.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/libs/get-log-msg.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var chalk = __webpack_require__(/*! chalk */ "chalk");
/**
 * 生成 log 消息内容
 * @variation 只提供内容
 * @param {String} content 内容
 */

/**
* 生成 log 消息内容
* @variation 提供标记和内容
* @param {String|Boolean} [mark=""] 标记
* @param {String} content 内容
*/

/**
* 生成 log 消息内容
* @variation 提供标记、类型和内容
* @param {String|Boolean} [mark=""] 标记
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/


var generateLogMsg = function generateLogMsg(mark, type, content) {
  if (typeof mark !== 'undefined' && typeof type === 'undefined' && typeof content === 'undefined') return generateLogMsg('', '', mark);
  if (typeof type !== 'undefined' && typeof content === 'undefined') return generateLogMsg(mark, '', type);
  var markColor = 'cyan';
  if (mark === false) mark = '';

  switch (mark.toLowerCase()) {
    case '×':
    case 'x':
    case 'x ':
    case 'error':
      {
        mark = '× ';
        markColor = 'redBright';
        break;
      }

    case 'success':
      {
        mark = '√ ';
        markColor = 'green';
        break;
      }

    case 'cb':
    case 'callback':
      {
        mark = '⚑ ';
        markColor = 'cyan';
        break;
      }

    case 'warning':
      {
        mark = '! ';
        markColor = 'yellowBright';
        break;
      }

    case '':
      {
        break;
      }

    default:
      {
        mark = '  ';
      }
  }

  var typeColor = function () {
    switch (type) {
      default:
        return 'yellowBright';
    }
  }();

  return (mark === '' ? '' : chalk[markColor](mark)) + chalk[typeColor]("[koot".concat(type ? "/".concat(type) : '', "] ")) + content;
};

module.exports = generateLogMsg;

/***/ }),

/***/ "./node_modules/koot/libs/get-ssr-state-string.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/libs/get-ssr-state-string.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 输出 SSR 时需要的 state 字符串形式结果
 * @param {Object} state
 * @returns {string}
 */
var getSSRStateString = function getSSRStateString() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return "JSON.parse(" + "decodeURIComponent(\"".concat(encodeURIComponent(JSON.stringify(state)), "\"))");
};

module.exports = getSSRStateString;

/***/ }),

/***/ "./node_modules/koot/libs/log.js":
/*!***************************************!*\
  !*** ./node_modules/koot/libs/log.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 命令行 Log
 * @variation 1
 * @param {String} content 内容
 */

/**
* 命令行 Log
* @variation 2
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/

/**
* 命令行 Log
* @variation 3
* @param {String} [mark=""] 标记
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/
module.exports = function () {
  console.log(__webpack_require__(/*! ./get-log-msg */ "./node_modules/koot/libs/get-log-msg.js").apply(void 0, arguments));
};

/***/ }),

/***/ "./node_modules/koot/utils/generate-filemap-from-compilation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/koot/utils/generate-filemap-from-compilation.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var path = __webpack_require__(/*! path */ "path");
/**
 * 从 Webpack compilation 数据中生成文件对应表 (Filemap)
 * @param {Object} compilation 
 * @param {String} [dirRelative] 
 * @returns {Object} 文件对应表 (Filemap)
 */


module.exports = function (compilation, dirRelative) {
  if (_typeof(compilation) !== 'object') return undefined;
  var filemap = {};
  var stats = compilation.getStats();

  var _loop = function _loop(id) {
    var o = stats.compilation.chunks[id];
    if (typeof o.name === 'undefined' || o.name === null) return "continue";

    if (Array.isArray(o.files)) {
      o.files.filter(function (filename) {
        return !/\.(js|css)\.map$/i.test(filename);
      }).forEach(function (filename) {
        var extname = path.extname(filename);
        var file = o.name + extname;
        if (typeof filemap[file] !== 'string') filemap[file] =  false ? undefined : (dirRelative ? dirRelative + '/' : '') + filename;
      });
    }
  };

  for (var id in stats.compilation.chunks) {
    var _ret = _loop(id);

    if (_ret === "continue") continue;
  }

  return filemap;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap-path.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap-path.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

var getDirDevTmp = __webpack_require__(/*! ../libs/get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");
/**
 * 获取打包文件对应表 (chunkmap) 的文件路径
 * @param {string} [dist] 打包结果目录，默认为项目指定的路径
 * @returns {string}
 */


module.exports = function () {
  var dist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDistPath();
  if (false) {}
  return path.resolve(dist, '.public-chunkmap.json');
};

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var getIsI18nEnabled = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

var getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

var getChunkmapPath = __webpack_require__(/*! ./get-chunkmap-path */ "./node_modules/koot/utils/get-chunkmap-path.js");

var getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

var cachedChunkmap;
/**
 * 获取打包文件对应表 (chunkmap)
 *
 * @param {String} [localeId] 当前语言，默认为当前语言 (i18n开启时) 或未指定 (i18n未开启时)
 * @param {Boolean} [getFullResult = false] 仅 i18n 开启时：获取 chunkmap 全文，而非当前语言的片段
 * @returns {Object}
 */

var getChunkmap = function getChunkmap(localeId) {
  var getFullResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (localeId === true) return getChunkmap(getFullResult || undefined, true);
  var isI18nEnabled = getIsI18nEnabled();

  if (isI18nEnabled && typeof localeId === 'undefined') {
    try {
      localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
    } catch (e) {}
  }

  var i18nType = getI18nType();
  var isI18nDefault = isI18nEnabled && i18nType === 'default';

  var chunkmap = function () {
    if (cachedChunkmap) return cachedChunkmap;
    var chunkmap;
    if (_typeof(global.chunkmap) === 'object') chunkmap = global.chunkmap;

    try {
      chunkmap = JSON.parse("{\".zh\":{\".public\":\"public/koot-1571366465640/\",\".entrypoints\":{\"critical\":[\"public/koot-1571366465640/includes/extract.4.64f841e8f309cabfab31.css\",\"public/koot-1571366465640/includes/entry.64f841e8f309cabfab31.js\"],\"client\":[\"public/koot-1571366465640/includes/chunk.1bfb55d3ad152a05b610.js\",\"public/koot-1571366465640/includes/entry.130bb376be02317dc0c0.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/koot-1571366465640/includes/chunk.1bfb55d3ad152a05b610.js\",\"public/koot-1571366465640/includes/entry.2abb74dc17e31ed51b1f.js\"]},\".files\":{\"commons.js\":\"public/koot-1571366465640/includes/chunk.1bfb55d3ad152a05b610.js\",\"PageHome.js\":\"public/koot-1571366465640/includes/chunk.e92fc5216a6a8c7f63a0.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/koot-1571366465640/includes/entry.2abb74dc17e31ed51b1f.js\",\"client.js\":\"public/koot-1571366465640/includes/entry.130bb376be02317dc0c0.js\",\"critical.css\":\"public/koot-1571366465640/includes/extract.4.64f841e8f309cabfab31.css\",\"critical.js\":\"public/koot-1571366465640/includes/entry.64f841e8f309cabfab31.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/koot-1571366465640/includes/extract.all.3723a3d107dbed9ba8221f5ab21d3ac4.css\"}},\".en\":{\".public\":\"public/koot-1571366465640/\",\".entrypoints\":{\"critical\":[\"public/koot-1571366465640/includes/extract.4.64f841e8f309cabfab31.css\",\"public/koot-1571366465640/includes/entry.64f841e8f309cabfab31.js\"],\"client\":[\"public/koot-1571366465640/includes/chunk.1bfb55d3ad152a05b610.js\",\"public/koot-1571366465640/includes/entry.5d8874226f919f22cf20.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/koot-1571366465640/includes/chunk.1bfb55d3ad152a05b610.js\",\"public/koot-1571366465640/includes/entry.2abb74dc17e31ed51b1f.js\"]},\".files\":{\"commons.js\":\"public/koot-1571366465640/includes/chunk.1bfb55d3ad152a05b610.js\",\"PageHome.js\":\"public/koot-1571366465640/includes/chunk.c5599b491ca9c869fec1.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/koot-1571366465640/includes/entry.2abb74dc17e31ed51b1f.js\",\"client.js\":\"public/koot-1571366465640/includes/entry.5d8874226f919f22cf20.js\",\"critical.css\":\"public/koot-1571366465640/includes/extract.4.64f841e8f309cabfab31.css\",\"critical.js\":\"public/koot-1571366465640/includes/entry.64f841e8f309cabfab31.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/koot-1571366465640/includes/extract.all.3723a3d107dbed9ba8221f5ab21d3ac4.css\"}}}");
    } catch (e) {
      chunkmap = false;
    }

    if (_typeof(chunkmap) !== 'object' && typeof getDistPath() === 'string') {
      chunkmap = fs.readJsonSync(getChunkmapPath());
      if (process.env.WEBPACK_BUILD_STAGE === 'server') global.chunkmap = chunkmap;
    }

    if (true) cachedChunkmap = chunkmap;
    return chunkmap;
  }();

  if (_typeof(chunkmap) === 'object') {
    // let chunkmap = fs.readJsonSync(pathChunckmap)
    if (getFullResult) return chunkmap || {};
    if (isI18nEnabled && isI18nDefault) return chunkmap[".".concat(localeId)] || {};
  }

  return chunkmap || {};
};

module.exports = getChunkmap;

/***/ }),

/***/ "./node_modules/koot/utils/get-client-file-path.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/utils/get-client-file-path.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path");

var getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

var getPublicPath = __webpack_require__(/*! ./get-public-dir */ "./node_modules/koot/utils/get-public-dir.js");

var getChunkmap = __webpack_require__(/*! ./get-chunkmap */ "./node_modules/koot/utils/get-chunkmap.js");
/**
 * 获指定文件在客户端/取浏览器端中的可访问路径
 * @param {String} filename 要查找的文件的文件名。根据打包文件对应表 (chunkmap) 查询文件名和实际打包结果文件的对应关系
 * @param {String} [localeId] 当前语言
 * @param {Boolean} [isPathname = false] 如果标记为 true，表示提供的 filename 为确切的访问地址，无需查询对照表，直接返回结果
 * @returns {String|String[]} 浏览器环境中的访问路径、空字符串或包含所有可能结果的 Array
 */


var getFilePath = function getFilePath(filename, localeId) {
  var isPathname = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 如果第一个参数为 true，表示标记为 pathname
  if (filename === true) return getFilePath(localeId, isPathname || undefined, true);

  if (typeof localeId === 'undefined') {
    try {
      localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
    } catch (e) {}
  }

  var pathPublic = getPublicPath();
  var i18nType = getI18nType();
  var isI18nDefault = i18nType === 'default';
  var isDev =  false ||  true && false; // const localeId = 'zh'
  // 如果标记为 pathname，直接返回结果

  if (isPathname) return pathPublic + filename.replace(new RegExp('(^\\.\\/|^)public\\/' + ( true ? "".concat("koot-1571366465640", "\\/") : undefined)), '');
  var chunkmap = getChunkmap(localeId);
  var regPublicPath = chunkmap['.public'] ? new RegExp("(^\\.\\/|^)".concat(chunkmap['.public'])) : /(^\.\/|^)public\//;
  /**************************************************************************
   * ┌─┐┌─┐┌┬┐┌┬┐┌─┐┌┐┌  ┌─┐┬ ┬┌┐┌┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
   * │  │ ││││││││ ││││  ├┤ │ │││││   │ ││ ││││└─┐
   * └─┘└─┘┴ ┴┴ ┴└─┘┘└┘  └  └─┘┘└┘└─┘ ┴ ┴└─┘┘└┘└─┘
   *************************************************************************/

  /**
   * 返回可供客户端/浏览器端使用的访问地址
   * @param {String} pathname
   * @returns {String}
   */

  var getResultPathname = function getResultPathname(pathname) {
    return pathPublic + pathname.replace(regPublicPath, '');
  };
  /**************************************************************************
   * ┌┬┐┌─┐┌┐ ┬ ┬┌─┐
   *  ││├┤ ├┴┐│ ││ ┬
   * ─┴┘└─┘└─┘└─┘└─┘
   *************************************************************************/
  // console.log('----------')
  // console.log(filename)
  // console.log(chunkmap)
  // console.log(chunkmap['.files'])
  // console.log(chunkmap['.files'][filename])
  // console.log(regPublicPath)
  // console.log(pathPublic + chunkmap['.files'][filename].replace(regPublicPath, ''))
  // console.log({
  //     regPublicPath,
  //     'process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER': process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER
  // })
  // console.log('----------')

  /**************************************************************************
   * ┌─┐┬ ┬┌─┐┌─┐┬┌─   ┬   ┬─┐┌─┐┌┬┐┬─┐┬ ┬┌┐┌┌─┐
   * │  ├─┤├┤ │  ├┴┐  ┌┼─  ├┬┘├┤  │ ├┬┘│ ││││└─┐
   * └─┘┴ ┴└─┘└─┘┴ ┴  └┘   ┴└─└─┘ ┴ ┴└─└─┘┘└┘└─┘
   *************************************************************************/
  // 检查 `.files` 下是否有该文件名的直接对应
  // 如果有，直接返回该结果


  if (_typeof(chunkmap) === 'object' && _typeof(chunkmap['.files']) === 'object' && typeof chunkmap['.files'][filename] === 'string') {
    return getResultPathname(chunkmap['.files'][filename]);
  }

  if (isDev) {
    var prefix = pathPublic + (isI18nDefault ? localeId : '');
    if (_typeof(chunkmap['.files']) === 'object' && typeof chunkmap['.files'][filename] === 'string') return prefix + chunkmap['.files'][filename];
    return prefix + ".".concat(filename);
  }
  /** @type {String} 目标文件的扩展名 */


  var extname = path.extname(filename);
  /** @type {String} 目标文件的文件名（不包括扩展名） */

  var basename = path.basename(filename, extname); // 检查 `.entrypoints` 下是否有该文件的文件名对应（不包括扩展名）
  // 如果有，同时只有一个结果，返回该结果
  // 如果有，同时有多个结果，返回包含所有结果的 Array

  if (Array.isArray(chunkmap['.entrypoints'][basename])) {
    var files = chunkmap['.entrypoints'][basename].filter(function (file) {
      return path.extname(file) === extname;
    });
    if (files.length === 1) return getResultPathname(files[0]);else if (files.length) return files.map(function (file) {
      return getResultPathname(file);
    });
  } // 检查 chunkmap 第一级是否有包含该文件的文件名的对应（不包括扩展名）
  // 如果有，直接返回该结果


  if (_typeof(chunkmap) === 'object') {
    var result;

    if (Array.isArray(chunkmap[basename])) {
      chunkmap[basename].some(function (value) {
        if (path.extname(value) === extname) {
          result = value;
          return true;
        }

        return false;
      });
    }

    if (result) return getResultPathname(result);
  } // 如果没有找到 chunkmap 或是 chunkmap 中未找到目标项目，转为过滤文件形式


  if (fs.existsSync(path.resolve(pathPublic, filename))) {
    return '/' + filename;
  }

  console.warn("File not found:" + (isI18nDefault ? "[".concat(localeId, "] ") : '') + " ".concat(filename));
  return ''; // const segs = pathname.split('/').filter(seg => seg !== '/')
  // const file = segs.pop()
  // const dir = segs.length ? `${segs.join('/')}/` : ''
  // return `/${dir}${
  //     require('./filterTargetFile')(
  //         require('./readFilesInPath')(`./${distPathname}/public/${appName ? `${appName}/` : ''}${dir}`),
  //         file
  //     )}`
};

module.exports = getFilePath; // module.exports = (pathname, pathDist = 'dist') => {
//     if (__DEV__) {
//         return `http://localhost:${process.env.WEBPACK_DEV_SERVER_PORT || '3001'}/dist/${pathname}`
//     } else {
//         const segs = pathname.split('/').filter(seg => seg !== '/')
//         const file = segs.pop()
//         const dir = segs.length ? `${segs.join('/')}/` : ''
//         return `/${dir}${
//             require('./filterTargetFile')(
//                 require('./readFilesInPath')(`./${pathDist}/public/${dir}`),
//                 file
//             )}`
//     }
// }

/***/ }),

/***/ "./node_modules/koot/utils/get-cwd.js":
/*!********************************************!*\
  !*** ./node_modules/koot/utils/get-cwd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 获取运行目录
 * @returns {String}
 */
module.exports = function () {
  // console.log('process.env.KOOT_CWD', process.env.KOOT_CWD)
  // console.log('process.cwd()', process.cwd())
  return typeof process.env.KOOT_CWD === 'string' ? process.env.KOOT_CWD : process.cwd();
};

/***/ }),

/***/ "./node_modules/koot/utils/get-dist-path.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/utils/get-dist-path.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path");

var getCwd = __webpack_require__(/*! ./get-cwd */ "./node_modules/koot/utils/get-cwd.js");

var p;
/**
 * 获取打包结果路径
 * @returns {String} 打包结果路径 (硬盘绝对路径)
 */

module.exports = function () {
  // console.log('global.KOOT_DIST_DIR', global.KOOT_DIST_DIR)
  if (typeof p !== 'string') {
    p = typeof global.KOOT_DIST_DIR === 'string' ? global.KOOT_DIST_DIR : function () {
      var cwd = getCwd();
      var parent = path.resolve(cwd, '..');
      var result = path.resolve(cwd, "dist");

      while (!fs.existsSync(result) && cwd !== parent) {
        cwd = parent;
        parent = path.resolve(cwd, '..');
        result = path.resolve(cwd, "dist");
      }

      if (fs.existsSync(result)) return result;
      return path.resolve(cwd, "dist");
    }();
  }

  return p;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-port.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/utils/get-port.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// require('./init-node-env')()

/**
 * 获取当前环境的服务器端口号
 * @param {Object|Number} port 
 * @param {String} [env=process.env.WEBPACK_BUILD_ENV] 
 * @returns {Number}
 */
module.exports = function (port) {
  var env = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "prod";
  var defaultPort = typeof process.env.SERVER_PORT === 'undefined' && "string" !== 'undefined' ? "8081" : process.env.SERVER_PORT;

  if (_typeof(port) === 'object') {
    if (!env) env = 'prod';
    if (typeof port[env] !== 'undefined') return port[env];
    return defaultPort;
  }

  if (typeof port !== 'undefined' && typeof port !== 'boolean') return port;
  return defaultPort;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-public-dir.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/utils/get-public-dir.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getWDSport = __webpack_require__(/*! ./get-webpack-dev-server-port */ "./node_modules/koot/utils/get-webpack-dev-server-port.js");
/**
 * 获取浏览器环境中的访问根路径
 * @returns {String} 浏览器环境中的访问根路径
 */


module.exports = function () {
  var isDev =  false ||  true && false;

  if (false) {}

  if (isDev) {
    var port = getWDSport();
    var origin = typeof global.koaCtxOrigin === 'string' ? global.koaCtxOrigin.split(':').slice(0, 2).join(':') : 'http://localhost';
    return "".concat(origin, ":").concat(port, "/dist/");
  }

  return '/';
};

/***/ }),

/***/ "./node_modules/koot/utils/get-webpack-dev-server-port.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/utils/get-webpack-dev-server-port.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取 webpack-dev-server 端口号
 * @returns {Number}
 */
module.exports = function () {
  // console.log('process.env.WEBPACK_DEV_SERVER_PORT', process.env.WEBPACK_DEV_SERVER_PORT)
  return "3001" || false;
};

/***/ }),

/***/ "./node_modules/koot/utils/read-client-file.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot/utils/read-client-file.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path");

var isUrl = __webpack_require__(/*! is-url */ "is-url");

var getFilePath = __webpack_require__(/*! ./get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");

var generateFilemap = __webpack_require__(/*! ./generate-filemap-from-compilation */ "./node_modules/koot/utils/generate-filemap-from-compilation.js");

var getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

var getPort = __webpack_require__(/*! ./get-port */ "./node_modules/koot/utils/get-port.js");

var getDirDistPublic = __webpack_require__(/*! ../libs/get-dir-dist-public */ "./node_modules/koot/libs/get-dir-dist-public.js");
/**
 * 读取目标客户端打包结果文件的内容
 * @param {String} filename 要查找的文件的文件名。根据打包文件对应表 (chunkmap) 查询文件名和实际打包结果文件的对应关系
 * @param {String} [localeId] 当前语言
 * @param {Object} [compilation] Webpack compilation 对象
 * @param {Boolean} [isPathname=false] 如果标记为 true，表示提供的 filename 为确切的访问地址，无需查询对照表，直接返回结果
 * @returns {String} 文件内容
 */


var readClientFile = function readClientFile(filename, localeId, compilation) {
  var isPathname = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // 如果第一个参数为 true，表示标记为 pathname
  if (filename === true) return readClientFile(localeId, compilation || undefined, isPathname || undefined, true); // 如果提供了 webpack compilation 数据，尝试从其中查询对应文件的最终内容并返回

  if (_typeof(compilation) === 'object') {
    var filemap = generateFilemap(compilation);

    if (_typeof(filemap) === 'object') {
      // console.log('\n' + filename)
      // console.log(`typeof filemap["${filename}"]`, typeof filemap[filename])
      // console.log(`typeof compilation.assets["${filemap[filename]}"]`, typeof compilation.assets[filemap[filename]])
      // for (let key in compilation) {
      //     console.log(key)
      // }
      if (typeof filemap[filename] === 'string' && typeof compilation.assets[filemap[filename]] !== 'undefined') {
        var asset = compilation.assets[filemap[filename]]; // console.log(filename, filemap[filename])
        // if (!asset._value) {
        //     console.log(asset)
        // }
        // console.log('typeof asset.source', typeof asset.source)

        if (typeof asset.source === 'function') return asset.source();
        if (typeof asset._value !== 'undefined') return asset._value;
        if (typeof asset._cachedSource !== 'undefined') return asset._cachedSource; // return '123'
      }
    }
  } // 在打包结果中寻找指定文件


  var pathnames = getFilePath(filename, localeId, isPathname);
  if (!Array.isArray(pathnames)) pathnames = [pathnames];
  var results = pathnames.map(function (pathname) {
    if (isUrl(pathname)) {
      if (false) { var syncRequest; } else {
        return "<!-- The pathname for file '".concat(filename, "' is a URL. Rendering file content from URL can only be done in DEV mode. -->");
      }
    }

    if (false) {}

    return fs.readFileSync(path.resolve(getDirDistPublic(getDistPath()), pathname.replace(/^\//, '')), 'utf-8');
  });
  return results.join('\n\n');
};

module.exports = readClientFile;

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var _Symbol = root.Symbol;
module.exports = _Symbol;

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

module.exports = arrayMap;

/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */


var baseFor = createBaseFor();
module.exports = baseFor;

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());

    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */


function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

module.exports = baseSet;

/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
module.exports = baseSetToString;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }

  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

module.exports = createAssigner;

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

module.exports = createBaseFor;

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = _typeof(index);

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

module.exports = isIterateeCall;

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used to match property names within property paths. */


var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");
/** Used as the maximum memoize cache size. */


var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;

/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
module.exports = setToString;

/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");
/** Used to match property names within property paths. */


var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
module.exports = stringToPath;

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */


function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = MapCache;
module.exports = memoize;

/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */


var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
module.exports = merge;

/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");
/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */


function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */


function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),

/***/ "./node_modules/react-router/lib/AsyncUtils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router/lib/AsyncUtils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;
exports.loopAsync = loopAsync;
exports.mapAsync = mapAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var sync = false,
      hasNext = false,
      doneArgs = void 0;

  function done() {
    isDone = true;

    if (sync) {
      // Iterate instead of recursing if possible.
      doneArgs = [].concat(Array.prototype.slice.call(arguments));
      return;
    }

    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) {
      return;
    }

    hasNext = true;

    if (sync) {
      // Iterate instead of recursing if possible.
      return;
    }

    sync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work.call(this, currentTurn++, next, done);
    }

    sync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(this, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  }

  next();
}

function mapAsync(array, work, callback) {
  var length = array.length;
  var values = [];
  if (length === 0) return callback(null, values);
  var isDone = false,
      doneCount = 0;

  function done(index, error, value) {
    if (isDone) return;

    if (error) {
      isDone = true;
      callback(error);
    } else {
      values[index] = value;
      isDone = ++doneCount === length;
      if (isDone) callback(null, values);
    }
  }

  array.forEach(function (item, index) {
    work(item, index, function (error, value) {
      done(index, error, value);
    });
  });
}

/***/ }),

/***/ "./node_modules/react-router/lib/ContextUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/lib/ContextUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;
exports.ContextProvider = ContextProvider;
exports.ContextSubscriber = ContextSubscriber;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // Works around issues with context updates failing to propagate.
// Caveat: the context value is expected to never change its identity.
// https://github.com/facebook/react/issues/2517
// https://github.com/reactjs/react-router/issues/470


var contextProviderShape = _propTypes2.default.shape({
  subscribe: _propTypes2.default.func.isRequired,
  eventIndex: _propTypes2.default.number.isRequired
});

function makeContextName(name) {
  return '@@contextSubscriber/' + name;
}

var prefixUnsafeLifecycleMethods = parseFloat(_react2.default.version) >= 16.3;

function ContextProvider(name) {
  var _childContextTypes, _config;

  var contextName = makeContextName(name);
  var listenersKey = contextName + '/listeners';
  var eventIndexKey = contextName + '/eventIndex';
  var subscribeKey = contextName + '/subscribe';
  var config = (_config = {
    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),
    getChildContext: function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextName] = {
        eventIndex: this[eventIndexKey],
        subscribe: this[subscribeKey]
      }, _ref;
    },
    // this method will be updated to UNSAFE_componentWillMount below for React versions >= 16.3
    componentWillMount: function componentWillMount() {
      this[listenersKey] = [];
      this[eventIndexKey] = 0;
    },
    // this method will be updated to UNSAFE_componentWillReceiveProps below for React versions >= 16.3
    componentWillReceiveProps: function componentWillReceiveProps() {
      this[eventIndexKey]++;
    },
    componentDidUpdate: function componentDidUpdate() {
      var _this = this;

      this[listenersKey].forEach(function (listener) {
        return listener(_this[eventIndexKey]);
      });
    }
  }, _config[subscribeKey] = function (listener) {
    var _this2 = this; // No need to immediately call listener here.


    this[listenersKey].push(listener);
    return function () {
      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
        return item !== listener;
      });
    };
  }, _config);

  if (prefixUnsafeLifecycleMethods) {
    config.UNSAFE_componentWillMount = config.componentWillMount;
    config.UNSAFE_componentWillReceiveProps = config.componentWillReceiveProps;
    delete config.componentWillMount;
    delete config.componentWillReceiveProps;
  }

  return config;
}

function ContextSubscriber(name) {
  var _contextTypes, _config2;

  var contextName = makeContextName(name);
  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
  var handleContextUpdateKey = contextName + '/handleContextUpdate';
  var unsubscribeKey = contextName + '/unsubscribe';
  var config = (_config2 = {
    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),
    getInitialState: function getInitialState() {
      var _ref2;

      if (!this.context[contextName]) {
        return {};
      }

      return _ref2 = {}, _ref2[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref2;
    },
    componentDidMount: function componentDidMount() {
      if (!this.context[contextName]) {
        return;
      }

      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
    },
    // this method will be updated to UNSAFE_componentWillReceiveProps below for React versions >= 16.3
    componentWillReceiveProps: function componentWillReceiveProps() {
      var _setState;

      if (!this.context[contextName]) {
        return;
      }

      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
    },
    componentWillUnmount: function componentWillUnmount() {
      if (!this[unsubscribeKey]) {
        return;
      }

      this[unsubscribeKey]();
      this[unsubscribeKey] = null;
    }
  }, _config2[handleContextUpdateKey] = function (eventIndex) {
    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
      var _setState2;

      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
    }
  }, _config2);

  if (prefixUnsafeLifecycleMethods) {
    config.UNSAFE_componentWillReceiveProps = config.componentWillReceiveProps;
    delete config.componentWillReceiveProps;
  }

  return config;
}

/***/ }),

/***/ "./node_modules/react-router/lib/PatternUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/lib/PatternUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;
exports.compilePattern = compilePattern;
exports.matchPattern = matchPattern;
exports.getParamNames = getParamNames;
exports.getParams = getParams;
exports.formatPattern = formatPattern;

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function _compilePattern(pattern) {
  var regexpSource = '';
  var paramNames = [];
  var tokens = [];
  var match = void 0,
      lastIndex = 0,
      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)|\\\(|\\\)/g;

  while (match = matcher.exec(pattern)) {
    if (match.index !== lastIndex) {
      tokens.push(pattern.slice(lastIndex, match.index));
      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
    }

    if (match[1]) {
      regexpSource += '([^/]+)';
      paramNames.push(match[1]);
    } else if (match[0] === '**') {
      regexpSource += '(.*)';
      paramNames.push('splat');
    } else if (match[0] === '*') {
      regexpSource += '(.*?)';
      paramNames.push('splat');
    } else if (match[0] === '(') {
      regexpSource += '(?:';
    } else if (match[0] === ')') {
      regexpSource += ')?';
    } else if (match[0] === '\\(') {
      regexpSource += '\\(';
    } else if (match[0] === '\\)') {
      regexpSource += '\\)';
    }

    tokens.push(match[0]);
    lastIndex = matcher.lastIndex;
  }

  if (lastIndex !== pattern.length) {
    tokens.push(pattern.slice(lastIndex, pattern.length));
    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
  }

  return {
    pattern: pattern,
    regexpSource: regexpSource,
    paramNames: paramNames,
    tokens: tokens
  };
}

var CompiledPatternsCache = Object.create(null);

function compilePattern(pattern) {
  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);
  return CompiledPatternsCache[pattern];
}
/**
 * Attempts to match a pattern on the given pathname. Patterns may use
 * the following special characters:
 *
 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
 *                  captured string is considered a "param"
 * - ()             Wraps a segment of the URL that is optional
 * - *              Consumes (non-greedy) all characters up to the next
 *                  character in the pattern, or to the end of the URL if
 *                  there is none
 * - **             Consumes (greedy) all characters up to the next character
 *                  in the pattern, or to the end of the URL if there is none
 *
 *  The function calls callback(error, matched) when finished.
 * The return value is an object with the following properties:
 *
 * - remainingPathname
 * - paramNames
 * - paramValues
 */


function matchPattern(pattern, pathname) {
  // Ensure pattern starts with leading slash for consistency with pathname.
  if (pattern.charAt(0) !== '/') {
    pattern = '/' + pattern;
  }

  var _compilePattern2 = compilePattern(pattern),
      regexpSource = _compilePattern2.regexpSource,
      paramNames = _compilePattern2.paramNames,
      tokens = _compilePattern2.tokens;

  if (pattern.charAt(pattern.length - 1) !== '/') {
    regexpSource += '/?'; // Allow optional path separator at end.
  } // Special-case patterns like '*' for catch-all routes.


  if (tokens[tokens.length - 1] === '*') {
    regexpSource += '$';
  }

  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));

  if (match == null) {
    return null;
  }

  var matchedPath = match[0];
  var remainingPathname = pathname.substr(matchedPath.length);

  if (remainingPathname) {
    // Require that the match ends at a path separator, if we didn't match
    // the full path, so any remaining pathname is a new path segment.
    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
      return null;
    } // If there is a remaining pathname, treat the path separator as part of
    // the remaining pathname for properly continuing the match.


    remainingPathname = '/' + remainingPathname;
  }

  return {
    remainingPathname: remainingPathname,
    paramNames: paramNames,
    paramValues: match.slice(1).map(function (v) {
      return v && decodeURIComponent(v);
    })
  };
}

function getParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}

function getParams(pattern, pathname) {
  var match = matchPattern(pattern, pathname);

  if (!match) {
    return null;
  }

  var paramNames = match.paramNames,
      paramValues = match.paramValues;
  var params = {};
  paramNames.forEach(function (paramName, index) {
    params[paramName] = paramValues[index];
  });
  return params;
}
/**
 * Returns a version of the given pattern with params interpolated. Throws
 * if there is a dynamic segment of the pattern for which there is no param.
 */


function formatPattern(pattern, params) {
  params = params || {};

  var _compilePattern3 = compilePattern(pattern),
      tokens = _compilePattern3.tokens;

  var parenCount = 0,
      pathname = '',
      splatIndex = 0,
      parenHistory = [];
  var token = void 0,
      paramName = void 0,
      paramValue = void 0;

  for (var i = 0, len = tokens.length; i < len; ++i) {
    token = tokens[i];

    if (token === '*' || token === '**') {
      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;
      !(paramValue != null || parenCount > 0) ?  true ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : undefined : void 0;
      if (paramValue != null) pathname += encodeURI(paramValue);
    } else if (token === '(') {
      parenHistory[parenCount] = '';
      parenCount += 1;
    } else if (token === ')') {
      var parenText = parenHistory.pop();
      parenCount -= 1;
      if (parenCount) parenHistory[parenCount - 1] += parenText;else pathname += parenText;
    } else if (token === '\\(') {
      pathname += '(';
    } else if (token === '\\)') {
      pathname += ')';
    } else if (token.charAt(0) === ':') {
      paramName = token.substring(1);
      paramValue = params[paramName];
      !(paramValue != null || parenCount > 0) ?  true ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : undefined : void 0;

      if (paramValue == null) {
        if (parenCount) {
          parenHistory[parenCount - 1] = '';
          var curTokenIdx = tokens.indexOf(token);
          var tokensSubset = tokens.slice(curTokenIdx, tokens.length);
          var nextParenIdx = -1;

          for (var _i = 0; _i < tokensSubset.length; _i++) {
            if (tokensSubset[_i] == ')') {
              nextParenIdx = _i;
              break;
            }
          }

          !(nextParenIdx > 0) ?  true ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren at segment "%s"', pattern, tokensSubset.join('')) : undefined : void 0; // jump to ending paren

          i = curTokenIdx + nextParenIdx - 1;
        }
      } else if (parenCount) parenHistory[parenCount - 1] += encodeURIComponent(paramValue);else pathname += encodeURIComponent(paramValue);
    } else {
      if (parenCount) parenHistory[parenCount - 1] += token;else pathname += token;
    }
  }

  !(parenCount <= 0) ?  true ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren', pattern) : undefined : void 0;
  return pathname.replace(/\/+/g, '/');
}

/***/ }),

/***/ "./node_modules/react-router/lib/PromiseUtils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/lib/PromiseUtils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;
exports.isPromise = isPromise;

function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

/***/ }),

/***/ "./node_modules/react-router/lib/RouteUtils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router/lib/RouteUtils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.isReactChildren = isReactChildren;
exports.createRouteFromReactElement = createRouteFromReactElement;
exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
exports.createRoutes = createRoutes;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isValidChild(object) {
  return object == null || _react2.default.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (route.children) {
    var childRoutes = createRoutesFromReactChildren(route.children, route);
    if (childRoutes.length) route.childRoutes = childRoutes;
    delete route.children;
  }

  return route;
}
/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router'
 *
 *   const routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */


function createRoutesFromReactChildren(children, parentRoute) {
  var routes = [];

  _react2.default.Children.forEach(children, function (element) {
    if (_react2.default.isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        var route = element.type.createRouteFromReactElement(element, parentRoute);
        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}
/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */


function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (routes && !Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}

/***/ }),

/***/ "./node_modules/react-router/lib/RouterContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router/lib/RouterContext.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactIs = __webpack_require__(/*! react-is */ "react-is");

var _createReactClass = __webpack_require__(/*! create-react-class */ "create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _getRouteParams = __webpack_require__(/*! ./getRouteParams */ "./node_modules/react-router/lib/getRouteParams.js");

var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

var _ContextUtils = __webpack_require__(/*! ./ContextUtils */ "./node_modules/react-router/lib/ContextUtils.js");

var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ "./node_modules/react-router/lib/RouteUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * A <RouterContext> renders the component tree for a given router state
 * and sets the history object and the current location in context.
 */


var RouterContext = (0, _createReactClass2.default)({
  displayName: 'RouterContext',
  mixins: [(0, _ContextUtils.ContextProvider)('router')],
  propTypes: {
    router: _propTypes.object.isRequired,
    location: _propTypes.object.isRequired,
    routes: _propTypes.array.isRequired,
    params: _propTypes.object.isRequired,
    components: _propTypes.array.isRequired,
    createElement: _propTypes.func.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      createElement: _react2.default.createElement
    };
  },
  childContextTypes: {
    router: _propTypes.object.isRequired
  },
  getChildContext: function getChildContext() {
    return {
      router: this.props.router
    };
  },
  createElement: function createElement(component, props) {
    return component == null ? null : this.props.createElement(component, props);
  },
  render: function render() {
    var _this = this;

    var _props = this.props,
        location = _props.location,
        routes = _props.routes,
        params = _props.params,
        components = _props.components,
        router = _props.router;
    var element = null;

    if (components) {
      element = components.reduceRight(function (element, components, index) {
        if (components == null) return element; // Don't create new children; use the grandchildren.

        var route = routes[index];
        var routeParams = (0, _getRouteParams2.default)(route, params);
        var props = {
          location: location,
          params: params,
          route: route,
          router: router,
          routeParams: routeParams,
          routes: routes
        };

        if ((0, _RouteUtils.isReactChildren)(element)) {
          props.children = element;
        } else if (element) {
          for (var prop in element) {
            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
          }
        } // Handle components is object for { [name]: component } but not valid element
        // type of react, such as React.memo, React.lazy and so on.


        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object' && !(0, _reactIs.isValidElementType)(components)) {
          var elements = {};

          for (var key in components) {
            if (Object.prototype.hasOwnProperty.call(components, key)) {
              // Pass through the key as a prop to createElement to allow
              // custom createElement functions to know which named component
              // they're rendering, for e.g. matching up to fetched data.
              elements[key] = _this.createElement(components[key], _extends({
                key: key
              }, props));
            }
          }

          return elements;
        }

        return _this.createElement(components, props);
      }, element);
    }

    !(element === null || element === false || _react2.default.isValidElement(element)) ?  true ? (0, _invariant2.default)(false, 'The root route must render a single element') : undefined : void 0;
    return element;
  }
});
exports.default = RouterContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/RouterUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/lib/RouterUtils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.createRouterObject = createRouterObject;
exports.assignRouterState = assignRouterState;

function createRouterObject(history, transitionManager, state) {
  var router = _extends({}, history, {
    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
    isActive: transitionManager.isActive
  });

  return assignRouterState(router, state);
}

function assignRouterState(router, _ref) {
  var location = _ref.location,
      params = _ref.params,
      routes = _ref.routes;
  router.location = location;
  router.params = params;
  router.routes = routes;
  return router;
}

/***/ }),

/***/ "./node_modules/react-router/lib/TransitionUtils.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router/lib/TransitionUtils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;
exports.default = getTransitionUtils;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/react-router/lib/AsyncUtils.js");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var PendingHooks = function PendingHooks() {
  var _this = this;

  _classCallCheck(this, PendingHooks);

  this.hooks = [];

  this.add = function (hook) {
    return _this.hooks.push(hook);
  };

  this.remove = function (hook) {
    return _this.hooks = _this.hooks.filter(function (h) {
      return h !== hook;
    });
  };

  this.has = function (hook) {
    return _this.hooks.indexOf(hook) !== -1;
  };

  this.clear = function () {
    return _this.hooks = [];
  };
};

function getTransitionUtils() {
  var enterHooks = new PendingHooks();
  var changeHooks = new PendingHooks();

  function createTransitionHook(hook, route, asyncArity, pendingHooks) {
    var isSync = hook.length < asyncArity;

    var transitionHook = function transitionHook() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      hook.apply(route, args);

      if (isSync) {
        var callback = args[args.length - 1]; // Assume hook executes synchronously and
        // automatically call the callback.

        callback();
      }
    };

    pendingHooks.add(transitionHook);
    return transitionHook;
  }

  function getEnterHooks(routes) {
    return routes.reduce(function (hooks, route) {
      if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3, enterHooks));
      return hooks;
    }, []);
  }

  function getChangeHooks(routes) {
    return routes.reduce(function (hooks, route) {
      if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4, changeHooks));
      return hooks;
    }, []);
  }

  function runTransitionHooks(length, iter, callback) {
    if (!length) {
      callback();
      return;
    }

    var redirectInfo = void 0;

    function replace(location) {
      redirectInfo = location;
    }

    (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
      iter(index, replace, function (error) {
        if (error || redirectInfo) {
          done(error, redirectInfo); // No need to continue.
        } else {
          next();
        }
      });
    }, callback);
  }
  /**
   * Runs all onEnter hooks in the given array of routes in order
   * with onEnter(nextState, replace, callback) and calls
   * callback(error, redirectInfo) when finished. The first hook
   * to use replace short-circuits the loop.
   *
   * If a hook needs to run asynchronously, it may use the callback
   * function. However, doing so will cause the transition to pause,
   * which could lead to a non-responsive UI if the hook is slow.
   */


  function runEnterHooks(routes, nextState, callback) {
    enterHooks.clear();
    var hooks = getEnterHooks(routes);
    return runTransitionHooks(hooks.length, function (index, replace, next) {
      var wrappedNext = function wrappedNext() {
        if (enterHooks.has(hooks[index])) {
          next.apply(undefined, arguments);
          enterHooks.remove(hooks[index]);
        }
      };

      hooks[index](nextState, replace, wrappedNext);
    }, callback);
  }
  /**
   * Runs all onChange hooks in the given array of routes in order
   * with onChange(prevState, nextState, replace, callback) and calls
   * callback(error, redirectInfo) when finished. The first hook
   * to use replace short-circuits the loop.
   *
   * If a hook needs to run asynchronously, it may use the callback
   * function. However, doing so will cause the transition to pause,
   * which could lead to a non-responsive UI if the hook is slow.
   */


  function runChangeHooks(routes, state, nextState, callback) {
    changeHooks.clear();
    var hooks = getChangeHooks(routes);
    return runTransitionHooks(hooks.length, function (index, replace, next) {
      var wrappedNext = function wrappedNext() {
        if (changeHooks.has(hooks[index])) {
          next.apply(undefined, arguments);
          changeHooks.remove(hooks[index]);
        }
      };

      hooks[index](state, nextState, replace, wrappedNext);
    }, callback);
  }
  /**
   * Runs all onLeave hooks in the given array of routes in order.
   */


  function runLeaveHooks(routes, prevState) {
    for (var i = 0, len = routes.length; i < len; ++i) {
      if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
    }
  }

  return {
    runEnterHooks: runEnterHooks,
    runChangeHooks: runChangeHooks,
    runLeaveHooks: runLeaveHooks
  };
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/computeChangedRoutes.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router/lib/computeChangedRoutes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");

function routeParamsChanged(route, prevState, nextState) {
  if (!route.path) return false;
  var paramNames = (0, _PatternUtils.getParamNames)(route.path);
  return paramNames.some(function (paramName) {
    return prevState.params[paramName] !== nextState.params[paramName];
  });
}
/**
 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
 * the change from prevState to nextState. We leave routes if either
 * 1) they are not in the next state or 2) they are in the next state
 * but their params have changed (i.e. /users/123 => /users/456).
 *
 * leaveRoutes are ordered starting at the leaf route of the tree
 * we're leaving up to the common parent route. enterRoutes are ordered
 * from the top of the tree we're entering down to the leaf route.
 *
 * changeRoutes are any routes that didn't leave or enter during
 * the transition.
 */


function computeChangedRoutes(prevState, nextState) {
  var prevRoutes = prevState && prevState.routes;
  var nextRoutes = nextState.routes;
  var leaveRoutes = void 0,
      changeRoutes = void 0,
      enterRoutes = void 0;

  if (prevRoutes) {
    var parentIsLeaving = false;
    leaveRoutes = prevRoutes.filter(function (route) {
      if (parentIsLeaving) {
        return true;
      } else {
        var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
        if (isLeaving) parentIsLeaving = true;
        return isLeaving;
      }
    }); // onLeave hooks start at the leaf route.

    leaveRoutes.reverse();
    enterRoutes = [];
    changeRoutes = [];
    nextRoutes.forEach(function (route) {
      var isNew = prevRoutes.indexOf(route) === -1;
      var paramsChanged = leaveRoutes.indexOf(route) !== -1;
      if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
    });
  } else {
    leaveRoutes = [];
    changeRoutes = [];
    enterRoutes = nextRoutes;
  }

  return {
    leaveRoutes: leaveRoutes,
    changeRoutes: changeRoutes,
    enterRoutes: enterRoutes
  };
}

exports.default = computeChangedRoutes;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/createMemoryHistory.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-router/lib/createMemoryHistory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;
exports.default = createMemoryHistory;

var _useQueries = __webpack_require__(/*! history/lib/useQueries */ "./node_modules/history/lib/useQueries.js");

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = __webpack_require__(/*! history/lib/useBasename */ "./node_modules/history/lib/useBasename.js");

var _useBasename2 = _interopRequireDefault(_useBasename);

var _createMemoryHistory = __webpack_require__(/*! history/lib/createMemoryHistory */ "./node_modules/history/lib/createMemoryHistory.js");

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createMemoryHistory(options) {
  // signatures and type checking differ between `useQueries` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  var memoryHistory = (0, _createMemoryHistory2.default)(options);

  var createHistory = function createHistory() {
    return memoryHistory;
  };

  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
  return history;
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/createTransitionManager.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-router/lib/createTransitionManager.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = createTransitionManager;

var _routerWarning = __webpack_require__(/*! ./routerWarning */ "./node_modules/react-router/lib/routerWarning.js");

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _computeChangedRoutes2 = __webpack_require__(/*! ./computeChangedRoutes */ "./node_modules/react-router/lib/computeChangedRoutes.js");

var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

var _TransitionUtils = __webpack_require__(/*! ./TransitionUtils */ "./node_modules/react-router/lib/TransitionUtils.js");

var _TransitionUtils2 = _interopRequireDefault(_TransitionUtils);

var _isActive2 = __webpack_require__(/*! ./isActive */ "./node_modules/react-router/lib/isActive.js");

var _isActive3 = _interopRequireDefault(_isActive2);

var _getComponents = __webpack_require__(/*! ./getComponents */ "./node_modules/react-router/lib/getComponents.js");

var _getComponents2 = _interopRequireDefault(_getComponents);

var _matchRoutes = __webpack_require__(/*! ./matchRoutes */ "./node_modules/react-router/lib/matchRoutes.js");

var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function hasAnyProperties(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
  }

  return false;
}

function createTransitionManager(history, routes) {
  var state = {};

  var _getTransitionUtils = (0, _TransitionUtils2.default)(),
      runEnterHooks = _getTransitionUtils.runEnterHooks,
      runChangeHooks = _getTransitionUtils.runChangeHooks,
      runLeaveHooks = _getTransitionUtils.runLeaveHooks; // Signature should be (location, indexOnly), but needs to support (path,
  // query, indexOnly)


  function isActive(location, indexOnly) {
    location = history.createLocation(location);
    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
  }

  var partialNextState = void 0;

  function match(location, callback) {
    if (partialNextState && partialNextState.location === location) {
      // Continue from where we left off.
      finishMatch(partialNextState, callback);
    } else {
      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
        if (error) {
          callback(error);
        } else if (nextState) {
          finishMatch(_extends({}, nextState, {
            location: location
          }), callback);
        } else {
          callback();
        }
      });
    }
  }

  function finishMatch(nextState, callback) {
    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState),
        leaveRoutes = _computeChangedRoutes.leaveRoutes,
        changeRoutes = _computeChangedRoutes.changeRoutes,
        enterRoutes = _computeChangedRoutes.enterRoutes;

    runLeaveHooks(leaveRoutes, state); // Tear down confirmation hooks for left routes

    leaveRoutes.filter(function (route) {
      return enterRoutes.indexOf(route) === -1;
    }).forEach(removeListenBeforeHooksForRoute); // change and enter hooks are run in series

    runChangeHooks(changeRoutes, state, nextState, function (error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);
      runEnterHooks(enterRoutes, nextState, finishEnterHooks);
    });

    function finishEnterHooks(error, redirectInfo) {
      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo); // TODO: Fetch components after state is updated.

      (0, _getComponents2.default)(nextState, function (error, components) {
        if (error) {
          callback(error);
        } else {
          // TODO: Make match a pure function and have some other API
          // for "match and update state".
          callback(null, null, state = _extends({}, nextState, {
            components: components
          }));
        }
      });
    }

    function handleErrorOrRedirect(error, redirectInfo) {
      if (error) callback(error);else callback(null, redirectInfo);
    }
  }

  var RouteGuid = 1;

  function getRouteID(route) {
    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return route.__id__ || create && (route.__id__ = RouteGuid++);
  }

  var RouteHooks = Object.create(null);

  function getRouteHooksForRoutes(routes) {
    return routes.map(function (route) {
      return RouteHooks[getRouteID(route)];
    }).filter(function (hook) {
      return hook;
    });
  }

  function transitionHook(location, callback) {
    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
      if (nextState == null) {
        // TODO: We didn't actually match anything, but hang
        // onto error/nextState so we don't have to matchRoutes
        // again in the listen callback.
        callback();
        return;
      } // Cache some state here so we don't have to
      // matchRoutes() again in the listen callback.


      partialNextState = _extends({}, nextState, {
        location: location
      });
      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);
      var result = void 0;

      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
        // Passing the location arg here indicates to
        // the user that this is a transition hook.
        result = hooks[i](location);
      }

      callback(result);
    });
  }
  /* istanbul ignore next: untestable with Karma */


  function beforeUnloadHook() {
    // Synchronously check to see if any route hooks want
    // to prevent the current window/tab from closing.
    if (state.routes) {
      var hooks = getRouteHooksForRoutes(state.routes);
      var message = void 0;

      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
        // Passing no args indicates to the user that this is a
        // beforeunload hook. We don't know the next location.
        message = hooks[i]();
      }

      return message;
    }
  }

  var unlistenBefore = void 0,
      unlistenBeforeUnload = void 0;

  function removeListenBeforeHooksForRoute(route) {
    var routeID = getRouteID(route);

    if (!routeID) {
      return;
    }

    delete RouteHooks[routeID];

    if (!hasAnyProperties(RouteHooks)) {
      // teardown transition & beforeunload hooks
      if (unlistenBefore) {
        unlistenBefore();
        unlistenBefore = null;
      }

      if (unlistenBeforeUnload) {
        unlistenBeforeUnload();
        unlistenBeforeUnload = null;
      }
    }
  }
  /**
   * Registers the given hook function to run before leaving the given route.
   *
   * During a normal transition, the hook function receives the next location
   * as its only argument and can return either a prompt message (string) to show the user,
   * to make sure they want to leave the page; or `false`, to prevent the transition.
   * Any other return value will have no effect.
   *
   * During the beforeunload event (in browsers) the hook receives no arguments.
   * In this case it must return a prompt message to prevent the transition.
   *
   * Returns a function that may be used to unbind the listener.
   */


  function listenBeforeLeavingRoute(route, hook) {
    var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
    var routeID = getRouteID(route, true);
    RouteHooks[routeID] = hook;

    if (thereWereNoRouteHooks) {
      // setup transition & beforeunload hooks
      unlistenBefore = history.listenBefore(transitionHook);
      if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
    }

    return function () {
      removeListenBeforeHooksForRoute(route);
    };
  }
  /**
   * This is the API for stateful environments. As the location
   * changes, we update state and call the listener. We can also
   * gracefully handle errors and redirects.
   */


  function listen(listener) {
    function historyListener(location) {
      if (state.location === location) {
        listener(null, state);
      } else {
        match(location, function (error, redirectLocation, nextState) {
          if (error) {
            listener(error);
          } else if (redirectLocation) {
            history.replace(redirectLocation);
          } else if (nextState) {
            listener(null, nextState);
          } else {
             true ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
          }
        });
      }
    } // TODO: Only use a single history listener. Otherwise we'll end up with
    // multiple concurrent calls to match.
    // Set up the history listener first in case the initial match redirects.


    var unsubscribe = history.listen(historyListener);

    if (state.location) {
      // Picking up on a matchContext.
      listener(null, state);
    } else {
      historyListener(history.getCurrentLocation());
    }

    return unsubscribe;
  }

  return {
    isActive: isActive,
    match: match,
    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
    listen: listen
  };
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/getComponents.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router/lib/getComponents.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/react-router/lib/AsyncUtils.js");

var _PromiseUtils = __webpack_require__(/*! ./PromiseUtils */ "./node_modules/react-router/lib/PromiseUtils.js");

function getComponentsForRoute(nextState, route, callback) {
  if (route.component || route.components) {
    callback(null, route.component || route.components);
    return;
  }

  var getComponent = route.getComponent || route.getComponents;

  if (getComponent) {
    var componentReturn = getComponent.call(route, nextState, callback);
    if ((0, _PromiseUtils.isPromise)(componentReturn)) componentReturn.then(function (component) {
      return callback(null, component);
    }, callback);
  } else {
    callback();
  }
}
/**
 * Asynchronously fetches all components needed for the given router
 * state and calls callback(error, components) when finished.
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getComponents method.
 */


function getComponents(nextState, callback) {
  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
    getComponentsForRoute(nextState, route, callback);
  }, callback);
}

exports.default = getComponents;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/getRouteParams.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-router/lib/getRouteParams.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");
/**
 * Extracts an object of params the given route cares about from
 * the given params object.
 */


function getRouteParams(route, params) {
  var routeParams = {};
  if (!route.path) return routeParams;
  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
    if (Object.prototype.hasOwnProperty.call(params, p)) {
      routeParams[p] = params[p];
    }
  });
  return routeParams;
}

exports.default = getRouteParams;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/isActive.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router/lib/isActive.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

exports.default = isActive;

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");

function deepEqual(a, b) {
  if (a == b) return true;
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return deepEqual(item, b[index]);
    });
  }

  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
    for (var p in a) {
      if (!Object.prototype.hasOwnProperty.call(a, p)) {
        continue;
      }

      if (a[p] === undefined) {
        if (b[p] !== undefined) {
          return false;
        }
      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
        return false;
      } else if (!deepEqual(a[p], b[p])) {
        return false;
      }
    }

    return true;
  }

  return String(a) === String(b);
}
/**
 * Returns true if the current pathname matches the supplied one, net of
 * leading and trailing slash normalization. This is sufficient for an
 * indexOnly route match.
 */


function pathIsActive(pathname, currentPathname) {
  // Normalize leading slash for consistency. Leading slash on pathname has
  // already been normalized in isActive. See caveat there.
  if (currentPathname.charAt(0) !== '/') {
    currentPathname = '/' + currentPathname;
  } // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
  // `/foo` as active, but in this case, we would already have failed the
  // match.


  if (pathname.charAt(pathname.length - 1) !== '/') {
    pathname += '/';
  }

  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
    currentPathname += '/';
  }

  return currentPathname === pathname;
}
/**
 * Returns true if the given pathname matches the active routes and params.
 */


function routeIsActive(pathname, routes, params) {
  var remainingPathname = pathname,
      paramNames = [],
      paramValues = []; // for...of would work here but it's probably slower post-transpilation.

  for (var i = 0, len = routes.length; i < len; ++i) {
    var route = routes[i];
    var pattern = route.path || '';

    if (pattern.charAt(0) === '/') {
      remainingPathname = pathname;
      paramNames = [];
      paramValues = [];
    }

    if (remainingPathname !== null && pattern) {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);

      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }

      if (remainingPathname === '') {
        // We have an exact match on the route. Just check that all the params
        // match.
        // FIXME: This doesn't work on repeated params.
        return paramNames.every(function (paramName, index) {
          return String(paramValues[index]) === String(params[paramName]);
        });
      }
    }
  }

  return false;
}
/**
 * Returns true if all key/value pairs in the given query are
 * currently active.
 */


function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;
  if (query == null) return true;
  return deepEqual(query, activeQuery);
}
/**
 * Returns true if a <Link> to the given pathname/query combination is
 * currently active.
 */


function isActive(_ref, indexOnly, currentLocation, routes, params) {
  var pathname = _ref.pathname,
      query = _ref.query;
  if (currentLocation == null) return false; // TODO: This is a bit ugly. It keeps around support for treating pathnames
  // without preceding slashes as absolute paths, but possibly also works
  // around the same quirks with basenames as in matchRoutes.

  if (pathname.charAt(0) !== '/') {
    pathname = '/' + pathname;
  }

  if (!pathIsActive(pathname, currentLocation.pathname)) {
    // The path check is necessary and sufficient for indexOnly, but otherwise
    // we still need to check the routes.
    if (indexOnly || !routeIsActive(pathname, routes, params)) {
      return false;
    }
  }

  return queryIsActive(query, currentLocation.query);
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/match.js":
/*!************************************************!*\
  !*** ./node_modules/react-router/lib/match.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _Actions = __webpack_require__(/*! history/lib/Actions */ "./node_modules/history/lib/Actions.js");

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _createMemoryHistory = __webpack_require__(/*! ./createMemoryHistory */ "./node_modules/react-router/lib/createMemoryHistory.js");

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router/lib/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ "./node_modules/react-router/lib/RouteUtils.js");

var _RouterUtils = __webpack_require__(/*! ./RouterUtils */ "./node_modules/react-router/lib/RouterUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}
/**
 * A high-level API to be used for server-side rendering.
 *
 * This function matches a location to a set of routes and calls
 * callback(error, redirectLocation, renderProps) when finished.
 *
 * Note: You probably don't want to use this in a browser unless you're using
 * server-side rendering with async routes.
 */


function match(_ref, callback) {
  var history = _ref.history,
      routes = _ref.routes,
      location = _ref.location,
      options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

  !(history || location) ?  true ? (0, _invariant2.default)(false, 'match needs a history or a location') : undefined : void 0;
  history = history ? history : (0, _createMemoryHistory2.default)(options);
  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

  if (location) {
    // Allow match({ location: '/the/path', ... })
    location = history.createLocation(location);
  } else {
    location = history.getCurrentLocation();
  }

  transitionManager.match(location, function (error, redirectLocation, nextState) {
    var renderProps = void 0;

    if (nextState) {
      var router = (0, _RouterUtils.createRouterObject)(history, transitionManager, nextState);
      renderProps = _extends({}, nextState, {
        router: router,
        matchContext: {
          transitionManager: transitionManager,
          router: router
        }
      });
    }

    callback(error, redirectLocation && history.createLocation(redirectLocation, _Actions.REPLACE), renderProps);
  });
}

exports.default = match;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/matchRoutes.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router/lib/matchRoutes.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = matchRoutes;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/react-router/lib/AsyncUtils.js");

var _PromiseUtils = __webpack_require__(/*! ./PromiseUtils */ "./node_modules/react-router/lib/PromiseUtils.js");

var _PatternUtils = __webpack_require__(/*! ./PatternUtils */ "./node_modules/react-router/lib/PatternUtils.js");

var _routerWarning = __webpack_require__(/*! ./routerWarning */ "./node_modules/react-router/lib/routerWarning.js");

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _RouteUtils = __webpack_require__(/*! ./RouteUtils */ "./node_modules/react-router/lib/RouteUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getChildRoutes(route, location, paramNames, paramValues, callback) {
  if (route.childRoutes) {
    return [null, route.childRoutes];
  }

  if (!route.getChildRoutes) {
    return [];
  }

  var sync = true,
      result = void 0;
  var partialNextState = {
    location: location,
    params: createParams(paramNames, paramValues)
  };
  var childRoutesReturn = route.getChildRoutes(partialNextState, function (error, childRoutes) {
    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);

    if (sync) {
      result = [error, childRoutes];
      return;
    }

    callback(error, childRoutes);
  });
  if ((0, _PromiseUtils.isPromise)(childRoutesReturn)) childRoutesReturn.then(function (childRoutes) {
    return callback(null, (0, _RouteUtils.createRoutes)(childRoutes));
  }, callback);
  sync = false;
  return result; // Might be undefined.
}

function getIndexRoute(route, location, paramNames, paramValues, callback) {
  if (route.indexRoute) {
    callback(null, route.indexRoute);
  } else if (route.getIndexRoute) {
    var partialNextState = {
      location: location,
      params: createParams(paramNames, paramValues)
    };
    var indexRoutesReturn = route.getIndexRoute(partialNextState, function (error, indexRoute) {
      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
    });
    if ((0, _PromiseUtils.isPromise)(indexRoutesReturn)) indexRoutesReturn.then(function (indexRoute) {
      return callback(null, (0, _RouteUtils.createRoutes)(indexRoute)[0]);
    }, callback);
  } else if (route.childRoutes || route.getChildRoutes) {
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
        return;
      }

      var pathless = childRoutes.filter(function (childRoute) {
        return !childRoute.path;
      });
      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
          if (error || indexRoute) {
            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
            done(error, routes);
          } else {
            next();
          }
        });
      }, function (err, routes) {
        callback(null, routes);
      });
    };

    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);

    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}

function assignParams(params, paramNames, paramValues) {
  return paramNames.reduce(function (params, paramName, index) {
    var paramValue = paramValues && paramValues[index];

    if (Array.isArray(params[paramName])) {
      params[paramName].push(paramValue);
    } else if (paramName in params) {
      params[paramName] = [params[paramName], paramValue];
    } else {
      params[paramName] = paramValue;
    }

    return params;
  }, params);
}

function createParams(paramNames, paramValues) {
  return assignParams({}, paramNames, paramValues);
}

function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
  var pattern = route.path || '';

  if (pattern.charAt(0) === '/') {
    remainingPathname = location.pathname;
    paramNames = [];
    paramValues = [];
  } // Only try to match the path if the route actually has a pattern, and if
  // we're not just searching for potential nested absolute paths.


  if (remainingPathname !== null && pattern) {
    try {
      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);

      if (matched) {
        remainingPathname = matched.remainingPathname;
        paramNames = [].concat(paramNames, matched.paramNames);
        paramValues = [].concat(paramValues, matched.paramValues);
      } else {
        remainingPathname = null;
      }
    } catch (error) {
      callback(error);
    } // By assumption, pattern is non-empty here, which is the prerequisite for
    // actually terminating a match.


    if (remainingPathname === '') {
      var match = {
        routes: [route],
        params: createParams(paramNames, paramValues)
      };
      getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
        if (error) {
          callback(error);
        } else {
          if (Array.isArray(indexRoute)) {
            var _match$routes;

             true ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
              return !route.path;
            }), 'Index routes should not have paths') : undefined;

            (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
          } else if (indexRoute) {
             true ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : undefined;
            match.routes.push(indexRoute);
          }

          callback(null, match);
        }
      });
      return;
    }
  }

  if (remainingPathname != null || route.childRoutes) {
    // Either a) this route matched at least some of the path or b)
    // we don't have to load this route's children asynchronously. In
    // either case continue checking for matches in the subtree.
    var onChildRoutes = function onChildRoutes(error, childRoutes) {
      if (error) {
        callback(error);
      } else if (childRoutes) {
        // Check the child routes to see if any of them match.
        matchRoutes(childRoutes, location, function (error, match) {
          if (error) {
            callback(error);
          } else if (match) {
            // A child route matched! Augment the match and pass it up the stack.
            match.routes.unshift(route);
            callback(null, match);
          } else {
            callback();
          }
        }, remainingPathname, paramNames, paramValues);
      } else {
        callback();
      }
    };

    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);

    if (result) {
      onChildRoutes.apply(undefined, result);
    }
  } else {
    callback();
  }
}
/**
 * Asynchronously matches the given location to a set of routes and calls
 * callback(error, state) when finished. The state object will have the
 * following properties:
 *
 * - routes       An array of routes that matched, in hierarchical order
 * - params       An object of URL parameters
 *
 * Note: This operation may finish synchronously if no routes have an
 * asynchronous getChildRoutes method.
 */


function matchRoutes(routes, location, callback, remainingPathname) {
  var paramNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var paramValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

  if (remainingPathname === undefined) {
    // TODO: This is a little bit ugly, but it works around a quirk in history
    // that strips the leading slash from pathnames when using basenames with
    // trailing slashes.
    if (location.pathname.charAt(0) !== '/') {
      location = _extends({}, location, {
        pathname: '/' + location.pathname
      });
    }

    remainingPathname = location.pathname;
  }

  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
      if (error || match) {
        done(error, match);
      } else {
        next();
      }
    });
  }, callback);
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-router/lib/routerWarning.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router/lib/routerWarning.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;
exports.default = routerWarning;
exports._resetWarned = _resetWarned;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var warned = {};

function routerWarning(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  message = '[react-router] ' + message;

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
}

function _resetWarned() {
  warned = {};
}

/***/ }),

/***/ "./node_modules/react-router/lib/useRouterHistory.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-router/lib/useRouterHistory.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


exports.__esModule = true;
exports.default = useRouterHistory;

var _useQueries = __webpack_require__(/*! history/lib/useQueries */ "./node_modules/history/lib/useQueries.js");

var _useQueries2 = _interopRequireDefault(_useQueries);

var _useBasename = __webpack_require__(/*! history/lib/useBasename */ "./node_modules/history/lib/useBasename.js");

var _useBasename2 = _interopRequireDefault(_useBasename);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function useRouterHistory(createHistory) {
  return function (options) {
    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
    return history;
  };
}

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!*****************************************!*\
  !*** ./src/assets/images sync ^\.\/.*$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./banner-bg.jpg": "./src/assets/images/banner-bg.jpg",
	"./bobchen.png": "./src/assets/images/bobchen.png",
	"./def-whats-cn.png": "./src/assets/images/def-whats-cn.png",
	"./def-whats-en.png": "./src/assets/images/def-whats-en.png",
	"./dfp-dosomething-01-cn.png": "./src/assets/images/dfp-dosomething-01-cn.png",
	"./dfp-dosomething-01-en.png": "./src/assets/images/dfp-dosomething-01-en.png",
	"./dfp-dosomething-02-cn.png": "./src/assets/images/dfp-dosomething-02-cn.png",
	"./dfp-dosomething-02-en.png": "./src/assets/images/dfp-dosomething-02-en.png",
	"./dfp-dosomething-03-cn.png": "./src/assets/images/dfp-dosomething-03-cn.png",
	"./dfp-dosomething-03-en.png": "./src/assets/images/dfp-dosomething-03-en.png",
	"./dfp-target-img-cn.png": "./src/assets/images/dfp-target-img-cn.png",
	"./dfp-target-img-en.png": "./src/assets/images/dfp-target-img-en.png",
	"./jacklu.png": "./src/assets/images/jacklu.png",
	"./jacktung.png": "./src/assets/images/jacktung.png",
	"./logo-white-bg.png": "./src/assets/images/logo-white-bg.png",
	"./logo.png": "./src/assets/images/logo.png",
	"./maikliu.png": "./src/assets/images/maikliu.png",
	"./nav.png": "./src/assets/images/nav.png",
	"./partners/bitrue.png": "./src/assets/images/partners/bitrue.png",
	"./partners/consensus-cn.png": "./src/assets/images/partners/consensus-cn.png",
	"./partners/consensus-en.png": "./src/assets/images/partners/consensus-en.png",
	"./partners/genesis.png": "./src/assets/images/partners/genesis.png",
	"./partners/hillstone.png": "./src/assets/images/partners/hillstone.png",
	"./partners/uangme.png": "./src/assets/images/partners/uangme.png",
	"./railytian.png": "./src/assets/images/railytian.png",
	"./scarletxiao.png": "./src/assets/images/scarletxiao.png",
	"./superatomlogo.png": "./src/assets/images/superatomlogo.png",
	"./title-split.png": "./src/assets/images/title-split.png",
	"./wanchainlogo.png": "./src/assets/images/wanchainlogo.png",
	"./wechat-qrcode.jpeg": "./src/assets/images/wechat-qrcode.jpeg",
	"./why-01.png": "./src/assets/images/why-01.png",
	"./why-02.png": "./src/assets/images/why-02.png",
	"./why-03.png": "./src/assets/images/why-03.png",
	"./why-04.png": "./src/assets/images/why-04.png",
	"./why-bg.png": "./src/assets/images/why-bg.png",
	"./yangtao.png": "./src/assets/images/yangtao.png",
	"./zhangyiqin.png": "./src/assets/images/zhangyiqin.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/banner-bg.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/banner-bg.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/c40baa1871b082ac947c6cffcfba460e.jpg";

/***/ }),

/***/ "./src/assets/images/bobchen.png":
/*!***************************************!*\
  !*** ./src/assets/images/bobchen.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/8f1f2b4a308c2ac685cb9058ef527a38.png";

/***/ }),

/***/ "./src/assets/images/def-whats-cn.png":
/*!********************************************!*\
  !*** ./src/assets/images/def-whats-cn.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/5ac701caf5dd0332675cb7315ed06fcd.png";

/***/ }),

/***/ "./src/assets/images/def-whats-en.png":
/*!********************************************!*\
  !*** ./src/assets/images/def-whats-en.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d43c867e576373e8cda48bcc03ca5c3e.png";

/***/ }),

/***/ "./src/assets/images/dfp-dosomething-01-cn.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/dfp-dosomething-01-cn.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/0e8454804a8e0645ae2000de0e7841b5.png";

/***/ }),

/***/ "./src/assets/images/dfp-dosomething-01-en.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/dfp-dosomething-01-en.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/adea26ec58a97958074acda03bf31a0f.png";

/***/ }),

/***/ "./src/assets/images/dfp-dosomething-02-cn.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/dfp-dosomething-02-cn.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/1309df1cc89f1570dc80b4a27f4629d9.png";

/***/ }),

/***/ "./src/assets/images/dfp-dosomething-02-en.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/dfp-dosomething-02-en.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/48a1945967bbf85fa57fe81025dce9bb.png";

/***/ }),

/***/ "./src/assets/images/dfp-dosomething-03-cn.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/dfp-dosomething-03-cn.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d1187b445b57235530a333ad341e9a89.png";

/***/ }),

/***/ "./src/assets/images/dfp-dosomething-03-en.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/dfp-dosomething-03-en.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/9fdf341d8f74aea92a0df1404abc391a.png";

/***/ }),

/***/ "./src/assets/images/dfp-target-img-cn.png":
/*!*************************************************!*\
  !*** ./src/assets/images/dfp-target-img-cn.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/a71eaf7731c028d4417b3a152a7b3729.png";

/***/ }),

/***/ "./src/assets/images/dfp-target-img-en.png":
/*!*************************************************!*\
  !*** ./src/assets/images/dfp-target-img-en.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/e813a4d9dde7ca88761da019daf722f6.png";

/***/ }),

/***/ "./src/assets/images/jacklu.png":
/*!**************************************!*\
  !*** ./src/assets/images/jacklu.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/ed7a424fe029eb4216ee3930746e60ae.png";

/***/ }),

/***/ "./src/assets/images/jacktung.png":
/*!****************************************!*\
  !*** ./src/assets/images/jacktung.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/b7d25b9afd1c230cecd1e114ca4c58e9.png";

/***/ }),

/***/ "./src/assets/images/logo-white-bg.png":
/*!*********************************************!*\
  !*** ./src/assets/images/logo-white-bg.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7ef3309fb67df0aa2af2098895c9af70.png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/a0e0355032c0ddeb0a0124afdb78dc57.png";

/***/ }),

/***/ "./src/assets/images/maikliu.png":
/*!***************************************!*\
  !*** ./src/assets/images/maikliu.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/f012414e782572f5f1efce96c5dbca84.png";

/***/ }),

/***/ "./src/assets/images/nav.png":
/*!***********************************!*\
  !*** ./src/assets/images/nav.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/671c517aea9e995bd4d8eab1800968f0.png";

/***/ }),

/***/ "./src/assets/images/partners/bitrue.png":
/*!***********************************************!*\
  !*** ./src/assets/images/partners/bitrue.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/15cfe0addb1568877603c2fd9477ad38.png";

/***/ }),

/***/ "./src/assets/images/partners/consensus-cn.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/partners/consensus-cn.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/e68d94a80c74375fbc09fd51d4a801d7.png";

/***/ }),

/***/ "./src/assets/images/partners/consensus-en.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/partners/consensus-en.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/46377b6fd58e524ef5f72a68ba441269.png";

/***/ }),

/***/ "./src/assets/images/partners/genesis.png":
/*!************************************************!*\
  !*** ./src/assets/images/partners/genesis.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/8b1b2b5c6844ccf8c9bd0333f507cd7b.png";

/***/ }),

/***/ "./src/assets/images/partners/hillstone.png":
/*!**************************************************!*\
  !*** ./src/assets/images/partners/hillstone.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/66cf954a244528e26ee945d6540a76b1.png";

/***/ }),

/***/ "./src/assets/images/partners/uangme.png":
/*!***********************************************!*\
  !*** ./src/assets/images/partners/uangme.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/91f4c906337cf7caadd39c10bb7449e1.png";

/***/ }),

/***/ "./src/assets/images/railytian.png":
/*!*****************************************!*\
  !*** ./src/assets/images/railytian.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/4492934ecde1fe325a60163d72580470.png";

/***/ }),

/***/ "./src/assets/images/scarletxiao.png":
/*!*******************************************!*\
  !*** ./src/assets/images/scarletxiao.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/9c4412e32194d17d806313e2b6c96739.png";

/***/ }),

/***/ "./src/assets/images/superatomlogo.png":
/*!*********************************************!*\
  !*** ./src/assets/images/superatomlogo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/8b8501da70caf1c0de20819caf4261a9.png";

/***/ }),

/***/ "./src/assets/images/title-split.png":
/*!*******************************************!*\
  !*** ./src/assets/images/title-split.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/e25ca016c9014f78b1e3227a77231b21.png";

/***/ }),

/***/ "./src/assets/images/wanchainlogo.png":
/*!********************************************!*\
  !*** ./src/assets/images/wanchainlogo.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/bddf5e00d3fd1b0c92226e72e7b2ddff.png";

/***/ }),

/***/ "./src/assets/images/wechat-qrcode.jpeg":
/*!**********************************************!*\
  !*** ./src/assets/images/wechat-qrcode.jpeg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/9538f36c18f1c20050c05d0a551f4243.jpeg";

/***/ }),

/***/ "./src/assets/images/why-01.png":
/*!**************************************!*\
  !*** ./src/assets/images/why-01.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/507ea3a5caa19f422328f7217e7e543d.png";

/***/ }),

/***/ "./src/assets/images/why-02.png":
/*!**************************************!*\
  !*** ./src/assets/images/why-02.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/0efa0897a3a745ca94e6504e9975db19.png";

/***/ }),

/***/ "./src/assets/images/why-03.png":
/*!**************************************!*\
  !*** ./src/assets/images/why-03.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/2c1dcb671074056ad75e37f7550f8d69.png";

/***/ }),

/***/ "./src/assets/images/why-04.png":
/*!**************************************!*\
  !*** ./src/assets/images/why-04.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/db62505a53875d4368fb08c4fe996f8e.png";

/***/ }),

/***/ "./src/assets/images/why-bg.png":
/*!**************************************!*\
  !*** ./src/assets/images/why-bg.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d0a914ffa16cf61511f85ec7c565dd90.png";

/***/ }),

/***/ "./src/assets/images/yangtao.png":
/*!***************************************!*\
  !*** ./src/assets/images/yangtao.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/2576293bbb223e2ea9cc096cc8155d16.png";

/***/ }),

/***/ "./src/assets/images/zhangyiqin.png":
/*!******************************************!*\
  !*** ./src/assets/images/zhangyiqin.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fb17a44e473d6fbd092293ac77517ed1.png";

/***/ }),

/***/ "./src/components/center/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/center/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");


var Center = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: __webpack_require__(/*! ./index.module.less */ "./src/components/center/index.module.less")
})(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", props);
});
/* harmony default export */ __webpack_exports__["default"] = (Center);

/***/ }),

/***/ "./src/components/center/index.module.less":
/*!*************************************************!*\
  !*** ./src/components/center/index.module.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports ={wrapper:'aa7ec1',css:'.aa7ec1{width:100%;max-width:1200px;margin-left:auto;margin-right:auto}'}

/***/ }),

/***/ "./src/components/nav/index.jsx":
/*!**************************************!*\
  !*** ./src/components/nav/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/utils/common */ "./src/utils/common.js");
/* harmony import */ var _components_center__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/center */ "./src/components/center/index.jsx");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Nav = (_dec = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: __webpack_require__(/*! ./index.module.less */ "./src/components/nav/index.module.less") // connect

}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.state = {
      ceiling: false,
      localeId: '',
      localeUrl: '',
      isMobile: false,
      isShowButton: false
    };
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_this));
    _this.scroll = _this.scroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Nav, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        localeId: Object(koot__WEBPACK_IMPORTED_MODULE_1__["getLocaleId"])()
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var url = window.location.href;
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
      this.setState({
        localeUrl: Object(koot__WEBPACK_IMPORTED_MODULE_1__["getLocaleId"])() === 'zh' ? _src_utils_common__WEBPACK_IMPORTED_MODULE_3__["default"].updateURLParameter(url, 'hl', 'en') : _src_utils_common__WEBPACK_IMPORTED_MODULE_3__["default"].updateURLParameter(url, 'hl', 'zh'),
        isMobile: window.isMobile === true ? window.isMobile : false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      // TODO
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 300) {
        this.setState({
          ceiling: true
        });
      } else {
        this.setState({
          ceiling: false
        });
      }
    }
  }, {
    key: "scroll",
    value: function scroll(top, e) {
      e.preventDefault();
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  }, {
    key: "scroll2",
    value: function scroll2(top, e) {
      e.preventDefault();
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
      this.setState({
        isShowButton: !this.state.isShowButton
      });
    }
  }, {
    key: "clickButton",
    value: function clickButton() {
      var _this2 = this;

      this.setState({
        isShowButton: !this.state.isShowButton
      });

      if (this.state.isShowButton == false) {
        setTimeout(function () {
          _this2.setState({
            isShowButton: false
          });
        }, 3000);
      }
    }
  }, {
    key: "clickButton2",
    value: function clickButton2() {
      this.setState({
        isShowButton: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this3 = this;

      var className = this.props.className;
      var _this$state = this.state,
          localeId = _this$state.localeId,
          localeUrl = _this$state.localeUrl,
          isMobile = _this$state.isMobile,
          isShowButton = _this$state.isShowButton;
      var navClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, _defineProperty(_classNames, className, true), _defineProperty(_classNames, 'ceiling', this.state.ceiling), _classNames));
      var navDiv;

      if (!isShowButton) {
        navDiv = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          title: "down",
          className: "nav-down",
          onClick: function onClick(e) {
            return _this3.clickButton();
          }
        });
      } else {
        navDiv = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "nav-links"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: localeUrl,
          className: "other-link",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon iconfont icon-global"
        }), localeId === 'en' ? 'ZH' : 'EN')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#home",
          onClick: function onClick(e) {
            return _this3.scroll2(0, e);
          }
        }, __("navs.home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#team",
          onClick: function onClick(e) {
            return _this3.scroll2(4500, e);
          }
        }, __("navs.team"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#partners",
          onClick: function onClick(e) {
            return _this3.scroll2(4100, e);
          }
        }, __("navs.partners"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "/FinNexus_Whitepaper_zh.pdf",
          target: "_blank"
        }, __("navs.whitePaperZh"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "FinNexus_Whitepaper_en.pdf",
          target: "_blank"
        }, __("navs.whitePaperEn"))));
      }

      if (isMobile) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
          className: navClassNames
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "div-down"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "logo",
          onClick: function onClick(e) {
            return _this3.clickButton2();
          }
        }), navDiv));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
          className: navClassNames
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          className: "title-hidden"
        }, __("pages.home.title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "/",
          title: "home",
          className: "logo"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "nav-links"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#home",
          onClick: function onClick(e) {
            return _this3.scroll(0, e);
          }
        }, __("navs.home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#team",
          onClick: function onClick(e) {
            return _this3.scroll(3900, e);
          }
        }, __("navs.team"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#partners",
          onClick: function onClick(e) {
            return _this3.scroll(3393, e);
          }
        }, __("navs.partners"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "nav-sub-wrap"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "###"
        }, __("navs.whitePaper"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "iconfont icon-triangle-down"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "nav-sub"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "/FinNexus_Whitepaper_zh.pdf",
          target: "_blank"
        }, __("navs.whitePaperZh"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "FinNexus_Whitepaper_en.pdf",
          target: "_blank"
        }, __("navs.whitePaperEn")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "others"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: localeUrl,
          className: "other-link",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon iconfont icon-global"
        }), localeId === 'en' ? 'ZH' : 'EN'))));
      }
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (Nav);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/components/nav/index.module.less":
/*!**********************************************!*\
  !*** ./src/components/nav/index.module.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports ={wrapper:'f54563',css:'.f54563{display:block;position:fixed;z-index:10;top:0;left:0;width:100%;height:64px;line-height:64px;font-size:14px;background:rgba(22,7,56,.1);color:#fff;transition:all .5s ease}.f54563.ceiling{background:#4e35b1}.f54563 .title-hidden{display:block;position:absolute;top:-100%;left:-100%}.f54563 .logo{display:block;width:50%;height:44px;background:url("' + __webpack_require__(/*! ./src/assets/images/logo.png */ "./src/assets/images/logo.png") + '") 0 no-repeat;background-size:170px 38px;float:left;margin:10px}.f54563 .icon{font-size:14px;position:absolute;top:0;left:6px}.f54563>.wrapper{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;width:100%;height:100%;position:relative;padding-left:.71428571em;padding-right:.71428571em}.f54563>.wrapper a{display:block;position:relative;height:100%;padding:0 24px;color:hsla(0,0%,99.6%,.6);text-decoration:none;white-space:nowrap}.f54563>.wrapper a:hover{color:#fefefe}.f54563 .nav-links{display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;font-size:16px;margin-left:100px}.f54563 .nav-links li{display:block;position:relative}.f54563 .nav-links li.nav-sub-wrap:hover .nav-sub{display:inline}.f54563 .nav-links li.nav-sub-wrap .nav-sub{display:none;background-color:#fff;border-radius:8px;box-shadow:0 0 15px rgba(68,47,168,.2);position:absolute;top:60px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.f54563 .nav-links li.nav-sub-wrap .nav-sub li a{color:#3b3d55;font-size:14px;line-height:50px;padding:0;margin:0 14px;border-bottom:1px solid #dee2eb}.f54563 .nav-links li.nav-sub-wrap .nav-sub li a:hover{color:#5b33c9}.f54563 .nav-links li.nav-sub-wrap .nav-sub li:last-of-type a{border:none}.f54563 .others{-webkit-flex:0;flex:0;white-space:nowrap}.f54563 .others .other-link{padding-left:26px;padding-right:10px}.f54563 .div-down{display:block}.f54563 .div-down .nav-links{display:block;float:right;margin-right:20px;text-align:center;background:#4e35b1}.f54563 .div-down .nav-links li{line-height:35px}.f54563 .div-down .nav-links li a{text-decoration:none;color:#fff;padding:10px}.f54563 .div-down .nav-links li .icon{font-size:14px;position:absolute;top:0;left:25px}.f54563 .div-down .nav-links li.nav-sub-wrap:hover .nav-sub{display:inline}.f54563 .div-down .nav-links li.nav-sub-wrap .nav-sub{display:none;background-color:#fff;border-radius:8px;box-shadow:0 0 15px rgba(68,47,168,.2);position:absolute;top:60px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.f54563 .div-down .nav-links li.nav-sub-wrap .nav-sub li a{color:#3b3d55;font-size:14px;line-height:50px;padding:0;margin:0 14px;border-bottom:1px solid #dee2eb}.f54563 .div-down .nav-links li.nav-sub-wrap .nav-sub li a:hover{color:#5b33c9}.f54563 .div-down .nav-links li.nav-sub-wrap .nav-sub li:last-of-type a{border:none}.f54563 .nav-down{background:url("' + __webpack_require__(/*! ./src/assets/images/nav.png */ "./src/assets/images/nav.png") + '") 0 no-repeat;width:38px;height:38px;background-size:38px 38px;float:right;margin:10px}'}

/***/ }),

/***/ "./src/index.inject.js":
/*!*****************************!*\
  !*** ./src/index.inject.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* global
    __SVG_ICON_PACK__:false
*/
/* harmony default export */ __webpack_exports__["default"] = ({// performanceInfos: () => `<!-- rendered: ${new Date().toISOString()} -->`,
  // svgIconPack: __SVG_ICON_PACK__
});

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koot_React_route_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koot/React/route-check */ "./node_modules/koot/React/route-check.js");
/* harmony import */ var koot_React_route_check__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koot_React_route_check__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @views/app */ "./src/views/app.jsx");


/**
 * @type {Object} 路由配置对象
 * 原则上支持任何与 `react-router` (v3) 兼容的对象
 * - 可使用 koot-router 提供的方法封装路由配置对象
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/',
  component: _views_app__WEBPACK_IMPORTED_MODULE_1__["default"],
  // 项目的根层组件
  indexRoute: {
    /**
     * 标准写法: 打包后，该组件会存在于核心包中
     * - 推荐小型项目或大型项目的小型页面使用
     */
    // component: require('@views/home').default

    /**
     * 代码分割写法: 打包后，该组件会存在于独立的 .js 文件中
     * - 推荐大型项目使用
     * - 推荐使用 koot 提供的 `routeCheck()` 方法保证路由组件的正确渲染 (详情请查阅文档)
     */
    getComponent: function getComponent(nextState, cb) {
      Promise.resolve(/*! import() | PageHome */).then(__webpack_require__.bind(null, /*! @views/home */ "./src/views/home/index.jsx")).then(function (module) {
        if (koot_React_route_check__WEBPACK_IMPORTED_MODULE_0___default()(nextState)) cb(null, module.default);
      });
    }
  }
  /* childRoutes: [
      {
          path: 'start',
          getComponent: (nextState, cb) => {
              import(
                  '@views/start'
              ).then(module => {
                  if (routeCheck(nextState)) cb(null, module.default);
              });
          }
      }
  ] */

});

/***/ }),

/***/ "./src/server/before.js":
/*!******************************!*\
  !*** ./src/server/before.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/server/routes/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * **服务器端生命周期**
 *
 * _创建 Koa 实例后、挂载任何中间件之前_
 */

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(app) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 挂载路由
            app.use(_routes__WEBPACK_IMPORTED_MODULE_0__["default"]);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/** @type {Object} 服务器路由对象 (koa-router) */

var router = koa_router__WEBPACK_IMPORTED_MODULE_0___default()();
/** @type {Object} 服务器路由表 */

/* harmony default export */ __webpack_exports__["default"] = (router.routes()); // ----------------------------------------------------------------------------

router.get('/api/timestamp',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(ctx) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.set('Access-Control-Allow-Origin', '*');
            ctx.body = {
              ts: Date.now()
            };

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");

/**
 * @type {Object|Function} 项目使用的 reducer，接受以下格式/形式
 * - reducer 函数
 * - `combineReducer` 返回的函数结果
 * - 类型是 _Object_ 的 reducer 对照表
 */

var appReducer = undefined;
/** @type {Array} 项目使用的 middleware 列表 */

var appMiddlewares = [];
if (false) {}
/**
 * 创建 Redux store 的方法
 * 原则上支持任何与 `redux` 兼容的 store 对象
 * - 可使用 koot-redux 提供的方法进行封装
 *
 * 本例为 Redux 最基本的写法
 */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(koot__WEBPACK_IMPORTED_MODULE_0__["createStore"])(appReducer, appMiddlewares);
});

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * URL参数转换函数
   * @param {String} url 目标url
   * @param {String} param 需要替换的参数名称
   * @param {String} paramVal 替换后的参数的值
   * @returns {String} 参数替换后的url
   */
  updateURLParameter: function updateURLParameter(url, param, paramVal) {
    if (url && param && paramVal) {
      var newAdditionalURL = "";
      var tempArray = url.split("?");
      var baseURL = tempArray[0];
      var additionalURL = tempArray[1];
      var temp = "";

      if (additionalURL) {
        tempArray = additionalURL.split("&");

        for (var i = 0; i < tempArray.length; i++) {
          if (tempArray[i].split('=')[0] != param) {
            newAdditionalURL += temp + tempArray[i];
            temp = "&";
          }
        }
      }

      return "".concat(baseURL, "?").concat(newAdditionalURL).concat(temp).concat(param, "=").concat(paramVal);
    }

    return url;
  }
});

/***/ }),

/***/ "./src/views/app.jsx":
/*!***************************!*\
  !*** ./src/views/app.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/nav */ "./src/components/nav/index.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // ----------------------------------------------------------------------------

var App = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: __webpack_require__(/*! ./app.module.less */ "./src/views/app.module.less")
})(function (_ref) {
  var className = _ref.className,
      children = _ref.children,
      location = _ref.location,
      props = _objectWithoutProperties(_ref, ["className", "children", "location"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([className, {
      'is-home': location.pathname === '' || location.pathname === '/'
    }])
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    location: location
  }, props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    children: children
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (App); // ----------------------------------------------------------------------------

var Main = function Main(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", props);
};

/***/ }),

/***/ "./src/views/app.module.less":
/*!***********************************!*\
  !*** ./src/views/app.module.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports ={wrapper:'d7d4ba',css:'.d7d4ba{position:relative}.d7d4ba>main a{display:inline-block;color:#0288d1;text-decoration:none;line-height:1em}.d7d4ba>main a .icon{width:16px;height:16px;vertical-align:bottom}.d7d4ba>main a:hover{color:#000}.d7d4ba>main a:active{color:#a6a6a6}.d7d4ba.is-home>main{border-top-width:0}'}

/***/ }),

/***/ "./src/views/home/index.jsx":
/*!**********************************!*\
  !*** ./src/views/home/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ "./node_modules/koot/index.js");
/* harmony import */ var _components_center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/center */ "./src/components/center/index.jsx");
/* harmony import */ var _assets_images_dfp_target_img_cn_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/images/dfp-target-img-cn.png */ "./src/assets/images/dfp-target-img-cn.png");
/* harmony import */ var _assets_images_dfp_target_img_cn_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dfp_target_img_cn_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_dfp_dosomething_01_cn_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/images/dfp-dosomething-01-cn.png */ "./src/assets/images/dfp-dosomething-01-cn.png");
/* harmony import */ var _assets_images_dfp_dosomething_01_cn_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dfp_dosomething_01_cn_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_dfp_dosomething_02_cn_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/images/dfp-dosomething-02-cn.png */ "./src/assets/images/dfp-dosomething-02-cn.png");
/* harmony import */ var _assets_images_dfp_dosomething_02_cn_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dfp_dosomething_02_cn_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_dfp_dosomething_03_cn_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/images/dfp-dosomething-03-cn.png */ "./src/assets/images/dfp-dosomething-03-cn.png");
/* harmony import */ var _assets_images_dfp_dosomething_03_cn_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dfp_dosomething_03_cn_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_def_whats_cn_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @assets/images/def-whats-cn.png */ "./src/assets/images/def-whats-cn.png");
/* harmony import */ var _assets_images_def_whats_cn_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_def_whats_cn_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_dfp_target_img_en_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @assets/images/dfp-target-img-en.png */ "./src/assets/images/dfp-target-img-en.png");
/* harmony import */ var _assets_images_dfp_target_img_en_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dfp_target_img_en_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_dfp_dosomething_01_en_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @assets/images/dfp-dosomething-01-en.png */ "./src/assets/images/dfp-dosomething-01-en.png");
/* harmony import */ var _assets_images_dfp_dosomething_01_en_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dfp_dosomething_01_en_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_dfp_dosomething_02_en_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @assets/images/dfp-dosomething-02-en.png */ "./src/assets/images/dfp-dosomething-02-en.png");
/* harmony import */ var _assets_images_dfp_dosomething_02_en_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dfp_dosomething_02_en_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_dfp_dosomething_03_en_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @assets/images/dfp-dosomething-03-en.png */ "./src/assets/images/dfp-dosomething-03-en.png");
/* harmony import */ var _assets_images_dfp_dosomething_03_en_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_dfp_dosomething_03_en_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_def_whats_en_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @assets/images/def-whats-en.png */ "./src/assets/images/def-whats-en.png");
/* harmony import */ var _assets_images_def_whats_en_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_def_whats_en_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_images_partners_genesis_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @assets/images/partners/genesis.png */ "./src/assets/images/partners/genesis.png");
/* harmony import */ var _assets_images_partners_genesis_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_images_partners_genesis_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_images_partners_consensus_cn_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @assets/images/partners/consensus-cn.png */ "./src/assets/images/partners/consensus-cn.png");
/* harmony import */ var _assets_images_partners_consensus_cn_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_images_partners_consensus_cn_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_images_partners_consensus_en_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @assets/images/partners/consensus-en.png */ "./src/assets/images/partners/consensus-en.png");
/* harmony import */ var _assets_images_partners_consensus_en_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_images_partners_consensus_en_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_images_partners_hillstone_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @assets/images/partners/hillstone.png */ "./src/assets/images/partners/hillstone.png");
/* harmony import */ var _assets_images_partners_hillstone_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_images_partners_hillstone_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_images_partners_bitrue_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @assets/images/partners/bitrue.png */ "./src/assets/images/partners/bitrue.png");
/* harmony import */ var _assets_images_partners_bitrue_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_images_partners_bitrue_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_images_partners_uangme_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @assets/images/partners/uangme.png */ "./src/assets/images/partners/uangme.png");
/* harmony import */ var _assets_images_partners_uangme_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_images_partners_uangme_png__WEBPACK_IMPORTED_MODULE_18__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var targetImg = Object(koot__WEBPACK_IMPORTED_MODULE_1__["getLocaleId"])() === 'en' ? _assets_images_dfp_target_img_en_png__WEBPACK_IMPORTED_MODULE_8___default.a : _assets_images_dfp_target_img_cn_png__WEBPACK_IMPORTED_MODULE_3___default.a;
var doSomethingImgOne = Object(koot__WEBPACK_IMPORTED_MODULE_1__["getLocaleId"])() === 'en' ? _assets_images_dfp_dosomething_01_en_png__WEBPACK_IMPORTED_MODULE_9___default.a : _assets_images_dfp_dosomething_01_cn_png__WEBPACK_IMPORTED_MODULE_4___default.a;
var doSomethingImgTwo = Object(koot__WEBPACK_IMPORTED_MODULE_1__["getLocaleId"])() === 'en' ? _assets_images_dfp_dosomething_02_en_png__WEBPACK_IMPORTED_MODULE_10___default.a : _assets_images_dfp_dosomething_02_cn_png__WEBPACK_IMPORTED_MODULE_5___default.a;
var doSomethingImgThree = Object(koot__WEBPACK_IMPORTED_MODULE_1__["getLocaleId"])() === 'en' ? _assets_images_dfp_dosomething_03_en_png__WEBPACK_IMPORTED_MODULE_11___default.a : _assets_images_dfp_dosomething_03_cn_png__WEBPACK_IMPORTED_MODULE_6___default.a;
var whatsImg = Object(koot__WEBPACK_IMPORTED_MODULE_1__["getLocaleId"])() === 'en' ? _assets_images_def_whats_en_png__WEBPACK_IMPORTED_MODULE_12___default.a : _assets_images_def_whats_cn_png__WEBPACK_IMPORTED_MODULE_7___default.a;


var partnerLists = [_assets_images_partners_genesis_png__WEBPACK_IMPORTED_MODULE_13___default.a, Object(koot__WEBPACK_IMPORTED_MODULE_1__["getLocaleId"])() === 'en' ? _assets_images_partners_consensus_en_png__WEBPACK_IMPORTED_MODULE_15___default.a : _assets_images_partners_consensus_cn_png__WEBPACK_IMPORTED_MODULE_14___default.a, _assets_images_partners_hillstone_png__WEBPACK_IMPORTED_MODULE_16___default.a, _assets_images_partners_bitrue_png__WEBPACK_IMPORTED_MODULE_17___default.a, _assets_images_partners_uangme_png__WEBPACK_IMPORTED_MODULE_18___default.a];
var PageHome = (_dec = Object(koot__WEBPACK_IMPORTED_MODULE_1__["extend"])({
  styles: __webpack_require__(/*! ./index.module.less */ "./src/views/home/index.module.less"),
  pageinfo: {
    title: __("pages.home.title"),
    metas: [{
      name: 'keywords',
      content: __("pages.home.keywords")
    }, {
      name: 'description',
      content: __("pages.home.description")
    }]
  }
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageHome, _React$Component);

  function PageHome(props) {
    var _this;

    _classCallCheck(this, PageHome);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageHome).call(this, props));
    _this.state = {
      isMobile: false
    };
    _this.handlerSubscribe = _this.handlerSubscribe.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PageHome, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isMobile: window.isMobile === true ? window.isMobile : false
      });
    }
  }, {
    key: "handlerSubscribe",
    value: function handlerSubscribe() {
      window.open('https://mailchi.mp/9c15712d2bbf/finnexus-newsletter');
    }
  }, {
    key: "render",
    value: function render() {
      var isMobile = this.state.isMobile;

      if (isMobile) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: this.props.className
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "home-wrap"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "banner-mobile"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, __("pages.home.banner.title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, __("pages.home.banner.by"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "why-dfp-mobile"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
          className: "why-dfp-list"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.why.title", {
              name: 'FinNexus'
            })
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, __("pages.home.why.description"))), __("pages.home.why.list").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
            key: index,
            className: item.clazz
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.desc));
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "target-dfp-mobile"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.target.title", {
              name: 'FinNexus'
            })
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "g-title-sub"
        }, __("pages.home.slogan")), __("pages.home.target.content").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: index,
            className: "g-description"
          }, item);
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "target-dfp-img",
          src: targetImg,
          alt: ""
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "do-something-dfp-mobile"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.doSomething", {
              name: 'FinNexus'
            })
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "g-title-sub"
        }, __("pages.home.slogan"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "content"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "do-something-list"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "do-something-img-01",
          src: doSomethingImgOne,
          alt: ""
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "do-something-img-02",
          src: doSomethingImgTwo,
          alt: ""
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "do-something-img-03",
          src: doSomethingImgThree,
          alt: ""
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "whats-dfp-mobile"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.whats.title", {
              name: 'FinNexus'
            })
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "g-title-sub"
        }, __("pages.home.slogan")), __("pages.home.whats.content").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: index,
            className: "g-description"
          }, item);
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "whats-dfp-img",
          src: whatsImg,
          alt: ""
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "partner-dfp-mobile"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.partner", {
              name: 'FinNexus'
            })
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "g-title-sub"
        }, __("pages.home.slogan"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "partner-lists"
        }, partnerLists.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: item,
            alt: ""
          }));
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "teams-dfp-mobile"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.team", {
              name: 'FinNexus'
            })
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, __("pages.home.operationsTeam.title"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "team-list"
        }, __("pages.home.operationsTeam.list").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "avatar"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")("./" + item.avatar),
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "name"
          }, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "job"
          }, item.job), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "dividing-line"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "desc"
          }, item.desc.map(function (itemDesc, i) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
              key: i
            }, itemDesc, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
          })));
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-left"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, __("pages.home.investmentAgency.title"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-description"
        }, __("pages.home.investmentAgency.description").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: index
          }, item);
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "team-list company-list"
        }, __("pages.home.investmentAgency.list").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "logo"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")("./" + item.pic),
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "dividing-line"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "desc"
          }, item.desc.map(function (itemDesc, i) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
              key: i
            }, itemDesc, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
          })));
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-right"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, __("pages.home.mentor.title"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-description"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, __("pages.home.mentor.description"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "team-list"
        }, __("pages.home.mentor.list").map(function (item, index) {
          if (index === 1) return null;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "avatar"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")("./" + item.avatar),
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "name"
          }, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "job"
          }, item.job), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "dividing-line"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "desc"
          }, item.desc.map(function (itemDesc, i) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
              key: i
            }, itemDesc, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
          })));
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "footer-mobile"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "left"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://www.linkedin.com/company/finnexus/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "iconfont icon-in"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://twitter.com/fin_nexus/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "iconfont icon-twitter"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://www.facebook.com/FinNexus/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "iconfont icon-facebook"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://medium.com/finnexus/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "iconfont icon-medium"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "wechat-wrap",
          href: "javascript:;",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "iconfont icon-weixin"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "wechat-pop"
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "right subscribe",
          onClick: this.handlerSubscribe
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          placeholder: __("pages.home.subscribePlaceholder")
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, __("pages.home.subscribe"))))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: this.props.className
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "home-wrap"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "banner"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, __("pages.home.banner.title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, __("pages.home.banner.by"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "why-dfp"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
          className: "why-dfp-list"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.why.title", {
              name: 'FinNexus'
            })
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, __("pages.home.why.description"))), __("pages.home.why.list").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
            key: index,
            className: item.clazz
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.desc));
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "target-dfp"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.target.title", {
              name: 'FinNexus'
            })
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "g-title-sub"
        }, __("pages.home.slogan")), __("pages.home.target.content").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: index,
            className: "g-description"
          }, item);
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "target-dfp-img",
          src: targetImg,
          alt: ""
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "do-something-dfp"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.doSomething", {
              name: 'FinNexus'
            })
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "g-title-sub"
        }, __("pages.home.slogan"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "content"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "do-something-list"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "do-something-img-01",
          src: doSomethingImgOne,
          alt: ""
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "do-something-img-02",
          src: doSomethingImgTwo,
          alt: ""
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "do-something-img-03",
          src: doSomethingImgThree,
          alt: ""
        })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "whats-dfp"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.whats.title", {
              name: 'FinNexus'
            })
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "g-title-sub"
        }, __("pages.home.slogan")), __("pages.home.whats.content").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: index,
            className: "g-description"
          }, item);
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "whats-dfp-img",
          src: whatsImg,
          alt: ""
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "partner-dfp"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.partner", {
              name: 'FinNexus'
            })
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "g-title-sub"
        }, __("pages.home.slogan"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "partner-lists"
        }, partnerLists.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: item,
            alt: ""
          }));
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "teams-dfp"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "g-title",
          dangerouslySetInnerHTML: {
            __html: __("pages.home.team", {
              name: 'FinNexus'
            })
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, __("pages.home.operationsTeam.title"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "team-list"
        }, __("pages.home.operationsTeam.list").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "avatar"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")("./" + item.avatar),
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "name"
          }, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "job"
          }, item.job), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "dividing-line"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "desc"
          }, item.desc.map(function (itemDesc, i) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
              key: i
            }, itemDesc, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
          })));
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-left"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, __("pages.home.investmentAgency.title"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-description"
        }, __("pages.home.investmentAgency.description").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: index
          }, item);
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "team-list company-list"
        }, __("pages.home.investmentAgency.list").map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "logo"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")("./" + item.pic),
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "dividing-line"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "desc"
          }, item.desc.map(function (itemDesc, i) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
              key: i
            }, itemDesc, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
          })));
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-right"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-title"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, __("pages.home.mentor.title"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "team-description"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, __("pages.home.mentor.description"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "team-list"
        }, __("pages.home.mentor.list").map(function (item, index) {
          if (index === 1) return null;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "avatar"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")("./" + item.avatar),
            alt: ""
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "name"
          }, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "job"
          }, item.job), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "dividing-line"
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "desc"
          }, item.desc.map(function (itemDesc, i) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
              key: i
            }, itemDesc, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
          })));
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          className: "footer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_center__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "left"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://www.linkedin.com/company/finnexus/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "iconfont icon-in"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://twitter.com/fin_nexus/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "iconfont icon-twitter"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://www.facebook.com/FinNexus/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "iconfont icon-facebook"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://medium.com/finnexus/",
          target: "_blank",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "iconfont icon-medium"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "wechat-wrap",
          href: "javascript:;",
          rel: "noopener noreferrer"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "iconfont icon-weixin"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "wechat-pop"
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "right subscribe",
          onClick: this.handlerSubscribe
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          placeholder: __("pages.home.subscribePlaceholder")
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, __("pages.home.subscribe")))))));
      }
    }
  }]);

  return PageHome;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (PageHome);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n/translate */ "./node_modules/koot/i18n/translate.js")["default"]))

/***/ }),

/***/ "./src/views/home/index.module.less":
/*!******************************************!*\
  !*** ./src/views/home/index.module.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports ={wrapper:'bb6414',css:'.bb6414 .g-title{font-size:45px;color:#3b3d55;line-height:100%;margin-bottom:20px}.bb6414 .g-title span{color:#5b33c9}.bb6414 .g-title-sub{display:inline-block;font-size:12px;color:#3b3d55;margin-bottom:20px;padding-left:30px;padding-right:30px;position:relative}.bb6414 .g-title-sub:before{background:linear-gradient(90deg,#637dff,#63b0ff);left:0}.bb6414 .g-title-sub:after,.bb6414 .g-title-sub:before{display:block;content:"";width:20px;height:2px;position:absolute;top:46%}.bb6414 .g-title-sub:after{background:linear-gradient(90deg,#63b0ff,#637dff);right:0}.bb6414 .g-description{font-size:16px;font-weight:400;color:#6c6e90;line-height:24px;margin:0}.bb6414 .tac{text-align:center}.bb6414 .banner{height:810px;background:url("' + __webpack_require__(/*! ./src/assets/images/banner-bg.jpg */ "./src/assets/images/banner-bg.jpg") + '") no-repeat 50%,linear-gradient(120deg,#653ac9 15%,#263fbe);background-size:auto 810px;color:#fefefe}.bb6414 .banner .wrapper{position:relative}.bb6414 .banner .wrapper .text{text-align:center;background:url("' + __webpack_require__(/*! ./src/assets/images/title-split.png */ "./src/assets/images/title-split.png") + '") center 78px no-repeat;background-size:292px 5px;position:absolute;top:318px;left:0}.bb6414 .banner .wrapper .text h3{font-size:46px;font-weight:700;line-height:100%;margin-bottom:64px}.bb6414 .banner .wrapper .text p:nth-child(2){font-size:20px;font-weight:700;margin:0}.bb6414 .banner .wrapper .text p:nth-child(3){font-size:14px}.bb6414 .banner-mobile{height:220px;background:url("' + __webpack_require__(/*! ./src/assets/images/banner-bg.jpg */ "./src/assets/images/banner-bg.jpg") + '") no-repeat;color:#fefefe;overflow:hidden;background-size:100% 220px}.bb6414 .banner-mobile .wrapper{position:relative}.bb6414 .banner-mobile .wrapper .text{text-align:center;background-size:292px 5px;position:absolute}.bb6414 .banner-mobile .wrapper .text h3{font-size:23px;font-weight:700;margin-bottom:5px;margin-top:105px;width:67%;text-align:left;padding-left:20px}.bb6414 .banner-mobile .wrapper .text p:nth-child(2){font-size:12px;font-weight:700;margin:0;width:58%;text-align:left;padding-left:20px}.bb6414 .banner-mobile .wrapper .text p:nth-child(3){font-size:14px}.bb6414 .why-dfp{height:650px}.bb6414 .why-dfp .wrapper .why-dfp-list{padding-top:130px}.bb6414 .why-dfp .wrapper .why-dfp-list dt{float:left;width:360px;height:380px;border:1px solid #e9e6f3;border-radius:6px;background:url("' + __webpack_require__(/*! ./src/assets/images/why-bg.png */ "./src/assets/images/why-bg.png") + '") 0 0/288px 275px no-repeat,url("' + __webpack_require__(/*! ./src/assets/images/why-01.png */ "./src/assets/images/why-01.png") + '") center 210px/275px 161px no-repeat}.bb6414 .why-dfp .wrapper .why-dfp-list dt h4{font-size:28px;margin-top:65px;margin-bottom:24px;padding-left:30px}.bb6414 .why-dfp .wrapper .why-dfp-list dt p{padding-left:30px;padding-right:30px;color:#6c6e90}.bb6414 .why-dfp .wrapper .why-dfp-list dd{float:left;width:270px;height:380px;margin-left:10px;border:1px solid #e9e6f3;border-radius:6px;text-align:center}.bb6414 .why-dfp .wrapper .why-dfp-list dd h4{font-size:20px;font-weight:700;color:#3537c0;line-height:24px;margin-top:60px;margin-bottom:17px}.bb6414 .why-dfp .wrapper .why-dfp-list dd p{font-size:20px;font-weight:400;color:#3537c0;line-height:24px;margin:0}.bb6414 .why-dfp .wrapper .why-dfp-list dd.one{background:url("' + __webpack_require__(/*! ./src/assets/images/why-02.png */ "./src/assets/images/why-02.png") + '") center 150px no-repeat;background-size:156px 183px}.bb6414 .why-dfp .wrapper .why-dfp-list dd.two{background:url("' + __webpack_require__(/*! ./src/assets/images/why-03.png */ "./src/assets/images/why-03.png") + '") center 165px no-repeat;background-size:156px 169px}.bb6414 .why-dfp .wrapper .why-dfp-list dd.three{background:url("' + __webpack_require__(/*! ./src/assets/images/why-04.png */ "./src/assets/images/why-04.png") + '") center 140px no-repeat;background-size:156px 197px}.bb6414 .why-dfp-mobile{height:1600px}.bb6414 .why-dfp-mobile .wrapper .why-dfp-list{padding-top:20px}.bb6414 .why-dfp-mobile .wrapper .why-dfp-list dt{height:380px;border:1px solid #e9e6f3;border-radius:6px;margin:10px;background:url("' + __webpack_require__(/*! ./src/assets/images/why-bg.png */ "./src/assets/images/why-bg.png") + '") 0 0/288px 275px no-repeat,url("' + __webpack_require__(/*! ./src/assets/images/why-01.png */ "./src/assets/images/why-01.png") + '") center 210px/275px 161px no-repeat}.bb6414 .why-dfp-mobile .wrapper .why-dfp-list dt h4{font-size:28px;margin-top:30px;margin-bottom:24px;padding-left:30px}.bb6414 .why-dfp-mobile .wrapper .why-dfp-list dt p{padding-left:30px;padding-right:30px;color:#6c6e90}.bb6414 .why-dfp-mobile .wrapper .why-dfp-list dd{height:380px;border:1px solid #e9e6f3;border-radius:6px;text-align:center;margin:10px}.bb6414 .why-dfp-mobile .wrapper .why-dfp-list dd h4{font-size:28px;font-weight:700;color:#3537c0;line-height:24px;margin-top:30px;margin-bottom:17px}.bb6414 .why-dfp-mobile .wrapper .why-dfp-list dd p{font-size:20px;font-weight:400;color:#3537c0;line-height:24px;margin:0}.bb6414 .why-dfp-mobile .wrapper .why-dfp-list dd.one{background:url("' + __webpack_require__(/*! ./src/assets/images/why-02.png */ "./src/assets/images/why-02.png") + '") center 150px no-repeat;background-size:156px 183px}.bb6414 .why-dfp-mobile .wrapper .why-dfp-list dd.two{background:url("' + __webpack_require__(/*! ./src/assets/images/why-03.png */ "./src/assets/images/why-03.png") + '") center 165px no-repeat;background-size:156px 169px}.bb6414 .why-dfp-mobile .wrapper .why-dfp-list dd.three{background:url("' + __webpack_require__(/*! ./src/assets/images/why-04.png */ "./src/assets/images/why-04.png") + '") center 140px no-repeat;background-size:156px 197px}.bb6414 .target-dfp{height:600px;background-color:#f9fafc}.bb6414 .target-dfp .wrapper{height:100%;padding-top:200px;padding-left:50px;background:url("' + __webpack_require__(/*! ./src/assets/images/logo-white-bg.png */ "./src/assets/images/logo-white-bg.png") + '") 0 no-repeat;background-size:537px 393px;position:relative}.bb6414 .target-dfp .wrapper .target-dfp-img{width:599px;height:508px;position:absolute;top:45px;right:0}.bb6414 .target-dfp-mobile{height:530px;background-color:#f9fafc}.bb6414 .target-dfp-mobile .wrapper{height:100%;background:url("' + __webpack_require__(/*! ./src/assets/images/logo-white-bg.png */ "./src/assets/images/logo-white-bg.png") + '") 0 no-repeat;background-size:537px 393px;position:relative}.bb6414 .target-dfp-mobile .wrapper .target-dfp-img{width:260px;height:260px;margin:0 auto;display:block}.bb6414 .target-dfp-mobile .wrapper .g-title{font-size:28px;color:#3b3d55;line-height:100%;margin-bottom:20px;padding-top:20px;text-align:center}.bb6414 .target-dfp-mobile .wrapper .g-title-sub{display:block;text-align:center}.bb6414 .target-dfp-mobile .wrapper .g-title-sub:before{background:linear-gradient(90deg,#637dff,#63b0ff);left:110px}.bb6414 .target-dfp-mobile .wrapper .g-title-sub:after{background:linear-gradient(90deg,#63b0ff,#637dff);right:110px}.bb6414 .target-dfp-mobile .wrapper .g-description{padding:0 50px}.bb6414 .do-something-dfp{height:700px}.bb6414 .do-something-dfp .title{text-align:center;padding-top:30px}.bb6414 .do-something-dfp .do-something-list{padding-top:40px}.bb6414 .do-something-dfp .do-something-list li{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;float:left;width:380px;height:360px;border:1px solid #e9e6f3;border-radius:6px;margin-right:30px}.bb6414 .do-something-dfp .do-something-list li:nth-of-type(3n){margin-right:0}.bb6414 .do-something-dfp .do-something-list li .do-something-img-01{display:block;width:349.5px;height:305.5px}.bb6414 .do-something-dfp .do-something-list li .do-something-img-02{display:block;width:360.5px;height:309px}.bb6414 .do-something-dfp .do-something-list li .do-something-img-03{display:block;width:271px;height:271px}.bb6414 .do-something-dfp-mobile{height:1240px}.bb6414 .do-something-dfp-mobile .title{text-align:center;padding-top:30px}.bb6414 .do-something-dfp-mobile .g-title{font-size:28px;color:#3b3d55;line-height:100%;margin-bottom:20px}.bb6414 .do-something-dfp-mobile .do-something-list{padding-top:0}.bb6414 .do-something-dfp-mobile .do-something-list li{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;height:360px;border:1px solid #e9e6f3;border-radius:6px;margin-right:10px;margin-left:10px;margin-bottom:10px}.bb6414 .do-something-dfp-mobile .do-something-list li:nth-of-type(3n){margin-right:0}.bb6414 .do-something-dfp-mobile .do-something-list li .do-something-img-01{display:block;width:349.5px;height:305.5px}.bb6414 .do-something-dfp-mobile .do-something-list li .do-something-img-02{display:block;width:360.5px;height:309px}.bb6414 .do-something-dfp-mobile .do-something-list li .do-something-img-03{display:block;width:271px;height:271px}.bb6414 .whats-dfp{height:700px;background-color:#f9fafc}.bb6414 .whats-dfp .wrapper{padding-top:247px;padding-left:700px;position:relative}.bb6414 .whats-dfp .whats-dfp-img{width:584.54545455px;height:427.27272727px;position:absolute;top:120px;left:0}.bb6414 .whats-dfp-mobile{background-color:#f9fafc}.bb6414 .whats-dfp-mobile .wrapper{padding-top:20px}.bb6414 .whats-dfp-mobile .whats-dfp-img{width:92%;display:block;margin:10px auto}.bb6414 .whats-dfp-mobile .g-title{font-size:28px;color:#3b3d55;line-height:100%;margin-bottom:0;text-align:center}.bb6414 .whats-dfp-mobile .g-title-sub{display:block;text-align:center}.bb6414 .whats-dfp-mobile .g-title-sub:before{background:linear-gradient(90deg,#637dff,#63b0ff);left:110px}.bb6414 .whats-dfp-mobile .g-title-sub:after{background:linear-gradient(90deg,#63b0ff,#637dff);right:110px}.bb6414 .whats-dfp-mobile .g-description{text-align:center}.bb6414 .partner-dfp{height:500px}.bb6414 .partner-dfp .wrapper{padding-top:75px}.bb6414 .partner-dfp .wrapper .title{text-align:center;margin-bottom:110px}.bb6414 .partner-dfp .wrapper .partner-lists li{display:block;float:left;width:192px;height:82px;border:1px solid #eaeaec;border-radius:4px;margin-right:40px;margin-bottom:40px;box-shadow:none;transition:all .2s ease}.bb6414 .partner-dfp .wrapper .partner-lists li:nth-of-type(5n){margin-right:0}.bb6414 .partner-dfp .wrapper .partner-lists li:hover{box-shadow:0 4px 14px #ccc}.bb6414 .partner-dfp .wrapper .partner-lists li img{width:190px;height:80px}.bb6414 .partner-dfp-mobile{height:410px}.bb6414 .partner-dfp-mobile .wrapper{padding-top:20px}.bb6414 .partner-dfp-mobile .wrapper .title{text-align:center;margin-bottom:40px}.bb6414 .partner-dfp-mobile .wrapper .g-title{font-size:28px;color:#3b3d55;line-height:100%;margin-bottom:5px;padding-top:0;text-align:center}.bb6414 .partner-dfp-mobile .wrapper .g-title-sub{display:block;text-align:center}.bb6414 .partner-dfp-mobile .wrapper .g-title-sub:before{background:linear-gradient(90deg,#637dff,#63b0ff);left:110px}.bb6414 .partner-dfp-mobile .wrapper .g-title-sub:after{background:linear-gradient(90deg,#63b0ff,#637dff);right:110px}.bb6414 .partner-dfp-mobile .wrapper .partner-lists li{display:block;float:left;width:166px;height:60px;border:1px solid #eaeaec;border-radius:4px;box-shadow:none;transition:all .2s ease;margin:10px}.bb6414 .partner-dfp-mobile .wrapper .partner-lists li:nth-of-type(5n){margin-right:0}.bb6414 .partner-dfp-mobile .wrapper .partner-lists li:hover{box-shadow:0 4px 14px #ccc}.bb6414 .partner-dfp-mobile .wrapper .partner-lists li img{width:180px;height:80px}.bb6414 .teams-dfp{height:1430px;background-color:#f9fafc}.bb6414 .teams-dfp .title{text-align:center;padding-top:70px;margin-bottom:60px}.bb6414 .teams-dfp .team-title{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:24px;font-weight:700;color:#5b33c9;margin-bottom:35px;position:relative}.bb6414 .teams-dfp .team-title>div{margin-right:20px}.bb6414 .teams-dfp .team-title:before{display:block;content:"";width:6px;height:6px;background:#fff;border:2px solid #6c63ff;border-radius:3px;position:absolute;top:38%;right:0}.bb6414 .teams-dfp .team-title:after{display:block;-webkit-flex:1;flex:1;content:"";height:0;border-top:1px dotted #d9dce7}.bb6414 .teams-dfp .team-description{height:140px;font-size:14px;color:#6c6e90;line-height:20px}.bb6414 .teams-dfp .team-description p{margin:0}.bb6414 .teams-dfp .team-list li{width:224px;height:410px;float:left;background:#fff;box-shadow:0 10px 10px hsla(0,0%,80%,.2);border:1px solid #e9e9f1;border-radius:5px;margin-right:20px;margin-bottom:70px;cursor:pointer;position:relative;transition:all .5s linear}.bb6414 .teams-dfp .team-list li:nth-of-type(5n){margin-right:0}.bb6414 .teams-dfp .team-list li:before{display:block;content:"";width:20px;height:2px;background-color:#5b33c9;position:absolute;top:-1px;left:50%;margin-left:-10px}.bb6414 .teams-dfp .team-list li:hover{box-shadow:0 14px 16px hsla(0,0%,80%,.5)}.bb6414 .teams-dfp .team-list li:hover .avatar{width:65px;height:65px;top:20px;left:20px;-webkit-transform:translateX(0);transform:translateX(0)}.bb6414 .teams-dfp .team-list li:hover .avatar img{width:65px;height:65px}.bb6414 .teams-dfp .team-list li:hover .name{font-size:16px;top:32px;left:94px;-webkit-transform:translateX(0);transform:translateX(0)}.bb6414 .teams-dfp .team-list li:hover .job{font-size:12px;top:54px;left:94px;-webkit-transform:translateX(0);transform:translateX(0)}.bb6414 .teams-dfp .team-list li:hover .desc{height:260px}.bb6414 .teams-dfp .team-list li:hover .dividing-line{margin-top:80px}.bb6414 .teams-dfp .team-list li:hover .logo{top:30px}.bb6414 .teams-dfp .team-list li .avatar{overflow:hidden;position:absolute;top:40px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.bb6414 .teams-dfp .team-list li .avatar,.bb6414 .teams-dfp .team-list li .avatar img{width:130px;height:130px;transition:all .5s ease .2s}.bb6414 .teams-dfp .team-list li .name{font-size:25px;font-weight:700;color:#3b3d55;top:190px;margin-bottom:14px}.bb6414 .teams-dfp .team-list li .job,.bb6414 .teams-dfp .team-list li .name{text-align:center;white-space:nowrap;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:all .5s ease .2s}.bb6414 .teams-dfp .team-list li .job{font-size:16px;color:#5b33c9;top:226px}.bb6414 .teams-dfp .team-list li .desc{display:block;height:72px;margin-left:20px;margin-right:20px;font-size:14px;color:#6c6e90;line-height:24px;overflow:hidden;word-break:break-all;transition:all .5s ease .2s;position:relative}.bb6414 .teams-dfp .team-list li .desc p{margin:0}.bb6414 .teams-dfp .team-list li .dividing-line{display:block;clear:both;height:23px;margin:250px 24px 23px;box-shadow:0 12px 14px -4px rgba(28,28,160,.1);background:transparent;transition:all .5s ease .2s}.bb6414 .teams-dfp .team-list li .logo{display:block;width:180px;height:32px;position:absolute;top:80px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:all .5s ease .2s}.bb6414 .teams-dfp .team-list li .logo img{width:180px;height:32px}.bb6414 .teams-dfp .company-list li:hover .desc{height:290px}.bb6414 .teams-dfp .company-list li:hover .dividing-line{margin-top:60px}.bb6414 .teams-dfp .company-list li .desc{height:172px}.bb6414 .teams-dfp .company-list li .dividing-line{margin-top:160px}.bb6414 .teams-dfp .team-left{width:468px;float:left}.bb6414 .teams-dfp .team-left .team-list li:nth-of-type(2n){margin:0}.bb6414 .teams-dfp .team-right{width:468px;float:right}.bb6414 .teams-dfp .team-right .team-list li:nth-of-type(2n){margin:0}.bb6414 .teams-dfp-mobile{height:1970px;background-color:#f9fafc}.bb6414 .teams-dfp-mobile .title{text-align:center;padding-top:10px;margin-bottom:10px}.bb6414 .teams-dfp-mobile .g-title{font-size:28px;color:#3b3d55;line-height:100%;margin-bottom:20px}.bb6414 .teams-dfp-mobile .team-title{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;font-size:24px;font-weight:700;color:#5b33c9;margin:20px;position:relative}.bb6414 .teams-dfp-mobile .team-title>div{display:block;text-align:center;margin:0 auto;font-size:28px}.bb6414 .teams-dfp-mobile .team-description{font-size:14px;color:#6c6e90;line-height:20px;margin:10px}.bb6414 .teams-dfp-mobile .team-description p{margin:0}.bb6414 .teams-dfp-mobile .team-list li{width:48%;background:#fff;box-shadow:0 10px 10px hsla(0,0%,80%,.2);border:1px solid #e9e9f1;border-radius:5px;cursor:pointer;position:relative;transition:all .5s linear;margin:3px;display:inline-block}.bb6414 .teams-dfp-mobile .team-list li:nth-of-type(5n){margin-right:0}.bb6414 .teams-dfp-mobile .team-list li:before{display:block;content:"";width:20px;height:2px;background-color:#5b33c9;position:absolute;top:-1px;left:50%;margin-left:-10px}.bb6414 .teams-dfp-mobile .team-list li:hover{box-shadow:0 14px 16px hsla(0,0%,80%,.5)}.bb6414 .teams-dfp-mobile .team-list li:hover .avatar{width:65px;height:65px;top:20px;left:20px;-webkit-transform:translateX(0);transform:translateX(0)}.bb6414 .teams-dfp-mobile .team-list li:hover .avatar img{width:65px;height:65px}.bb6414 .teams-dfp-mobile .team-list li:hover .name{font-size:16px;top:32px;left:94px;-webkit-transform:translateX(0);transform:translateX(0)}.bb6414 .teams-dfp-mobile .team-list li:hover .job{font-size:12px;top:54px;left:94px;-webkit-transform:translateX(0);transform:translateX(0)}.bb6414 .teams-dfp-mobile .team-list li:hover .desc{height:260px}.bb6414 .teams-dfp-mobile .team-list li:hover .dividing-line{margin-top:80px}.bb6414 .teams-dfp-mobile .team-list li:hover .logo{top:30px}.bb6414 .teams-dfp-mobile .team-list li .avatar{width:60px;height:60px;overflow:hidden;position:absolute;top:40px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:all .5s ease .2s}.bb6414 .teams-dfp-mobile .team-list li .avatar img{width:60px;height:60px;transition:all .5s ease .2s}.bb6414 .teams-dfp-mobile .team-list li .name{font-weight:700;color:#3b3d55;top:100px;margin-bottom:10px}.bb6414 .teams-dfp-mobile .team-list li .job,.bb6414 .teams-dfp-mobile .team-list li .name{text-align:center;font-size:10px;white-space:nowrap;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:all .5s ease .2s}.bb6414 .teams-dfp-mobile .team-list li .job{color:#5b33c9;top:126px}.bb6414 .teams-dfp-mobile .team-list li .desc{display:block;height:72px;margin-left:20px;margin-right:20px;font-size:14px;color:#6c6e90;line-height:24px;overflow:hidden;word-break:break-all;transition:all .5s ease .2s;position:relative;margin-bottom:20px}.bb6414 .teams-dfp-mobile .team-list li .desc p{margin:0}.bb6414 .teams-dfp-mobile .team-list li .dividing-line{display:block;clear:both;height:23px;margin:140px 24px 23px;box-shadow:0 12px 14px -4px rgba(28,28,160,.1);background:transparent;transition:all .5s ease .2s}.bb6414 .teams-dfp-mobile .team-list li .logo{display:block;width:180px;height:32px;position:absolute;top:80px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:all .5s ease .2s}.bb6414 .teams-dfp-mobile .team-list li .logo img{width:180px;height:32px}.bb6414 .teams-dfp-mobile .company-list li:hover .desc{height:290px}.bb6414 .teams-dfp-mobile .company-list li:hover .dividing-line{margin-top:60px}.bb6414 .teams-dfp-mobile .company-list li .desc{height:172px}.bb6414 .teams-dfp-mobile .company-list li .dividing-line{margin-top:160px}.bb6414 .teams-dfp-mobile .team-left .team-list li:nth-of-type(2n),.bb6414 .teams-dfp-mobile .team-right .team-list li:nth-of-type(2n){margin:0}.bb6414 .footer{height:120px;background-color:#251d47;border-bottom:30px solid #151029}.bb6414 .footer .wrapper{display:-webkit-flex;display:flex}.bb6414 .footer .wrapper .left{display:block;-webkit-flex:1;flex:1}.bb6414 .footer .wrapper .left li{display:inline-block;margin-top:26px;margin-right:20px}.bb6414 .footer .wrapper .left li>a{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;background-color:#393558;width:36px;height:36px;border-radius:100px;color:#fff}.bb6414 .footer .wrapper .left li>a:hover{color:hsla(0,0%,100%,.6)}.bb6414 .footer .wrapper .left li>a i{font-size:24px}.bb6414 .footer .wrapper .left li .wechat-wrap{position:relative}.bb6414 .footer .wrapper .left li .wechat-wrap:hover .wechat-pop{display:block}.bb6414 .footer .wrapper .left li .wechat-pop{display:none;width:120px;height:120px;background:#fff url("' + __webpack_require__(/*! ./src/assets/images/wechat-qrcode.jpeg */ "./src/assets/images/wechat-qrcode.jpeg") + '") no-repeat;background-size:120px 120px;position:absolute;top:-130px;left:-42px;box-shadow:0 0 16px rgba(37,29,71,.5)}.bb6414 .footer .wrapper .left li .wechat-pop:after{display:block;content:"";width:0;height:0;border:8px solid transparent;border-top-color:#fff;position:absolute;left:50%;bottom:-14px;margin-left:-8px}.bb6414 .footer .wrapper .right.subscribe{padding-top:26px}.bb6414 .footer .wrapper .right.subscribe input{width:400px;height:40px;text-indent:20px;margin-right:10px;background-color:#39315b;border-radius:20px;border:none;outline:none;font-size:14px;color:#fff;letter-spacing:1px}.bb6414 .footer .wrapper .right.subscribe input::-webkit-input-placeholder{color:#fff}.bb6414 .footer .wrapper .right.subscribe input::-moz-placeholder{color:#fff}.bb6414 .footer .wrapper .right.subscribe input::-ms-input-placeholder{color:#fff}.bb6414 .footer .wrapper .right.subscribe input::placeholder{color:#fff}.bb6414 .footer .wrapper .right.subscribe button{width:124px;height:40px;background:linear-gradient(90deg,#6c63ff,#5434c8);border-radius:20px;border:none;outline:none;font-size:16px;font-weight:600;color:#fff;cursor:pointer}.bb6414 .footer-mobile{height:220px;background-color:#251d47;border-bottom:30px solid #151029}.bb6414 .footer-mobile .wrapper{display:-webkit-flex;display:flex}.bb6414 .footer-mobile .wrapper .left{display:block;-webkit-flex:1;flex:1;text-align:center}.bb6414 .footer-mobile .wrapper .left li{display:inline-block;margin-top:20px;margin-right:20px}.bb6414 .footer-mobile .wrapper .left li>a{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;background-color:#393558;width:36px;height:36px;border-radius:100px;color:#fff}.bb6414 .footer-mobile .wrapper .left li>a:hover{color:hsla(0,0%,100%,.6)}.bb6414 .footer-mobile .wrapper .left li>a i{font-size:24px}.bb6414 .footer-mobile .wrapper .left li .wechat-wrap{position:relative}.bb6414 .footer-mobile .wrapper .left li .wechat-wrap:hover .wechat-pop{display:block}.bb6414 .footer-mobile .wrapper .left li .wechat-pop{display:none;width:120px;height:120px;background:#fff url("' + __webpack_require__(/*! ./src/assets/images/wechat-qrcode.jpeg */ "./src/assets/images/wechat-qrcode.jpeg") + '") no-repeat;background-size:120px 120px;position:absolute;top:-130px;left:-42px;box-shadow:0 0 16px rgba(37,29,71,.5)}.bb6414 .footer-mobile .wrapper .left li .wechat-pop:after{display:block;content:"";width:0;height:0;border:8px solid transparent;border-top-color:#fff;position:absolute;left:50%;bottom:-14px;margin-left:-8px}.bb6414 .footer-mobile .right.subscribe{padding-top:26px}.bb6414 .footer-mobile .right.subscribe input{width:338px;height:40px;background-color:#39315b;border-radius:109px;border:none;outline:none;font-size:14px;color:#fff;letter-spacing:1px;text-align:center;display:block;margin:0 auto}.bb6414 .footer-mobile .right.subscribe input::-webkit-input-placeholder{color:#fff}.bb6414 .footer-mobile .right.subscribe input::-moz-placeholder{color:#fff}.bb6414 .footer-mobile .right.subscribe input::-ms-input-placeholder{color:#fff}.bb6414 .footer-mobile .right.subscribe input::placeholder{color:#fff}.bb6414 .footer-mobile .right.subscribe button{width:124px;height:40px;background:linear-gradient(90deg,#6c63ff,#5434c8);border-radius:20px;border:none;outline:none;font-size:16px;font-weight:600;color:#fff;cursor:pointer;display:block;margin:10px auto 0}html[lang=en] .bb6414 .why-dfp .wrapper .why-dfp-list dd h4,html[lang=en] .bb6414 .why-dfp .wrapper .why-dfp-list dt h4{margin-top:40px}html[lang=en] .bb6414 .why-dfp .wrapper .why-dfp-list dd p{padding:0 10px}'}

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./node_modules/koot/ReactApp/server/ssr.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\astro\code\jsPro\Finnexus\FinnexusPro\node_modules\koot\ReactApp\server\ssr.js */"./node_modules/koot/ReactApp/server/ssr.js");


/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "create-react-class":
/*!*************************************!*\
  !*** external "create-react-class" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("create-react-class");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),

/***/ "is-url":
/*!*************************!*\
  !*** external "is-url" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is-url");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

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

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ })

/******/ });
//# sourceMappingURL=ssr.js.map