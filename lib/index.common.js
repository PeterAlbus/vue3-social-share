module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "72d2");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0630":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__("8d61");
var definePropertyModule = __webpack_require__("b74d");
var createPropertyDescriptor = __webpack_require__("165e");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "06a6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var isCallable = __webpack_require__("769d");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "0bd7":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("769d");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "0e68":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("6266");
var uncurryThis = __webpack_require__("21f6");
var IndexedObject = __webpack_require__("442e");
var toObject = __webpack_require__("ed2d");
var lengthOfArrayLike = __webpack_require__("a4f0");
var arraySpeciesCreate = __webpack_require__("af17");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "1478":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var isObject = __webpack_require__("0bd7");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "165e":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "1730":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var toAbsoluteIndex = __webpack_require__("4278");
var lengthOfArrayLike = __webpack_require__("a4f0");
var createProperty = __webpack_require__("0630");

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "18e2":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("21f6");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "19ae":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c226");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "1ae2":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("93a9");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "218d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "21f6":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("d920");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "242f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("9d66");
var wellKnownSymbol = __webpack_require__("600a");
var V8_VERSION = __webpack_require__("6db2");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("fdff");
var definePropertyModule = __webpack_require__("b74d");
var createPropertyDescriptor = __webpack_require__("165e");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "28aa":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("fdff");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("b441");
var definePropertyModule = __webpack_require__("b74d");
var anObject = __webpack_require__("1478");
var toIndexedObject = __webpack_require__("7695");
var objectKeys = __webpack_require__("f9b0");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "2cc4":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "2ef6":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("d8fc")))

/***/ }),

/***/ "2f81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("9a4c");
var DESCRIPTORS = __webpack_require__("fdff");
var global = __webpack_require__("2ef6");
var uncurryThis = __webpack_require__("21f6");
var hasOwn = __webpack_require__("8e14");
var isCallable = __webpack_require__("769d");
var isPrototypeOf = __webpack_require__("18e2");
var toString = __webpack_require__("420c");
var defineProperty = __webpack_require__("b74d").f;
var copyConstructorProperties = __webpack_require__("a043");

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var symbolToString = uncurryThis(SymbolPrototype.toString);
  var symbolValueOf = uncurryThis(SymbolPrototype.valueOf);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = symbolValueOf(this);
      var string = symbolToString(symbol);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "3187":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("21f6");
var hasOwn = __webpack_require__("8e14");
var toIndexedObject = __webpack_require__("7695");
var indexOf = __webpack_require__("6109").indexOf;
var hiddenKeys = __webpack_require__("2cc4");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "39f5":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("fdff");
var call = __webpack_require__("49d9");
var propertyIsEnumerableModule = __webpack_require__("cdbb");
var createPropertyDescriptor = __webpack_require__("165e");
var toIndexedObject = __webpack_require__("7695");
var toPropertyKey = __webpack_require__("8d61");
var hasOwn = __webpack_require__("8e14");
var IE8_DOM_DEFINE = __webpack_require__("b8dd");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "3ad5":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("1478");
var definePropertiesModule = __webpack_require__("28aa");
var enumBugKeys = __webpack_require__("cd84");
var hiddenKeys = __webpack_require__("2cc4");
var html = __webpack_require__("3c4d");
var documentCreateElement = __webpack_require__("fddf");
var sharedKey = __webpack_require__("da06");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "3c4d":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("06a6");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "420c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var classof = __webpack_require__("9f17");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "4278":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("64ea");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "42d5":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("21f6");
var isCallable = __webpack_require__("769d");
var store = __webpack_require__("90e8");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "442e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var uncurryThis = __webpack_require__("21f6");
var fails = __webpack_require__("9d66");
var classof = __webpack_require__("c226");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "49d9":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("d920");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "4e4b":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("600a");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "51cb":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("21f6");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "54bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__("c226");
var toIndexedObject = __webpack_require__("7695");
var $getOwnPropertyNames = __webpack_require__("657a").f;
var arraySlice = __webpack_require__("1730");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "5b2c":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * qrcode.vue v3.3.3
 * A Vue.js component to generate QRCode.
 * © 2017-2021 @scopewu(https://github.com/scopewu)
 * MIT License.
 */
(function (global, factory) {
     true ? module.exports = factory(__webpack_require__("8bbf")) :
    undefined;
})(this, (function (vue) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var mode$1 = {
    	MODE_NUMBER :		1 << 0,
    	MODE_ALPHA_NUM : 	1 << 1,
    	MODE_8BIT_BYTE : 	1 << 2,
    	MODE_KANJI :		1 << 3
    };

    var mode = mode$1;

    function QR8bitByte(data) {
    	this.mode = mode.MODE_8BIT_BYTE;
    	this.data = data;
    }

    QR8bitByte.prototype = {

    	getLength : function(buffer) {
    		return this.data.length;
    	},
    	
    	write : function(buffer) {
    		for (var i = 0; i < this.data.length; i++) {
    			// not JIS ...
    			buffer.put(this.data.charCodeAt(i), 8);
    		}
    	}
    };

    var _8BitByte = QR8bitByte;

    var ErrorCorrectLevel = {
    	L : 1,
    	M : 0,
    	Q : 3,
    	H : 2
    };

    // ErrorCorrectLevel
    var ECL = ErrorCorrectLevel;

    function QRRSBlock(totalCount, dataCount) {
    	this.totalCount = totalCount;
    	this.dataCount  = dataCount;
    }

    QRRSBlock.RS_BLOCK_TABLE = [

    	// L
    	// M
    	// Q
    	// H

    	// 1
    	[1, 26, 19],
    	[1, 26, 16],
    	[1, 26, 13],
    	[1, 26, 9],
    	
    	// 2
    	[1, 44, 34],
    	[1, 44, 28],
    	[1, 44, 22],
    	[1, 44, 16],

    	// 3
    	[1, 70, 55],
    	[1, 70, 44],
    	[2, 35, 17],
    	[2, 35, 13],

    	// 4		
    	[1, 100, 80],
    	[2, 50, 32],
    	[2, 50, 24],
    	[4, 25, 9],
    	
    	// 5
    	[1, 134, 108],
    	[2, 67, 43],
    	[2, 33, 15, 2, 34, 16],
    	[2, 33, 11, 2, 34, 12],
    	
    	// 6
    	[2, 86, 68],
    	[4, 43, 27],
    	[4, 43, 19],
    	[4, 43, 15],
    	
    	// 7		
    	[2, 98, 78],
    	[4, 49, 31],
    	[2, 32, 14, 4, 33, 15],
    	[4, 39, 13, 1, 40, 14],
    	
    	// 8
    	[2, 121, 97],
    	[2, 60, 38, 2, 61, 39],
    	[4, 40, 18, 2, 41, 19],
    	[4, 40, 14, 2, 41, 15],
    	
    	// 9
    	[2, 146, 116],
    	[3, 58, 36, 2, 59, 37],
    	[4, 36, 16, 4, 37, 17],
    	[4, 36, 12, 4, 37, 13],
    	
    	// 10		
    	[2, 86, 68, 2, 87, 69],
    	[4, 69, 43, 1, 70, 44],
    	[6, 43, 19, 2, 44, 20],
    	[6, 43, 15, 2, 44, 16],

    	// 11
    	[4, 101, 81],
    	[1, 80, 50, 4, 81, 51],
    	[4, 50, 22, 4, 51, 23],
    	[3, 36, 12, 8, 37, 13],

    	// 12
    	[2, 116, 92, 2, 117, 93],
    	[6, 58, 36, 2, 59, 37],
    	[4, 46, 20, 6, 47, 21],
    	[7, 42, 14, 4, 43, 15],

    	// 13
    	[4, 133, 107],
    	[8, 59, 37, 1, 60, 38],
    	[8, 44, 20, 4, 45, 21],
    	[12, 33, 11, 4, 34, 12],

    	// 14
    	[3, 145, 115, 1, 146, 116],
    	[4, 64, 40, 5, 65, 41],
    	[11, 36, 16, 5, 37, 17],
    	[11, 36, 12, 5, 37, 13],

    	// 15
    	[5, 109, 87, 1, 110, 88],
    	[5, 65, 41, 5, 66, 42],
    	[5, 54, 24, 7, 55, 25],
    	[11, 36, 12],

    	// 16
    	[5, 122, 98, 1, 123, 99],
    	[7, 73, 45, 3, 74, 46],
    	[15, 43, 19, 2, 44, 20],
    	[3, 45, 15, 13, 46, 16],

    	// 17
    	[1, 135, 107, 5, 136, 108],
    	[10, 74, 46, 1, 75, 47],
    	[1, 50, 22, 15, 51, 23],
    	[2, 42, 14, 17, 43, 15],

    	// 18
    	[5, 150, 120, 1, 151, 121],
    	[9, 69, 43, 4, 70, 44],
    	[17, 50, 22, 1, 51, 23],
    	[2, 42, 14, 19, 43, 15],

    	// 19
    	[3, 141, 113, 4, 142, 114],
    	[3, 70, 44, 11, 71, 45],
    	[17, 47, 21, 4, 48, 22],
    	[9, 39, 13, 16, 40, 14],

    	// 20
    	[3, 135, 107, 5, 136, 108],
    	[3, 67, 41, 13, 68, 42],
    	[15, 54, 24, 5, 55, 25],
    	[15, 43, 15, 10, 44, 16],

    	// 21
    	[4, 144, 116, 4, 145, 117],
    	[17, 68, 42],
    	[17, 50, 22, 6, 51, 23],
    	[19, 46, 16, 6, 47, 17],

    	// 22
    	[2, 139, 111, 7, 140, 112],
    	[17, 74, 46],
    	[7, 54, 24, 16, 55, 25],
    	[34, 37, 13],

    	// 23
    	[4, 151, 121, 5, 152, 122],
    	[4, 75, 47, 14, 76, 48],
    	[11, 54, 24, 14, 55, 25],
    	[16, 45, 15, 14, 46, 16],

    	// 24
    	[6, 147, 117, 4, 148, 118],
    	[6, 73, 45, 14, 74, 46],
    	[11, 54, 24, 16, 55, 25],
    	[30, 46, 16, 2, 47, 17],

    	// 25
    	[8, 132, 106, 4, 133, 107],
    	[8, 75, 47, 13, 76, 48],
    	[7, 54, 24, 22, 55, 25],
    	[22, 45, 15, 13, 46, 16],

    	// 26
    	[10, 142, 114, 2, 143, 115],
    	[19, 74, 46, 4, 75, 47],
    	[28, 50, 22, 6, 51, 23],
    	[33, 46, 16, 4, 47, 17],

    	// 27
    	[8, 152, 122, 4, 153, 123],
    	[22, 73, 45, 3, 74, 46],
    	[8, 53, 23, 26, 54, 24],
    	[12, 45, 15, 28, 46, 16],

    	// 28
    	[3, 147, 117, 10, 148, 118],
    	[3, 73, 45, 23, 74, 46],
    	[4, 54, 24, 31, 55, 25],
    	[11, 45, 15, 31, 46, 16],

    	// 29
    	[7, 146, 116, 7, 147, 117],
    	[21, 73, 45, 7, 74, 46],
    	[1, 53, 23, 37, 54, 24],
    	[19, 45, 15, 26, 46, 16],

    	// 30
    	[5, 145, 115, 10, 146, 116],
    	[19, 75, 47, 10, 76, 48],
    	[15, 54, 24, 25, 55, 25],
    	[23, 45, 15, 25, 46, 16],

    	// 31
    	[13, 145, 115, 3, 146, 116],
    	[2, 74, 46, 29, 75, 47],
    	[42, 54, 24, 1, 55, 25],
    	[23, 45, 15, 28, 46, 16],

    	// 32
    	[17, 145, 115],
    	[10, 74, 46, 23, 75, 47],
    	[10, 54, 24, 35, 55, 25],
    	[19, 45, 15, 35, 46, 16],

    	// 33
    	[17, 145, 115, 1, 146, 116],
    	[14, 74, 46, 21, 75, 47],
    	[29, 54, 24, 19, 55, 25],
    	[11, 45, 15, 46, 46, 16],

    	// 34
    	[13, 145, 115, 6, 146, 116],
    	[14, 74, 46, 23, 75, 47],
    	[44, 54, 24, 7, 55, 25],
    	[59, 46, 16, 1, 47, 17],

    	// 35
    	[12, 151, 121, 7, 152, 122],
    	[12, 75, 47, 26, 76, 48],
    	[39, 54, 24, 14, 55, 25],
    	[22, 45, 15, 41, 46, 16],

    	// 36
    	[6, 151, 121, 14, 152, 122],
    	[6, 75, 47, 34, 76, 48],
    	[46, 54, 24, 10, 55, 25],
    	[2, 45, 15, 64, 46, 16],

    	// 37
    	[17, 152, 122, 4, 153, 123],
    	[29, 74, 46, 14, 75, 47],
    	[49, 54, 24, 10, 55, 25],
    	[24, 45, 15, 46, 46, 16],

    	// 38
    	[4, 152, 122, 18, 153, 123],
    	[13, 74, 46, 32, 75, 47],
    	[48, 54, 24, 14, 55, 25],
    	[42, 45, 15, 32, 46, 16],

    	// 39
    	[20, 147, 117, 4, 148, 118],
    	[40, 75, 47, 7, 76, 48],
    	[43, 54, 24, 22, 55, 25],
    	[10, 45, 15, 67, 46, 16],

    	// 40
    	[19, 148, 118, 6, 149, 119],
    	[18, 75, 47, 31, 76, 48],
    	[34, 54, 24, 34, 55, 25],
    	[20, 45, 15, 61, 46, 16]
    ];

    QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
    	
    	var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
    	
    	if (rsBlock == undefined) {
    		throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
    	}

    	var length = rsBlock.length / 3;
    	
    	var list = new Array();
    	
    	for (var i = 0; i < length; i++) {

    		var count = rsBlock[i * 3 + 0];
    		var totalCount = rsBlock[i * 3 + 1];
    		var dataCount  = rsBlock[i * 3 + 2];

    		for (var j = 0; j < count; j++) {
    			list.push(new QRRSBlock(totalCount, dataCount) );	
    		}
    	}
    	
    	return list;
    };

    QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {

    	switch(errorCorrectLevel) {
    	case ECL.L :
    		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
    	case ECL.M :
    		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
    	case ECL.Q :
    		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
    	case ECL.H :
    		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
    	default :
    		return undefined;
    	}
    };

    var RSBlock$1 = QRRSBlock;

    function QRBitBuffer() {
    	this.buffer = new Array();
    	this.length = 0;
    }

    QRBitBuffer.prototype = {

    	get : function(index) {
    		var bufIndex = Math.floor(index / 8);
    		return ( (this.buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
    	},
    	
    	put : function(num, length) {
    		for (var i = 0; i < length; i++) {
    			this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
    		}
    	},
    	
    	getLengthInBits : function() {
    		return this.length;
    	},
    	
    	putBit : function(bit) {
    	
    		var bufIndex = Math.floor(this.length / 8);
    		if (this.buffer.length <= bufIndex) {
    			this.buffer.push(0);
    		}
    	
    		if (bit) {
    			this.buffer[bufIndex] |= (0x80 >>> (this.length % 8) );
    		}
    	
    		this.length++;
    	}
    };

    var BitBuffer$1 = QRBitBuffer;

    var QRMath = {

    	glog : function(n) {
    	
    		if (n < 1) {
    			throw new Error("glog(" + n + ")");
    		}
    		
    		return QRMath.LOG_TABLE[n];
    	},
    	
    	gexp : function(n) {
    	
    		while (n < 0) {
    			n += 255;
    		}
    	
    		while (n >= 256) {
    			n -= 255;
    		}
    	
    		return QRMath.EXP_TABLE[n];
    	},
    	
    	EXP_TABLE : new Array(256),
    	
    	LOG_TABLE : new Array(256)

    };
    	
    for (var i = 0; i < 8; i++) {
    	QRMath.EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i++) {
    	QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4]
    		^ QRMath.EXP_TABLE[i - 5]
    		^ QRMath.EXP_TABLE[i - 6]
    		^ QRMath.EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i++) {
    	QRMath.LOG_TABLE[QRMath.EXP_TABLE[i] ] = i;
    }

    var math$2 = QRMath;

    var math$1 = math$2;

    function QRPolynomial(num, shift) {

    	if (num.length == undefined) {
    		throw new Error(num.length + "/" + shift);
    	}

    	var offset = 0;

    	while (offset < num.length && num[offset] == 0) {
    		offset++;
    	}

    	this.num = new Array(num.length - offset + shift);
    	for (var i = 0; i < num.length - offset; i++) {
    		this.num[i] = num[i + offset];
    	}
    }

    QRPolynomial.prototype = {

    	get : function(index) {
    		return this.num[index];
    	},
    	
    	getLength : function() {
    		return this.num.length;
    	},
    	
    	multiply : function(e) {
    	
    		var num = new Array(this.getLength() + e.getLength() - 1);
    	
    		for (var i = 0; i < this.getLength(); i++) {
    			for (var j = 0; j < e.getLength(); j++) {
    				num[i + j] ^= math$1.gexp(math$1.glog(this.get(i) ) + math$1.glog(e.get(j) ) );
    			}
    		}
    	
    		return new QRPolynomial(num, 0);
    	},
    	
    	mod : function(e) {
    	
    		if (this.getLength() - e.getLength() < 0) {
    			return this;
    		}
    	
    		var ratio = math$1.glog(this.get(0) ) - math$1.glog(e.get(0) );
    	
    		var num = new Array(this.getLength() );
    		
    		for (var i = 0; i < this.getLength(); i++) {
    			num[i] = this.get(i);
    		}
    		
    		for (var i = 0; i < e.getLength(); i++) {
    			num[i] ^= math$1.gexp(math$1.glog(e.get(i) ) + ratio);
    		}
    	
    		// recursive call
    		return new QRPolynomial(num, 0).mod(e);
    	}
    };

    var Polynomial$2 = QRPolynomial;

    var Mode = mode$1;
    var Polynomial$1 = Polynomial$2;
    var math = math$2;

    var QRMaskPattern = {
    	PATTERN000 : 0,
    	PATTERN001 : 1,
    	PATTERN010 : 2,
    	PATTERN011 : 3,
    	PATTERN100 : 4,
    	PATTERN101 : 5,
    	PATTERN110 : 6,
    	PATTERN111 : 7
    };

    var QRUtil = {

        PATTERN_POSITION_TABLE : [
    	    [],
    	    [6, 18],
    	    [6, 22],
    	    [6, 26],
    	    [6, 30],
    	    [6, 34],
    	    [6, 22, 38],
    	    [6, 24, 42],
    	    [6, 26, 46],
    	    [6, 28, 50],
    	    [6, 30, 54],		
    	    [6, 32, 58],
    	    [6, 34, 62],
    	    [6, 26, 46, 66],
    	    [6, 26, 48, 70],
    	    [6, 26, 50, 74],
    	    [6, 30, 54, 78],
    	    [6, 30, 56, 82],
    	    [6, 30, 58, 86],
    	    [6, 34, 62, 90],
    	    [6, 28, 50, 72, 94],
    	    [6, 26, 50, 74, 98],
    	    [6, 30, 54, 78, 102],
    	    [6, 28, 54, 80, 106],
    	    [6, 32, 58, 84, 110],
    	    [6, 30, 58, 86, 114],
    	    [6, 34, 62, 90, 118],
    	    [6, 26, 50, 74, 98, 122],
    	    [6, 30, 54, 78, 102, 126],
    	    [6, 26, 52, 78, 104, 130],
    	    [6, 30, 56, 82, 108, 134],
    	    [6, 34, 60, 86, 112, 138],
    	    [6, 30, 58, 86, 114, 142],
    	    [6, 34, 62, 90, 118, 146],
    	    [6, 30, 54, 78, 102, 126, 150],
    	    [6, 24, 50, 76, 102, 128, 154],
    	    [6, 28, 54, 80, 106, 132, 158],
    	    [6, 32, 58, 84, 110, 136, 162],
    	    [6, 26, 54, 82, 110, 138, 166],
    	    [6, 30, 58, 86, 114, 142, 170]
        ],

        G15 : (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
        G18 : (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
        G15_MASK : (1 << 14) | (1 << 12) | (1 << 10)	| (1 << 4) | (1 << 1),

        getBCHTypeInfo : function(data) {
    	    var d = data << 10;
    	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
    		    d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) ) ); 	
    	    }
    	    return ( (data << 10) | d) ^ QRUtil.G15_MASK;
        },

        getBCHTypeNumber : function(data) {
    	    var d = data << 12;
    	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
    		    d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) ) ); 	
    	    }
    	    return (data << 12) | d;
        },

        getBCHDigit : function(data) {

    	    var digit = 0;

    	    while (data != 0) {
    		    digit++;
    		    data >>>= 1;
    	    }

    	    return digit;
        },

        getPatternPosition : function(typeNumber) {
    	    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
        },

        getMask : function(maskPattern, i, j) {
    	    
    	    switch (maskPattern) {
    		    
    	    case QRMaskPattern.PATTERN000 : return (i + j) % 2 == 0;
    	    case QRMaskPattern.PATTERN001 : return i % 2 == 0;
    	    case QRMaskPattern.PATTERN010 : return j % 3 == 0;
    	    case QRMaskPattern.PATTERN011 : return (i + j) % 3 == 0;
    	    case QRMaskPattern.PATTERN100 : return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0;
    	    case QRMaskPattern.PATTERN101 : return (i * j) % 2 + (i * j) % 3 == 0;
    	    case QRMaskPattern.PATTERN110 : return ( (i * j) % 2 + (i * j) % 3) % 2 == 0;
    	    case QRMaskPattern.PATTERN111 : return ( (i * j) % 3 + (i + j) % 2) % 2 == 0;

    	    default :
    		    throw new Error("bad maskPattern:" + maskPattern);
    	    }
        },

        getErrorCorrectPolynomial : function(errorCorrectLength) {

    	    var a = new Polynomial$1([1], 0);

    	    for (var i = 0; i < errorCorrectLength; i++) {
    		    a = a.multiply(new Polynomial$1([1, math.gexp(i)], 0) );
    	    }

    	    return a;
        },

        getLengthInBits : function(mode, type) {

    	    if (1 <= type && type < 10) {

    		    // 1 - 9

    		    switch(mode) {
    		    case Mode.MODE_NUMBER 	: return 10;
    		    case Mode.MODE_ALPHA_NUM 	: return 9;
    		    case Mode.MODE_8BIT_BYTE	: return 8;
    		    case Mode.MODE_KANJI  	: return 8;
    		    default :
    			    throw new Error("mode:" + mode);
    		    }

    	    } else if (type < 27) {

    		    // 10 - 26

    		    switch(mode) {
    		    case Mode.MODE_NUMBER 	: return 12;
    		    case Mode.MODE_ALPHA_NUM 	: return 11;
    		    case Mode.MODE_8BIT_BYTE	: return 16;
    		    case Mode.MODE_KANJI  	: return 10;
    		    default :
    			    throw new Error("mode:" + mode);
    		    }

    	    } else if (type < 41) {

    		    // 27 - 40

    		    switch(mode) {
    		    case Mode.MODE_NUMBER 	: return 14;
    		    case Mode.MODE_ALPHA_NUM	: return 13;
    		    case Mode.MODE_8BIT_BYTE	: return 16;
    		    case Mode.MODE_KANJI  	: return 12;
    		    default :
    			    throw new Error("mode:" + mode);
    		    }

    	    } else {
    		    throw new Error("type:" + type);
    	    }
        },

        getLostPoint : function(qrCode) {
    	    
    	    var moduleCount = qrCode.getModuleCount();
    	    
    	    var lostPoint = 0;
    	    
    	    // LEVEL1
    	    
    	    for (var row = 0; row < moduleCount; row++) {

    		    for (var col = 0; col < moduleCount; col++) {

    			    var sameCount = 0;
    			    var dark = qrCode.isDark(row, col);

    				for (var r = -1; r <= 1; r++) {

    				    if (row + r < 0 || moduleCount <= row + r) {
    					    continue;
    				    }

    				    for (var c = -1; c <= 1; c++) {

    					    if (col + c < 0 || moduleCount <= col + c) {
    						    continue;
    					    }

    					    if (r == 0 && c == 0) {
    						    continue;
    					    }

    					    if (dark == qrCode.isDark(row + r, col + c) ) {
    						    sameCount++;
    					    }
    				    }
    			    }

    			    if (sameCount > 5) {
    				    lostPoint += (3 + sameCount - 5);
    			    }
    		    }
    	    }

    	    // LEVEL2

    	    for (var row = 0; row < moduleCount - 1; row++) {
    		    for (var col = 0; col < moduleCount - 1; col++) {
    			    var count = 0;
    			    if (qrCode.isDark(row,     col    ) ) count++;
    			    if (qrCode.isDark(row + 1, col    ) ) count++;
    			    if (qrCode.isDark(row,     col + 1) ) count++;
    			    if (qrCode.isDark(row + 1, col + 1) ) count++;
    			    if (count == 0 || count == 4) {
    				    lostPoint += 3;
    			    }
    		    }
    	    }

    	    // LEVEL3

    	    for (var row = 0; row < moduleCount; row++) {
    		    for (var col = 0; col < moduleCount - 6; col++) {
    			    if (qrCode.isDark(row, col)
    					    && !qrCode.isDark(row, col + 1)
    					    &&  qrCode.isDark(row, col + 2)
    					    &&  qrCode.isDark(row, col + 3)
    					    &&  qrCode.isDark(row, col + 4)
    					    && !qrCode.isDark(row, col + 5)
    					    &&  qrCode.isDark(row, col + 6) ) {
    				    lostPoint += 40;
    			    }
    		    }
    	    }

    	    for (var col = 0; col < moduleCount; col++) {
    		    for (var row = 0; row < moduleCount - 6; row++) {
    			    if (qrCode.isDark(row, col)
    					    && !qrCode.isDark(row + 1, col)
    					    &&  qrCode.isDark(row + 2, col)
    					    &&  qrCode.isDark(row + 3, col)
    					    &&  qrCode.isDark(row + 4, col)
    					    && !qrCode.isDark(row + 5, col)
    					    &&  qrCode.isDark(row + 6, col) ) {
    				    lostPoint += 40;
    			    }
    		    }
    	    }

    	    // LEVEL4
    	    
    	    var darkCount = 0;

    	    for (var col = 0; col < moduleCount; col++) {
    		    for (var row = 0; row < moduleCount; row++) {
    			    if (qrCode.isDark(row, col) ) {
    				    darkCount++;
    			    }
    		    }
    	    }
    	    
    	    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    	    lostPoint += ratio * 10;

    	    return lostPoint;		
        }
    };

    var util$1 = QRUtil;

    var BitByte = _8BitByte;
    var RSBlock = RSBlock$1;
    var BitBuffer = BitBuffer$1;
    var util = util$1;
    var Polynomial = Polynomial$2;

    function QRCode$1(typeNumber, errorCorrectLevel) {
    	this.typeNumber = typeNumber;
    	this.errorCorrectLevel = errorCorrectLevel;
    	this.modules = null;
    	this.moduleCount = 0;
    	this.dataCache = null;
    	this.dataList = [];
    }

    // for client side minification
    var proto = QRCode$1.prototype;

    proto.addData = function(data) {
    	var newData = new BitByte(data);
    	this.dataList.push(newData);
    	this.dataCache = null;
    };

    proto.isDark = function(row, col) {
    	if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
    		throw new Error(row + "," + col);
    	}
    	return this.modules[row][col];
    };

    proto.getModuleCount = function() {
    	return this.moduleCount;
    };

    proto.make = function() {
    	// Calculate automatically typeNumber if provided is < 1
    	if (this.typeNumber < 1 ){
    		var typeNumber = 1;
    		for (typeNumber = 1; typeNumber < 40; typeNumber++) {
    			var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);

    			var buffer = new BitBuffer();
    			var totalDataCount = 0;
    			for (var i = 0; i < rsBlocks.length; i++) {
    				totalDataCount += rsBlocks[i].dataCount;
    			}

    			for (var i = 0; i < this.dataList.length; i++) {
    				var data = this.dataList[i];
    				buffer.put(data.mode, 4);
    				buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
    				data.write(buffer);
    			}
    			if (buffer.getLengthInBits() <= totalDataCount * 8)
    				break;
    		}
    		this.typeNumber = typeNumber;
    	}
    	this.makeImpl(false, this.getBestMaskPattern() );
    };

    proto.makeImpl = function(test, maskPattern) {
    	
    	this.moduleCount = this.typeNumber * 4 + 17;
    	this.modules = new Array(this.moduleCount);
    	
    	for (var row = 0; row < this.moduleCount; row++) {
    		
    		this.modules[row] = new Array(this.moduleCount);
    		
    		for (var col = 0; col < this.moduleCount; col++) {
    			this.modules[row][col] = null;//(col + row) % 3;
    		}
    	}

    	this.setupPositionProbePattern(0, 0);
    	this.setupPositionProbePattern(this.moduleCount - 7, 0);
    	this.setupPositionProbePattern(0, this.moduleCount - 7);
    	this.setupPositionAdjustPattern();
    	this.setupTimingPattern();
    	this.setupTypeInfo(test, maskPattern);
    	
    	if (this.typeNumber >= 7) {
    		this.setupTypeNumber(test);
    	}

    	if (this.dataCache == null) {
    		this.dataCache = QRCode$1.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
    	}

    	this.mapData(this.dataCache, maskPattern);
    };

    proto.setupPositionProbePattern = function(row, col)  {
    	
    	for (var r = -1; r <= 7; r++) {
    		
    		if (row + r <= -1 || this.moduleCount <= row + r) continue;
    		
    		for (var c = -1; c <= 7; c++) {
    			
    			if (col + c <= -1 || this.moduleCount <= col + c) continue;
    			
    			if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
    					|| (0 <= c && c <= 6 && (r == 0 || r == 6) )
    					|| (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
    				this.modules[row + r][col + c] = true;
    			} else {
    				this.modules[row + r][col + c] = false;
    			}
    		}		
    	}		
    };

    proto.getBestMaskPattern = function() {

    	var minLostPoint = 0;
    	var pattern = 0;

    	for (var i = 0; i < 8; i++) {
    		
    		this.makeImpl(true, i);

    		var lostPoint = util.getLostPoint(this);

    		if (i == 0 || minLostPoint >  lostPoint) {
    			minLostPoint = lostPoint;
    			pattern = i;
    		}
    	}

    	return pattern;
    };

    proto.createMovieClip = function(target_mc, instance_name, depth) {

    	var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
    	var cs = 1;

    	this.make();

    	for (var row = 0; row < this.modules.length; row++) {
    		
    		var y = row * cs;
    		
    		for (var col = 0; col < this.modules[row].length; col++) {

    			var x = col * cs;
    			var dark = this.modules[row][col];
    		
    			if (dark) {
    				qr_mc.beginFill(0, 100);
    				qr_mc.moveTo(x, y);
    				qr_mc.lineTo(x + cs, y);
    				qr_mc.lineTo(x + cs, y + cs);
    				qr_mc.lineTo(x, y + cs);
    				qr_mc.endFill();
    			}
    		}
    	}
    	
    	return qr_mc;
    };

    proto.setupTimingPattern = function() {
    	
    	for (var r = 8; r < this.moduleCount - 8; r++) {
    		if (this.modules[r][6] != null) {
    			continue;
    		}
    		this.modules[r][6] = (r % 2 == 0);
    	}

    	for (var c = 8; c < this.moduleCount - 8; c++) {
    		if (this.modules[6][c] != null) {
    			continue;
    		}
    		this.modules[6][c] = (c % 2 == 0);
    	}
    };

    proto.setupPositionAdjustPattern = function() {

    	var pos = util.getPatternPosition(this.typeNumber);
    	
    	for (var i = 0; i < pos.length; i++) {
    	
    		for (var j = 0; j < pos.length; j++) {
    		
    			var row = pos[i];
    			var col = pos[j];
    			
    			if (this.modules[row][col] != null) {
    				continue;
    			}
    			
    			for (var r = -2; r <= 2; r++) {
    			
    				for (var c = -2; c <= 2; c++) {
    				
    					if (r == -2 || r == 2 || c == -2 || c == 2
    							|| (r == 0 && c == 0) ) {
    						this.modules[row + r][col + c] = true;
    					} else {
    						this.modules[row + r][col + c] = false;
    					}
    				}
    			}
    		}
    	}
    };

    proto.setupTypeNumber = function(test) {

    	var bits = util.getBCHTypeNumber(this.typeNumber);

    	for (var i = 0; i < 18; i++) {
    		var mod = (!test && ( (bits >> i) & 1) == 1);
    		this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
    	}

    	for (var i = 0; i < 18; i++) {
    		var mod = (!test && ( (bits >> i) & 1) == 1);
    		this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    	}
    };

    proto.setupTypeInfo = function(test, maskPattern) {

    	var data = (this.errorCorrectLevel << 3) | maskPattern;
    	var bits = util.getBCHTypeInfo(data);

    	// vertical		
    	for (var i = 0; i < 15; i++) {

    		var mod = (!test && ( (bits >> i) & 1) == 1);

    		if (i < 6) {
    			this.modules[i][8] = mod;
    		} else if (i < 8) {
    			this.modules[i + 1][8] = mod;
    		} else {
    			this.modules[this.moduleCount - 15 + i][8] = mod;
    		}
    	}

    	// horizontal
    	for (var i = 0; i < 15; i++) {

    		var mod = (!test && ( (bits >> i) & 1) == 1);
    		
    		if (i < 8) {
    			this.modules[8][this.moduleCount - i - 1] = mod;
    		} else if (i < 9) {
    			this.modules[8][15 - i - 1 + 1] = mod;
    		} else {
    			this.modules[8][15 - i - 1] = mod;
    		}
    	}

    	// fixed module
    	this.modules[this.moduleCount - 8][8] = (!test);
    };

    proto.mapData = function(data, maskPattern) {
    	
    	var inc = -1;
    	var row = this.moduleCount - 1;
    	var bitIndex = 7;
    	var byteIndex = 0;
    	
    	for (var col = this.moduleCount - 1; col > 0; col -= 2) {

    		if (col == 6) col--;

    		while (true) {

    			for (var c = 0; c < 2; c++) {
    				
    				if (this.modules[row][col - c] == null) {
    					
    					var dark = false;

    					if (byteIndex < data.length) {
    						dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
    					}

    					var mask = util.getMask(maskPattern, row, col - c);

    					if (mask) {
    						dark = !dark;
    					}
    					
    					this.modules[row][col - c] = dark;
    					bitIndex--;

    					if (bitIndex == -1) {
    						byteIndex++;
    						bitIndex = 7;
    					}
    				}
    			}
    							
    			row += inc;

    			if (row < 0 || this.moduleCount <= row) {
    				row -= inc;
    				inc = -inc;
    				break;
    			}
    		}
    	}
    };

    QRCode$1.PAD0 = 0xEC;
    QRCode$1.PAD1 = 0x11;

    QRCode$1.createData = function(typeNumber, errorCorrectLevel, dataList) {
    	
    	var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    	
    	var buffer = new BitBuffer();
    	
    	for (var i = 0; i < dataList.length; i++) {
    		var data = dataList[i];
    		buffer.put(data.mode, 4);
    		buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
    		data.write(buffer);
    	}

    	// calc num max data.
    	var totalDataCount = 0;
    	for (var i = 0; i < rsBlocks.length; i++) {
    		totalDataCount += rsBlocks[i].dataCount;
    	}

    	if (buffer.getLengthInBits() > totalDataCount * 8) {
    		throw new Error("code length overflow. ("
    			+ buffer.getLengthInBits()
    			+ ">"
    			+  totalDataCount * 8
    			+ ")");
    	}

    	// end code
    	if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
    		buffer.put(0, 4);
    	}

    	// padding
    	while (buffer.getLengthInBits() % 8 != 0) {
    		buffer.putBit(false);
    	}

    	// padding
    	while (true) {
    		
    		if (buffer.getLengthInBits() >= totalDataCount * 8) {
    			break;
    		}
    		buffer.put(QRCode$1.PAD0, 8);
    		
    		if (buffer.getLengthInBits() >= totalDataCount * 8) {
    			break;
    		}
    		buffer.put(QRCode$1.PAD1, 8);
    	}

    	return QRCode$1.createBytes(buffer, rsBlocks);
    };

    QRCode$1.createBytes = function(buffer, rsBlocks) {

    	var offset = 0;
    	
    	var maxDcCount = 0;
    	var maxEcCount = 0;
    	
    	var dcdata = new Array(rsBlocks.length);
    	var ecdata = new Array(rsBlocks.length);
    	
    	for (var r = 0; r < rsBlocks.length; r++) {

    		var dcCount = rsBlocks[r].dataCount;
    		var ecCount = rsBlocks[r].totalCount - dcCount;

    		maxDcCount = Math.max(maxDcCount, dcCount);
    		maxEcCount = Math.max(maxEcCount, ecCount);
    		
    		dcdata[r] = new Array(dcCount);
    		
    		for (var i = 0; i < dcdata[r].length; i++) {
    			dcdata[r][i] = 0xff & buffer.buffer[i + offset];
    		}
    		offset += dcCount;
    		
    		var rsPoly = util.getErrorCorrectPolynomial(ecCount);
    		var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);

    		var modPoly = rawPoly.mod(rsPoly);
    		ecdata[r] = new Array(rsPoly.getLength() - 1);
    		for (var i = 0; i < ecdata[r].length; i++) {
                var modIndex = i + modPoly.getLength() - ecdata[r].length;
    			ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;
    		}

    	}
    	
    	var totalCodeCount = 0;
    	for (var i = 0; i < rsBlocks.length; i++) {
    		totalCodeCount += rsBlocks[i].totalCount;
    	}

    	var data = new Array(totalCodeCount);
    	var index = 0;

    	for (var i = 0; i < maxDcCount; i++) {
    		for (var r = 0; r < rsBlocks.length; r++) {
    			if (i < dcdata[r].length) {
    				data[index++] = dcdata[r][i];
    			}
    		}
    	}

    	for (var i = 0; i < maxEcCount; i++) {
    		for (var r = 0; r < rsBlocks.length; r++) {
    			if (i < ecdata[r].length) {
    				data[index++] = ecdata[r][i];
    			}
    		}
    	}

    	return data;
    };

    var QRCode_1 = QRCode$1;

    var defaultErrorCorrectLevel = 'H';
    // Thanks the `qrcode.react`
    var SUPPORTS_PATH2D = (function () {
        try {
            new Path2D().addPath(new Path2D());
        }
        catch (e) {
            return false;
        }
        return true;
    })();
    function QRCode(data, level) {
        var errorCorrectLevel = ErrorCorrectLevel[level];
        // We'll use type===-1 to force QRCode to automatically pick the best type
        var qrcode = new QRCode_1(-1, errorCorrectLevel);
        qrcode.addData(toUTF8String(data));
        qrcode.make();
        return qrcode;
    }
    function validErrorCorrectLevel(level) {
        return level in ErrorCorrectLevel;
    }
    /**
     * Encode UTF16 to UTF8.
     * See: http://jonisalonen.com/2012/from-utf-16-to-utf-8-in-javascript/
     * @param str {string}
     * @returns {string}
     */
    function toUTF8String(str) {
        var utf8Str = '';
        for (var i = 0; i < str.length; i++) {
            var charCode = str.charCodeAt(i);
            if (charCode < 0x0080) {
                utf8Str += String.fromCharCode(charCode);
            }
            else if (charCode < 0x0800) {
                utf8Str += String.fromCharCode(0xc0 | (charCode >> 6));
                utf8Str += String.fromCharCode(0x80 | (charCode & 0x3f));
            }
            else if (charCode < 0xd800 || charCode >= 0xe000) {
                utf8Str += String.fromCharCode(0xe0 | (charCode >> 12));
                utf8Str += String.fromCharCode(0x80 | ((charCode >> 6) & 0x3f));
                utf8Str += String.fromCharCode(0x80 | (charCode & 0x3f));
            }
            else {
                // surrogate pair
                i++;
                // UTF-16 encodes 0x10000-0x10FFFF by
                // subtracting 0x10000 and splitting the
                // 20 bits of 0x0-0xFFFFF into two halves
                charCode =
                    0x10000 + (((charCode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
                utf8Str += String.fromCharCode(0xf0 | (charCode >> 18));
                utf8Str += String.fromCharCode(0x80 | ((charCode >> 12) & 0x3f));
                utf8Str += String.fromCharCode(0x80 | ((charCode >> 6) & 0x3f));
                utf8Str += String.fromCharCode(0x80 | (charCode & 0x3f));
            }
        }
        return utf8Str;
    }
    function generatePath(modules, margin) {
        if (margin === void 0) { margin = 0; }
        var ops = [];
        modules.forEach(function (row, y) {
            var start = null;
            row.forEach(function (cell, x) {
                if (!cell && start !== null) {
                    // M0 0h7v1H0z injects the space with the move and drops the comma,
                    // saving a char per operation
                    ops.push("M" + (start + margin) + " " + (y + margin) + "h" + (x - start) + "v1H" + (start + margin) + "z");
                    start = null;
                    return;
                }
                // end of row, clean up or skip
                if (x === row.length - 1) {
                    if (!cell) {
                        // We would have closed the op above already so this can only mean
                        // 2+ light modules in a row.
                        return;
                    }
                    if (start === null) {
                        // Just a single dark module.
                        ops.push("M" + (x + margin) + "," + (y + margin) + " h1v1H" + (x + margin) + "z");
                    }
                    else {
                        // Otherwise finish the current line.
                        ops.push("M" + (start + margin) + "," + (y + margin) + " h" + (x + 1 - start) + "v1H" + (start + margin) + "z");
                    }
                    return;
                }
                if (cell && start === null) {
                    start = x;
                }
            });
        });
        return ops.join('');
    }
    var QRCodeProps = {
        value: {
            type: String,
            required: true,
            "default": '',
        },
        size: {
            type: Number,
            "default": 100,
        },
        level: {
            type: String,
            "default": defaultErrorCorrectLevel,
            validator: function (l) { return validErrorCorrectLevel(l); },
        },
        background: {
            type: String,
            "default": '#fff',
        },
        foreground: {
            type: String,
            "default": '#000',
        },
        margin: {
            type: Number,
            required: false,
            "default": 0,
        },
    };
    var QRCodeVueProps = __assign(__assign({}, QRCodeProps), { renderAs: {
            type: String,
            required: false,
            "default": 'canvas',
            validator: function (as) { return ['canvas', 'svg'].indexOf(as) > -1; },
        } });
    var QRCodeSvg = vue.defineComponent({
        name: 'QRCodeSvg',
        props: QRCodeProps,
        setup: function (props) {
            var numCells = vue.ref(0);
            var fgPath = vue.ref('');
            var generate = function () {
                var value = props.value, level = props.level, margin = props.margin;
                var cells = QRCode(value, level).modules;
                numCells.value = cells.length + margin * 2;
                // Drawing strategy: instead of a rect per module, we're going to create a
                // single path for the dark modules and layer that on top of a light rect,
                // for a total of 2 DOM nodes. We pay a bit more in string concat but that's
                // way faster than DOM ops.
                // For level 1, 441 nodes -> 2
                // For level 40, 31329 -> 2
                fgPath.value = generatePath(cells, margin);
            };
            generate();
            vue.onUpdated(generate);
            return function () { return vue.h('svg', {
                width: props.size,
                height: props.size,
                'shape-rendering': "crispEdges",
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: "0 0 " + numCells.value + " " + numCells.value,
            }, [
                vue.h('path', {
                    fill: props.background,
                    d: "M0,0 h" + numCells.value + "v" + numCells.value + "H0z",
                }),
                vue.h('path', { fill: props.foreground, d: fgPath.value }),
            ]); };
        },
    });
    var QRCodeCanvas = vue.defineComponent({
        name: 'QRCodeCanvas',
        props: QRCodeProps,
        setup: function (props) {
            var canvasEl = vue.ref(null);
            var generate = function () {
                var value = props.value, level = props.level, size = props.size, margin = props.margin, background = props.background, foreground = props.foreground;
                var cells = QRCode(value, level).modules;
                var numCells = cells.length + margin * 2;
                var canvas = canvasEl.value;
                if (!canvas) {
                    return;
                }
                var ctx = canvas.getContext('2d');
                if (!ctx) {
                    return;
                }
                var devicePixelRatio = window.devicePixelRatio || 1;
                var scale = (size / numCells) * devicePixelRatio;
                canvas.height = canvas.width = size * devicePixelRatio;
                ctx.scale(scale, scale);
                ctx.fillStyle = background;
                ctx.fillRect(0, 0, numCells, numCells);
                ctx.fillStyle = foreground;
                if (SUPPORTS_PATH2D) {
                    ctx.fill(new Path2D(generatePath(cells, margin)));
                }
                else {
                    cells.forEach(function (row, rdx) {
                        row.forEach(function (cell, cdx) {
                            if (cell) {
                                ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
                            }
                        });
                    });
                }
            };
            vue.onMounted(generate);
            vue.onUpdated(generate);
            return function () { return vue.h('canvas', {
                ref: canvasEl,
                style: { width: props.size + "px", height: props.size + "px" },
            }); };
        },
    });
    var QrcodeVue = vue.defineComponent({
        name: 'Qrcode',
        render: function () {
            var _a = this.$props, renderAs = _a.renderAs, value = _a.value, _size = _a.size, _margin = _a.margin, _level = _a.level, background = _a.background, foreground = _a.foreground;
            var size = _size >>> 0;
            var margin = _margin >>> 0;
            var level = validErrorCorrectLevel(_level) ? _level : defaultErrorCorrectLevel;
            return vue.h(renderAs === 'svg' ? QRCodeSvg : QRCodeCanvas, { value: value, size: size, margin: margin, level: level, background: background, foreground: foreground });
        },
        props: QRCodeVueProps,
    });

    return QrcodeVue;

}));


/***/ }),

/***/ "600a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var shared = __webpack_require__("73fd");
var hasOwn = __webpack_require__("8e14");
var uid = __webpack_require__("51cb");
var NATIVE_SYMBOL = __webpack_require__("93a9");
var USE_SYMBOL_AS_UID = __webpack_require__("1ae2");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "6109":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("7695");
var toAbsoluteIndex = __webpack_require__("4278");
var lengthOfArrayLike = __webpack_require__("a4f0");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "6266":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("21f6");
var aCallable = __webpack_require__("a2f6");
var NATIVE_BIND = __webpack_require__("d920");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "6381":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "64ea":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "657a":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("3187");
var enumBugKeys = __webpack_require__("cd84");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "6b31":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("9818");
var hasOwn = __webpack_require__("8e14");
var wrappedWellKnownSymbolModule = __webpack_require__("4e4b");
var defineProperty = __webpack_require__("b74d").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "6db2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var userAgent = __webpack_require__("768e");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "7293":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var isCallable = __webpack_require__("769d");
var hasOwn = __webpack_require__("8e14");
var createNonEnumerableProperty = __webpack_require__("25eb");
var setGlobal = __webpack_require__("6381");
var inspectSource = __webpack_require__("42d5");
var InternalStateModule = __webpack_require__("9590");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("c558").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "72d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "NdButton", function() { return /* reexport */ packages_button; });
__webpack_require__.d(__webpack_exports__, "Share", function() { return /* reexport */ packages_Share; });

// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@4.5.15_37da3b1447a1a6d1743bace6c98f8faa/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("7da5")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.20.3/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("a3e1");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.20.3/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("bda7");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/.pnpm/thread-loader@2.1.3_webpack@4.46.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.3_2ca4133eaad1ede48c0159d2a9c3555f/node_modules/babel-loader/lib!./node_modules/.pnpm/ts-loader@6.2.2_typescript@4.1.6/node_modules/ts-loader??ref--14-3!./node_modules/.pnpm/vue-loader@16.8.3_webpack@4.46.0/node_modules/vue-loader/dist/templateLoader.js??ref--7!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@16.8.3_webpack@4.46.0/node_modules/vue-loader/dist??ref--1-1!./packages/button/src/button.vue?vue&type=template&id=24683262&ts=true

var _hoisted_1 = {
  class: "nd-btn"
};
var _hoisted_2 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", _hoisted_1, [_ctx.$slots.default ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=template&id=24683262&ts=true

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/.pnpm/thread-loader@2.1.3_webpack@4.46.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.3_2ca4133eaad1ede48c0159d2a9c3555f/node_modules/babel-loader/lib!./node_modules/.pnpm/ts-loader@6.2.2_typescript@4.1.6/node_modules/ts-loader??ref--14-3!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@16.8.3_webpack@4.46.0/node_modules/vue-loader/dist??ref--1-1!./packages/button/src/button.vue?vue&type=script&lang=ts

/* harmony default export */ var buttonvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "nd-button"
}));
// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@16.8.3_webpack@4.46.0/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__("85dd");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./packages/button/src/button.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(buttonvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var src_button = (__exports__);
// CONCATENATED MODULE: ./packages/button/index.ts

 // 定义 install 方法， App 作为参数

src_button.install = function (app) {
  app.component(src_button.name, src_button);
};

/* harmony default export */ var packages_button = (src_button);
// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/.pnpm/thread-loader@2.1.3_webpack@4.46.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.3_2ca4133eaad1ede48c0159d2a9c3555f/node_modules/babel-loader/lib!./node_modules/.pnpm/ts-loader@6.2.2_typescript@4.1.6/node_modules/ts-loader??ref--14-3!./node_modules/.pnpm/vue-loader@16.8.3_webpack@4.46.0/node_modules/vue-loader/dist/templateLoader.js??ref--7!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@16.8.3_webpack@4.46.0/node_modules/vue-loader/dist??ref--1-1!./packages/Share/src/Share.vue?vue&type=template&id=657a1948&ts=true

var Sharevue_type_template_id_657a1948_ts_true_hoisted_1 = {
  class: "social-share"
};
var Sharevue_type_template_id_657a1948_ts_true_hoisted_2 = {
  class: "wechat-qrcode"
};

var _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h4", null, "二维码", -1);

var _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "help"
}, "扫描二维码，点击右上角分享", -1);

function Sharevue_type_template_id_657a1948_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_qrcode_vue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("qrcode-vue");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", Sharevue_type_template_id_657a1948_ts_true_hoisted_1, [_ctx.weibo ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 0,
    class: "social-share-icon icon-weibo",
    style: {
      "cursor": "pointer"
    },
    onClick: _cache[0] || (_cache[0] = //@ts-ignore
    function () {
      return _ctx.shareWeibo && _ctx.shareWeibo.apply(_ctx, arguments);
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.QQ ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 1,
    class: "social-share-icon icon-qq",
    style: {
      "cursor": "pointer"
    },
    onClick: _cache[1] || (_cache[1] = //@ts-ignore
    function () {
      return _ctx.shareQQ && _ctx.shareQQ.apply(_ctx, arguments);
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.weChat ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 2,
    class: "social-share-icon icon-wechat",
    style: {
      "cursor": "pointer"
    },
    onMouseover: _cache[2] || (_cache[2] = //@ts-ignore
    function () {
      return _ctx.shareWeChat && _ctx.shareWeChat.apply(_ctx, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", Sharevue_type_template_id_657a1948_ts_true_hoisted_2, [_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_qrcode_vue, {
    value: _ctx.url,
    size: 120,
    level: "H",
    style: {
      "margin": "5px"
    }
  }, null, 8, ["value"]), _hoisted_4])], 32)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.douban ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 3,
    class: "social-share-icon icon-douban",
    style: {
      "cursor": "pointer"
    },
    onClick: _cache[3] || (_cache[3] = //@ts-ignore
    function () {
      return _ctx.shareDouban && _ctx.shareDouban.apply(_ctx, arguments);
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.QZone ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 4,
    class: "social-share-icon icon-qzone",
    style: {
      "cursor": "pointer"
    },
    onClick: _cache[4] || (_cache[4] = //@ts-ignore
    function () {
      return _ctx.shareQZone && _ctx.shareQZone.apply(_ctx, arguments);
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.linkedin ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 5,
    class: "social-share-icon icon-linkedin",
    style: {
      "cursor": "pointer"
    },
    onClick: _cache[5] || (_cache[5] = //@ts-ignore
    function () {
      return _ctx.shareLinkedin && _ctx.shareLinkedin.apply(_ctx, arguments);
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.diandian ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 6,
    class: "social-share-icon icon-diandian",
    style: {
      "cursor": "pointer"
    },
    onClick: _cache[6] || (_cache[6] = //@ts-ignore
    function () {
      return _ctx.shareDianDian && _ctx.shareDianDian.apply(_ctx, arguments);
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.facebook ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 7,
    class: "social-share-icon icon-facebook",
    style: {
      "cursor": "pointer"
    },
    onClick: _cache[7] || (_cache[7] = //@ts-ignore
    function () {
      return _ctx.shareFacebook && _ctx.shareFacebook.apply(_ctx, arguments);
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.twitter ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 8,
    class: "social-share-icon icon-twitter",
    style: {
      "cursor": "pointer"
    },
    onClick: _cache[8] || (_cache[8] = //@ts-ignore
    function () {
      return _ctx.shareTwitter && _ctx.shareTwitter.apply(_ctx, arguments);
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.google ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 9,
    class: "social-share-icon icon-google",
    style: {
      "cursor": "pointer"
    },
    onClick: _cache[9] || (_cache[9] = //@ts-ignore
    function () {
      return _ctx.shareGoogle && _ctx.shareGoogle.apply(_ctx, arguments);
    })
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./packages/Share/src/Share.vue?vue&type=template&id=657a1948&ts=true

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.20.3/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a815");

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.20.3/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("2f81");

// EXTERNAL MODULE: ./node_modules/.pnpm/qrcode.vue@3.3.3_vue@3.2.28/node_modules/qrcode.vue/dist/qrcode.vue.browser.js
var qrcode_vue_browser = __webpack_require__("5b2c");
var qrcode_vue_browser_default = /*#__PURE__*/__webpack_require__.n(qrcode_vue_browser);

// CONCATENATED MODULE: ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/.pnpm/thread-loader@2.1.3_webpack@4.46.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.3_2ca4133eaad1ede48c0159d2a9c3555f/node_modules/babel-loader/lib!./node_modules/.pnpm/ts-loader@6.2.2_typescript@4.1.6/node_modules/ts-loader??ref--14-3!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.46.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@16.8.3_webpack@4.46.0/node_modules/vue-loader/dist??ref--1-1!./packages/Share/src/Share.vue?vue&type=script&lang=ts




/* harmony default export */ var Sharevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    QQ: {
      type: Boolean,
      default: true
    },
    weibo: {
      type: Boolean,
      default: true
    },
    weChat: {
      type: Boolean,
      default: true
    },
    douban: {
      type: Boolean,
      default: false
    },
    QZone: {
      type: Boolean,
      default: true
    },
    linkedin: {
      type: Boolean,
      default: false
    },
    diandian: {
      type: Boolean,
      default: false
    },
    facebook: {
      type: Boolean,
      default: false
    },
    twitter: {
      type: Boolean,
      default: false
    },
    google: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: window.location.href
    },
    source: {
      type: String,
      default: ''
    },
    origin: {
      type: String,
      default: window.location.origin
    },
    title: {
      type: String,
      default: document.title
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  components: {
    QrcodeVue: qrcode_vue_browser_default.a
  },
  name: "Share",
  setup: function setup(props) {
    var shareWeibo = function shareWeibo() {
      window.open("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(props.url) + "&title=" + encodeURIComponent(props.title) + "&pic=" + encodeURIComponent(props.image) + "&appkey=");
    };

    var shareQQ = function shareQQ() {
      window.open("http://connect.qq.com/widget/shareqq/index.html?url=" + encodeURIComponent(props.url) + "&title=" + encodeURIComponent(props.title) + "&source=" + encodeURIComponent(props.source) + "&desc=" + encodeURIComponent(props.description) + "&pics=" + encodeURIComponent(props.image));
    };

    var shareWeChat = function shareWeChat() {
      QrCode();
    };

    var shareDouban = function shareDouban() {
      window.open("http://shuo.douban.com/!service/share?href=" + encodeURIComponent(props.url) + "&name=" + encodeURIComponent(props.title) + "&text=" + encodeURIComponent(props.description) + "&image=" + encodeURIComponent(props.image) + "&starid=0&aid=0&style=11");
    };

    var shareQZone = function shareQZone() {
      window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(props.url) + "&title=" + encodeURIComponent(props.title) + "&desc=" + encodeURIComponent(props.description) + "&summary=" + encodeURIComponent(props.description) + "&site=" + encodeURIComponent(props.source) + "&pics=" + encodeURIComponent(props.image));
    };

    var shareLinkedin = function shareLinkedin() {
      window.open("http://www.linkedin.com/shareArticle?mini=true&amp;ro=true&amp;title=" + encodeURIComponent(props.title) + "&url=" + encodeURIComponent(props.url) + "&summary=" + encodeURIComponent(props.description) + "&source=" + encodeURIComponent(props.source) + "&armin=armin");
    };

    var shareDianDian = function shareDianDian() {
      window.open("http://www.diandian.com/share?lo=" + encodeURIComponent(props.url) + "&ti=" + encodeURIComponent(props.title) + "&type=link");
    };

    var shareFacebook = function shareFacebook() {
      window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(props.url));
    };

    var shareTwitter = function shareTwitter() {
      window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(props.description) + "&url=" + encodeURIComponent(props.url) + "&via=" + encodeURIComponent(props.origin));
    };

    var shareGoogle = function shareGoogle() {
      window.open("https://plus.google.com/share?url=" + encodeURIComponent(props.url));
    };

    var qrcode = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    var url = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])('');
    var weChatQR = null;

    var QrCode = function QrCode() {
      url.value = props.url;
    };

    return {
      url: url,
      shareWeibo: shareWeibo,
      shareQQ: shareQQ,
      shareWeChat: shareWeChat,
      shareDouban: shareDouban,
      shareQZone: shareQZone,
      shareLinkedin: shareLinkedin,
      shareDianDian: shareDianDian,
      shareFacebook: shareFacebook,
      shareTwitter: shareTwitter,
      shareGoogle: shareGoogle
    };
  }
}));
// CONCATENATED MODULE: ./packages/Share/src/Share.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/Share/src/Share.vue





const Share_exports_ = /*#__PURE__*/exportHelper_default()(Sharevue_type_script_lang_ts, [['render',Sharevue_type_template_id_657a1948_ts_true_render]])

/* harmony default export */ var Share = (Share_exports_);
// EXTERNAL MODULE: ./packages/Share/src/assets/css/share.min.css
var share_min = __webpack_require__("ce0d");

// CONCATENATED MODULE: ./packages/Share/index.ts


 // 定义 install 方法， App 作为参数

Share.install = function (app) {
  app.component(Share.name, Share);
};

/* harmony default export */ var packages_Share = (Share);
// CONCATENATED MODULE: ./packages/index.ts



 // 所有组件列表

var components = [packages_button, packages_Share]; // 定义 install 方法， App 作为参数

var install = function install(app) {
  // 遍历注册所有组件
  components.map(function (component) {
    return app.component(component.name, component);
  });
};


/* harmony default export */ var packages_0 = ({
  install: install
});
// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@4.5.15_37da3b1447a1a6d1743bace6c98f8faa/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "73fd":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("ec40");
var store = __webpack_require__("90e8");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "768e":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("06a6");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "7695":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("442e");
var requireObjectCoercible = __webpack_require__("218d");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "769d":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "7bdd":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("d920");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "7da5":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "7f11":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("21f6");
var fails = __webpack_require__("9d66");
var isCallable = __webpack_require__("769d");
var classof = __webpack_require__("9f17");
var getBuiltIn = __webpack_require__("06a6");
var inspectSource = __webpack_require__("42d5");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "8115":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var isArray = __webpack_require__("19ae");
var isConstructor = __webpack_require__("7f11");
var isObject = __webpack_require__("0bd7");
var wellKnownSymbol = __webpack_require__("600a");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "83d1":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("9d66");
var isCallable = __webpack_require__("769d");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "85dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "87d7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var call = __webpack_require__("49d9");
var isObject = __webpack_require__("0bd7");
var isSymbol = __webpack_require__("cc40");
var getMethod = __webpack_require__("903d");
var ordinaryToPrimitive = __webpack_require__("cda3");
var wellKnownSymbol = __webpack_require__("600a");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8d61":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("87d7");
var isSymbol = __webpack_require__("cc40");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "8e14":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("21f6");
var toObject = __webpack_require__("ed2d");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "903d":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("a2f6");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "90e8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var setGlobal = __webpack_require__("6381");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "925e":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("64ea");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "9304":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("21f6");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "93a9":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("6db2");
var fails = __webpack_require__("9d66");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "9590":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("f127");
var global = __webpack_require__("2ef6");
var uncurryThis = __webpack_require__("21f6");
var isObject = __webpack_require__("0bd7");
var createNonEnumerableProperty = __webpack_require__("25eb");
var hasOwn = __webpack_require__("8e14");
var shared = __webpack_require__("90e8");
var sharedKey = __webpack_require__("da06");
var hiddenKeys = __webpack_require__("2cc4");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "96c2":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("06a6");
var uncurryThis = __webpack_require__("21f6");
var getOwnPropertyNamesModule = __webpack_require__("657a");
var getOwnPropertySymbolsModule = __webpack_require__("b10f");
var anObject = __webpack_require__("1478");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "9818":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");

module.exports = global;


/***/ }),

/***/ "9a4c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var getOwnPropertyDescriptor = __webpack_require__("39f5").f;
var createNonEnumerableProperty = __webpack_require__("25eb");
var redefine = __webpack_require__("7293");
var setGlobal = __webpack_require__("6381");
var copyConstructorProperties = __webpack_require__("a043");
var isForced = __webpack_require__("83d1");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "9d66":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "9f17":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var TO_STRING_TAG_SUPPORT = __webpack_require__("ba76");
var isCallable = __webpack_require__("769d");
var classofRaw = __webpack_require__("c226");
var wellKnownSymbol = __webpack_require__("600a");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "a043":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("8e14");
var ownKeys = __webpack_require__("96c2");
var getOwnPropertyDescriptorModule = __webpack_require__("39f5");
var definePropertyModule = __webpack_require__("b74d");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "a2f6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var isCallable = __webpack_require__("769d");
var tryToString = __webpack_require__("d38e");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "a3e1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("9a4c");
var $map = __webpack_require__("0e68").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("242f");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "a4f0":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("925e");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "a552":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("b74d").f;
var hasOwn = __webpack_require__("8e14");
var wellKnownSymbol = __webpack_require__("600a");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "a815":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("9a4c");
var global = __webpack_require__("2ef6");
var getBuiltIn = __webpack_require__("06a6");
var apply = __webpack_require__("7bdd");
var call = __webpack_require__("49d9");
var uncurryThis = __webpack_require__("21f6");
var IS_PURE = __webpack_require__("ec40");
var DESCRIPTORS = __webpack_require__("fdff");
var NATIVE_SYMBOL = __webpack_require__("93a9");
var fails = __webpack_require__("9d66");
var hasOwn = __webpack_require__("8e14");
var isArray = __webpack_require__("19ae");
var isCallable = __webpack_require__("769d");
var isObject = __webpack_require__("0bd7");
var isPrototypeOf = __webpack_require__("18e2");
var isSymbol = __webpack_require__("cc40");
var anObject = __webpack_require__("1478");
var toObject = __webpack_require__("ed2d");
var toIndexedObject = __webpack_require__("7695");
var toPropertyKey = __webpack_require__("8d61");
var $toString = __webpack_require__("420c");
var createPropertyDescriptor = __webpack_require__("165e");
var nativeObjectCreate = __webpack_require__("3ad5");
var objectKeys = __webpack_require__("f9b0");
var getOwnPropertyNamesModule = __webpack_require__("657a");
var getOwnPropertyNamesExternal = __webpack_require__("54bb");
var getOwnPropertySymbolsModule = __webpack_require__("b10f");
var getOwnPropertyDescriptorModule = __webpack_require__("39f5");
var definePropertyModule = __webpack_require__("b74d");
var definePropertiesModule = __webpack_require__("28aa");
var propertyIsEnumerableModule = __webpack_require__("cdbb");
var arraySlice = __webpack_require__("9304");
var redefine = __webpack_require__("7293");
var shared = __webpack_require__("73fd");
var sharedKey = __webpack_require__("da06");
var hiddenKeys = __webpack_require__("2cc4");
var uid = __webpack_require__("51cb");
var wellKnownSymbol = __webpack_require__("600a");
var wrappedWellKnownSymbolModule = __webpack_require__("4e4b");
var defineWellKnownSymbol = __webpack_require__("6b31");
var setToStringTag = __webpack_require__("a552");
var InternalStateModule = __webpack_require__("9590");
var $forEach = __webpack_require__("0e68").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "af17":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("8115");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "b10f":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "b441":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("fdff");
var fails = __webpack_require__("9d66");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "b74d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var DESCRIPTORS = __webpack_require__("fdff");
var IE8_DOM_DEFINE = __webpack_require__("b8dd");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("b441");
var anObject = __webpack_require__("1478");
var toPropertyKey = __webpack_require__("8d61");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "b8dd":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("fdff");
var fails = __webpack_require__("9d66");
var createElement = __webpack_require__("fddf");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "ba76":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("600a");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "bda7":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("fdff");
var FUNCTION_NAME_EXISTS = __webpack_require__("c558").EXISTS;
var uncurryThis = __webpack_require__("21f6");
var defineProperty = __webpack_require__("b74d").f;

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "c226":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("21f6");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c558":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("fdff");
var hasOwn = __webpack_require__("8e14");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "cc40":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var getBuiltIn = __webpack_require__("06a6");
var isCallable = __webpack_require__("769d");
var isPrototypeOf = __webpack_require__("18e2");
var USE_SYMBOL_AS_UID = __webpack_require__("1ae2");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "cd84":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "cda3":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var call = __webpack_require__("49d9");
var isCallable = __webpack_require__("769d");
var isObject = __webpack_require__("0bd7");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "cdbb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "ce0d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d38e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "d8fc":
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

/***/ "d920":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("9d66");

module.exports = !fails(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "da06":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("73fd");
var uid = __webpack_require__("51cb");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "ec40":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "ed2d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var requireObjectCoercible = __webpack_require__("218d");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "f127":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var isCallable = __webpack_require__("769d");
var inspectSource = __webpack_require__("42d5");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "f9b0":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("3187");
var enumBugKeys = __webpack_require__("cd84");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "fddf":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2ef6");
var isObject = __webpack_require__("0bd7");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "fdff":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("9d66");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ })

/******/ });
//# sourceMappingURL=index.common.js.map