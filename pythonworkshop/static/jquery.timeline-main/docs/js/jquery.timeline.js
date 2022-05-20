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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/timeline.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-constructor.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/a-constructor.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");

var TypeError = global.TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw TypeError('Incorrect invocation');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var Array = global.Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

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

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

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

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

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

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

var TypeError = global.TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

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

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/array-sort.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-sort.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

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

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

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

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

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

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "./node_modules/core-js/internals/engine-ff-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-ff-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-browser.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-browser.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = typeof window == 'object' && typeof Deno != 'object';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ie-or-edge.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ie-or-edge.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var UA = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios-pebble.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios-pebble.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

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

/***/ "./node_modules/core-js/internals/engine-webkit-version.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-webkit-version.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

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

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var Function = global.Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
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

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

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

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

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

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

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

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

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

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

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

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

var TypeError = global.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es-x/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");
var IS_IOS_PEBBLE = __webpack_require__(/*! ../internals/engine-is-ios-pebble */ "./node_modules/core-js/internals/engine-is-ios-pebble.js");
var IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ "./node_modules/core-js/internals/engine-is-webos-webkit.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol-registry.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol-registry.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

/* eslint-disable es-x/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

var TypeError = global.TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es-x/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es-x/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

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
// eslint-disable-next-line es-x/no-object-create -- safe
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

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
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

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");

var TypeError = global.TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
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

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
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

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var $getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");

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

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

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

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
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

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var $propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f;

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

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

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-constructor-detection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-constructor-detection.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "./node_modules/core-js/internals/promise-native-constructor.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ "./node_modules/core-js/internals/engine-is-browser.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-native-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-native-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-statics-incorrect-iteration.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-statics-incorrect-iteration.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "./node_modules/core-js/internals/promise-native-constructor.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "./node_modules/core-js/internals/promise-constructor-detection.js").CONSTRUCTOR;

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),

/***/ "./node_modules/core-js/internals/proxy-accessor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/proxy-accessor.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/queue.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/queue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").CONFIGURABLE;

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

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getInternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "./node_modules/core-js/internals/regexp-unsupported-ncg.js");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-get-flags.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-get-flags.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.22.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "./node_modules/core-js/internals/a-constructor.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/symbol-define-to-primitive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/symbol-define-to-primitive.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

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

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

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

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

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

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $findIndex = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es-x/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var un$Join = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

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

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var un$Slice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var internalSort = __webpack_require__(/*! ../internals/array-sort */ "./node_modules/core-js/internals/array-sort.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var FF = __webpack_require__(/*! ../internals/engine-ff-version */ "./node_modules/core-js/internals/engine-ff-version.js");
var IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ "./node_modules/core-js/internals/engine-is-ie-or-edge.js");
var V8 = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ "./node_modules/core-js/internals/engine-webkit-version.js");

var test = [];
var un$Sort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) delete array[index++];

    return array;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var TypeError = global.TypeError;
var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS;
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

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

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = replacer;
  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
  if (!isArray(replacer)) replacer = function (key, value) {
    if (isCallable($replacer)) value = call($replacer, this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var arraySlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = arraySlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es-x/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $values = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ "./node_modules/core-js/internals/promise-statics-incorrect-iteration.js");

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.catch.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.catch.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "./node_modules/core-js/internals/promise-constructor-detection.js").CONSTRUCTOR;
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "./node_modules/core-js/internals/promise-native-constructor.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    redefine(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var Queue = __webpack_require__(/*! ../internals/queue */ "./node_modules/core-js/internals/queue.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "./node_modules/core-js/internals/promise-native-constructor.js");
var PromiseConstructorDetection = __webpack_require__(/*! ../internals/promise-constructor-detection */ "./node_modules/core-js/internals/promise-constructor-detection.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  Internal.prototype = redefineAll(PromisePrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    // eslint-disable-next-line unicorn/no-thenable -- safe
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    }
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/es.promise.constructor */ "./node_modules/core-js/modules/es.promise.constructor.js");
__webpack_require__(/*! ../modules/es.promise.all */ "./node_modules/core-js/modules/es.promise.all.js");
__webpack_require__(/*! ../modules/es.promise.catch */ "./node_modules/core-js/modules/es.promise.catch.js");
__webpack_require__(/*! ../modules/es.promise.race */ "./node_modules/core-js/modules/es.promise.race.js");
__webpack_require__(/*! ../modules/es.promise.reject */ "./node_modules/core-js/modules/es.promise.reject.js");
__webpack_require__(/*! ../modules/es.promise.resolve */ "./node_modules/core-js/modules/es.promise.resolve.js");


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.race.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.race.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ "./node_modules/core-js/internals/promise-statics-incorrect-iteration.js");

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.reject.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.reject.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "./node_modules/core-js/internals/promise-constructor-detection.js").CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.resolve.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.resolve.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "./node_modules/core-js/internals/promise-native-constructor.js");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "./node_modules/core-js/internals/promise-constructor-detection.js").CONSTRUCTOR;
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.reflect.construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "./node_modules/core-js/internals/a-constructor.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getRegExpFlags = __webpack_require__(/*! ../internals/regexp-get-flags */ "./node_modules/core-js/internals/regexp-get-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var proxyAccessor = __webpack_require__(/*! ../internals/proxy-accessor */ "./node_modules/core-js/internals/proxy-accessor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var enforceInternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").enforce;
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "./node_modules/core-js/internals/regexp-unsupported-ncg.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only propper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr = chr + charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER;
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getRegExpFlags = __webpack_require__(/*! ../internals/regexp-get-flags */ "./node_modules/core-js/internals/regexp-get-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var defineSymbolToPrimitive = __webpack_require__(/*! ../internals/symbol-define-to-primitive */ "./node_modules/core-js/internals/symbol-define-to-primitive.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
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

var $getOwnPropertySymbols = function (O) {
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
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

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

/***/ "./node_modules/core-js/modules/es.symbol.for.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.for.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(/*! ../internals/native-symbol-registry */ "./node_modules/core-js/internals/native-symbol-registry.js");

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/es.symbol.constructor */ "./node_modules/core-js/modules/es.symbol.constructor.js");
__webpack_require__(/*! ../modules/es.symbol.for */ "./node_modules/core-js/modules/es.symbol.for.js");
__webpack_require__(/*! ../modules/es.symbol.key-for */ "./node_modules/core-js/modules/es.symbol.key-for.js");
__webpack_require__(/*! ../modules/es.json.stringify */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! ../modules/es.object.get-own-property-symbols */ "./node_modules/core-js/modules/es.object.get-own-property-symbols.js");


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.key-for.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.key-for.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(/*! ../internals/native-symbol-registry */ "./node_modules/core-js/internals/native-symbol-registry.js");

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

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

/***/ "./src/timeline.js":
/*!*************************!*\
  !*** ./src/timeline.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_36__);
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






































function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

//import "core-js/stable"
//import "regenerator-runtime/runtime"

/*!
 * jQuery Timeline
 * ------------------------
 * Version: 2.1.3
 * Author: Ka2 (https://ka2.org/)
 * Repository: https://github.com/ka215/jquery.timeline
 * Lisenced: MIT
 */

/* ----------------------------------------------------------------------------------------------------------------
 * Constants
 * ----------------------------------------------------------------------------------------------------------------
 */
var NAME = "Timeline";
var VERSION = "2.1.3";
var DATA_KEY = "jq.timeline";
var EVENT_KEY = ".".concat(DATA_KEY);
var PREFIX = "jqtl-";
var IS_TOUCH = ('ontouchstart' in window);
var MIN_POINTER_SIZE = 12;
var JQUERY_NO_CONFLICT = $.fn[NAME];
var Default = {
  type: "bar",
  scale: "day",
  startDatetime: "currently",
  endDatetime: "auto",
  range: 3,
  rows: "auto",
  rowHeight: 48,
  width: "auto",
  height: "auto",
  minGridSize: 30,
  marginHeight: 2,
  headline: {
    display: true,
    title: "",
    range: true,
    locale: "en-US",
    format: {
      hour12: false
    }
  },
  sidebar: {
    sticky: false,
    overlay: false,
    list: []
  },
  ruler: {
    truncateLowers: false,
    top: {
      lines: [],
      height: 30,
      fontSize: 14,
      color: "inherit",
      // Changed since v2.1.0, an old value is "#777777"
      background: "inherit",
      // Changed since v2.1.0, an old value is "#FFFFFF"
      locale: "en-US",
      format: {
        hour12: false
      }
    },
    bottom: {
      // Added since v2.1.0 to fix #61
      lines: [],
      height: 30,
      fontSize: 14,
      color: "inherit",
      background: "inherit",
      locale: "en-US",
      format: {
        hour12: false
      }
    }
  },
  footer: {
    display: true,
    content: "",
    range: false,
    locale: "en-US",
    format: {
      hour12: false
    }
  },
  eventMeta: {
    display: false,
    scale: "day",
    locale: "en-US",
    format: {
      hour12: false
    },
    content: ""
  },
  eventData: [],
  effects: {
    presentTime: true,
    hoverEvent: true,
    stripedGridRow: true,
    horizontalGridStyle: "dotted",
    verticalGridStyle: "solid"
  },
  //startHour       : 0, // Merge PR#37
  //endHour         : 23, // Merge PR#37

  /*
  hourPeriod      : { // Added new option inspired from PR#37; Available only if the scale is "day"( or "week")
      start       : 0,
      end         : 23,
  },
  */
  colorScheme: {
    // Added new option since v2.0.0
    theme: {
      // Added new option since v2.1.0
      name: "default",
      text: "#343A40",
      subtext: "#707070",
      offtext: "#BBBBBB",
      modesttext: "#969696",
      line: "#6C757D",
      offline: "#DDDDDD",
      activeline: "#DC3545",
      background: "#FFFFFF",
      invertbg: "#121212",
      striped1: "#F7F7F7",
      striped2: "#F0F0F0",
      active: "#F73333",
      marker: "#2C7CFF",
      gridbase: "#333333"
    },
    event: {
      text: "#343A40",
      border: "#6C757D",
      background: "#2CC688"
    },
    hookEventColors: function hookEventColors() {
      return null;
    } // Added instead of merging setColorEvent of PR#37 since v2.0.0

  },
  // onOpenEvent     : () => null, // Merge PR#37; (event) => null
  rangeAlign: "latest",
  loader: "default",
  loadingMessage: "",
  hideScrollbar: false,
  storage: "session",
  reloadCacheKeep: true,
  zoom: false,
  wrapScale: true,
  firstDayOfWeek: 0,
  // 0: Sunday, 1: Monday, ... 6: Saturday
  engine: "canvas",
  disableLimitter: false,
  // Added new option since v2.1.2
  debug: false // datetimeFormat : {},       // --> Deprecated since v2.0.0
  // datetimePrefix : "",       // --> Deprecated since v2.0.0
  // duration     : 150,        // --> Deprecated since v2.0.0
  // showPointer  : true,       // --> Deprecated since v2.0.0
  // httpLanguage : false,      // --> Deprecated since v2.0.0
  // i18n         : {},         // --> Deprecated since v2.0.0
  // langsDir     : "./langs/", // --> Deprecated since v2.0.0
  // minGridPer   : 2,          // --> Deprecated since v2.0.0
  // minuteInterval : 30,       // --> Deprecated since v2.0.0
  // naviIcon     : {},         // --> Deprecated since v2.0.0
  // showHeadline : true,       // --> Deprecated since v2.0.0
  // zerofillYear   : false,    // --> Deprecated since v2.0.0

};
var LimitScaleGrids = {
  millennium: 100,
  century: 100 * 5,
  decade: 10 * 50,
  lustrum: 5 * 100,
  year: 500,
  month: 12 * 45,
  week: 53 * 10,
  day: 366,
  hour: 24 * 30,
  quarterHour: 24 * 4 * 7.5,
  halfHour: 24 * 2 * 15,
  minute: 60 * 12,
  second: 60 * 15
};
var EventParams = {
  uid: "",
  userId: "",
  eventId: "",
  x: 0,
  y: Default.marginHeight,
  width: Default.minGridSize,
  height: Default.rowHeight - Default.marginHeight * 2,
  start: "",
  end: "",
  row: 1,
  bgColor: Default.colorScheme.event.background,
  // Modified since v2.0.0
  color: Default.colorScheme.event.text,
  // Modified since v2.0.0
  bdColor: Default.colorScheme.event.border,
  // Modified since v2.0.0
  label: "",
  content: "",
  category: "",
  // Added new option since v2.0.0
  image: "",
  margin: Default.marginHeight,
  rangeMeta: "",
  size: "normal",
  type: "",
  extend: {},
  remote: false,
  relation: {},
  callback: function callback() {}
};
var Event = {
  INITIALIZED: "initialized".concat(EVENT_KEY),
  HIDE: "hide".concat(EVENT_KEY),
  SHOW: "show".concat(EVENT_KEY),
  CLICK_EVENT: "click.open".concat(EVENT_KEY),
  FOCUSIN_EVENT: "focusin.event".concat(EVENT_KEY),
  FOCUSOUT_EVENT: "focusout.event".concat(EVENT_KEY),
  TOUCHSTART_TIMELINE: "mousedown.timeline".concat(EVENT_KEY),
  // Deleted touchstart.timeline${EVENT_KEY} because never work the openEvent on touch device; since v2.0.0
  TOUCHMOVE_TIMELINE: "mousemove.timeline".concat(EVENT_KEY),
  // Deleted touchmove.timeline${EVENT_KEY} because never work the openEvent on touch device; since v2.0.0
  TOUCHEND_TIMELINE: "mouseup.timeline".concat(EVENT_KEY),
  // Deleted touchend.timeline${EVENT_KEY} because never work the openEvent on touch device; since v2.0.0
  MOUSEENTER_POINTER: "mouseenter.pointer".concat(EVENT_KEY),
  MOUSELEAVE_POINTER: "mouseleave.pointer".concat(EVENT_KEY),
  ZOOMIN_SCALE: "dblclick.zoom".concat(EVENT_KEY)
};
var ClassName = {
  TIMELINE_CONTAINER: "".concat(PREFIX, "container"),
  TIMELINE_MAIN: "".concat(PREFIX, "main"),
  TIMELINE_HEADLINE: "".concat(PREFIX, "headline"),
  TIMELINE_HEADLINE_WRAPPER: "".concat(PREFIX, "headline-wrapper"),
  HEADLINE_TITLE: "".concat(PREFIX, "timeline-title"),
  RANGE_META: "".concat(PREFIX, "range-meta"),
  RANGE_SPAN: "".concat(PREFIX, "range-span"),
  TIMELINE_EVENT_CONTAINER: "".concat(PREFIX, "event-container"),
  TIMELINE_BACKGROUND_GRID: "".concat(PREFIX, "bg-grid"),
  TIMELINE_RELATION_LINES: "".concat(PREFIX, "relation-lines"),
  TIMELINE_EVENTS: "".concat(PREFIX, "events"),
  TIMELINE_EVENT_NODE: "".concat(PREFIX, "event-node"),
  TIMELINE_EVENT_LABEL: "".concat(PREFIX, "event-label"),
  TIMELINE_EVENT_THUMBNAIL: "".concat(PREFIX, "event-thumbnail"),
  TIMELINE_RULER_LINES: "".concat(PREFIX, "ruler-line-rows"),
  TIMELINE_RULER_ITEM: "".concat(PREFIX, "ruler-line-item"),
  TIMELINE_SIDEBAR: "".concat(PREFIX, "side-index"),
  TIMELINE_SIDEBAR_MARGIN: "".concat(PREFIX, "side-index-margin"),
  TIMELINE_SIDEBAR_ITEM: "".concat(PREFIX, "side-index-item"),
  TIMELINE_FOOTER: "".concat(PREFIX, "footer"),
  TIMELINE_FOOTER_CONTENT: "".concat(PREFIX, "footer-content"),
  VIEWER_EVENT_TITLE: "".concat(PREFIX, "event-title"),
  VIEWER_EVENT_CONTENT: "".concat(PREFIX, "event-content"),
  VIEWER_EVENT_META: "".concat(PREFIX, "event-meta"),
  VIEWER_EVENT_IMAGE_WRAPPER: "".concat(PREFIX, "event-image-wrapper"),
  VIEWER_EVENT_IMAGE: "".concat(PREFIX, "event-image"),
  VIEWER_EVENT_TYPE_POINTER: "".concat(PREFIX, "event-type-pointer"),
  HIDE_SCROLLBAR: "".concat(PREFIX, "hide-scrollbar"),
  HIDE: "".concat(PREFIX, "hide"),
  RULER_ITEM_ALIGN_LEFT: "".concat(PREFIX, "rli-left"),
  STICKY_LEFT: "".concat(PREFIX, "sticky-left"),
  OVERLAY: "".concat(PREFIX, "overlay"),
  ALIGN_SELF_RIGHT: "".concat(PREFIX, "align-self-right"),
  PRESENT_TIME_MARKER: "".concat(PREFIX, "present-time"),
  LOADER_CONTAINER: "".concat(PREFIX, "loader"),
  LOADER_ITEM: "".concat(PREFIX, "loading")
};
var Selector = {
  EVENT_NODE: ".".concat(PREFIX, "event-node"),
  EVENT_VIEW: ".timeline-event-view, .".concat(PREFIX, "event-view"),
  RULER_TOP: ".".concat(PREFIX, "ruler-top"),
  RULER_BOTTOM: ".".concat(PREFIX, "ruler-bottom"),
  TIMELINE_CONTAINER: ".".concat(ClassName.TIMELINE_CONTAINER),
  TIMELINE_MAIN: ".".concat(ClassName.TIMELINE_MAIN),
  HEADLINE_TITLE: ".".concat(ClassName.HEADLINE_TITLE),
  // Added since v2.1.0
  RANGE_META: ".".concat(ClassName.RANGE_META),
  // Added since v2.1.0
  TIMELINE_RULER_TOP: ".".concat(PREFIX, "ruler-top"),
  TIMELINE_EVENT_CONTAINER: ".".concat(ClassName.TIMELINE_EVENT_CONTAINER),
  TIMELINE_RULER_BOTTOM: ".".concat(PREFIX, "ruler-bottom"),
  TIMELINE_RULER_LINES: ".".concat(ClassName.TIMELINE_RULER_LINES),
  // Added since v2.1.0
  TIMELINE_RULER_ITEM: ".".concat(ClassName.TIMELINE_RULER_ITEM),
  TIMELINE_RELATION_LINES: ".".concat(ClassName.TIMELINE_RELATION_LINES),
  TIMELINE_EVENTS: ".".concat(ClassName.TIMELINE_EVENTS),
  TIMELINE_SIDEBAR: ".".concat(ClassName.TIMELINE_SIDEBAR),
  TIMELINE_SIDEBAR_MARGIN: ".".concat(ClassName.TIMELINE_SIDEBAR_MARGIN),
  // Added since v2.1.0
  TIMELINE_SIDEBAR_ITEM: ".".concat(ClassName.TIMELINE_SIDEBAR_ITEM),
  TIMELINE_EVENT_NODE: ".".concat(ClassName.TIMELINE_EVENT_NODE),
  VIEWER_EVENT_TITLE: ".".concat(ClassName.VIEWER_EVENT_TITLE),
  // Added since v2.1.0
  VIEWER_EVENT_CONTENT: ".".concat(ClassName.VIEWER_EVENT_CONTENT),
  // Added since v2.1.0
  VIEWER_EVENT_META: ".".concat(ClassName.VIEWER_EVENT_META),
  // Added since v2.1.0
  VIEWER_EVENT_TYPE_POINTER: ".".concat(ClassName.VIEWER_EVENT_TYPE_POINTER),
  OVERLAY: ".".concat(ClassName.OVERLAY),
  // Added since v2.1.0
  PRESENT_TIME_MARKER: ".".concat(ClassName.PRESENT_TIME_MARKER),
  // Added since v2.1.0
  LOADER: ".".concat(ClassName.LOADER_CONTAINER),
  LOADER_ITEM: ".".concat(ClassName.LOADER_ITEM),
  // Added since v2.1.0
  DEFAULT_EVENTS: ".timeline-events"
};

var mapData = function () {
  var storeData = {};
  var id = 1;
  return {
    set: function set(element, key, data) {
      if (typeof element.key === 'undefined') {
        element.key = {
          key: key,
          id: id
        };
        id++;
      }

      storeData[element.key.id] = data;
    },
    get: function get(element, key) {
      if (!element || typeof element.key === 'undefined') {
        return null;
      }

      var keyProperties = element.key;

      if (keyProperties.key === key) {
        return storeData[keyProperties.id];
      }

      return null;
    },
    delete: function _delete(element, key) {
      if (typeof element.key === 'undefined') {
        return;
      }

      var keyProperties = element.key;

      if (keyProperties.key === key) {
        delete storeData[keyProperties.id];
        delete element.key;
      }
    }
  };
}();

var Data = {
  setData: function setData(instance, key, data) {
    mapData.set(instance, key, data);
  },
  getData: function getData(instance, key) {
    return mapData.get(instance, key);
  },
  removeData: function removeData(instance, key) {
    mapData.delete(instance, key);
  }
};
/* ----------------------------------------------------------------------------------------------------------------
 * Plugin Core Class
 * ----------------------------------------------------------------------------------------------------------------
 */

var Timeline = /*#__PURE__*/function () {
  function Timeline(element, config) {
    _classCallCheck(this, Timeline);

    this._config = this._getConfig(config);
    this._element = element;
    this._selector = null;
    this._isInitialized = false;
    this._isCached = false;
    this._isCompleted = false;
    this._isShown = false;
    this._isTouched = false;
    this._instanceProps = {};
    this._observer = null; // Added new since v2.0.0

    this._beforeOpenEvent = null; // Added new since v2.0.0
    //this._countEventinCell = {} // since v2.0.0

    Data.setData(element, DATA_KEY, this);
  } // Getters


  _createClass(Timeline, [{
    key: "_getConfig",
    value: // Private

    /*
     * @private: Define the default options of this plugin
     */
    function _getConfig(config) {
      // config = { ...Default, ...config } // Note: this is NG because two objects have not merged deeply
      if (config.startDatetime instanceof Date) {
        config.startDatetime = config.startDatetime.toString();
      }

      if (config.endDatetime instanceof Date) {
        config.endDatetime = config.endDatetime.toString();
      }

      return this.mergeDeep(Default, config);
    }
    /*
     * @private: Filter the given scale key name to allowed for plugin
     */

  }, {
    key: "_filterScaleKeyName",
    value: function _filterScaleKeyName(key) {
      var filteredKey = null;

      switch (true) {
        case /^millenniums?|millennia$/i.test(key):
          filteredKey = 'millennium';
          break;

        case /^century$/i.test(key):
          filteredKey = 'century';
          break;

        case /^dec(ade|ennium)$/i.test(key):
          filteredKey = 'decade';
          break;

        case /^lustrum$/i.test(key):
          filteredKey = 'lustrum';
          break;

        case /^years?$/i.test(key):
          filteredKey = 'year';
          break;

        case /^months?$/i.test(key):
          filteredKey = 'month';
          break;

        case /^weeks?$/i.test(key):
          filteredKey = 'week';
          break;

        case /^weekdays?$/i.test(key):
          filteredKey = 'weekday';
          break;

        case /^da(y|te)s?$/i.test(key):
          filteredKey = 'day';
          break;

        case /^hours?$/i.test(key):
          filteredKey = 'hour';
          break;

        case /^quarter-?(|hour)$/i.test(key):
          filteredKey = 'quarterHour';
          break;

        case /^half-?(|hour)$/i.test(key):
          filteredKey = 'halfHour';
          break;

        case /^minutes?$/i.test(key):
          filteredKey = 'minute';
          break;

        case /^seconds?$/i.test(key):
          filteredKey = 'second';
          break;

        default:
          filteredKey = 'millisecond';
      }

      return filteredKey;
    }
    /*
     * @private: Initialize the plugin
     */

  }, {
    key: "_init",
    value: function () {
      var _init2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var _elem, _selector, afterInitEvent;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._debug('_init');

                _elem = this._element, _selector = "".concat(_elem.tagName).concat(_elem.id ? "#".concat(_elem.id) : '').concat(_elem.className ? ".".concat(_elem.className.replace(/\s/g, '.')) : '');
                this._selector = _selector; //.toLowerCase()

                if (!(this._isInitialized || this._isCompleted)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", this);

              case 5:
                this._calcVars();

                this.showLoader();

                if (this._verifyMaxRenderableRange()) {
                  _context.next = 9;
                  break;
                }

                throw new RangeError("Timeline display period exceeds maximum renderable range.");

              case 9:
                this._renderView();

                if (!this._isCached) {
                  this._loadEvent();
                }

                if (!this._isCached) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return this._placeEvent();

              case 14:
                // Assign events for the timeline
                $(document).on(Event.CLICK_EVENT, "".concat(this._selector, " ").concat(Selector.EVENT_NODE), function (event) {
                  return _this2.openEvent(event);
                });
                $(_elem).on(Event.FOCUSIN_EVENT, Selector.TIMELINE_EVENT_NODE, function (event) {
                  return _this2._activeEvent(event);
                });
                $(_elem).on(Event.FOCUSOUT_EVENT, Selector.TIMELINE_EVENT_NODE, function (event) {
                  return _this2._activeEvent(event);
                });
                $(_elem).on(Event.TOUCHSTART_TIMELINE, Selector.TIMELINE_MAIN, function (event) {
                  return _this2._swipeStart(event);
                });
                $(_elem).on(Event.TOUCHMOVE_TIMELINE, Selector.TIMELINE_MAIN, function (event) {
                  return _this2._swipeMove(event);
                });
                $(_elem).on(Event.TOUCHEND_TIMELINE, Selector.TIMELINE_MAIN, function (event) {
                  return _this2._swipeEnd(event);
                });

                if (/^point(|er)$/i.test(this._config.type)) {
                  $(_elem).on(Event.MOUSEENTER_POINTER, Selector.VIEWER_EVENT_TYPE_POINTER, function (event) {
                    return _this2._hoverPointer(event);
                  });
                  $(_elem).on(Event.MOUSELEAVE_POINTER, Selector.VIEWER_EVENT_TYPE_POINTER, function (event) {
                    return _this2._hoverPointer(event);
                  });
                }

                if (this._config.zoom) {
                  $(_elem).on(Event.ZOOMIN_SCALE, Selector.TIMELINE_RULER_ITEM, function (event) {
                    return _this2.zoomScale(event);
                  });
                }

                $(_elem).find(Selector.TIMELINE_CONTAINER).on('scroll', function (event) {
                  return _this2._scrollTimeline(event);
                });
                this._isCompleted = true;
                _context.next = 26;
                return this.hideLoader();

              case 26:
                this.alignment();

                if (!this._isInitialized) {
                  afterInitEvent = $.Event(Event.INITIALIZED, _elem);
                  $(_elem).trigger(afterInitEvent);
                  $(_elem).off(Event.INITIALIZED);
                } // Binding bs.popover


                if ($.fn['popover']) {
                  $('[data-toggle="popover"]').popover();
                }

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _init() {
        return _init2.apply(this, arguments);
      }

      return _init;
    }()
    /*
     * @private: Calculate each properties of the timeline instance
     */

  }, {
    key: "_calcVars",
    value: function _calcVars() {
      var _this3 = this;

      var _opts = this._config,
          _props = {},
          _callback = function _callback(_ac, _cv) {
        if (_this3.verifyScale(_cv)) {
          _cv = _this3._filterScaleKeyName(_cv);

          if (_ac.indexOf(_cv) === -1) {
            _ac.push(_cv);
          }
        }

        return _ac;
      };

      _props.begin = this.supplement(null, this._getPluggableDatetime(_opts.startDatetime, 'first')); // The milliseconds as start datetime (:> 開始日時のミリ秒

      _props.end = this.supplement(null, this._getPluggableDatetime(_opts.endDatetime, 'last')); // The milliseconds as end datetime (:> 終了日時のミリ秒

      _props.scaleSize = this.supplement(null, _opts.minGridSize, this.validateNumeric); // The minimum width of one grid on the base scale (:> 基本スケール上の1グリッドの最小幅

      _props.rows = this._getPluggableRows(); // The number of rows on the timeline container (:> タイムラインコンテナの行数

      _props.rowSize = this.supplement(null, _opts.rowHeight, this.validateNumeric); // The height of one row on the timeline container (:> タイムラインコンテナの1行の高さ

      _props.width = this.supplement(null, _opts.width, this.validateNumeric); // ?

      _props.height = this.supplement(null, _opts.height, this.validateNumeric); // ?

      _props.isVLS = true; // Whether is the variable length scale, fixed as constraint value of the "true" since v2.0.0b2
      // _props.scale         // The basic millisecond of one base grid on the setting scale (:> 設定スケールにおける起点グリッド1目盛の基準ミリ秒
      // _props.grids         // Number of base grids on the setting scale (= number of grids displayed) (:> 設定スケールにおける起点グリッド数（=表示されるグリッド数）
      // _props.variableScale // An object that referable as the width of the base grid on the setting scale (:> 設定スケールにおける起点グリッド幅の幅員基準値となるオブジェクト
      // _props.gridsMap      // An object that mapped the available grids (:> 有効グリッドをマップしたオブジェクト -> これを定義するとメモリを食うのでNG
      // _props.rulers        // The available scale list on the ruler (:> 有効な目盛のスケールリスト
      // _props.fullwidth     // The total width of the timeline container (:> タイムラインコンテナの横幅の全長
      // _props.fullheight    // The total height of the timeline container (:> タイムラインコンテナの縦幅の全長
      // _props.visibleWidth  // The width of the timeline that will display (:> 表示されるタイムラインの横幅
      // _props.visibleHeight // The height of the timeline that will display (:> 表示されるタイムラインの縦幅

      _props.absX = 0; // An absolute X position on the page for using in swipe event (:> スワイプイベント用

      _props.moveX = 0; // The moving position after doing the touchstart for using in swipe event (:> スワイプイベント用
      // get all scales on ruler

      var _rulers = _opts.ruler.top.lines.reduce(_callback, []);

      if (Object.hasOwnProperty.call(_opts.ruler, 'bottom') && Object.hasOwnProperty.call(_opts.ruler.bottom, 'lines')) {
        _rulers = [].concat(_toConsumableArray(_rulers), _toConsumableArray(_opts.ruler.bottom.lines)).reduce(_callback, []);
      }

      if (this.is_empty(_rulers)) {
        _opts.ruler.top.lines.push(_opts.scale);

        _rulers.push(_opts.scale);
      }

      _props.rulers = _rulers;
      this._instanceProps = _props; // pre-cache

      if (_props.isVLS) {
        // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合
        var _temp = this.verifyScale(_opts.scale, _props.begin, _props.end, _props.isVLS),
            _values = Object.values(_temp),
            //_averageVar = this.numRound( _values.reduce( ( a, v ) => a + v, 0 ) / _values.length, 4 ), // Average value within the range
        //_minVar     = Math.min( ..._values ),
        _baseVar = /^weeks?$/i.test(_opts.scale) ? Math.max.apply(Math, _toConsumableArray(_values)) : Math.min.apply(Math, _toConsumableArray(_values)),
            _totalWidth = 0; //,
        //_baseToMin  = true, // Whether use min value of scale as base grid width (:> スケールの最小値をベースグリッド幅として使用するか
        //_baseVar    = _baseToMin ? _minVar : _averageVar


        switch (true) {
          case /^millenniums?|millennia$/i.test(_opts.scale):
          case /^century$/i.test(_opts.scale):
            // unit: years = 365.25 * 24 * 60 * 60 * 1000
            _props.scale = _baseVar * (365.25 * 24 * 60 * 60 * 1000);
            break;

          case /^dec(ade|ennium)$/i.test(_opts.scale):
          case /^lustrum$/i.test(_opts.scale):
          case /^years?$/i.test(_opts.scale):
          case /^months?$/i.test(_opts.scale):
            // unit: days = 24 * 60 * 60 * 1000
            _props.scale = _baseVar * (24 * 60 * 60 * 1000);
            break;

          case /^weeks?$/i.test(_opts.scale):
          case /^(|week)days?$/i.test(_opts.scale):
            // unit: hours = 60 * 60 * 1000
            _props.scale = _baseVar * (60 * 60 * 1000);
            break;

          case /^hours?$/i.test(_opts.scale):
            // unit: minutes = 60 * 1000
            _props.scale = _baseVar * (60 * 1000);
            break;

          case /^minutes?$/i.test(_opts.scale):
            // unit: seconds = 1000
            _props.scale = _baseVar * 1000;
            break;

          case /^seconds?$/i.test(_opts.scale):
          default:
            // unit: milliseconds = 1
            _props.scale = _baseVar * 1;
            break;
        } //console.log( '!_calcVars::', _opts.scale, _temp, _values, _props )


        _values.forEach(function (val) {
          //console.log( `!!_calcVars::_totalWidth: ${_totalWidth} + ${this.numRound( ( val * _props.scaleSize ) / _baseVar, 2 )}` )
          _totalWidth += _this3.numRound(val * _props.scaleSize / _baseVar, 2);
        });

        _props.grids = _values.length;
        _props.variableScale = _temp;
        _props.fullwidth = _totalWidth;
      } else {// Deprecated since v2.0.0 stable; in case of fixed length scale
      }

      _props.fullheight = _props.rows * _props.rowSize; // Provisional value as theoretical value
      // Define visible size according to full size of timeline (:> タイムラインのフルサイズに準じた可視サイズを定義

      _props.visibleWidth = _props.width > 0 ? "".concat(_props.width <= _props.fullwidth ? _props.width : _props.fullwidth, "px") : 'max-content';
      _props.visibleHeight = _props.height > 0 ? "".concat(_props.height <= _props.fullheight ? _props.height : _props.fullheight, "px") : 'max-content';

      for (var _prop in _props) {
        if (/^(width|height|variableScale|absX|moveX)$/.test(_prop)) {
          continue;
        }

        if (this.is_empty(_props[_prop])) {
          throw new TypeError("Property \"".concat(_prop, "\" cannot set because undefined or invalid variable."));
        }
      }

      if (_props.fullwidth < 2 || _props.fullheight < 2) {
        throw new TypeError("The range of the timeline to be rendered is incorrect.");
      } //console.log( '!_calcVars::return:', _props )


      this._instanceProps = _props;
    }
    /*
     * @private: Retrieve the pluggable datetime as milliseconds depend on specific preset keyword
     *
     * @param mixed key (required; preset keywords 'current', 'currently', 'auto' or seed of datetime)
     * @param string round_type (optional; defaults to '')
     *
     * @return int (milliseconds as valid datetime)
     */

  }, {
    key: "_getPluggableDatetime",
    value: function _getPluggableDatetime(key) {
      var round_type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var _opts = this._config,
          _date = null,
          getFirstDate = function getFirstDate(dateObj, scale) {
        var _fullYear = dateObj.getFullYear(),
            _remapYear = _fullYear >= 0 && Math.abs(_fullYear) < 100 ? true : false,
            _tmpDate;

        switch (true) {
          case /^millenniums?|millennia$/i.test(scale):
          case /^century$/i.test(scale):
          case /^dec(ade|ennium)$/i.test(scale):
          case /^lustrum$/i.test(scale):
          case /^years?$/i.test(scale):
            _tmpDate = new Date(_fullYear, 0, 1);
            break;

          case /^months?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), 1);
            break;

          case /^(week|day)s?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate());
            break;

          case /^(|half|quarter)-?hours?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours());
            break;

          case /^minutes?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes());
            break;

          case /^seconds?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds());
            break;

          default:
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds(), dateObj.getMilliseconds());
            break;
        }

        if (_remapYear) {
          _tmpDate.setFullYear(_fullYear);
        }

        return _tmpDate;
      },
          getLastDate = function getLastDate(dateObj, scale) {
        var _fullYear = dateObj.getFullYear(),
            _remapYear = _fullYear >= 0 && Math.abs(_fullYear) < 100 ? true : false,
            _offset = _fullYear >= 0 ? -1 : 1,
            _tmpDate;

        switch (true) {
          case /^millenniums?|millennia$/i.test(scale):
          case /^century$/i.test(scale):
          case /^dec(ade|ennium)$/i.test(scale):
          case /^lustrum$/i.test(scale):
          case /^years?$/i.test(scale):
            _tmpDate = new Date(_fullYear + 1, 0, 1);
            _remapYear = _fullYear + 1 >= 0 && Math.abs(_fullYear + 1) < 100 ? true : false;
            _offset = _fullYear + 1 >= 0 ? -1 : 1;
            break;

          case /^months?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth() + 1, 1);
            break;

          case /^(week|day)s?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate() + 1);
            break;

          case /^(|half|quarter)-?hours?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours() + 1);
            break;

          case /^minutes?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes() + 1);
            break;

          case /^seconds?$/i.test(scale):
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds() + 1);
            break;

          default:
            _tmpDate = new Date(_fullYear, dateObj.getMonth(), dateObj.getDate(), dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds(), dateObj.getMilliseconds() + 1);
            break;
        }

        if (_remapYear) {
          _tmpDate.setFullYear(_fullYear);
        }

        return new Date(_tmpDate.getTime() + _offset);
      }; //console.log( '!_getPluggableDatetime::return:', key )


      switch (true) {
        case /^current(|ly)$/i.test(key):
          // now date
          _date = new Date();
          break;

        case /^auto$/i.test(key):
          {
            var _auto_range = _opts.range && _opts.range > 0 ? parseInt(_opts.range, 10) : 3,
                _higherScale = /^(|week)days?$/i.test(_opts.scale) ? 'month' : this.getHigherScale(_opts.scale);

            if (/^current(|ly)$/i.test(_opts.startDatetime)) {
              _date = getFirstDate(new Date(), _opts.scale);
            } else {
              _date = this.getCorrectDatetime(_opts.startDatetime);
            }

            _date = this.modifyDate(_date, _auto_range, _higherScale);
            break;
          }

        default:
          _date = this.getCorrectDatetime(key);
          break;
      }

      if (!this.is_empty(round_type)) {
        if ('first' === round_type) {
          _date = getFirstDate(_date, _opts.scale);
        } else if ('last' === round_type) {
          _date = getLastDate(_date, _opts.scale);
        }
      } //console.log( '!!_getPluggableDatetime::return:', _date )


      return _date.getTime();
    }
    /*
     * @private: Retrieve the pluggable parameter as an object
     */

  }, {
    key: "_getPluggableParams",
    value: function _getPluggableParams(str_like_params) {
      var params = {};

      if (typeof str_like_params === 'string' && str_like_params) {
        try {
          params = JSON.parse(JSON.stringify(new Function("return ".concat(str_like_params))()));

          if (Object.hasOwnProperty.call(params, 'extend') && typeof params.extend === 'string') {
            params.extend = JSON.parse(JSON.stringify(new Function("return ".concat(params.extend))()));
          }
        } catch (e) {
          //console.warn( 'Can not parse to object therefor invalid param.' )
          this._error('Can not parse to object therefor invalid param.', 'warn');
        }
      }

      return params;
    }
    /*
     * @private: Retrieve the pluggable rows of the timeline (:> プラガブルなタイムラインの行数を取得する
     */

  }, {
    key: "_getPluggableRows",
    value: function _getPluggableRows() {
      var _opts = this._config,
          fixed_rows = this.supplement('auto', _opts.rows, this.validateNumeric);

      if (fixed_rows === 'auto') {
        fixed_rows = _opts.sidebar.list.length;
      }

      return fixed_rows > 0 ? fixed_rows : 1;
    }
    /*
     * @private: Verify the display period of the timeline does not exceed the maximum renderable range (:> タイムラインの表示期間が最大描画可能範囲を超過していないか検証する
     */

  }, {
    key: "_verifyMaxRenderableRange",
    value: function _verifyMaxRenderableRange() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._config.scale;

      if (this._config.disableLimitter) {
        this._debug("The scale limiter has been OFF::".concat(scale, ": ").concat(this._instanceProps.grids, " / ").concat(LimitScaleGrids[this._filterScaleKeyName(scale)]));

        return true;
      } else {
        this._debug("Verify max renderable range::".concat(scale, ": ").concat(this._instanceProps.grids, " / ").concat(LimitScaleGrids[this._filterScaleKeyName(scale)]));

        return this._instanceProps.grids <= LimitScaleGrids[this._filterScaleKeyName(scale)];
      }
    }
    /*
     * @private: Render the view of timeline container
     */

  }, {
    key: "_renderView",
    value: function _renderView() {
      this._debug('_renderView');

      var _elem = this._element,
          _opts = this._config,
          _props = this._instanceProps,
          _tl_container = $('<div></div>', {
        class: ClassName.TIMELINE_CONTAINER
      }),
          // .jqtl-container
      _tl_main = $('<div></div>', {
        class: ClassName.TIMELINE_MAIN
      }),
          // .jqtl-main
      $_el = $(_elem),
          // Cached an element
      $_tl_parent = $_el.parent(); //console.log( '_renderView::', _elem, _opts, _props )


      if ($_el.length == 0) {
        throw new TypeError('Does not exist the element to render a timeline container.');
      }

      this._debug("Timeline:{ fullWidth: ".concat(_props.fullwidth, "px, fullHeight: ").concat(_props.fullheight, "px, viewWidth: ").concat(_props.visibleWidth, ", viewHeight: ").concat(_props.visibleHeight, " }"));

      $_el.css('position', 'relative'); // initialize; not .empty()

      if (_opts.hideScrollbar) {
        _tl_container.addClass(ClassName.HIDE_SCROLLBAR); // .jqtl-hide-scrollbar

      } // Create the timeline headline (:> タイムラインの見出しを生成


      $_el.prepend(this._createHeadline()); // Create the timeline event container (:> タイムラインのイベントコンテナを生成

      _tl_main.append(this._createEventContainer()); // Create the timeline ruler (:> タイムラインの目盛を生成


      if (Object.hasOwnProperty.call(_opts.ruler, 'top') && Object.hasOwnProperty.call(_opts.ruler.top, 'lines') && !this.is_empty(_opts.ruler.top.lines)) {
        _tl_main.prepend(this._createRuler('top'));
      }

      if (Object.hasOwnProperty.call(_opts.ruler, 'bottom') && Object.hasOwnProperty.call(_opts.ruler.bottom, 'lines') && !this.is_empty(_opts.ruler.bottom.lines)) {
        _tl_main.append(this._createRuler('bottom'));
      } // Create the timeline side index (:> タイムラインのサイドインデックスを生成


      var margin = {
        top: parseInt(_tl_main.find(Selector.RULER_TOP).height(), 10) - 1,
        bottom: parseInt(_tl_main.find(Selector.RULER_BOTTOM).height(), 10) - 1
      };

      if (_opts.sidebar.list.length > 0) {
        _tl_container.prepend(this._createSideIndex(margin));
      } // Append the timeline container in the timeline element (:> タイムライン要素にタイムラインコンテナを追加


      _tl_container.append(_tl_main);

      $_el.append(_tl_container); // Create the timeline footer (:> タイムラインのフッタを生成

      $_el.append(this._createFooter()); // Optimize the parent element of the timeline

      if (this.is_empty($_el.attr('data-resized'))) {
        //console.log( '_renderView::', $_tl_parent, Number(_tl_main.get(0).scrollWidth), Number($_el.get(0).scrollWidth), Number($_tl_parent.width() + 2) )
        if ($_el.get(0).scrollWidth > $_tl_parent.width() + 2) {
          _tl_container.css({
            width: $_tl_parent.width() - 2,
            height: _props.visibleHeight
          });

          $_tl_parent.css({
            maxWidth: '100vw',
            overflowX: 'hidden'
          });
        } else {
          _tl_container.css({
            width: _props.visibleWidth,
            height: _props.visibleHeight
          });
        }

        $_el.attr('data-resized', true);
      } // Apply the theme color scheme


      this.applyThemeStyle();
      this._isShown = true;
    }
    /*
     * @private: Create the headline of the timeline (:> タイムラインの見出しを作成する
     */

  }, {
    key: "_createHeadline",
    value: function _createHeadline() {
      var _opts = this._config,
          _props = this._instanceProps,
          _display = this.supplement(Default.headline.display, _opts.headline.display, this.validateBoolean),
          _title = this.supplement(null, _opts.headline.title),
          _range = this.supplement(Default.headline.range, _opts.headline.range, this.validateBoolean),
          _locale = this.supplement(Default.headline.locale, _opts.headline.locale),
          _format = this.supplement(Default.headline.format, _opts.headline.format),
          _begin = this.supplement(null, _props.begin),
          _end = this.supplement(null, _props.end),
          _scale = _opts.scale,
          _tl_headline = $('<div></div>', {
        class: ClassName.TIMELINE_HEADLINE
      }),
          // .jqtl-headline
      _wrapper = $('<div></div>', {
        class: ClassName.TIMELINE_HEADLINE_WRAPPER
      }); // .jqtl-headline-wrapper


      if (_title) {
        _wrapper.append("<h3 class=\"".concat(ClassName.HEADLINE_TITLE, "\">").concat(_opts.headline.title, "</h3>")); // .jqtl-timeline-title

      }

      if (_range) {
        if (_begin && _end) {
          var _meta = '';

          if (Object.hasOwnProperty.call(_format, 'custom')) {
            _scale = 'custom';
          }

          _meta = "".concat(this.getLocaleString(_begin, _scale, _locale, _format), "<span class=\"").concat(ClassName.RANGE_SPAN, "\"></span>").concat(this.getLocaleString(_end, _scale, _locale, _format));

          _wrapper.append("<div class=\"".concat(ClassName.RANGE_META, "\">").concat(_meta, "</div>")); // .jqtl-range-meta

        }
      }

      if (!_display) {
        _tl_headline.addClass(ClassName.HIDE); // .jqtl-hide

      }

      return _tl_headline.append(_wrapper);
    }
    /*
     * @private: Create the event container of the timeline (:> タイムラインのイベントコンテナを作成する
     */

  }, {
    key: "_createEventContainer",
    value: function _createEventContainer() {
      var _this4 = this;

      var _opts = this._config,
          _props = this._instanceProps,
          _actualHeight = _props.fullheight + Math.ceil(_props.rows / 2) + 1,
          _container = $('<div></div>', {
        class: ClassName.TIMELINE_EVENT_CONTAINER,
        style: "height:".concat(_actualHeight, "px;")
      }),
          _events_bg = $("<canvas width=\"".concat(_props.fullwidth - 1, "\" height=\"").concat(_actualHeight, "\" class=\"").concat(ClassName.TIMELINE_BACKGROUND_GRID, "\"></canvas>")),
          _events_lines = $("<canvas width=\"".concat(_props.fullwidth - 1, "\" height=\"").concat(_actualHeight, "\" class=\"").concat(ClassName.TIMELINE_RELATION_LINES, "\"></canvas>")),
          _events_body = $('<div></div>', {
        class: ClassName.TIMELINE_EVENTS
      }),
          _cy = 0,
          ctx_grid = _events_bg[0].getContext('2d'),
          _grid_style = {
        horizontal: 'dotted',
        vertical: 'solid'
      },
          drawRowRect = function drawRowRect(pos_y, color) {
        color = _this4.supplement(_opts.colorScheme.theme.background, color); // console.log( 0, pos_y, _fullwidth, _size_row, color )

        ctx_grid.fillStyle = color;
        ctx_grid.fillRect(0, pos_y + 0.5, _props.fullwidth, _props.rowSize + 1.5);
        ctx_grid.stroke();
      },
          drawHorizontalLine = function drawHorizontalLine(pos_y, style) {
        var _correction = 0.5;

        switch (true) {
          case /^solid$/i.test(style):
            style = 'solid';
            break;

          case /^dotted$/i.test(style):
            style = 'dotted';
            break;

          case /^none$/i.test(style):
          default:
            return;
        }

        ctx_grid.strokeStyle = _this4.hexToRgbA(_opts.colorScheme.theme.gridbase, 0.1); // 'rgba( 51, 51, 51, 0.1 )'

        ctx_grid.lineWidth = 1;
        ctx_grid.filter = 'url(#crisp)';
        ctx_grid.beginPath();

        if (style === 'dotted') {
          ctx_grid.setLineDash([1, 2]);
        } else {
          ctx_grid.setLineDash([]);
        }

        ctx_grid.moveTo(0, pos_y + _correction);
        ctx_grid.lineTo(_props.fullwidth, pos_y + _correction);
        ctx_grid.closePath();
        ctx_grid.stroke();
      },
          drawVerticalLine = function drawVerticalLine(pos_x, style) {
        var _correction = -0.5;

        switch (true) {
          case /^solid$/i.test(style):
            style = 'solid';
            break;

          case /^dotted$/i.test(style):
            style = 'dotted';
            break;

          case /^none$/i.test(style):
          default:
            return;
        }

        ctx_grid.strokeStyle = _this4.hexToRgbA(_opts.colorScheme.theme.gridbase, 0.1); // 'rgba( 51, 51, 51, 0.025 )'

        ctx_grid.lineWidth = 1;
        ctx_grid.filter = 'url(#crisp)';
        ctx_grid.beginPath();

        if (style === 'dotted') {
          ctx_grid.setLineDash([1, 2]);
        } else {
          ctx_grid.setLineDash([]);
        }

        ctx_grid.moveTo(pos_x + _correction, 0);
        ctx_grid.lineTo(pos_x + _correction, _actualHeight);
        ctx_grid.closePath();
        ctx_grid.stroke();
      };

      if (Object.hasOwnProperty.call(_opts.effects, 'horizontalGridStyle')) {
        _grid_style.horizontal = _opts.effects.horizontalGridStyle;
      }

      if (Object.hasOwnProperty.call(_opts.effects, 'verticalGridStyle')) {
        _grid_style.vertical = _opts.effects.verticalGridStyle;
      }

      _cy = 0;

      for (var i = 0; i < _props.rows; i++) {
        _cy += i % 2 == 0 ? 1 : 0;

        var _pos_y = i * _props.rowSize + _cy,
            _color = this.hexToRgbA(_opts.colorScheme.theme.striped1, 0.1); // '#FEFEFE'


        if (Object.hasOwnProperty.call(_opts.effects, 'stripedGridRow') && _opts.effects.stripedGridRow) {
          _color = i % 2 == 0 ? this.hexToRgbA(_opts.colorScheme.theme.striped1, 0.1) : this.hexToRgbA(_opts.colorScheme.theme.striped2, 0.25); // '#FEFEFE' : '#F8F8F8'
        }

        drawRowRect(_pos_y, _color);
      }

      _cy = 0;

      for (var _i2 = 1; _i2 < _props.rows; _i2++) {
        _cy += _i2 % 2 == 0 ? 1 : 0;

        var _pos_y2 = _i2 * _props.rowSize + _cy;

        drawHorizontalLine(_pos_y2, _grid_style.horizontal);
      }

      if (_props.isVLS) {
        // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合
        var _sy = 0,
            _baseVar;

        switch (true) {
          case /^millenniums?|millennia$/i.test(_opts.scale):
          case /^century$/i.test(_opts.scale):
            // unit: years = 365.25 * 24 * 60 * 60 * 1000
            _baseVar = _props.scale / (365.25 * 24 * 60 * 60 * 1000);
            break;

          case /^dec(ade|ennium)$/i.test(_opts.scale):
          case /^lustrum$/i.test(_opts.scale):
          case /^years?$/i.test(_opts.scale):
          case /^months?$/i.test(_opts.scale):
            // unit: days = 24 * 60 * 60 * 1000
            _baseVar = _props.scale / (24 * 60 * 60 * 1000);
            break;

          case /^weeks?$/i.test(_opts.scale):
          case /^(|week)days?$/i.test(_opts.scale):
            // unit: hours = 60 * 60 * 1000
            _baseVar = _props.scale / (60 * 60 * 1000);
            break;

          case /^hours?$/i.test(_opts.scale):
            // unit: minutes = 60 * 1000
            _baseVar = _props.scale / (60 * 1000);
            break;

          case /^minutes?$/i.test(_opts.scale):
            // unit: seconds = 1000
            _baseVar = _props.scale / 1000;
            break;

          case /^seconds?$/i.test(_opts.scale):
          default:
            // unit: milliseconds = 1
            _baseVar = _props.scale / 1;
            break;
        }

        for (var _i3 = 0, _Object$keys = Object.keys(_props.variableScale); _i3 < _Object$keys.length; _i3++) {
          var _key = _Object$keys[_i3];
          _sy += this.numRound(_props.variableScale[_key] * _props.scaleSize / _baseVar, 2);
          drawVerticalLine(_sy, _grid_style.vertical);
        }
      } else {
        // In case of fixed length scale; Deprecated
        for (var _i4 = 1; _i4 < _props.grids; _i4++) {
          drawVerticalLine(_i4 * _props.scaleSize, false);
        }
      }

      return _container.append(_events_bg).append(_events_lines).append(_events_body);
    }
    /*
     * @private: Create the ruler of the timeline (:> タイムラインの目盛を作成する
     */

  }, {
    key: "_createRuler",
    value: function _createRuler(position) {
      var _this5 = this;

      var _opts = this._config,
          _props = this._instanceProps,
          ruler_line = this.supplement([_opts.scale], _opts.ruler[position].lines, function (def, val) {
        if (Array.isArray(val) && val.length > 0) {
          if (Object.hasOwnProperty.call(_opts.ruler, 'truncateLowers') && _opts.ruler.truncateLowers) {
            var _ignore_scales = _this5.findScale(_opts.scale, 'lower all'),
                _filter_scales = val.filter(function (scl) {
              return !_ignore_scales.includes(_this5._filterScaleKeyName(scl));
            }); //console.log( '!_createRuler::truncateLowers:', _opts.scale, _ignore_scales, val, _filter_scales )


            val = _filter_scales;
          }

          return val;
        } else {
          return def;
        }
      }),
          line_height = this.supplement(Default.ruler.top.height, _opts.ruler[position].height),
          font_size = this.supplement(Default.ruler.top.fontSize, _opts.ruler[position].fontSize),
          text_color = this.supplement(Default.ruler.top.color, _opts.ruler[position].color),
          background = this.supplement(Default.ruler.top.background, _opts.ruler[position].background),
          locale = this.supplement(Default.ruler.top.locale, _opts.ruler[position].locale),
          format = this.supplement(Default.ruler.top.format, _opts.ruler[position].format),
          ruler_opts = {
        lines: ruler_line,
        height: line_height,
        fontSize: font_size,
        color: text_color,
        background: background,
        locale: locale,
        format: format
      },
          _fullwidth = _props.fullwidth - 1,
          _fullheight = ruler_line.length * line_height,
          _ruler = $('<div></div>', {
        class: "".concat(PREFIX, "ruler-").concat(position),
        style: "height:".concat(_fullheight, "px;")
      }),
          _ruler_bg = $("<canvas class=\"".concat(PREFIX, "ruler-bg-").concat(position, "\" width=\"").concat(_fullwidth, "\" height=\"").concat(_fullheight, "\"></canvas>")),
          _ruler_body = $('<div></div>', {
        class: "".concat(PREFIX, "ruler-content-").concat(position)
      }),
          _finalLines = 0,
          ctx_ruler = _ruler_bg[0].getContext('2d'); // Override ruler options for applying theme; added since v2.1.0


      if ('inherit' === ruler_opts.color) {
        ruler_opts.color = _opts.colorScheme.theme.subtext;
      }

      if ('inherit' === ruler_opts.background) {
        ruler_opts.background = _opts.colorScheme.theme.background;
      } //console.log( '!_createRuler:', ruler_line, ruler_opts )
      // Draw background of ruler


      ctx_ruler.fillStyle = ruler_opts.background;
      ctx_ruler.fillRect(0, 0, ctx_ruler.canvas.width, ctx_ruler.canvas.height); // Draw stroke of ruler

      ctx_ruler.strokeStyle = this.hexToRgbA(_opts.colorScheme.theme.gridbase, 0.1); // 'rgba( 51, 51, 51, 0.1 )'

      ctx_ruler.lineWidth = 1;
      ctx_ruler.filter = 'url(#crisp)';
      ruler_line.some(function (line_scale, idx) {
        if (/^(quarter|half)-?(|hour)$/i.test(line_scale)) {
          return true; // break
        }

        ctx_ruler.beginPath(); // Draw rows
        //let _line_x = position === 'top' ? 0 : ctx_ruler.canvas.width,

        var _line_y = position === 'top' ? line_height * (idx + 1) - 0.5 : line_height * idx + 0.5;

        ctx_ruler.moveTo(0, _line_y);
        ctx_ruler.lineTo(ctx_ruler.canvas.width, _line_y); // Draw cols

        var _line_grids = null,
            _grid_x = 0,
            _correction = -0.5; // For scales where the value of quantity per unit is variable length (:> 単位あたりの量の値が可変長であるスケールの場合


        _line_grids = _this5._filterVariableScale(line_scale); //console.log( '!!_createRuler:', line_scale, _line_grids )

        for (var _i5 = 0, _Object$keys2 = Object.keys(_line_grids); _i5 < _Object$keys2.length; _i5++) {
          var _key = _Object$keys2[_i5];
          _grid_x += _this5.numRound(_line_grids[_key], 2);
          ctx_ruler.moveTo(_grid_x + _correction, position === 'top' ? _line_y - line_height : _line_y);
          ctx_ruler.lineTo(_grid_x + _correction, position === 'top' ? _line_y : _line_y + line_height);
        }

        ctx_ruler.closePath();
        ctx_ruler.stroke();

        _ruler_body.append(_this5._createRulerContent(_line_grids, line_scale, ruler_opts));

        _finalLines++;
      });

      if (ruler_line.length != _finalLines) {
        _ruler.css('height', "".concat(_finalLines * line_height, "px"));
      }

      return _ruler.append(_ruler_bg).append(_ruler_body);
    }
    /*
     * @private: Filter to aggregate the grid width of the variable length scale (:> 可変長スケールのグリッド幅を集約するフィルタ
     *
     * @param: target_scale = a scale of one line on the ruler (:> 目盛1行分のスケール
     * @return: An object of actual grid widths for each individual scale on the set scale of the timeline container (:> タイムラインコンテナの指定スケール上における各個別スケールの実際のグリッド幅のオブジェクト
     */

  }, {
    key: "_filterVariableScale",
    value: function _filterVariableScale(target_scale) {
      var _opts = this._config,
          _props = this._instanceProps,
          // _opts.scale が day の場合は時間/日、それ以外の場合は日/年となる
      scales = _props.variableScale,
          retObj = {},
          _baseVar;

      switch (true) {
        case /^millenniums?|millennia$/i.test(_opts.scale):
        case /^century$/i.test(_opts.scale):
          // unit: years = 365.25 * 24 * 60 * 60 * 1000
          _baseVar = _props.scale / (365.25 * 24 * 60 * 60 * 1000);
          break;

        case /^dec(ade|ennium)$/i.test(_opts.scale):
        case /^lustrum$/i.test(_opts.scale):
        case /^years?$/i.test(_opts.scale):
        case /^months?$/i.test(_opts.scale):
          // unit: days = 24 * 60 * 60 * 1000
          _baseVar = _props.scale / (24 * 60 * 60 * 1000);
          break;

        case /^weeks?$/i.test(_opts.scale):
        case /^(|week)days?$/i.test(_opts.scale):
          // unit: hours = 60 * 60 * 1000
          _baseVar = _props.scale / (60 * 60 * 1000);
          break;

        case /^hours?$/i.test(_opts.scale):
          // unit: minutes = 60 * 1000
          _baseVar = _props.scale / (60 * 1000);
          break;

        case /^minutes?$/i.test(_opts.scale):
          // unit: seconds = 1000
          _baseVar = _props.scale / 1000;
          break;

        case /^seconds?$/i.test(_opts.scale):
        default:
          // unit: milliseconds = 1
          _baseVar = _props.scale / 1;
          break;
      } // グリッド幅の起点となるスケールは _opts.scale で、表示用にフィルタされるスケールは target_scale なので、それに合わせてサイズを計算する
      //console.log( `!_filterVariableScale::${_opts.scale} -> ${target_scale}:`, scales )


      for (var _i6 = 0, _Object$keys3 = Object.keys(scales); _i6 < _Object$keys3.length; _i6++) {
        var _dt = _Object$keys3[_i6];

        var grid_size = this.numRound(scales[_dt] * _props.scaleSize / _baseVar, 2),
            _newKey = null,
            _arr = _dt.split(','),
            _tmpDt = /^weeks?$/i.test(_opts.scale) ? this.getFirstDayOfWeek(parseInt(_arr[1], 10), parseInt(_arr[0], 10)) : this.getCorrectDatetime(_arr[0]),
            _temp = void 0; //console.log( '!!_filterVariableScale:', _dt, this.getCorrectDatetime( _dt ), _props.scaleSize, scales[_dt], grid_size )


        switch (true) {
          case /^millenniums?|millennia$/i.test(target_scale):
            //_years = 1000
            _newKey = Math.ceil(_tmpDt.getFullYear() / 1000); //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )

            break;

          case /^century$/i.test(target_scale):
            //_years = 100
            _newKey = Math.ceil(_tmpDt.getFullYear() / 100); //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )

            break;

          case /^dec(ade|ennium)$/i.test(target_scale):
            //_years = 10
            _newKey = Math.ceil(_tmpDt.getFullYear() / 10); //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )

            break;

          case /^lustrum$/i.test(target_scale):
            //_years = 5
            _newKey = Math.ceil(_tmpDt.getFullYear() / 5); //grid_size = this.numRound( ( _years * _props.scaleSize ) / _baseVar, 2 )

            break;

          case /^years?$/i.test(target_scale):
            //_days = scales[_dt]
            _newKey = "".concat(_tmpDt.getFullYear()); //grid_size = this.numRound( ( _days * _props.scaleSize ) / _baseVar, 2 )

            break;

          case /^months?$/i.test(target_scale):
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1);
            break;

          case /^weeks?$/i.test(target_scale):
            if (/^weeks?$/i.test(_opts.scale)) {
              _newKey = _arr.join();
            } else {
              _temp = this.getWeek(_tmpDt);
              _newKey = "".concat(_tmpDt.getFullYear(), ",").concat(_temp);
            } //console.log( `!!_filterVariableScale::${target_scale}:`, _opts.scale, _arr, _tmpDt, _temp, _newKey )


            break;

          case /^weekdays?$/i.test(target_scale):
            if (/^weeks?$/i.test(_opts.scale) && this.is_empty(retObj)) {
              _tmpDt = new Date(_props.begin);
            }

            _temp = _tmpDt.getDay();
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate(), ",").concat(_temp);
            break;

          case /^days?$/i.test(target_scale):
            if (/^weeks?$/i.test(_opts.scale) && this.is_empty(retObj)) {
              _tmpDt = new Date(_props.begin);
            }

            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate());
            break;

          case /^hours?$/i.test(target_scale):
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate(), " ").concat(_tmpDt.getHours()); //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0`] = grid_size

            break;

          case /^minutes?$/i.test(target_scale):
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate(), " ").concat(_tmpDt.getHours(), ":").concat(_tmpDt.getMinutes()); //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0:00`] = grid_size

            break;

          case /^seconds?$/i.test(target_scale):
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate(), " ").concat(_tmpDt.getHours(), ":").concat(_tmpDt.getMinutes(), ":").concat(_tmpDt.getSeconds()); //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}/1 0:00:00`] = grid_size

            break;

          default:
            _newKey = "".concat(_tmpDt.getFullYear(), "/").concat(_tmpDt.getMonth() + 1, "/").concat(_tmpDt.getDate(), " ").concat(_tmpDt.getHours(), ":").concat(_tmpDt.getMinutes(), ":").concat(_tmpDt.getSeconds(), ".").concat(_tmpDt.getMilliseconds()); //retObj[`${this.getCorrectDatetime( _dt ).getFullYear()}/${this.getCorrectDatetime( _dt ).getMonth() + 1}`] = grid_size

            break;
        } //console.log( `!!!_filterVariableScale::${target_scale}:`, _dt, _newKey, grid_size )


        if (Object.hasOwnProperty.call(retObj, _newKey)) {
          retObj[_newKey] += grid_size;
        } else {
          retObj[_newKey] = grid_size;
        }
      } //console.log( `!!!_filterVariableScale::${_opts.scale} -> ${target_scale}:`, retObj )


      return retObj;
    }
    /*
     * @private: Create the content of ruler of the timeline (:> タイムラインの目盛本文を作成する
     */

  }, {
    key: "_createRulerContent",
    value: function _createRulerContent(_line_grids, line_scale, ruler) {
      var line_height = this.supplement(Default.ruler.top.height, ruler.height),
          font_size = this.supplement(Default.ruler.top.fontSize, ruler.fontSize),
          text_color = this.supplement(Default.ruler.top.color, ruler.color),
          locale = this.supplement(Default.ruler.top.locale, ruler.locale, this.validateString),
          format = this.supplement(Default.ruler.top.format, ruler.format, this.validateObject),
          _ruler_lines = $('<div></div>', {
        class: ClassName.TIMELINE_RULER_LINES,
        style: "width:100%;height:".concat(line_height, "px;")
      }); //console.log( '!_createRulerContent::', ruler, line_scale, text_color, locale, format )


      for (var _i7 = 0, _Object$keys4 = Object.keys(_line_grids); _i7 < _Object$keys4.length; _i7++) {
        var _key = _Object$keys4[_i7];

        var _item_width = _line_grids[_key],
            _line = $('<div></div>', {
          class: ClassName.TIMELINE_RULER_ITEM,
          style: "width:".concat(_item_width, "px;height:").concat(line_height, "px;line-height:").concat(line_height, "px;font-size:").concat(font_size, "px;color:").concat(text_color, ";")
        }),
            _ruler_string = this.getLocaleString(_key, this._filterScaleKeyName(line_scale), locale, format),
            _data_ruler_item = ''; //console.log( '!_createRulerContent::', _key, line_scale, _ruler_string )


        _data_ruler_item = "".concat(line_scale, "-").concat(_data_ruler_item === '' ? String(_key) : _data_ruler_item);

        _line.attr('data-ruler-item', _data_ruler_item).html("<span>".concat(_ruler_string, "</span>"));

        if (_item_width > this.strWidth(_ruler_string)) {// Adjust position of ruler item string

          /*
          //console.log( _item_width, _ruler_string, _ruler_string.toString().length, this.strWidth( _ruler_string ), $(this._element).get(0).clientWidth )
          if ( _item_width > $(this._element).width() ) {
              _line.children('span').addClass( ClassName.RULER_ITEM_ALIGN_LEFT )
          }
          */
        }

        _ruler_lines.append(_line).attr('data-ruler-scope', line_scale);
      }

      return _ruler_lines;
    }
    /*
     * @private: Create the side indexes of the timeline (:> タイムラインのサイド・インデックスを作成する
     */

  }, {
    key: "_createSideIndex",
    value: function _createSideIndex(margin) {
      var _opts = this._config,
          _props = this._instanceProps,
          _sticky = this.supplement(Default.sidebar.sticky, _opts.sidebar.sticky),
          _overlay = this.supplement(Default.sidebar.overlay, _opts.sidebar.overlay),
          _sbList = this.supplement(Default.sidebar.list, _opts.sidebar.list),
          _wrapper = $('<div></div>', {
        class: ClassName.TIMELINE_SIDEBAR
      }),
          _margin = $('<div></div>', {
        class: ClassName.TIMELINE_SIDEBAR_MARGIN
      }),
          _list = $('<div></div>', {
        class: ClassName.TIMELINE_SIDEBAR_ITEM
      }),
          _item_h = this.numRound((_props.fullheight + Math.ceil(_props.rows / 2)) / _props.rows, 2),
          // Actual height of container: fullheight + Math.ceil( rows / 2 )
      _c = -0.5;

      if (_sticky) {
        _wrapper.addClass(ClassName.STICKY_LEFT);
      }

      if (_overlay) {
        _list.addClass(ClassName.OVERLAY);
      }

      if (margin.top > 0) {
        _wrapper.prepend(_margin.clone().css('height', "".concat(margin.top, "px")));
      }

      for (var i = 0; i < _props.rows; i++) {
        var _item = _list.clone().html("".concat(_sbList[i]));

        if (i + 1 == _props.rows) {
          _item.css('height', "".concat(_item_h + _c, "px")).css('line-height', "".concat(_item_h + _c, "px"));
        } else {
          _item.css('height', "".concat(_item_h - 1, "px")).css('line-height', "".concat(_item_h - 1, "px"));
        }

        _wrapper.append(_item);
      }

      if (margin.bottom > 0) {
        _wrapper.append(_margin.clone().css('height', "".concat(margin.bottom + _c, "px")));
      }

      return _wrapper;
    }
    /*
     * @private: Create the footer of the timeline (:> タイムラインのフッターを作成する
     */

  }, {
    key: "_createFooter",
    value: function _createFooter() {
      var _opts = this._config,
          _props = this._instanceProps,
          _display = this.supplement(Default.footer.display, _opts.footer.display),
          _content = this.supplement(null, _opts.footer.content),
          _range = this.supplement(Default.footer.range, _opts.footer.range),
          _locale = this.supplement(Default.footer.locale, _opts.footer.locale),
          _format = this.supplement(Default.footer.format, _opts.footer.format),
          _begin = this.supplement(null, _props.begin),
          _end = this.supplement(null, _props.end),
          _scale = _opts.scale,
          _tl_footer = $('<div></div>', {
        class: ClassName.TIMELINE_FOOTER
      });

      if (_range) {
        if (_begin && _end) {
          if (Object.hasOwnProperty.call(_format, 'custom')) {
            _scale = 'custom';
          }

          var _meta = "".concat(this.getLocaleString(_begin, _scale, _locale, _format), "<span class=\"").concat(ClassName.RANGE_SPAN, "\"></span>").concat(this.getLocaleString(_end, _scale, _locale, _format));

          _tl_footer.append("<div class=\"".concat(ClassName.RANGE_META, " ").concat(ClassName.ALIGN_SELF_RIGHT, "\">").concat(_meta, "</div>"));
        }
      }

      if (_content) {
        _tl_footer.append("<div class=\"".concat(ClassName.TIMELINE_FOOTER_CONTENT, "\">").concat(_content, "</div>"));
      }

      if (!_display) {
        _tl_footer.addClass(ClassName.HIDE);
      }

      return _tl_footer;
    }
    /*
     * @private: Load all enabled events markupped on target element to the timeline object (:> 対象要素にマークアップされたすべての有効なイベントをタイムラインにロードする
     *           Firstly load default events bound to plugin config (:> 最初にプラグイン設定にバインドされた初期イベントをロードする
     */

  }, {
    key: "_loadEvent",
    value: function _loadEvent() {
      var _this6 = this;

      this._debug('_loadEvent');

      var _that = this,
          _elem = this._element,
          _opts = this._config,
          _default_events = _opts.eventData,
          _event_list = $(_elem).find(Selector.DEFAULT_EVENTS),
          _cnt = _default_events.length,
          events = [],
          lastEventId = 0;

      _event_list.children().each(function () {
        var _attr = $(this).attr('data-timeline-node');

        if (typeof _attr !== 'undefined' && _attr !== false) {
          _cnt++;
        }
      });

      if (_cnt == 0) {
        //this._debug( 'Enable event does not exist.' )
        //console.warn( 'Enable event does not exist.' )
        this._error('Enable event does not exist.', 'warn');
      } // Register Event Data


      if (_default_events.length > 0) {
        _default_events.forEach(function (_evt_obj) {
          var _one_event = {};

          if (!_this6.is_empty(_evt_obj)) {
            _one_event = _this6._registerEventData('<div></div>', _evt_obj);
            events.push(_one_event);
            lastEventId = Math.max(lastEventId, parseInt(_one_event.eventId, 10));
          }
        });
      }

      _event_list.children().each(function () {
        var _evt_params = _that._getPluggableParams($(this).attr('data-timeline-node')),
            _one_event = {};

        if (!_that.is_empty(_evt_params)) {
          _one_event = _that._registerEventData(this, _evt_params);
          events.push(_one_event);
          lastEventId = Math.max(lastEventId, parseInt(_one_event.eventId, 10));
        }
      }); // Set event id with auto increment


      var cacheIds = []; // for checking duplication of id

      events.forEach(function (_evt, _i, _this) {
        var _chkId = parseInt(_this[_i].eventId, 10);

        if (_chkId == 0 || cacheIds.includes(_chkId)) {
          lastEventId++;
          _this[_i].eventId = lastEventId;
        } else {
          _this[_i].eventId = _chkId;
        }

        cacheIds.push(_this[_i].eventId);
      }); // Hook to event colors; Added instead of merging setColorEvent of PR#37

      events.forEach(function (_evt, _i, _this) {
        if (Object.hasOwnProperty.call(_opts.colorScheme, 'event') && _typeof(_opts.colorScheme.event) === 'object') {
          // Firstly overwrite default colors
          if (Object.hasOwnProperty.call(_opts.colorScheme.event, 'text') && _evt.color === Default.colorScheme.event.text && Default.colorScheme.event.text !== _opts.colorScheme.event.text) {
            _this[_i].color = _opts.colorScheme.event.text;
          }

          if (Object.hasOwnProperty.call(_opts.colorScheme.event, 'background') && _evt.bgColor === Default.colorScheme.event.background && Default.colorScheme.event.background !== _opts.colorScheme.event.background) {
            _this[_i].bgColor = _opts.colorScheme.event.background;
          }

          if (Object.hasOwnProperty.call(_opts.colorScheme.event, 'border') && _evt.bdColor === Default.colorScheme.event.border && Default.colorScheme.event.border !== _opts.colorScheme.event.border) {
            _this[_i].bdColor = _opts.colorScheme.event.border;
          }
        }

        if (Object.hasOwnProperty.call(_opts.colorScheme, 'hookEventColors') && typeof _opts.colorScheme.hookEventColors === 'function') {
          // Lastly, overwrite current colors
          var _new_colors = _opts.colorScheme.hookEventColors(_evt, {
            text: _this[_i].color,
            border: _this[_i].bdColor,
            background: _this[_i].bgColor
          }) || undefined;

          if (_typeof(_new_colors) === 'object') {
            if (Object.hasOwnProperty.call(_new_colors, 'text') && _evt.color !== _new_colors.text) {
              _this[_i].color = _new_colors.text;
            }

            if (Object.hasOwnProperty.call(_new_colors, 'background') && _evt.bgColor !== _new_colors.background) {
              _this[_i].bgColor = _new_colors.background;
            }

            if (Object.hasOwnProperty.call(_new_colors, 'border') && _evt.bdColor !== _new_colors.border) {
              _this[_i].bdColor = _new_colors.border;
            }
          }
        }
      });
      this._isCached = this._saveToCache(events);
    }
    /*
     * @private: Register one event data as object (:> イベントデータをオブジェクトとして登録する
     */

  }, {
    key: "_registerEventData",
    value: function _registerEventData(event_element, params) {
      var _this7 = this;

      var _opts = this._config,
          _props = this._instanceProps,
          new_event = _objectSpread(_objectSpread({}, EventParams), {
        uid: this.generateUniqueID(),
        label: $(event_element).html()
      }),
          _relation = {},
          _x,
          _w,
          _row,
          _c; //, _pointSize
      //console.log( '!_registerEventData:', EventParams, new_event )


      if (Object.hasOwnProperty.call(params, 'start') && !this.is_empty(params.start)) {
        _x = this._getCoordinateX(params.start);
        new_event.x = this.numRound(_x, 2);

        if (Object.hasOwnProperty.call(params, 'end') && !this.is_empty(params.end)) {
          _x = this._getCoordinateX(params.end);
          _w = _x - new_event.x;
          new_event.width = this.numRound(_w, 2);

          if (_opts.eventMeta.display) {
            if (this.is_empty(_opts.eventMeta.content) && !Object.hasOwnProperty.call(params, 'rangeMeta')) {
              //console.log( '!_registerEventData::', _opts.eventMeta.locale, _opts.eventMeta.format, _opts.scale, params )
              new_event.rangeMeta += this.getLocaleString(params.start, _opts.eventMeta.scale, _opts.eventMeta.locale, _opts.eventMeta.format);
              new_event.rangeMeta += " - ".concat(this.getLocaleString(params.end, _opts.eventMeta.scale, _opts.eventMeta.locale, _opts.eventMeta.format));
            } else {
              new_event.rangeMeta = _opts.eventMeta.content;
            }
          }
        } else {
          new_event.width = 0;
        }

        _row = Object.hasOwnProperty.call(params, 'row') ? parseInt(params.row, 10) : 1;
        _c = Math.floor(_row / 2);
        new_event.y = (_row - 1) * _opts.rowHeight + new_event.margin + _c;
        new_event.height = _opts.rowHeight - _opts.marginHeight * 2;
        Object.keys(new_event).forEach(function (_prop) {
          switch (true) {
            case /^eventId$/i.test(_prop):
              if (Object.hasOwnProperty.call(params, 'id')) {
                new_event.eventId = parseInt(params.id, 10);
              } else {
                new_event.eventId = parseInt(params[_prop], 10) || 0;
              }

              break;

            case /^(label|content)$/i.test(_prop):
              if (Object.hasOwnProperty.call(params, _prop) && !_this7.is_empty(params[_prop])) {
                new_event[_prop] = params[_prop];
              } // Override the children element to label or content setting


              if ($(event_element).children(".event-".concat(_prop)).length > 0) {
                new_event[_prop] = $(event_element).children(".event-".concat(_prop)).html();
              }

              break;

            case /^relation$/i.test(_prop):
              // For drawing the relation line
              if (/^mix(|ed)$/i.test(_opts.type) || /^point(|er)$/i.test(_opts.type)) {
                //let _pointSize  = this._getPointerSize( new_event.size, new_event.margin )
                _relation.x = _this7.numRound(new_event.x, 2);
                _relation.y = _this7.numRound(_props.rowSize * ((params.row || 1) - 1) + _props.rowSize / 2, 2) + ((params.row || 1) - 1) * 0.5; //console.log( '!_registerEventData:', params, _props, new_event.x, new_event.y, _pointSize, _relation )

                new_event[_prop] = _objectSpread(_objectSpread({}, params[_prop]), _relation);
              }

              break;

            default:
              if (Object.hasOwnProperty.call(params, _prop) && !_this7.is_empty(params[_prop])) {
                new_event[_prop] = params[_prop];
              }

              break;
          }
        });
      } //console.log( '!_registerEventData:', new_event )


      return new_event;
    }
    /*
     * @private: Get the coordinate X on the timeline of any date
     */

  }, {
    key: "_getCoordinateX",
    value: function _getCoordinateX(date) {
      /*
      // add new since v2.0.0 : start
      if ( this._config.scale === "day" ) {
          let dateAdjust = new Date( date )
           if ( dateAdjust.getHours() <= this._config.startHour ) {
              date = `${dateAdjust.getFullYear()}-${(dateAdjust.getMonth() + 1)}-${dateAdjust.getDate()} 00:00:00`
          } else
          if ( dateAdjust.getHours() >= this._config.endHour ) {
              date = `${dateAdjust.getFullYear()}-${(dateAdjust.getMonth() + 1)}-${dateAdjust.getDate()} 23:59:59`
          }
      }
      // add new since v2.0.0 : end
      */
      var _props = this._instanceProps,
          _date = this.supplement(null, this._getPluggableDatetime(date)),
          coordinate_x = 0; //console.log( '!_getCoordinateX::', _props, _date )


      if (_date) {
        if (_date - _props.begin >= 0 && _props.end - _date >= 0) {
          // When the given date is within the range of timeline begin and end (:> 指定された日付がタイムラインの開始と終了の範囲内にある場合
          coordinate_x = Math.abs(_date - _props.begin) / _props.scale * _props.scaleSize;
        } else {
          // When the given date is out of timeline range (:> 指定された日付がタイムラインの範囲外にある場合
          coordinate_x = (_date - _props.begin) / _props.scale * _props.scaleSize;
        }
      } else {
        //console.warn( 'Cannot parse date because invalid format or undefined.' )
        this._error('Cannot parse date because invalid format or undefined.', 'warn');
      }

      return coordinate_x;
    }
    /*
     * @private: Cache the event data to the web storage
     */

  }, {
    key: "_saveToCache",
    value: function _saveToCache(data) {
      var strageEngine = /^local(|Storage)$/i.test(this._config.storage) ? 'localStorage' : 'sessionStorage',
          is_available = strageEngine in window && (strageEngine === 'localStorage' ? window.localStorage : window.sessionStorage) !== null;

      if (is_available) {
        if (strageEngine === 'localStorage') {
          localStorage.setItem(this._selector, JSON.stringify(data));
        } else {
          sessionStorage.setItem(this._selector, JSON.stringify(data));
        }

        return true;
      } else {
        throw new TypeError("The storage named \"".concat(strageEngine, "\" can not be available."));
      }
    }
    /*
     * @private: Load the cached event data from the web storage
     */

  }, {
    key: "_loadToCache",
    value: function _loadToCache() {
      var strageEngine = /^local(|Storage)$/i.test(this._config.storage) ? 'localStorage' : 'sessionStorage',
          is_available = strageEngine in window && (strageEngine === 'localStorage' ? window.localStorage : window.sessionStorage) !== null,
          data = null;

      if (is_available) {
        if (strageEngine === 'localStorage') {
          data = JSON.parse(localStorage.getItem(this._selector));
        } else {
          data = JSON.parse(sessionStorage.getItem(this._selector));
        }
      } else {
        throw new TypeError("The storage named \"".concat(strageEngine, "\" can not be available."));
      }

      return data;
    }
    /*
     * @private: Remove the cache data on the web storage
     */

  }, {
    key: "_removeCache",
    value: function _removeCache() {
      var strageEngine = /^local(|Storage)$/i.test(this._config.storage) ? 'localStorage' : 'sessionStorage',
          is_available = strageEngine in window && (strageEngine === 'localStorage' ? window.localStorage : window.sessionStorage) !== null;

      if (is_available) {
        if (strageEngine === 'localStorage') {
          localStorage.removeItem(this._selector);
        } else {
          sessionStorage.removeItem(this._selector);
        }
      } else {
        throw new TypeError("The storage named \"".concat(strageEngine, "\" can not be available."));
      }
    }
    /*
     * @private: Controller method to place event data on timeline
     */

  }, {
    key: "_placeEvent",
    value: function _placeEvent() {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        _this8._debug('_placeEvent');

        if (!_this8._isCached) {
          //return
          reject('No Cached Event');
        }

        var _elem = _this8._element,
            _opts = _this8._config,
            _evt_container = $(_elem).find(Selector.TIMELINE_EVENTS),
            _relation_lines = $(_elem).find(Selector.TIMELINE_RELATION_LINES),
            events = _this8._loadToCache(),
            placedEvents = []; // c.f. https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver


        _this8._observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            var _self = mutation.target;

            switch (mutation.type) {
              case 'childList':
                // console.log( 'MutationObserver::childList:', mutation.addedNodes.length, placedEvents.length )
                if (mutation.addedNodes.length == placedEvents.length) {
                  _relation_lines.attr('data-state', 'show');

                  _evt_container.attr('data-state', 'show');
                }

                break;

              case 'attributes':
                if (mutation.attributeName === 'data-state') {
                  // console.log( 'MutationObserver::attributes:', $(_self).attr('data-state') )
                  if ($(_self).attr('data-state') === 'shown') {
                    resolve('Completed Placing');
                  } else if ($(_self).attr('data-state') === 'show') {
                    setTimeout(function () {
                      _relation_lines.attr('data-state', 'shown');

                      _evt_container.attr('data-state', 'shown');
                    }, 300);
                  }
                }

                break;
            }
          });
        });

        _this8._observer.observe(_evt_container.get(0), {
          childList: true,
          attributes: true,
          subtree: true,
          attributeOldValue: true
        });

        if (events.length > 0) {
          _evt_container.empty();
          /*
          // add new since v2.0.0 : start
          events = events.sort( (a, b) => a.width < b.width ? 1 : -1 ) // sort elements
          // add new since v2.0.0 : end
          */


          events.forEach(function (_evt) {
            // Apply color scheme to the creation event
            if (_evt.color === Default.colorScheme.event.text && Default.colorScheme.event.text !== _opts.colorScheme.event.text) {
              _evt.color = _opts.colorScheme.event.text;
            }

            if (_evt.bgColor === Default.colorScheme.event.background && Default.colorScheme.event.background !== _opts.colorScheme.event.background) {
              _evt.bgColor = _opts.colorScheme.event.background;
            }

            if (_evt.bdColor === Default.colorScheme.event.border && Default.colorScheme.event.border !== _opts.colorScheme.event.border) {
              _evt.bdColor = _opts.colorScheme.event.border;
            }

            var _evt_elem = _this8._createEventNode(_evt);

            if (_evt_elem) {
              //_evt_container.append( _evt_elem )
              placedEvents.push(_evt_elem);
            }
          });

          if (placedEvents.length > 0) {
            _evt_container.append.apply(_evt_container, placedEvents);
          }
        } else {
          _relation_lines.attr('data-state', 'show');

          _evt_container.attr('data-state', 'show');
        }

        if (/^mix(|ed)$/i.test(_opts.type) || /^point(|er)$/i.test(_opts.type)) {
          _this8._drawRelationLine(events);
        }

        if (Object.hasOwnProperty.call(_opts.effects, 'presentTime') && _opts.effects.presentTime) {
          _this8._viewPresentTime();
        }

        resolve(true);
      }); // return Promise
    }
    /*
     * @private: Create an event element on the timeline (:> タイムライン上にイベント要素を作成する
     */

  }, {
    key: "_createEventNode",
    value: function _createEventNode(params) {
      var _opts = this._config,
          _props = this._instanceProps,
          _evt_elem = $('<div></div>', {
        class: ClassName.TIMELINE_EVENT_NODE,
        id: "evt-".concat(params.eventId),
        css: {
          left: "".concat(params.x, "px"),
          top: "".concat(params.y, "px"),
          width: "".concat(params.width, "px"),
          height: "".concat(params.height, "px"),
          color: this.hexToRgbA(params.color),
          backgroundColor: this.hexToRgbA(params.bgColor)
        },
        html: "<div class=\"".concat(ClassName.TIMELINE_EVENT_LABEL, "\">").concat(params.label, "</div>")
      }),
          _is_bar = true; // Whether this event type is bar or point


      if (/^point(|er)$/i.test(_opts.type)) {
        _is_bar = false; // point type
      } else if (/^mix(|ed)$/i.test(_opts.type)) {
        if (/^point(|er)$/i.test(params.type)) {
          _is_bar = false; // point type
        } else if (params.width < 1) {
          _is_bar = !/^bar$/i.test(params.type) ? false : true;
        }
      } //console.log( '!_createEventNode:', params, _is_bar )
      // Whether this event is within the display range of the timeline (:> タイムライン表示範囲内のイベントかどうか
      // For events excluded, set the width to -1 (:> 除外イベントは幅を -1 に設定する


      if (params.x >= 0) {
        // The event start datetime is over the start datetime of the timeline (:> イベント始点がタイムラインの始点以上
        if (params.x <= _props.fullwidth) {
          // The event start datetime is less than or equal to the timeline end datetime (:> イベントの始点がタイムラインの終点以下
          if (params.x + params.width <= _props.fullwidth) {// The event end datetime is less than before the timeline end datetime (regular event) (:> イベント終点がタイムラインの終点以下（通常イベント）
            // OK
          } else {
            // The event end datetime is after the timeline end datetime (event exceeded end datetime) (:> イベント終点がタイムラインの終点より後（終点超過イベント）
            params.width = _props.fullwidth - params.x; // add new since v2.0.0 : start
            //_evt_elem.append( `<span class="${ClassName.TIMELINE_EVENT_NODE}-next glyphicon glyphicon-search glyphicon-chevron-right" aria-hidden="true"></span>` )
            // add new since v2.0.0 : end
          }
        } else {
          // The event start datetime is after the timeline end datetime (exclude event) (:> イベント始点がタイムラインの終点より後（除外イベント）
          params.width = -1;
        }
      } else {
        // The event start datetime is before the timeline start datetime (:> イベント始点がタイムラインの始点より前
        if (!_is_bar) {
          // In the case of "point" type, that is an exclude event (:> ポインター型の場合は除外イベント
          params.width = -1;
        } else {
          // The case of "bar" type
          if (params.x + params.width <= 0) {
            // The event end datetime is less than before the timeline start datetime (exclude event) (:> イベント終点がタイムラインの始点より前（除外イベント）
            params.width = -1;
          } else {
            // The event end datetime is after the timeline start datetime (:> イベント終点がタイムラインの始点より後
            if (params.x + params.width <= _props.fullwidth) {
              // The event end datetime is less than or equal the timeline end datetime (event exceeded start datetime) (:> イベント終点がタイムラインの終点以下（始点超過イベント）
              params.width = Math.abs(params.x + params.width); // add new since v2.0.0 : start
              //_evt_elem.prepend( `<span class="${ClassName.TIMELINE_EVENT_NODE}-before glyphicon glyphicon-search glyphicon-chevron-left" aria-hidden="true"></span>` )
              // add new since v2.0.0 : end

              params.x = 0;
            } else {
              // The event end datetime is after the timeline end datetime (event exceeded both start and end datetime) (:> イベント終点がタイムラインの終点より後（始点・終点ともに超過イベント）
              params.width = _props.fullwidth; // add new since v2.0.0 : start
              //_evt_elem.append( `<span class="${ClassName.TIMELINE_EVENT_NODE}-next glyphicon glyphicon-search glyphicon-chevron-right" aria-hidden="true"></span>` )
              //_evt_elem.prepend( `<span class="${ClassName.TIMELINE_EVENT_NODE}-before glyphicon glyphicon-search glyphicon-chevron-left" aria-hidden="true"></span>` )
              // add new since v2.0.0 : end

              params.x = 0;
            }
          }
        }
      } //console.log( 'x:', params.x, 'w:', params.width, 'x-end:', Math.abs( params.x ) + params.width, 'fw:', _props.fullwidth, 'ps:', params.size )


      if (!_is_bar) {
        // If this event is the point type
        if (params.width < 0) {
          return null;
        }

        var _pointSize = this._getPointerSize(params.size, params.margin),
            _shiftX = this.numRound(params.x - _pointSize / 2, 2) - params.margin,
            _shiftY = this.numRound(params.y + (params.height - _pointSize) / 2, 2) - params.margin; //console.log( '!!_createEventNode::', params, _pointSize, _shiftX, _shiftY )
        //_evt_elem.addClass( ClassName.VIEWER_EVENT_TYPE_POINTER ).css( 'border-color', params.bdColor )
        //.css( 'left', `${_shiftX}px` ).css( 'top', `${_shiftY}px` ).css( 'width', `${_pointSize}px` ).css( 'height', `${_pointSize}px` )
        //.attr( 'data-base-size', _pointSize ).attr( 'data-base-left', _shiftX ).attr( 'data-base-top', _shiftY )

      } else {
        // If this event is the bar type
        if (params.width < 1) {
          return null;
        }

        _evt_elem.css('left', "".concat(params.x, "px")).css('width', "".concat(params.width, "px"));
        /*
        // add new since v2.0.0 : start
        if ( params.width < 15 ) {
            // Create Event info on bullet point
            let date_start = new Date( params.start ),
                date_start_grid, correction_x, correction_y
             switch ( true ) {
                case /^months?$/i.test( _opts.scale ):
                    correction_x = 6
                    date_start_grid = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-1`
                     _evt_elem.html( `<div class="${ClassName.TIMELINE_EVENT_LABEL}"><span style="border-radius:50%;background-color:${this.hexToRgbA( params.bgColor )}"> &nbsp; </span> ${date_start.getDate()} : ${params.label}</div>` )
                    break
                case /^(|week)days?$/i.test( _opts.scale ):
                    correction_x = 0
                    date_start_grid = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} 00:00`
                     _evt_elem.html( `<div class="${ClassName.TIMELINE_EVENT_LABEL}"><span style="border-radius:50%;background-color:${this.hexToRgbA( params.bgColor )}"> &nbsp; </span> ${date_start.getHours()}:${date_start.getMinutes()} : ${params.label}</div>` )
                    break
                case /^hours?$/i.test( _opts.scale ):
                    correction_x = 0
                    date_start_grid = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} ${date_start.getHours()}:00`
                     _evt_elem.html( `<div class="${ClassName.TIMELINE_EVENT_LABEL}"><span style="border-radius:50%;background-color:${this.hexToRgbA( params.bgColor )}"> &nbsp; </span> ${date_start.getHours()}:${date_start.getMinutes()} : ${params.label}</div>` )
                    break
            }
            if ( this._countEventinCell[params.row] == null ) {
                this._countEventinCell[params.row] = {}
            }
            if ( this._countEventinCell[params.row][date_start_grid] == null ) {
                this._countEventinCell[params.row][date_start_grid] = 0
            }
            correction_y = this._countEventinCell[params.row][date_start_grid] * EventParams.height
            this._countEventinCell[params.row][date_start_grid]++
             if ( (this._countEventinCell[params.row][date_start_grid] * EventParams.height) > this._config.rowHeight ) {
                 this._config.rowHeight = this._countEventinCell[params.row][date_start_grid] * EventParams.height
                 this.reload( this._config )
                 //console.log("Reload : " + this._config.rowHeight);
            }
             params.x = this._getCoordinateX( date_start_grid )
            _evt_elem.css( 'top', `${this.numRound( params.y+correction_y, 2 )}px` ).css( 'backgroundColor', 'transparent' )
            .css( 'color', 'black' ).css( 'left', `${this.numRound( params.x+correction_x, 2 )}px` )
            .css( 'width', `${this._config.minGridSize}px` ) // .css('height', `12px`)
            //return null
        } else {
            let date_start = new Date( params.start ),
                date_end   = new Date( params.end ),
                date_test_grid, correction_y, date_test_grid_index
             switch ( true ) {
                case /^months?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-1`
                    break
                case /^(|week)days?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} 00:00`
                    break
                case /^hours?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} ${date_start.getHours()}:00`
                    break
            }
            if ( this._countEventinCell[params.row] == null ) {
                this._countEventinCell[params.row] = {}
            }
            if ( this._countEventinCell[params.row][date_test_grid_index] == null ) {
                this._countEventinCell[params.row][date_test_grid_index] = 0
            }
            correction_y = this._countEventinCell[params.row][date_test_grid_index]
             // For all grid between start / end, search max Position Y
            date_test_grid = date_start
            while ( date_test_grid <= date_end ) {
                switch ( true ) {
                    case /^months?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth() + 1, 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-1`
                        break;
                    case /^(|week)days?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate() + 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} 00:00`
                        break;
                    case /^hours?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate(), date_test_grid.getHours() + 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} ${date_test_grid.getHours()}:00`
                        break;
                }
                 if ( this._countEventinCell[params.row] == null ) {
                    this._countEventinCell[params.row] = {}
                }
                if ( this._countEventinCell[params.row][date_test_grid_index] == null ) {
                    this._countEventinCell[params.row][date_test_grid_index] = 0
                }
                correction_y = Math.max( this._countEventinCell[params.row][date_test_grid_index], correction_y )
            }
             // set new position
            correction_y++
             switch ( true ) {
                case /^months?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-1`
                    break;
                case /^(|week)days?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} 00:00`
                    break;
                case /^hours?$/i.test( _opts.scale ):
                    date_test_grid_index = `${date_start.getFullYear()}-${(date_start.getMonth() + 1)}-${date_start.getDate()} ${date_start.getHours()}:00`
                    break;
            }
            this._countEventinCell[params.row][date_test_grid_index] = correction_y;
             // For all grid between start / end, set new Position Y
            date_test_grid = date_start;
            while ( date_test_grid <= date_end ) {
                switch ( true ) {
                    case /^months?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth() + 1, 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-1`
                        break
                    case /^(|week)days?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate() + 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} 00:00`
                        break
                    case /^hours?$/i.test( _opts.scale ):
                        date_test_grid = new Date( date_test_grid.getFullYear(), date_test_grid.getMonth(), date_test_grid.getDate(), date_test_grid.getHours() + 1 )
                        date_test_grid_index = `${date_test_grid.getFullYear()}-${(date_test_grid.getMonth() + 1)}-${date_test_grid.getDate()} ${date_test_grid.getHours()}:00`
                        break
                }
                 if ( this._countEventinCell[params.row] == null ) {
                    this._countEventinCell[params.row] = {}
                }
                if ( this._countEventinCell[params.row][date_test_grid_index] == null ) {
                    this._countEventinCell[params.row][date_test_grid_index] = 0
                }
                 this._countEventinCell[params.row][date_test_grid_index] = correction_y
            }
             if ( ( correction_y * EventParams.height ) > this._config.rowHeight ) {
                 this._config.rowHeight = correction_y * EventParams.height
                 this.reload( this._config )
            }
            _evt_elem.css( 'top', `${this.numRound( params.y + ( (correction_y - 1) * EventParams.height ), 2 )}px` )
            .css( 'left', `${params.x}px` ).css( 'width', `${params.width}px` ).css( 'border', `1px solid ${EventParams.bdColor}` )
        }
        // add new since v2.0.0 : end
        */

      }

      _evt_elem.attr('data-uid', params.uid);
      /*
      // add new since v2.0.0 : start
      _evt_elem.attr( 'data-category', params.category);
      // add new since v2.0.0 : end
      */


      if (!this.is_empty(params.image)) {
        if (!_is_bar) {
          _evt_elem.css('background-image', "url(".concat(params.image, ")"));
        } else {
          var _imgSize = params.height - params.margin * 2;

          _evt_elem.prepend("<img src=\"".concat(params.image, "\" class=\"").concat(ClassName.TIMELINE_EVENT_THUMBNAIL, "\" width=\"").concat(_imgSize, "\" height=\"").concat(_imgSize, "\" />"));
        }
      }

      if (_is_bar && _opts.eventMeta.display) {
        //console.log( '!_createEventNode:', params )
        params.extend.meta = params.rangeMeta;
      }

      if (!this.is_empty(params.extend)) {
        for (var _i8 = 0, _Object$keys5 = Object.keys(params.extend); _i8 < _Object$keys5.length; _i8++) {
          var _prop = _Object$keys5[_i8];

          _evt_elem.attr("data-".concat(_prop), params.extend[_prop]);

          if (_prop === 'toggle' && ['popover', 'tooltip'].includes(params.extend[_prop])) {
            // for bootstrap's popover or tooltip
            _evt_elem.attr('title', params.label);

            if (!Object.hasOwnProperty.call(params.extend, 'content')) {
              _evt_elem.attr('data-content', params.content);
            }
          }
        }
      }

      if (!this.is_empty(params.callback)) {
        _evt_elem.attr('data-callback', params.callback);
      }

      return _evt_elem;
    }
    /*
     * @private: Retrieve the diameter size (pixel) of pointer (:> ポインタの直径サイズ（ピクセル値）を取得する
     */

  }, {
    key: "_getPointerSize",
    value: function _getPointerSize(key, margin) {
      var _props = this._instanceProps,
          _max = Math.min(_props.scaleSize - margin * 2, _props.rowSize - margin * 2),
          _size = null;

      switch (true) {
        case /^([1-9]\d*|0)$/i.test(key):
          _size = Math.max(parseInt(key, 10), MIN_POINTER_SIZE);
          break;

        case /^small$/i.test(key):
          _size = Math.max(this.numRound(_max / 4, 2), MIN_POINTER_SIZE);
          break;

        case /^large$/i.test(key):
          _size = Math.max(this.numRound(_max * 0.75, 2), MIN_POINTER_SIZE);
          break;

        case /^normal$/i.test(key):
        default:
          _size = Math.max(this.numRound(_max / 2, 2), MIN_POINTER_SIZE);
          break;
      } // console.log( '!_getPointerSize:', _props, key, _max, _size )


      return _size;
    }
    /*
     * @private: Draw the relational lines
     */

  }, {
    key: "_drawRelationLine",
    value: function _drawRelationLine(events) {
      var _this9 = this;

      // let _opts         = this._config,
      var _props = this._instanceProps,
          _canvas = $(this._element).find(Selector.TIMELINE_RELATION_LINES),
          ctx_relations = _canvas[0].getContext('2d'),
          drawLine = function drawLine(_sx, _sy, _ex, _ey, evt, _ba) {
        var _curveType = {},
            _strokeColor = EventParams.bdColor,
            _radius = _this9.numRound(Math.min(_props.scaleSize, _props.rowSize) / 2, 2); //,
        // _subRadius = this.numRound( this._getPointerSize( evt.size, _opts.marginHeight ) / 2, 2 )
        // Defaults


        if (_strokeColor === Default.colorScheme.event.border && Default.colorScheme.event.border !== _this9._config.colorScheme.event.border) {
          _strokeColor = _this9._config.colorScheme.event.border;
        }

        ctx_relations.strokeStyle = _strokeColor;
        ctx_relations.lineWidth = 2.5;
        ctx_relations.filter = 'url(#crisp)';

        for (var _i9 = 0, _Object$keys6 = Object.keys(evt.relation); _i9 < _Object$keys6.length; _i9++) {
          var _key = _Object$keys6[_i9];

          switch (true) {
            case /^(|line)color$/i.test(_key):
              ctx_relations.strokeStyle = evt.relation[_key];
              break;

            case /^(|line)size$/i.test(_key):
              ctx_relations.lineWidth = parseInt(evt.relation[_key], 10) || 2.5;
              break;

            case /^curve$/i.test(_key):
              if (/^(r|l)(t|b),?(r|l)?(t|b)?$/i.test(evt.relation[_key])) {
                var _tmp = evt.relation[_key].split(',');

                if (_tmp.length == 2) {
                  _curveType.before = _tmp[0];
                  _curveType.after = _tmp[1];
                } else {
                  _curveType[_ba] = _tmp[0];
                }
              } else if (typeof evt.relation[_key] === 'boolean' && evt.relation[_key] || typeof evt.relation[_key] === 'number' && Boolean(evt.relation[_key])) {
                // Automatically set the necessary linearity type (:> 自動線形判定
                //console.log( _sx, _sy, _ex, _ey, _radius, _ba, _subRadius )
                if (_ba === 'before') {
                  // before: targetEvent[ _ex, _ey ] <---- selfEvent[ _sx, _sy ]
                  if (_sy > _ey) {
                    // 連結点が自分より上にある
                    if (_sx > _ex) {
                      // 連結点が自分より左にある "(_ex,_ey)└(_sx,_sy)" as "lb"
                      _curveType[_ba] = 'lb';
                    } else if (_sx < _ex) {
                      // 連結点が自分より右にある "⊂￣" as "lb+lt"
                      _curveType[_ba] = 'lb+lt';
                    } else {
                      // 連結点が自分の直上 "│" to top
                      _curveType[_ba] = null;
                    }
                  } else if (_sy < _ey) {
                    // 連結点が自分より下にある
                    if (_sx > _ex) {
                      // 連結点が自分より左にある "(_ex,_ey)┌(_sx,_sy)" as "lt"
                      _curveType[_ba] = 'lt';
                    } else if (_sx < _ex) {
                      // 連結点が自分より右にある "⊂_" as "rt+rb"
                      _curveType[_ba] = 'lt+lb';
                    } else {
                      // 連結点が自分の直下 "│" to bottom
                      _curveType[_ba] = null;
                    }
                  } else {
                    // 連結点が自分と同じ水平上にある（左右どちらか） _sy == _ey; "─" to left or right
                    _curveType[_ba] = null;
                  }
                } else if (_ba === 'after') {
                  // after: selfEvent[ _sx, _sy ] ----> targetEvent[ _ex, _ey ]
                  if (_sy < _ey) {
                    // Relational endpoint is located "under" self (:> 連結点が自分の下にある
                    if (_sx < _ex) {
                      // Then relational endpoint is located "right" self (:> 連結点が自分の右にある "(_sx,_sy)┐(_ex,_ey)" as "rt"
                      _curveType[_ba] = 'rt';
                    } else if (_sx > _ex) {
                      // Then relational endpoint is located "left" self (:> 連結点が自分より左にある "_⊃" as "rt+rb"
                      _curveType[_ba] = 'rt+rb';
                    } else {
                      // Relational endpoint is located "just under" self (:> 連結点が自分の直下 "│" to bottom
                      _curveType[_ba] = null;
                    }
                  } else if (_sy > _ey) {
                    // Relational endpoint is located "above" self (:> 連結点が自分より上にある
                    if (_sx < _ex) {
                      // Then relational endpoint is located "right" self (:> 連結点が自分の右にある "┘" as "rb"
                      _curveType[_ba] = 'rb';
                    } else if (_sx > _ex) {
                      // Then relational endpoint is located "left" self (:> 連結点が自分より左にある "￣⊃" as "rb+rt"
                      _curveType[_ba] = 'rb+rt';
                    } else {
                      // Relational endpoint is located "just under" self (:> 連結点が自分の直上 "│" to top
                      _curveType[_ba] = null;
                    }
                  } else {
                    // 連結点が自分と同じ水平上にある（左右どちらか） _sy == _ey; "─" to left or right
                    _curveType[_ba] = null;
                  }
                }
              }

              break;
          }
        }

        if (Math.abs(_ey - _sy) > _props.rowSize) {
          _ey += Math.floor(Math.abs(_ey - _sy) / _props.rowSize);
        }

        ctx_relations.beginPath();

        if (!_this9.is_empty(_curveType)) {
          // console.log( '!_drawLine:', _curveType, _sx, _sy, _ex, _ey, _radius )
          switch (true) {
            case /^lt$/i.test(_curveType[_ba]):
              // "(_ex,_ey)┌(_sx,_sy)"
              ctx_relations.moveTo(_sx, _sy);

              if (Math.abs(_sx - _ex) > _radius) {
                ctx_relations.lineTo(_ex + _radius, _sy); // "─"
              }

              if (Math.abs(_ey - _sy) > _radius) {
                var _hep = _ey - _sy >= 0 ? _sy + _radius : _sy - _radius;

                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _hep); // "┌"

                ctx_relations.lineTo(_ex, _ey); // "│"
              } else {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _ey); // "┌"
              }

              break;

            case /^lb$/i.test(_curveType[_ba]):
              // "(_ex,_ey)└(_sx,_sy)"
              ctx_relations.moveTo(_sx, _sy);

              if (Math.abs(_sx - _ex) > _radius) {
                ctx_relations.lineTo(_ex + _radius, _sy); // "─"
              }

              if (Math.abs(_sy - _ey) > _radius) {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _sy - _radius); // "└"

                ctx_relations.lineTo(_ex, _ey); // "│"
              } else {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _ey); // "└"
              }

              break;

            case /^rt$/i.test(_curveType[_ba]):
              // "(_sx,_sy)┐(_ex,_ey)"
              ctx_relations.moveTo(_sx, _sy);

              if (Math.abs(_ex - _sx) > _radius) {
                ctx_relations.lineTo(_ex - _radius, _sy); // "─"
              }

              if (Math.abs(_ey - _sy) > _radius) {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _sy + _radius); // "┐"

                ctx_relations.lineTo(_ex, _ey);
              } else {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _ey); // "┐"
              }

              break;

            case /^rb$/i.test(_curveType[_ba]):
              // "(_sx,_sy)┘(_ex,_ey)"
              ctx_relations.moveTo(_sx, _sy);

              if (Math.abs(_ex - _sx) > _radius) {
                ctx_relations.lineTo(_ex - _radius, _sy); // "─"
              }

              if (Math.abs(_sy - _ey) > _radius) {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _sy - _radius); // "┘"

                ctx_relations.lineTo(_ex, _ey);
              } else {
                ctx_relations.quadraticCurveTo(_ex, _sy, _ex, _ey); // "┘"
              }

              break;

            case /^lt\+lb$/i.test(_curveType[_ba]): // "⊂＿"

            case /^lb\+lt$/i.test(_curveType[_ba]):
              // "⊂￣"
              ctx_relations.moveTo(_sx, _sy); //ctx_relations.lineTo( _sx - _subRadius, _sy ) // "─"

              ctx_relations.lineTo(_sx - _radius, _sy); // "─"
              //ctx_relations.bezierCurveTo( _sx - _subRadius - _radius, _sy, _sx - _subRadius - _radius, _ey, _sx - _subRadius, _ey ) // "⊂"

              ctx_relations.bezierCurveTo(_sx - _radius * 2, _sy, _sx - _radius * 2, _ey, _sx - _radius, _ey); // "⊂"

              ctx_relations.lineTo(_ex, _ey); // "─"

              break;

            case /^rt\+rb$/i.test(_curveType[_ba]): // "＿⊃"

            case /^rb\+rt$/i.test(_curveType[_ba]):
              // "￣⊃"
              ctx_relations.moveTo(_sx, _sy); //ctx_relations.lineTo( _sx + _subRadius, _sy ) // "─"

              ctx_relations.lineTo(_sx + _radius, _sy); // "─"
              //ctx_relations.bezierCurveTo( _sx + _subRadius + _radius, _sy, _sx + _subRadius + _radius, _ey, _sx + _subRadius, _ey ) // "⊃"

              ctx_relations.bezierCurveTo(_sx + _radius * 2, _sy, _sx + _radius * 2, _ey, _sx + _radius, _ey); // "⊃"

              ctx_relations.lineTo(_ex, _ey); // "─"

              break;

            default:
              ctx_relations.moveTo(_sx, _sy);
              ctx_relations.lineTo(_ex, _ey);
              break;
          }
        } else {
          ctx_relations.moveTo(_sx, _sy);
          ctx_relations.lineTo(_ex, _ey);
        } //ctx_relations.closePath()


        ctx_relations.stroke();
      };

      ctx_relations.clearRect(0, 0, _canvas[0].width, _canvas[0].height); //console.log( '!_drawRelationLine:', _props, events, _canvas )

      events.forEach(function (evt) {
        //console.log( '!_drawRelationLine:', evt )
        var _rel = evt.relation,
            _sx,
            _sy,
            _ex,
            _ey,
            _targetId,
            _targetEvent;

        if (Object.hasOwnProperty.call(_rel, 'before')) {
          // before: targetEvent[ _ex, _ey ] <---- selfEvent[ _sx, _sy ]
          // (:> before: 自分を起点（ _sx, _sy ）として左方向の連結点（ _ex, _ey ）へ向かう描画方式
          _sx = _rel.x + _this9.numRound(evt.margin / 2, 2);
          _sy = _rel.y + _this9.numRound(evt.margin / 2, 2);
          _targetId = parseInt(_rel.before, 10);

          if (_targetId < 0) {
            _ex = 0;
            _ey = _sy + _this9.numRound(evt.margin / 2, 2);
          } else {
            _targetEvent = events.find(function (_evt) {
              return parseInt(_evt.eventId, 10) == _targetId;
            });

            if (!_this9.is_empty(_targetEvent) && _targetEvent.relation) {
              _ex = _targetEvent.relation.x < 0 ? 0 : _targetEvent.relation.x + _this9.numRound(evt.margin / 2, 2);
              _ey = _targetEvent.relation.y + _this9.numRound(evt.margin / 2, 2);
            }
          }

          if (_sx >= 0 && _sy >= 0 && _ex >= 0 && _ey >= 0) {
            drawLine(_sx, _sy, _ex, _ey, evt, 'before');
          }
        }

        if (Object.hasOwnProperty.call(_rel, 'after')) {
          // after: selfEvent[ _sx, _sy ] ----> targetEvent[ _ex, _ey ]
          // (:> after: 自分を起点（ _sx, _sy ）として右方向の連結点（ _ex, _ey ）へ向かう描画方式
          _sx = _rel.x + _this9.numRound(evt.margin / 2, 2);
          _sy = _rel.y + _this9.numRound(evt.margin / 2, 2);
          _targetId = parseInt(_rel.after, 10);

          if (_targetId < 0) {
            _ex = _props.fullwidth;
            _ey = _sy + _this9.numRound(evt.margin / 2, 2);
          } else {
            _targetEvent = events.find(function (_evt) {
              return parseInt(_evt.eventId, 10) == _targetId;
            });

            if (!_this9.is_empty(_targetEvent) && _targetEvent.relation) {
              _ex = _targetEvent.relation.x > _props.fullwidth ? _props.fullwidth : _targetEvent.relation.x + _this9.numRound(evt.margin / 2, 2);
              _ey = _targetEvent.relation.y + _this9.numRound(evt.margin / 2, 2);
            }
          }

          if (_sx >= 0 && _sy >= 0 && _ex >= 0 && _ey >= 0) {
            drawLine(_sx, _sy, _ex, _ey, evt, 'after');
          }
        }
      });
    }
    /*
     * @private: Output a marker of the present time
     */

  }, {
    key: "_viewPresentTime",
    value: function _viewPresentTime() {
      var _elem = this._element,
          _props = this._instanceProps,
          _nowDt = new Date();

      if (this.diffDate(_props.begin, _nowDt) < 0 || this.diffDate(_nowDt, _props.end) < 0) {
        return;
      }

      var _marker = $('<div></div>', {
        class: ClassName.PRESENT_TIME_MARKER,
        style: "left:".concat(this.numRound(this._getCoordinateX(_nowDt), 2), "px;top:").concat($(_elem).find(Selector.TIMELINE_RULER_TOP).height(), "px;height:").concat($(_elem).find(Selector.TIMELINE_EVENT_CONTAINER).height(), "px;")
      });

      $(_elem).find(Selector.TIMELINE_MAIN).append(_marker);
    }
    /*
     * @private: Retrieve the mapping data that placed current events
     */

  }, {
    key: "_mapPlacedEvents",
    value: function _mapPlacedEvents() {
      var _that = this,
          _tl_events = $(this._element).find(Selector.TIMELINE_EVENTS).children(),
          _cache = this._loadToCache(),
          _events = [];

      if (!this._isCached || this.is_empty(_cache)) {
        return _events;
      }

      _tl_events.each(function () {
        var _uid = $(this).data('uid'),
            _data = null;

        if (_cache) {
          _data = _cache.find(function (_evt) {
            return _evt.uid === _uid;
          }) || null;
        } else {
          _data = $(this).data();
        }

        if (!_that.is_empty(_data)) {
          _events.push(_data);
        }
      }); //console.log( '!_mapPlacedEvents:', _events )


      return _events;
    }
    /*
     * @private: Event when focus or blur
     */

  }, {
    key: "_activeEvent",
    value: function _activeEvent(event) {
      this._debug('_activeEvent@Event');

      var _elem = event.target;

      if ('focusin' === event.type) {
        $(Selector.TIMELINE_EVENT_NODE).removeClass('active');
        $(_elem).addClass('active');
      } else if ('focusout' === event.type) {
        $(_elem).removeClass('active');
      }
    }
    /*
     * @private: Event when scroll timeline
     */

  }, {
    key: "_scrollTimeline",
    value: function _scrollTimeline(event) {
      this._debug('_scrollTimeline@Event');

      var _elem = event.target;

      this._debug(_elem.scrollLeft);
    }
    /*
     * @private: Event when touchstart or mousedown on the timeline container
     */

  }, {
    key: "_swipeStart",
    value: function _swipeStart(event) {
      this._debug('_swipeStart@Event');

      event.preventDefault();
      var _props = this._instanceProps;
      _props.absX = IS_TOUCH ? event.changedTouches[0].pageX : event.pageX;
      _props.moveX = $(event.currentTarget).parent(Selector.TIMELINE_CONTAINER).scrollLeft() * -1;
      this._isTouched = true;
    }
    /*
     * @private: Event when touchmove or mousemove in the timeline container
     */

  }, {
    key: "_swipeMove",
    value: function _swipeMove(event) {
      if (!this._isTouched) {
        return;
      }

      this._debug('_swipeMove@Event');

      event.preventDefault();
      var _props = this._instanceProps;
      _props.moveX -= _props.absX - (IS_TOUCH ? event.changedTouches[0].pageX : event.pageX);
      $(event.currentTarget).parent(Selector.TIMELINE_CONTAINER).scrollLeft(_props.moveX * -1);
      _props.absX = IS_TOUCH ? event.changedTouches[0].pageX : event.pageX;
    }
    /*
     * @private: Event when touchend or mouseup from the timeline container
     */

  }, {
    key: "_swipeEnd",
    value: function _swipeEnd() {
      if (!this._isTouched) {
        return;
      }

      this._debug('_swipeEnd@Event');

      this._isTouched = false;
    }
    /*
     * @private: Event when hover on the pointer type event
     */

  }, {
    key: "_hoverPointer",
    value: function _hoverPointer(event) {
      if (!this._config.effects.hoverEvent) {
        return;
      }

      this._debug('_hoverPointer@Event');

      var _props = this._instanceProps,
          _elem = event.target,
          _base = {
        left: $(_elem).data('baseLeft'),
        top: $(_elem).data('baseTop'),
        width: $(_elem).data('baseSize')
      },
          _x = _base.left,
          _y = _base.top,
          _w = _base.width,
          _z = 5; //this._getPointerSize( new_event.size, new_event.margin )

      if ('mouseenter' === event.type) {
        _w = Math.min(this.numRound(_w * 1.25, 'ceil'), Math.min(_props.rowSize, _props.scaleSize));
        _x = this.numRound(_x - (_w - _base.width) / 2, 2);
        _y = this.numRound(_y - (_w - _base.width) / 2, 2);
        _z = 9;
        $(_elem).trigger(Event.FOCUSIN_EVENT);
      } else {
        $(_elem).trigger(Event.FOCUSOUT_EVENT);
      }

      $(_elem).css('left', "".concat(_x, "px")).css('top', "".concat(_y, "px")).css('width', "".concat(_w, "px")).css('height', "".concat(_w, "px")).css('z-index', _z);
    }
    /*
     * @private: Logger of errors when the method execution
     */

  }, {
    key: "_error",
    value: function _error(message) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'error';

      if (message && window.console) {
        type = window.console[type] ? type : 'error';
        console[type](message);
      }
    }
    /*
     * @private: Echo the log of plugin for debugging
     */

  }, {
    key: "_debug",
    value: function _debug(message) {
      var throwType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Notice';

      if (!this._config.debug) {
        return;
      }

      message = this.supplement(null, message);

      if (message) {
        var _msg = typeof $(this._element).data(DATA_KEY)[message] !== 'undefined' ? "Called method \"".concat(message, "\".") : message,
            _sty = /^Called method "/.test(_msg) ? 'font-weight:600;color:blue;' : '',
            _rst = '';

        if (window.console && window.console.log) {
          if (throwType === 'Notice') {
            window.console.log('%c%s%c', _sty, _msg, _rst);
          } else {
            throw new Error("".concat(_msg));
          }
        }
      }
    } // Public

    /*
     * @public: This method is able to call only once after completed an initializing of the plugin
     */

  }, {
    key: "initialized",
    value: function initialized() {
      var _message = this._isInitialized ? 'Skipped because method "initialized" already has been called once' : 'initialized';

      this._debug(_message); //console.log('!this._isInitialized:', this._isInitialized, 'this._isCompleted:', this._isCompleted )


      if (this._isInitialized) {
        return;
      }

      var _elem = this._element,
          _opts = this._config,
          _args = arguments.length <= 0 ? undefined : arguments[0],
          callback = _args.length > 0 && typeof _args[0] === 'function' ? _args[0] : null,
          userdata = _args.length > 1 ? this.getUserArg(_args.slice(1)) : undefined; // console.log( '!initialized:', callback, userdata )


      if (callback && !this._isInitialized) {
        this._debug('Fired your callback function after initializing this plugin.');

        callback(_elem, _opts, userdata);
      }

      this._isInitialized = true;
      return this;
    }
    /*
     * @public: Destroy the object to which the plugin is applied
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._debug('destroy');

      $.removeData(this._element, DATA_KEY);
      $(window, document, this._element).off(EVENT_KEY);
      $(this._element).remove();

      this._removeCache();

      for (var _i10 = 0, _Object$keys7 = Object.keys(this); _i10 < _Object$keys7.length; _i10++) {
        var _prop = _Object$keys7[_i10];
        this[_prop] = null;
        delete this[_prop];
      }
    }
    /*
     * @public: This method has been deprecated since version 2.0.0
     */

  }, {
    key: "render",
    value: function render() {
      throw new ReferenceError('This method named "render" has been deprecated since version 2.0.0');
    }
    /*
     * @public: Show hidden timeline
     */

  }, {
    key: "show",
    value: function show() {
      this._debug('show');

      var _elem = this._element;

      if (!this._isShown) {
        $(_elem).removeClass(ClassName.HIDE);
        this._isShown = true;
      }
    }
    /*
     * @public: Hide shown timeline
     */

  }, {
    key: "hide",
    value: function hide() {
      this._debug('hide');

      var _elem = this._element;

      if (this._isShown) {
        $(_elem).addClass(ClassName.HIDE);
        this._isShown = false;
      }
    }
    /*
     * @public: Move shift or expand the range of timeline container as to past direction (to left)
     */

  }, {
    key: "dateback",
    value: function dateback() {
      this._debug('dateback');

      var _args = arguments.length <= 0 ? undefined : arguments[0],
          _opts = this._config,
          moveOpts = this.supplement(null, _args[0], this.validateObject),
          callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
          userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined,
          newOpts = {},
          begin_date,
          end_date,
          _tmpDate;

      if (this.is_empty(moveOpts)) {
        moveOpts = {
          scale: _opts.scale,
          range: _opts.range,
          shift: true
        };
      } else {
        if (!Object.hasOwnProperty.call(moveOpts, 'shift') || moveOpts.shift !== false) {
          moveOpts.shift = true;
        }

        if (!Object.hasOwnProperty.call(moveOpts, 'scale') || !this.verifyScale(moveOpts.scale)) {
          moveOpts.scale = _opts.scale;
        }

        if (!Object.hasOwnProperty.call(moveOpts, 'range') || (!_opts.disableLimitter ? parseInt(moveOpts.range, 10) > LimitScaleGrids[moveOpts.scale] : true)) {
          moveOpts.range = _opts.range;
        }
      }

      _tmpDate = new Date(_opts.startDatetime);

      switch (true) {
        case /^years?$/i.test(moveOpts.scale):
          begin_date = new Date(_tmpDate.setFullYear(_tmpDate.getFullYear() - parseInt(moveOpts.range, 10)));
          break;

        case /^months?$/i.test(moveOpts.scale):
          begin_date = new Date(_tmpDate.setMonth(_tmpDate.getMonth() - parseInt(moveOpts.range, 10)));
          break;

        default:
          begin_date = new Date(_tmpDate.getTime() - this.verifyScale(moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false) * parseInt(moveOpts.range, 10));
          break;
      }

      newOpts.startDatetime = begin_date.toString();

      if (moveOpts.shift) {
        _tmpDate = new Date(_opts.endDatetime);

        switch (true) {
          case /^years?$/i.test(moveOpts.scale):
            end_date = new Date(_tmpDate.setFullYear(_tmpDate.getFullYear() - parseInt(moveOpts.range, 10)));
            break;

          case /^months?$/i.test(moveOpts.scale):
            end_date = new Date(_tmpDate.setMonth(_tmpDate.getMonth() - parseInt(moveOpts.range, 10)));
            break;

          default:
            end_date = new Date(_tmpDate.getTime() - this.verifyScale(moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false) * parseInt(moveOpts.range, 10));
            break;
        }

        newOpts.endDatetime = end_date.toString();
      }

      if (moveOpts.scale !== _opts.scale) {
        newOpts.moveScale = moveOpts.scale;
      } //console.log( '!dateback::', moveOpts, _opts.startDatetime, _opts.endDatetime, newOpts )


      this.reload([newOpts]);

      if (callback) {
        this._debug('Fired your callback function after datebacking.');

        callback(this._element, _opts, userdata);
      }
    }
    /*
     * @public: Move shift or expand the range of timeline container as to futrue direction (to right)
     */

  }, {
    key: "dateforth",
    value: function dateforth() {
      this._debug('dateforth');

      var _args = arguments.length <= 0 ? undefined : arguments[0],
          _opts = this._config,
          moveOpts = this.supplement(null, _args[0], this.validateObject),
          callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null,
          userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined,
          newOpts = {},
          begin_date,
          end_date,
          _tmpDate;

      if (this.is_empty(moveOpts)) {
        moveOpts = {
          scale: _opts.scale,
          range: _opts.range,
          shift: true
        };
      } else {
        if (!Object.hasOwnProperty.call(moveOpts, 'shift') || moveOpts.shift !== false) {
          moveOpts.shift = true;
        }

        if (!Object.hasOwnProperty.call(moveOpts, 'scale') || !this.verifyScale(moveOpts.scale)) {
          moveOpts.scale = _opts.scale;
        }

        if (!Object.hasOwnProperty.call(moveOpts, 'range') || (!_opts.disableLimitter ? parseInt(moveOpts.range, 10) > LimitScaleGrids[moveOpts.scale] : true)) {
          moveOpts.range = _opts.range;
        }
      }

      _tmpDate = new Date(_opts.endDatetime);

      switch (true) {
        case /^years?$/i.test(moveOpts.scale):
          //console.log(_tmpDate, _tmpDate.getTime(), _tmpDate.getFullYear(), _tmpDate.setFullYear(_tmpDate.getFullYear() + parseInt( moveOpts.range, 10 ) ) )
          end_date = new Date(_tmpDate.setFullYear(_tmpDate.getFullYear() + parseInt(moveOpts.range, 10)));
          break;

        case /^months?$/i.test(moveOpts.scale):
          end_date = new Date(_tmpDate.setMonth(_tmpDate.getMonth() + parseInt(moveOpts.range, 10)));
          break;

        default:
          end_date = new Date(_tmpDate.getTime() + this.verifyScale(moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false) * parseInt(moveOpts.range, 10));
          break;
      }

      newOpts.endDatetime = end_date.toString();

      if (moveOpts.shift) {
        _tmpDate = new Date(_opts.startDatetime);

        switch (true) {
          case /^years?$/i.test(moveOpts.scale):
            begin_date = new Date(_tmpDate.setFullYear(_tmpDate.getFullYear() + parseInt(moveOpts.range, 10)));
            break;

          case /^months?$/i.test(moveOpts.scale):
            begin_date = new Date(_tmpDate.setMonth(_tmpDate.getMonth() + parseInt(moveOpts.range, 10)));
            break;

          default:
            begin_date = new Date(_tmpDate.getTime() + this.verifyScale(moveOpts.scale, _tmpDate.getTime(), _tmpDate.getTime(), false) * parseInt(moveOpts.range, 10));
            break;
        }

        newOpts.startDatetime = begin_date.toString();
      }

      if (moveOpts.scale !== _opts.scale) {
        newOpts.moveScale = moveOpts.scale;
      } //console.log( '!dateforth::', moveOpts, _opts.startDatetime, _opts.endDatetime, newOpts )


      this.reload([newOpts]);

      if (callback) {
        this._debug('Fired your callback function after dateforthing.');

        callback(this._element, this._config, userdata);
      }
    }
    /*
     * @public: Move the display position of the timeline container to the specified position
     */

  }, {
    key: "alignment",
    value: function alignment() {
      this._debug('alignment');

      for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _opts = this._config,
          _props = this._instanceProps,
          _elem = this._element,
          _tl_container = $(_elem).find(Selector.TIMELINE_CONTAINER),
          _movX = 0,
          _args = !this.is_empty(args) ? args[0] : [],
          position = _args.length > 0 && typeof _args[0] === 'string' ? _args[0] : _opts.rangeAlign,
          duration = _args.length > 1 && /^(\d{1,}|fast|normal|slow)$/i.test(_args[1]) ? _args[1] : 0; //console.log( args, _args, position, duration )


      if (_props.fullwidth <= _elem.scrollWidth) {
        return;
      }

      switch (true) {
        case /^(left|begin)$/i.test(position):
          _movX = 0;
          break;

        case /^center$/i.test(position):
          _movX = (_tl_container[0].scrollWidth - _elem.scrollWidth) / 2 + 1;
          break;

        case /^(right|end)$/i.test(position):
          _movX = _tl_container[0].scrollWidth - _elem.scrollWidth + 1;
          break;

        case /^latest$/i.test(position):
          {
            var events = this._mapPlacedEvents().sort(this.compareValues('x')),
                lastEvent = events[events.length - 1];

            _movX = !this.is_empty(lastEvent) ? lastEvent.x : 0; // console.log( events, lastEvent, _movX, _elem.scrollWidth / 2 )
            // Centering

            if (_elem.scrollWidth / 2 < _movX) {
              _movX -= Math.ceil(_elem.scrollWidth / 2);
            } else {
              _movX = 0;
            } // Focus target event


            if (!this.is_empty(lastEvent)) {
              $("".concat(Selector.TIMELINE_EVENT_NODE, "[data-uid=\"").concat(lastEvent.uid, "\"]")).trigger(Event.FOCUSIN_EVENT);
            }

            break;
          }

        case /^\d{1,}$/.test(position):
          {
            var _events2 = this._mapPlacedEvents(),
                targetEvent = {};

            if (_events2.length > 0) {
              targetEvent = _events2.find(function (evt) {
                return evt.eventId == parseInt(position, 10);
              });
            }

            _movX = !this.is_empty(targetEvent) ? targetEvent.x : 0; // Centering

            if (Math.ceil(_elem.scrollWidth / 2) < _movX) {
              _movX -= Math.ceil(_elem.scrollWidth / 2);
            } else {
              _movX = 0;
            } // Focus target event


            if (!this.is_empty(targetEvent)) {
              $("".concat(Selector.TIMELINE_EVENT_NODE, "[data-uid=\"").concat(targetEvent.uid, "\"]")).trigger(Event.FOCUSIN_EVENT);
            }

            break;
          }

        case /^current(|ly)|now$/i.test(position):
        default:
          {
            var _now = new Date().toString(),
                _nowX = this.numRound(this._getCoordinateX(_now), 2);

            if (_nowX >= 0) {
              if (_tl_container[0].scrollWidth - _elem.scrollWidth + 1 < _nowX) {
                _movX = _tl_container[0].scrollWidth - _elem.scrollWidth + 1;
              } else {
                _movX = _nowX;
              }
            } else {
              _movX = 0;
            }

            break;
          }
      } //console.log( `!alignment::${position}:`, _props.fullwidth, _props.visibleWidth, _tl_container[0].scrollWidth, _tl_container[0].scrollLeft, _movX )


      if (duration === '0') {
        _tl_container.scrollLeft(_movX);
      } else {
        _tl_container.animate({
          scrollLeft: _movX
        }, duration);
      }
    }
    /*
     * @public: This method has been deprecated since version 2.0.0
     */

  }, {
    key: "getOptions",
    value: function getOptions() {
      throw new ReferenceError('This method named "getOptions" has been deprecated since version 2.0.0');
    }
    /*
     * @public: Add new events to the rendered timeline object
     */

  }, {
    key: "addEvent",
    value: function () {
      var _addEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this10 = this;

        var _args,
            events,
            callback,
            userdata,
            _cacheEvents,
            _cacheIds,
            lastEventId,
            addedEvents,
            add_done,
            _args3 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._debug('addEvent');

                _args = _args3.length <= 0 ? undefined : _args3[0], events = this.supplement(null, _args[0], this.validateArray), callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null, userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined, _cacheEvents = this._loadToCache(), _cacheIds = _cacheEvents.map(function (evt) {
                  return evt.eventId;
                }), lastEventId = 0, addedEvents = [], add_done = false;

                if (!(this.is_empty(events) || !this._isCompleted)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                if (!this.is_empty(_cacheEvents)) {
                  //_cacheEvents.sort( this.compareValues( 'eventId' ) )
                  //lastEventId = parseInt( _cacheEvents[_cacheEvents.length - 1].eventId, 10 )
                  lastEventId = Math.max.apply(Math, _toConsumableArray(_cacheIds));
                } //console.log( '!_addEvent::before:', _cacheEvents, lastEventId, callback, userdata )
                //events.forEach( ( evt ) => {


                events.some(function (evt) {
                  if (!_this10.is_empty(evt.eventId) && _cacheIds.includes(evt.eventId)) {
                    _this10._error("An event with the same eventID: ".concat(evt.eventId, " already exists."), 'warn');

                    return false;
                  }

                  var _one_event = _this10._registerEventData('<div></div>', evt);

                  if (!_this10.is_empty(_one_event)) {
                    //console.log( '!!_addEvent::before:', _cacheIds, lastEventId, _one_event.eventId )
                    if (_one_event.eventId == 0) {
                      _one_event.eventId = Math.max(lastEventId + 1, parseInt(_one_event.eventId, 10));

                      _cacheEvents.push(_one_event);

                      lastEventId = parseInt(_one_event.eventId, 10);
                    } else {
                      _cacheEvents.push(_one_event);

                      lastEventId = lastEventId < _one_event.eventId ? _one_event.eventId : lastEventId;
                    }

                    addedEvents[_one_event.eventId] = _one_event;

                    _cacheIds.push(_one_event.eventId);

                    add_done = true;
                  }
                }); //console.log( '!!!_addEvent::after:', _cacheEvents, lastEventId, callback, userdata )

                if (add_done) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return");

              case 8:
                this._saveToCache(_cacheEvents); // Prevents flicker when re-placing events; Added since v2.1.0 (#51)


                $(this._element).find(Selector.TIMELINE_RELATION_LINES)[0].style.opacity = 1;
                $(this._element).find(Selector.TIMELINE_EVENTS)[0].style.opacity = 1;
                _context2.next = 13;
                return this._placeEvent();

              case 13:
                if (callback) {
                  this._debug('Fired your callback function after replacing events.');

                  if (userdata) {
                    callback(this._element, this._config, userdata, addedEvents);
                  } else {
                    callback(this._element, this._config, addedEvents);
                  }
                }

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addEvent() {
        return _addEvent.apply(this, arguments);
      }

      return addEvent;
    }()
    /*
     * @public: Remove events from the currently timeline object
     */

  }, {
    key: "removeEvent",
    value: function () {
      var _removeEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this11 = this;

        var _args,
            targets,
            callback,
            userdata,
            _cacheEvents,
            condition,
            removedEvents,
            _args4 = arguments;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._debug('removeEvent');

                _args = _args4.length <= 0 ? undefined : _args4[0], targets = this.supplement(null, _args[0], this.validateArray), callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null, userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined, _cacheEvents = this._loadToCache(), condition = {}, removedEvents = [];

                if (!(this.is_empty(targets) || !this._isCompleted || this.is_empty(_cacheEvents))) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return");

              case 4:
                targets.forEach(function (cond) {
                  switch (true) {
                    case /^\d{1,}$/.test(cond):
                      // By matching event ID
                      condition.type = 'eventId';
                      condition.value = parseInt(cond, 10);
                      break;

                    case /^(|\d{1,}(-|\/)\d{1,2}(-|\/)\d{1,2}(|\s\d{1,2}:\d{1,2}(|:\d{1,2})))(|,\d{1,}(-|\/)\d{1,2}(-|\/)\d{1,2}(|\s\d{1,2}:\d{1,2}(|:\d{1,2})))$/.test(cond):
                      {
                        // By matching range of datetime
                        var _tmp = cond.split(',');

                        condition.type = 'daterange';
                        condition.value = {};
                        condition.value['from'] = _this11.is_empty(_tmp[0]) ? null : new Date(_tmp[0]);
                        condition.value['to'] = _this11.is_empty(_tmp[1]) ? null : new Date(_tmp[1]);
                        break;
                      }

                    default:
                      // By matching regex string
                      condition.type = 'regex';
                      condition.value = new RegExp(cond);
                      break;
                  } //_cacheEvents.forEach( ( evt ) => {


                  _cacheEvents.some(function (evt, idx) {
                    var is_remove = false;

                    switch (condition.type) {
                      case 'eventId':
                        {
                          if (parseInt(evt.eventId, 10) == condition.value) {
                            //console.log( `!removeEvent::${condition.type}:${condition.value}:`, _cacheEvents[_idx] )
                            is_remove = true;
                          }

                          break;
                        }

                      case 'daterange':
                        {
                          var _fromX = condition.value.from ? Math.ceil(_this11._getCoordinateX(condition.value.from.toString())) : 0,
                              _toX = condition.value.to ? Math.floor(_this11._getCoordinateX(condition.value.to.toString())) : _fromX; //console.log( `!removeEvent::${condition.type}:${condition.value.from} ~ ${condition.value.to}:`, `${evt.eventId}: ${_fromX} <= ${evt.x} <= ${_toX} ?`, _fromX <= evt.x && evt.x <= _toX )


                          if (_fromX <= evt.x && evt.x <= _toX) {
                            is_remove = true;
                          }

                          break;
                        }

                      case 'regex':
                        {
                          //console.log( `!removeEvent::${condition.type}:${condition.value}:`, JSON.stringify( evt ) )
                          if (condition.value.test(JSON.stringify(evt))) {
                            is_remove = true;
                          }

                          break;
                        }
                    }

                    if (is_remove) {
                      removedEvents[evt.eventId] = evt;

                      _cacheEvents.splice(idx, 1);
                    }
                  });
                });

                if (!(removedEvents.length == 0)) {
                  _context3.next = 8;
                  break;
                }

                this._error('There is no event that matches the deletion condition.', 'warn');

                return _context3.abrupt("return");

              case 8:
                this._saveToCache(_cacheEvents); // Prevents flicker when re-placing events; Added since v2.1.0 (#51)


                $(this._element).find(Selector.TIMELINE_RELATION_LINES)[0].style.opacity = 1;
                $(this._element).find(Selector.TIMELINE_EVENTS)[0].style.opacity = 1;
                _context3.next = 13;
                return this._placeEvent();

              case 13:
                if (callback) {
                  this._debug('Fired your callback function after placing additional events.');

                  if (userdata) {
                    callback(this._element, this._config, userdata, removedEvents);
                  } else {
                    callback(this._element, this._config, removedEvents);
                  }
                }

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function removeEvent() {
        return _removeEvent.apply(this, arguments);
      }

      return removeEvent;
    }()
    /*
     * @public: Update events on the currently timeline object
     */

  }, {
    key: "updateEvent",
    value: function () {
      var _updateEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _this12 = this;

        var _args,
            events,
            callback,
            userdata,
            _cacheEvents,
            _cacheIds,
            updatedEvents,
            update_done,
            _args5 = arguments;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this._debug('updateEvent');

                _args = _args5.length <= 0 ? undefined : _args5[0], events = this.supplement(null, _args[0], this.validateArray), callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null, userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined, _cacheEvents = this._loadToCache(), _cacheIds = _cacheEvents.map(function (evt) {
                  return evt.eventId;
                }), updatedEvents = [], update_done = false;

                if (!(this.is_empty(events) || !this._isCompleted || this.is_empty(_cacheEvents))) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return");

              case 4:
                //events.forEach( ( evt ) => {
                events.some(function (evt) {
                  if (_this12.is_empty(evt.eventId)) {
                    _this12._error('Could not update because the eventID to be updated is not defined.', 'warn');

                    return false;
                  }

                  if (!_cacheIds.includes(evt.eventId)) {
                    _this12._error("The event node with the eventID: ".concat(evt.eventId, " to update does not exist."), 'warn');

                    return false;
                  }

                  var _upc_event = _this12._registerEventData('<div></div>', evt),
                      // Update Candidate
                  _old_index = null,
                      _old_event = _cacheEvents.find(function (_evt, _idx) {
                    _old_index = _idx;
                    return _evt.eventId == _upc_event.eventId;
                  }),
                      _new_event = {};

                  if (!_this12.is_empty(_old_event) && !_this12.is_empty(_upc_event)) {
                    if (Object.hasOwnProperty.call(_upc_event, 'uid')) {
                      delete _upc_event.uid;
                    }

                    _new_event = Object.assign(_new_event, _old_event, _upc_event); //console.log( _new_event, _old_event, _upc_event, _old_index )

                    _cacheEvents[_old_index] = _new_event;
                    updatedEvents[_upc_event.eventId] = _upc_event;

                    _cacheIds.push(_upc_event.eventId);

                    update_done = true;
                  }
                });

                if (update_done) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return");

              case 7:
                this._saveToCache(_cacheEvents); // Prevents flicker when re-placing events; Added since v2.1.0 (#51)


                $(this._element).find(Selector.TIMELINE_RELATION_LINES)[0].style.opacity = 1;
                $(this._element).find(Selector.TIMELINE_EVENTS)[0].style.opacity = 1;
                _context4.next = 12;
                return this._placeEvent();

              case 12:
                if (callback) {
                  this._debug('Fired your callback function after updating events.');

                  if (userdata) {
                    callback(this._element, this._config, userdata, updatedEvents);
                  } else {
                    callback(this._element, this._config, updatedEvents);
                  }
                }

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateEvent() {
        return _updateEvent.apply(this, arguments);
      }

      return updateEvent;
    }()
    /*
     * @public: Reload the timeline with overridable any options
     */

  }, {
    key: "reload",
    value: function () {
      var _reload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this13 = this;

        var _args,
            _upc_options,
            callback,
            userdata,
            _elem,
            $default_evt,
            _old_options,
            _new_options,
            _chk_scale,
            _cacheEvents,
            _renewEvents,
            _args6 = arguments;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this._debug('reload');

                _args = _args6.length <= 0 ? undefined : _args6[0], _upc_options = this.supplement(null, _args[0], this.validateObject), callback = _args.length > 1 && typeof _args[1] === 'function' ? _args[1] : null, userdata = _args.length > 2 ? this.getUserArg(_args.slice(2)) : undefined, _elem = this._element, $default_evt = $(_elem).find(Selector.DEFAULT_EVENTS), _old_options = this._config, _new_options = {};

                if (!this.is_empty(_upc_options)) {
                  // _new_options = Object.assign( _new_options, _old_options, _upc_options )
                  _new_options = this.mergeDeep(_old_options, _upc_options);
                  this._config = _new_options;
                }

                this._isInitialized = false;
                this._isCached = false;
                this._isCompleted = false;
                this._instanceProps = {};
                this._countEventinCell = {};
                $(_elem).empty().append($default_evt);

                this._calcVars();

                this.showLoader();

                if (Object.hasOwnProperty.call(this._config, 'moveScale')) {
                  _chk_scale = this._config.moveScale;
                  delete this._config.moveScale;
                } else {
                  _chk_scale = this._config.scale;
                }

                if (this._verifyMaxRenderableRange(_chk_scale)) {
                  _context5.next = 14;
                  break;
                }

                throw new RangeError("Timeline display period exceeds maximum renderable range.");

              case 14:
                if (!this._isInitialized) {
                  this._renderView();

                  this._isInitialized = true;
                }

                if (this._config.reloadCacheKeep) {
                  _cacheEvents = this._loadToCache(), _renewEvents = [];

                  if (!this.is_empty(_cacheEvents)) {
                    _cacheEvents.forEach(function (evt) {
                      delete evt.uid;
                      delete evt.x;
                      delete evt.Y;
                      delete evt.width;
                      delete evt.height;
                      delete evt.relation.x;
                      delete evt.relation.y;

                      _renewEvents.push(_this13._registerEventData('<div></div>', evt));
                    });
                  }

                  this._isCached = this._saveToCache(_renewEvents);
                } else {
                  this._loadEvent();
                }

                _context5.next = 18;
                return this._placeEvent();

              case 18:
                this._isCompleted = true;
                _context5.next = 21;
                return this.hideLoader();

              case 21:
                if (callback) {
                  this._debug('Fired your callback function after reloading timeline.');

                  callback(this._element, this._config, userdata);
                } // Binding bs.popover


                if ($.fn['popover']) {
                  $('[data-toggle="popover"]').popover();
                }

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function reload() {
        return _reload.apply(this, arguments);
      }

      return reload;
    }()
    /*
     * @public: The method that fires when an event on the timeline is clicked (:> タイムライン上のイベントがクリックされた時に発火
     *
     * Note: You can hook the custom processing with the callback specified in the event parameter. (:> イベントパラメータに指定したコールバックでカスタム処理をフックできます
     */

  }, {
    key: "openEvent",
    value: function openEvent(event) {
      this._debug('openEvent');

      if (!this.is_empty(event) && !Object.hasOwnProperty.call(event, 'type') && !Object.hasOwnProperty.call(event, 'target')) {
        if (typeof event[0] === 'function') {
          this._beforeOpenEvent = event[0];
        }
      }

      var _self = event.target,
          $viewer = $(document).find(Selector.EVENT_VIEW),
          //eventId    = parseInt( $(_self).attr( 'id' ).replace( 'evt-', '' ), 10 ),
      uid = $(_self).data('uid'),
          //meta       = this.supplement( null, $(_self).data( 'meta' ) ),
      callback = this.supplement(null, $(_self).data('callback')),
          _cacheEvents = this._loadToCache(),
          _eventData = _cacheEvents.find(function (event) {
        return event.uid === uid;
      }),
          _hookedState = true;

      if (this.is_empty(_self)) {
        return;
      } // Generate content for viewer


      var _label = $('<div></div>', {
        class: ClassName.VIEWER_EVENT_TITLE
      }),
          _content = $('<div></div>', {
        class: ClassName.VIEWER_EVENT_CONTENT
      }),
          _meta = $('<div></div>', {
        class: ClassName.VIEWER_EVENT_META
      }),
          _image = $('<div></div>', {
        class: ClassName.VIEWER_EVENT_IMAGE_WRAPPER
      }),
          _viewers = {},
          _order = ['label', 'image', 'content', 'meta'];

      if (!this.is_empty(_eventData.image)) {
        _image.append("<img src=\"".concat(_eventData.image, "\" class=\"").concat(ClassName.VIEWER_EVENT_IMAGE, "\" />")); //_viewers.push( _image.get(0) )


        _viewers.image = _image.get(0);
      }

      if (!this.is_empty(_eventData.label)) {
        _label.html(_eventData.label); //_viewers.push( _label.get(0) )


        _viewers.label = _label.get(0);
      }

      if (!this.is_empty(_eventData.content)) {
        _content.html(_eventData.content); //_viewers.push( _content.get(0) )


        _viewers.content = _content.get(0);
      }

      if (!this.is_empty(_eventData.rangeMeta)) {
        _meta.html(_eventData.rangeMeta); //_viewers.push( _meta.get(0) )


        _viewers.meta = _meta.get(0);
      }

      if (this._beforeOpenEvent) {
        _hookedState = this._beforeOpenEvent(_eventData, _viewers) || true; //_hookedState = _hookedState == undefined ? true : _hookedState
      } //console.log( '!openEvent::', _self, $viewer, uid, callback, _viewers, this._beforeOpenEvent, _hookedState )


      if (!_hookedState) {
        return;
      }

      if ($viewer.length > 0) {
        $viewer.each(function () {
          var _this14 = this;

          $(this).empty(); // Initialize Viewer

          _order.forEach(function (_prop) {
            if (Object.prototype.hasOwnProperty.call(_viewers, _prop)) {
              $(_this14).append(_viewers[_prop].outerHTML);
            }
          });
        });
      }

      if (callback) {
        this._debug("The callback \"".concat(callback, "\" was called by the \"openEvent\" method."));

        try {
          Function.call(null, "return ".concat(callback))();
        } catch (e) {
          throw new TypeError(e);
        }
      }
    }
    /*
     * @public: Be zoomed in scale of the timeline that fires when any scales on the ruler is double clicked (:> ルーラー上の任意スケールをダブルクリック時に発火するスケールズームイベント
     */

  }, {
    key: "zoomScale",
    value: function zoomScale(event) {
      var _this15 = this;

      this._debug('zoomScale'); //console.log( '!zoomScale::', event, $(event.currentTarget) )


      var _elem = event.currentTarget,
          ruler_item = $(_elem).data('ruler-item'),
          scaleMap = {
        millennium: {
          years: 1000,
          lower: 'century',
          minGrids: 10
        },
        century: {
          years: 100,
          lower: 'decade',
          minGrids: 10
        },
        decade: {
          years: 10,
          lower: 'lustrum',
          minGrids: 2
        },
        lustrum: {
          years: 5,
          lower: 'year',
          minGrids: 5
        },
        year: {
          years: 1,
          lower: 'month',
          minGrids: 12
        },
        month: {
          lower: 'day',
          minGrids: 28
        },
        week: {
          lower: 'day',
          minGrids: 7
        },
        day: {
          lower: 'hour',
          minGrids: 24
        },
        weekday: {
          lower: 'hour',
          minGrids: 24
        },
        hour: {
          lower: 'minute',
          minGrids: 60
        },
        minute: {
          lower: 'second',
          minGrids: 60
        },
        second: {
          lower: null,
          minGrids: 60
        },
        millisecond: {
          lower: null,
          minGrids: 1000
        }
      },
          getZoomScale = function getZoomScale(ruler_item) {
        var _ruler_item$split = ruler_item.split('-'),
            _ruler_item$split2 = _slicedToArray(_ruler_item$split, 2),
            _scl = _ruler_item$split2[0],
            date_seed = _ruler_item$split2[1],
            scale = _this15._filterScaleKeyName(_scl),
            min_grids = scaleMap[scale].minGrids,
            begin_date,
            end_date,
            base_year,
            week_num; //console.log( '!zoomScale::getZoomScale:', ruler_item, '->', scale, ', ', date_seed, ', minGrid:', min_grids )


        //console.log( '!zoomScale::getZoomScale:', ruler_item, '->', scale, ', ', date_seed, ', minGrid:', min_grids )
        switch (true) {
          case /^millennium$/i.test(scale):
          case /^century$/i.test(scale):
          case /^decade$/i.test(scale):
          case /^lustrum$/i.test(scale):
            begin_date = "".concat((date_seed - 1) * scaleMap[scale].years + 1, "/1/1 0:00:00");
            end_date = new Date(_this15.modifyDate(begin_date, scaleMap[scale].years, 'year').getTime() - 1).toString();
            break;

          case /^year$/i.test(scale):
            begin_date = "".concat(date_seed, "/1/1 0:00:00");
            end_date = new Date(_this15.modifyDate(begin_date, scaleMap[scale].years, 'year').getTime() - 1).toString();
            break;

          case /^month$/i.test(scale):
            begin_date = _this15.getCorrectDatetime(date_seed).toString();
            end_date = new Date(_this15.modifyDate(begin_date, 1, 'month').getTime() - 1).toString();
            break;

          case /^week$/i.test(scale):
            var _date_seed$split = date_seed.split(',');

            var _date_seed$split2 = _slicedToArray(_date_seed$split, 2);

            base_year = _date_seed$split2[0];
            week_num = _date_seed$split2[1];
            begin_date = _this15.getFirstDayOfWeek(week_num, base_year).toString(), end_date = new Date(_this15.modifyDate(begin_date, 7, 'day').getTime() - 1).toString();
            break;

          case /^day$/i.test(scale):
          case /^weekday$/i.test(scale):
            date_seed = 'weekday' === scale ? date_seed.substring(0, date_seed.indexOf(',')) : date_seed;
            begin_date = _this15.getCorrectDatetime(date_seed).toString();
            end_date = new Date(_this15.modifyDate(begin_date, 1, 'day').getTime() - 1).toString();
            break;

          case /^hour$/i.test(scale):
          case /^minute$/i.test(scale):
          case /^second$/i.test(scale):
          case /^millisecond$/i.test(scale):
          default:
            begin_date = _this15.getCorrectDatetime(date_seed).toString();
            end_date = new Date(_this15.modifyDate(begin_date, 1, scale).getTime() - 1).toString();
            break;
        }

        scale = Object.hasOwnProperty.call(scaleMap, scale) ? scaleMap[scale].lower : scale; //console.log( '!zoomScale::getZoomScale:', date_seed, ', to:', scale, ', beginDate:', begin_date, ', endDate:', end_date, ', minGrids:', min_grids )

        //console.log( '!zoomScale::getZoomScale:', date_seed, ', to:', scale, ', beginDate:', begin_date, ', endDate:', end_date, ', minGrids:', min_grids )
        return [scale, begin_date, end_date, min_grids];
      },
          _getZoomScale = getZoomScale(ruler_item),
          _getZoomScale2 = _slicedToArray(_getZoomScale, 4),
          to_scale = _getZoomScale2[0],
          begin_date = _getZoomScale2[1],
          end_date = _getZoomScale2[2],
          min_grids = _getZoomScale2[3],
          zoom_options = {
        startDatetime: begin_date,
        endDatetime: end_date,
        scale: to_scale
      };

      if (this.is_empty(zoom_options.scale)) {
        return;
      }

      if (this._config.wrapScale) {
        var _wrap = Math.ceil(($(this._element).find(Selector.TIMELINE_CONTAINER).width() - $(this._element).find(Selector.TIMELINE_SIDEBAR).width()) / min_grids),
            _originMinGridSize;

        if (!Object.hasOwnProperty.call(this._config, 'originMinGridSize')) {
          // Keep an original minGridSize as cache
          this._config.originMinGridSize = this._config.minGridSize;
        }

        _originMinGridSize = this._config.originMinGridSize;
        zoom_options.minGridSize = Math.max(_wrap, _originMinGridSize);
      } // console.log( ruler_item, zoom_options, this._config.wrapScale, this._config.minGridSize )


      this.reload([zoom_options]);
    }
    /*
     * @public: Show the loader
     */

  }, {
    key: "showLoader",
    value: function showLoader() {
      this._debug('showLoader');

      var $elem = $(this._element),
          _opts = this._config,
          _props = this._instanceProps,
          _container = $elem.find(Selector.TIMELINE_CONTAINER),
          _max_width = _props.scaleSize * _props.grids,
          _min_height = _props.rowSize * _props.rows,
          _loaderContainer = $('<div></div>', {
        class: 'jqtl-loader',
        style: "max-width:".concat(_max_width, "px;min-height:").concat(_min_height, "px;")
      }),
          _loaderContent = null,
          _innerContent = '';

      if (_opts.loader === false) {
        return;
      }

      if (_container.length == 0) {
        // To avoid jquery memory leak
        _container = _container.prevObject;
      }

      if ($elem.find(Selector.LOADER).length == 0) {
        // Generate loader container
        if ($(_opts.loader).length == 0) {
          // Set built-in loader content
          _innerContent = this.is_empty(_opts.loadingMessage) ? '<span></span><span></span><span></span><span></span><span></span>' : _opts.loadingMessage;
          _loaderContent = $('<div></div>', {
            class: ClassName.LOADER_ITEM
          }).html(_innerContent);
        } else {
          // Set custom loader content
          _loaderContent = $(_opts.loader).clone().prop('hidden', false).css('display', 'block');
        }

        _loaderContainer.append(_loaderContent);

        _container.append(_loaderContainer);
      } else {
        $elem.find(Selector.LOADER).css({
          width: '100%',
          height: '100%'
        });
      } // Show loader
      //$elem.find( Selector.LOADER ).show('fast', () => {


      $elem.find(Selector.LOADER).attr('data-state', 'show'); //})
    }
    /*
     * @public:  Hide the loader
     */

  }, {
    key: "hideLoader",
    value: function hideLoader() {
      var _this16 = this;

      return new Promise(function (resolve) {
        _this16._debug('hideLoader');

        var $elem = $(_this16._element),
            _loader = $elem.find(Selector.LOADER); //_loader.hide('fast', () => {


        _loader.attr('data-state', 'hide'); //})


        setTimeout(function () {
          resolve();
        }, 300);
      });
    }
    /* ----------------------------------------------------------------------------------------------------------------
     * Utility Api
     * ----------------------------------------------------------------------------------------------------------------
     */

    /*
     * Determine empty that like PHP
     *
     * @param mixed value (required)
     *
     * @return bool
     */

  }, {
    key: "is_empty",
    value: function is_empty(value) {
      if (value == null) {
        // typeof null -> object : for hack a bug of ECMAScript
        // Refer: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof
        return true;
      }

      switch (_typeof(value)) {
        case 'object':
          if (Array.isArray(value)) {
            // When object is array:
            return value.length === 0;
          } else {
            // When object is not array:
            if (Object.keys(value).length > 0 || Object.getOwnPropertySymbols(value).length > 0) {
              return false;
            } else if (value.valueOf().length !== undefined) {
              return value.valueOf().length === 0;
            } else if (_typeof(value.valueOf()) !== 'object') {
              return this.is_empty(value.valueOf());
            } else {
              return true;
            }
          }

        case 'string':
          return value === '';

        case 'number':
          return value == 0;

        case 'boolean':
          return !value;

        case 'undefined':
        case 'null':
          return true;

        case 'symbol': // Since ECMAScript6

        case 'function':
        default:
          return false;
      }
    }
    /*
     * Determine whether variable is an Object
     *
     * @param mixed item (required)
     *
     * @return bool
     */

  }, {
    key: "is_Object",
    value: function is_Object(item) {
      return item && _typeof(item) === 'object' && !Array.isArray(item);
    }
    /*
     * Merge two objects deeply as polyfill for instead "$.extend(true,target,source)"
     *
     * @param object target (required)
     * @param object source (required)
     *
     * @return object output
     */

  }, {
    key: "mergeDeep",
    value: function mergeDeep(target, source) {
      var output = Object.assign({}, target);

      if (this.is_Object(target) && this.is_Object(source)) {
        for (var _i11 = 0, _Object$keys8 = Object.keys(source); _i11 < _Object$keys8.length; _i11++) {
          var key = _Object$keys8[_i11];

          if (this.is_Object(source[key])) {
            if (!(key in target)) {
              Object.assign(output, _defineProperty({}, key, source[key]));
            } else {
              output[key] = this.mergeDeep(target[key], source[key]);
            }
          } else {
            Object.assign(output, _defineProperty({}, key, source[key]));
          }
        }
      }

      return output;
    }
    /*
     * Determine whether the object is iterable
     *
     * @param object obj (required)
     *
     * @return bool
     */

  }, {
    key: "is_iterable",
    value: function is_iterable(obj) {
      return obj && typeof obj[Symbol.iterator] === 'function';
    }
    /*
     * Add an @@iterator method to non-iterable object
     *
     * @param object obj (required)
     *
     * @return object
     */

  }, {
    key: "toIterableObject",
    value: function toIterableObject(obj) {
      if (this.is_iterable(obj)) {
        return obj;
      }

      obj[Symbol.iterator] = function () {
        var index = 0;
        return {
          next: function next() {
            if (obj.length <= index) {
              return {
                done: true
              };
            } else {
              return {
                value: obj[index++]
              };
            }
          }
        };
      };

      return obj;
    }
    /*
     * Supplemental method for validating arguments in local scope
     *
     * @param mixed default_value (required)
     * @param mixed opt_arg (optional)
     * @param mixed opt_callback (optional; function or string of function to call)
     *
     * @return mixed
     */

  }, {
    key: "supplement",
    value: function supplement(default_value, opt_arg, opt_callback) {
      if (opt_arg === undefined) {
        return default_value;
      }

      if (opt_callback === undefined) {
        return opt_arg;
      }

      return opt_callback(default_value, opt_arg);
    }
    /*
     * Generate the pluggable unique id
     *
     * @param int digit (optional)
     *
     * @return string
     */

  }, {
    key: "generateUniqueID",
    value: function generateUniqueID() {
      var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
      return new Date().getTime().toString(16) + Math.floor(digit * Math.random()).toString(16);
    }
    /*
     * Round a number with specific digit
     *
     * @param numeric number (required)
     * @param int digit (optional)
     * @param string round_type (optional; defaults to "round")
     *
     * @return numeric
     */

  }, {
    key: "numRound",
    value: function numRound(number, digit) {
      var round_type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'round';
      digit = this.supplement(0, digit, this.validateNumeric);

      var _pow = Math.pow(10, digit);

      switch (true) {
        case /^ceil$/i.test(round_type):
          return Math.ceil(number * _pow) / _pow;

        case /^floor$/i.test(round_type):
          return Math.floor(number * _pow) / _pow;

        case /^round$/i.test(round_type):
        default:
          return Math.round(number * _pow) / _pow;
      }
    }
    /*
     * Convert hex of color code to rgba
     *
     * @param string hex (required)
     * @param float alpha (optional; defaults to 1)
     *
     * @return string
     */

  }, {
    key: "hexToRgbA",
    value: function hexToRgbA(hex) {
      var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var _c;

      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        _c = hex.substring(1).split('');

        if (_c.length == 3) {
          _c = [_c[0], _c[0], _c[1], _c[1], _c[2], _c[2]];
        }

        _c = "0x".concat(_c.join(''));
        return "rgba(".concat([_c >> 16 & 255, _c >> 8 & 255, _c & 255].join(','), ",").concat(alpha, ")");
      } // throw new Error( 'Bad Hex' )


      return hex;
    }
    /*
     * This method is able to get the correct datetime instead of built in "new Date" on javascript. (:> JavaScriptビルトインメソッドのnew Dateに代わって正確な日時を取得する
     * That is remapping to correct year if the year is 0 - 99, and supporting years BCE. (:> 0 - 99年の場合に年をリマッピングし、紀元前の年にも対応する
     *
     * @param mixed datetime (required; allowed an integer as milliseconds, a string as like datetime or an object instance of Date)
     * @param boolean adjustTimeZoneDiff (optional; defaults to false)
     *
     * @return Date Object, or null if failed
     */

  }, {
    key: "getCorrectDatetime",
    value: function getCorrectDatetime(datetime) {
      var adjustTimeZoneDiff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var normalizeDate = function normalizeDate(dateString) {
        var isMinus = /^-/.test(dateString),
            _m = isMinus ? '-' : '',
            _d;

        if (isMinus) {
          dateString = dateString.replace(/^-/, '');
        } // for Safari and Firefox


        _d = dateString.replace(/-/g, '/');

        switch (true) {
          case /^\d{1,4}\/\d{1,2}$/.test(_d):
            return "".concat(_m).concat(_d, "/1");

          case /^.+(\.\d{1,3})$/.test(_d):
            if (isNaN(Date.parse(_d))) {
              _d = _d.replace(RegExp.$1, '');
            }

            return "".concat(_m).concat(_d);

          default:
            return "".concat(_m).concat(_d);
        }
      },
          getDateObject = function getDateObject(datetime) {
        var _chk_str = normalizeDate(datetime),
            _raise = 0,
            _ymd,
            _his,
            _parts,
            _date;

        switch (true) {
          case /^-?\d{1,}\/\d{1,2}(|\/\d{1,2})(| \d{1,2}(|:\d{1,2}(|:\d{1,2})))$/i.test(_chk_str):
            {
              var _chk_str$split = _chk_str.split(' ');

              var _chk_str$split2 = _slicedToArray(_chk_str$split, 2);

              _ymd = _chk_str$split2[0];
              _his = _chk_str$split2[1];
              _parts = _ymd.split('/');

              if (_parts[1]) {
                _raise = Math.floor(_parts[1] / 13);
                _parts[1] = parseInt(_parts[1], 10) - 1; // to month index
              }

              var _his_base = [0, 0, 0];

              if (_his) {
                var _parts2;

                //_parts.push( ..._his.split(':') )
                (_parts2 = _parts).push.apply(_parts2, _toConsumableArray(Object.assign(_his_base, _his.split(':'))));
              } else {
                var _parts3;

                (_parts3 = _parts).push.apply(_parts3, _his_base);
              }

              _date = new Date(_construct(Date, _toConsumableArray(_parts)).setFullYear(parseInt(_parts[0], 10) + _raise));
              break;
            }

          case /^-?\d+$/.test(_chk_str):
            _date = new Date(_chk_str, 0, 1, 0, 0, 0, 0).setFullYear(parseInt(_chk_str, 10));
            break;

          default:
            _date = new Date(_chk_str.toString());
            break;
        }

        return _date;
      },
          _checkDate;

      switch (_typeof(datetime)) {
        case 'number':
          _checkDate = new Date(datetime);
          break;

        case 'string':
          _checkDate = getDateObject(datetime);
          break;

        case 'object':
          if (datetime instanceof Date) {
            _checkDate = datetime;
          }

          break;
      }

      if (isNaN(_checkDate) || !_checkDate) {
        //console.warn( `"${datetime}" Cannot parse date because invalid format.` )
        this._error("\"".concat(datetime, "\" Cannot parse date because invalid format."), 'warn');

        return null;
      }

      if (_checkDate instanceof Date === false) {
        _checkDate = new Date(_checkDate);
      }

      if (adjustTimeZoneDiff) {
        var _utcDate = new Date(_checkDate.getUTCFullYear(), _checkDate.getUTCMonth(), _checkDate.getUTCDate(), _checkDate.getUTCHours(), _checkDate.getUTCMinutes(), _checkDate.getUTCSeconds(), _checkDate.getUTCMilliseconds()),
            _tzDiff = this.diffDate(_checkDate, _utcDate); //console.log('!getCorrectDatetime::', _checkDate.toString(), _utcDate.toString(), _tzDiff )


        if (_tzDiff != 0) {
          _checkDate = this.modifyDate(_tzDiff > 0 ? _utcDate : _checkDate, -1 * _tzDiff, 'millisecond');
        } //console.log('!!getCorrectDatetime::', _checkDate.toString() )

      }

      return _checkDate;
    }
    /*
     * Method to get week number as extension of Date object
     * Note: added support for daylight savings time but needs improvement as performance has dropped
     *
     * @param mixed datetime (required; to be date object filtered by getCorrectDatetime method)
     *
     * @return mixed (return integer as week number when given valid argument, or false if failed)
     */

  }, {
    key: "getWeek",
    value: function getWeek(datetime) {
      if (this.is_empty(datetime)) {
        return false;
      }

      var firstDayIndex = this._config.firstDayOfWeek || 0,
          targetDate = this.getCorrectDatetime(datetime),
          firstDayOfYear = this.getCorrectDatetime("".concat(targetDate.getFullYear(), "/1/1")),
          //firstWeekday   = firstDayOfYear.getDay(),
      targetDateStr = targetDate.toDateString(),
          _weekNumber = 1,
          _checkDate = firstDayOfYear;

      for (var i = 0; i < 367; i++) {
        if (i > 0) {
          _checkDate = this.modifyDate(firstDayOfYear, i, 'day');
        }

        if (_checkDate.getDay() == firstDayIndex) {
          _weekNumber++;
        }

        if (_checkDate.toDateString() === targetDateStr) {
          break;
        }
      }

      return _weekNumber;
    }
    /*
     * Retrieve a first day of the week from week number
     * Note: added support for daylight savings time but needs improvement as performance has dropped
     *
     * @param int week_number (required)
     * @param int year (optional; defaults to current year)
     *
     * @return mixed (return Date object as the first day of week when given valid arguments, or false if failed)
     */

  }, {
    key: "getFirstDayOfWeek",
    value: function getFirstDayOfWeek(week_number, year) {
      if (this.is_empty(week_number)) {
        return false;
      }

      year = this.is_empty(year) ? new Date().getFullYear() : parseInt(year, 10);

      var firstDayIndex = this._config.firstDayOfWeek,
          firstDayOfYear = this.getCorrectDatetime("".concat(year, "/1/1")),
          _weekday = firstDayOfYear.getDay(),
          //_millisecInDay = 24 * 60 * 60 * 1000,
      //_week_time     = (week_number - 1) * _millisecInDay * 7,
      //_day_offset, _tempDt, _time, _retDt
      _keyDayOfWeek = firstDayOfYear,
          _offset = _weekday > firstDayIndex ? _weekday - firstDayIndex : 0,
          _weekNumber = _offset <= 0 ? 0 : 1,
          hitDate; //console.log( `!getFirstDayOfWeek::${year}, ${week_number}:`, _keyDayOfWeek.toDateString(), `(${_weekday}) > ${firstDayIndex} ?`, _offset, _weekNumber )


      if (_weekNumber == week_number && _weekday == firstDayIndex) {
        hitDate = firstDayOfYear;
      } else {
        for (var i = _offset; i < _offset + 7; i++) {
          if (i > _offset) {
            _keyDayOfWeek = this.modifyDate(firstDayOfYear, i, 'day');
          }

          if (_keyDayOfWeek.getDay() == firstDayIndex) {
            _weekNumber++;
            break;
          }
        }

        if (_weekNumber == week_number) {
          hitDate = _keyDayOfWeek;
        } else {
          hitDate = this.modifyDate(_keyDayOfWeek, (week_number - _weekNumber) * 7, 'day');
        }
      } //console.log( `!!getFirstDayOfWeek::${year}, ${week_number}:`, hitDate.toDateString() )


      return hitDate;
      /*
      _weekday = _weekday == 0 ? 7 : _weekday
      _day_offset = 1 - _weekday
      if ( 7 - _weekday + 1 < 4 ) {
          _day_offset += 7
      }
      _tempDt = new Date( firstDayOfYear.getTime() + _day_offset * _millisecInDay )
      _time   = _tempDt.getTime() + _week_time
      _retDt  = new Date( _tempDt.setTime( _time ) )
      console.log( '!!!getFirstDayOfWeek::', week_number, _retDt.toDateString() )
      return _retDt
      */
    }
    /*
     * Get the datetime shifted from the specified datetime by any fluctuation value
     *
     * @param mixed datetime (required; to be date object filtered by getCorrectDatetime method)
     * @param int fluctuation (required; an interval value to shift from given base datetime)
     * @param string scale (required; the scale of an interval value)
     *
     * @return mixed (return modified new Date object when given valid argument, or false if failed)
     */

  }, {
    key: "modifyDate",
    value: function modifyDate(datetime, fluctuation, scale) {
      if (this.is_empty(datetime) || this.is_empty(fluctuation) || this.is_empty(scale) || !this.verifyScale(scale)) {
        return false;
      }

      var baseDate = this.getCorrectDatetime(datetime),
          flct = this.validateNumeric(0, fluctuation),
          dateElms = [baseDate.getFullYear(), // 0: year
      baseDate.getMonth(), // 1: month (index)
      baseDate.getDate(), // 2: day
      baseDate.getHours(), // 3: hour
      baseDate.getMinutes(), // 4: minute
      baseDate.getSeconds(), // 5: second
      baseDate.getMilliseconds() // 6: millisec
      ],
          tmpDate = new Date(_construct(Date, dateElms).setFullYear(dateElms[0])),
          isAdjust = false,
          newDate;

      switch (true) {
        case /^millenniums?|millennia$/i.test(scale):
          newDate = new Date(tmpDate.setFullYear(tmpDate.getFullYear() + flct * 1000));
          break;

        case /^century$/i.test(scale):
          newDate = new Date(tmpDate.setFullYear(tmpDate.getFullYear() + flct * 100));
          break;

        case /^dec(ade|ennium)$/i.test(scale):
          newDate = new Date(tmpDate.setFullYear(tmpDate.getFullYear() + flct * 10));
          break;

        case /^lustrum$/i.test(scale):
          newDate = new Date(tmpDate.setFullYear(tmpDate.getFullYear() + flct * 5));
          break;

        case /^years?$/i.test(scale):
          newDate = new Date(tmpDate.setFullYear(tmpDate.getFullYear() + flct));
          break;

        case /^months?$/i.test(scale):
          newDate = new Date(tmpDate.setMonth(tmpDate.getMonth() + flct));
          break;

        case /^weeks?$/i.test(scale):
          newDate = new Date(tmpDate.setDate(tmpDate.getDate() + flct * 7));
          newDate.setHours(dateElms[3]);
          newDate.setMinutes(dateElms[4]);
          newDate.setSeconds(dateElms[5]);
          newDate.setMilliseconds(dateElms[6]);
          break;

        case /^(|week)days?$/i.test(scale):
          newDate = new Date(tmpDate.setDate(tmpDate.getDate() + flct));
          newDate.setHours(dateElms[3]);
          newDate.setMinutes(dateElms[4]);
          newDate.setSeconds(dateElms[5]);
          newDate.setMilliseconds(dateElms[6]); //isAdjust = true

          break;

        case /^hours?$/i.test(scale):
          newDate = new Date(tmpDate.setTime(tmpDate.getTime() + flct * 60 * 60 * 1000));
          newDate.setMinutes(dateElms[4]);
          newDate.setSeconds(dateElms[5]);
          newDate.setMilliseconds(dateElms[6]);
          break;

        case /^minutes?$/i.test(scale):
          newDate = new Date(tmpDate.setTime(tmpDate.getTime() + flct * 60 * 1000));
          newDate.setSeconds(dateElms[5]);
          newDate.setMilliseconds(dateElms[6]);
          break;

        case /^seconds?$/i.test(scale):
          newDate = new Date(tmpDate.setTime(tmpDate.getTime() + flct * 1000));
          newDate.setMilliseconds(dateElms[6]);
          break;

        default:
          newDate = new Date(tmpDate.setTime(tmpDate.getTime() + flct));
          break;
      }

      if (isAdjust) {
        // Why different time of 1 min 15 sec on 12/01/1847, 0:00:00? (GMT+0001)
        var divide = this.getCorrectDatetime('1847/12/1 0:01:15');

        if (baseDate.getTime() < divide.getTime() && newDate.getTime() >= divide.getTime()) {
          newDate = new Date(newDate.setTime(newDate.getTime() - 60 * 1000));
        } else if (baseDate.getTime() > divide.getTime() && newDate.getTime() <= divide.getTime()) {
          newDate = new Date(newDate.setTime(newDate.getTime() - 75 * 1000));
        }
      } //console.log( 'modifyDate:', baseDate.toString(), '-[', flct, scale, ']->', newDate.toString() )


      return newDate;
    }
    /*
     * Acquire the difference between two dates with the specified scale value (:> 2つの日付の差分を指定したスケール値で取得する
     *
     * @param mixed date1 (required; integer as milliseconds or object instanceof Date)
     * @param mixed date2 (required; integer as milliseconds or object instanceof Date)
     * @param string scale (optional; defaults to 'millisecond')
     * @param bool absval (optional; defaults to false)
     *
     * @return mixed
     */

  }, {
    key: "diffDate",
    value: function diffDate(date1, date2) {
      var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'millisecond';
      var absval = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var _dt1 = date1 === undefined ? null : date1,
          _dt2 = date2 === undefined ? null : date2,
          diffMS = 0,
          retval = false,
          lastDayOfMonth = function lastDayOfMonth(dateObj) {
        var _tmp = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);

        _tmp.setTime(_tmp.getTime() - 1);

        return _tmp.getDate();
      },
          isLeapYear = function isLeapYear(dateObj) {
        var _tmp = new Date(dateObj.getFullYear(), 0, 1),
            sum = 0;

        for (var i = 0; i < 12; i++) {
          _tmp.setMonth(i);

          sum += lastDayOfMonth(_tmp);
        }

        return sum == 365 ? false : true;
      };

      if (!_dt1 || !_dt2) {
        //console.warn( 'Cannot parse date to get difference because undefined.' )
        this._error('Cannot parse date to get difference because undefined.', 'warn');

        return false;
      }

      diffMS = _dt2 - _dt1;

      if (isNaN(diffMS)) {
        //console.warn( 'Cannot parse date to get difference because invalid format.' )
        this._error('Cannot parse date to get difference because invalid format.', 'warn');

        return false;
      }

      if (absval) {
        diffMS = Math.abs(diffMS);
      }

      var _bd = _dt1 instanceof Date ? _dt1 : new Date(_dt1),
          _ed = _dt2 instanceof Date ? _dt2 : new Date(_dt2),
          _dy = _ed.getFullYear() - _bd.getFullYear(),
          _m = {};

      switch (true) {
        case /^millenniums?|millennia$/i.test(scale):
          {
            // return { "millennium-number": years,... }
            var _by = _bd.getFullYear(),
                _ey = _ed.getFullYear(),
                _bm = Math.ceil((_by == 0 ? 1 : _by) / 1000),
                // millennium of first ordinal
            _em = Math.ceil((_ey == 0 ? 1 : _ey) / 1000),
                _cm = _bm;

            _m[_bm] = _em - _bm > 0 ? _bm * 1000 - _by : _ey - _by;
            _cm++;

            while (_cm <= _em) {
              _m[_cm] = _em - _cm > 0 ? 1000 : _ey - (_cm - 1) * 1000;
              _cm++;
            }

            retval = _m; // return number of milliseconds
            // retval = diffMS

            break;
          }

        case /^century$/i.test(scale):
          {
            // return { "century-number": years,... }
            var _by2 = _bd.getFullYear(),
                _ey2 = _ed.getFullYear(),
                _bc = Math.ceil((_by2 == 0 ? 1 : _by2) / 100),
                // century of first ordinal
            _ec = Math.ceil((_ey2 == 0 ? 1 : _ey2) / 100),
                _cc = _bc;

            _m[_bc] = _ec - _bc > 0 ? _bc * 100 - _by2 : _ey2 - _by2;
            _cc++;

            while (_cc <= _ec) {
              _m[_cc] = _ec - _cc > 0 ? 100 : _ey2 - (_cc - 1) * 100;
              _cc++;
            }

            retval = _m; // return number of milliseconds
            // retval = diffMS

            break;
          }

        case /^dec(ade|ennium)$/i.test(scale):
          {
            // return { "decade-number": days,... }
            var _by3 = _bd.getFullYear(),
                _ey3 = _ed.getFullYear(),
                _cy = _by3 == 0 ? 1 : _by3,
                _cd,
                _days;

            while (_cy <= _ey3) {
              _days = isLeapYear(new Date(_cy, 0, 1)) ? 366 : 365;
              _cd = Math.ceil(_cy / 10); // decade of first ordinal

              if (Object.hasOwnProperty.call(_m, _cd)) {
                _m[_cd] += _days;
              } else {
                _m[_cd] = _days;
              }

              _cy++;
            }

            retval = _m; // return number of milliseconds
            // retval = diffMS

            break;
          }

        case /^lustrum$/i.test(scale):
          {
            // return { "lustrum-number": days,... }
            var _by4 = _bd.getFullYear(),
                _ey4 = _ed.getFullYear(),
                _cy2 = _by4 == 0 ? 1 : _by4,
                _cl,
                _days2;

            while (_cy2 <= _ey4) {
              _days2 = isLeapYear(new Date(_cy2, 0, 1)) ? 366 : 365;
              _cl = Math.ceil(_cy2 / 5); // lustrum of first ordinal

              if (Object.hasOwnProperty.call(_m, _cl)) {
                _m[_cl] += _days2;
              } else {
                _m[_cl] = _days2;
              }

              _cy2++;
            }

            retval = _m; // return number of milliseconds
            // retval = diffMS

            break;
          }

        case /^years?$/i.test(scale):
          // return { "year": days,... }
          if (_dy > 0) {
            for (var i = 0; i <= _dy; i++) {
              var _cd2 = new Date(_bd.getFullYear() + i, 0, 1);

              _m["".concat(_bd.getFullYear() + i)] = isLeapYear(_cd2) ? 366 : 365;
            }
          } else {
            _m["".concat(_bd.getFullYear())] = isLeapYear(_bd) ? 366 : 365;
          }

          retval = _m;
          break;

        case /^months?$/i.test(scale):
          // return { "year/month": days,... }
          if (_dy > 0) {
            for (var _i12 = _bd.getMonth(); _i12 < 12; _i12++) {
              var _cd3 = new Date(_bd.getFullYear(), _i12, 1);

              _m["".concat(_bd.getFullYear(), "/").concat(_i12 + 1)] = lastDayOfMonth(_cd3);
            }

            if (_dy > 1) {
              for (var y = 1; y < _dy; y++) {
                for (var _i13 = 0; _i13 < 12; _i13++) {
                  var _cd4 = new Date(_bd.getFullYear() + y, _i13, 1);

                  _m["".concat(_bd.getFullYear() + y, "/").concat(_i13 + 1)] = lastDayOfMonth(_cd4);
                }
              }
            }

            for (var _i14 = 0; _i14 <= _ed.getMonth(); _i14++) {
              var _cd5 = new Date(_ed.getFullYear(), _i14, 1);

              _m["".concat(_ed.getFullYear(), "/").concat(_i14 + 1)] = lastDayOfMonth(_cd5);
            }
          } else {
            for (var _i15 = _bd.getMonth(); _i15 <= _ed.getMonth(); _i15++) {
              var _cd6 = new Date(_bd.getFullYear(), _i15, 1);

              _m["".concat(_bd.getFullYear(), "/").concat(_i15 + 1)] = lastDayOfMonth(_cd6);
            }
          }

          retval = _m;
          break;

        case /^weeks?$/i.test(scale):
          {
            // return { "year,week": hours,... }
            var _cd7 = new Date(_bd.getFullYear(), _bd.getMonth(), _bd.getDate()),
                _cw = this.getWeek(_cd7),
                _nd = new Date(_cd7),
                _pd = new Date(_cd7),
                _newWeek = "".concat(_cd7.getFullYear(), ",").concat(_cw);

            _nd.setDate(_nd.getDate() + 1);

            _pd.setDate(_pd.getDate() - 1);

            _m[_newWeek] = (_cd7 - _pd) / (60 * 60 * 1000); // hours of first day

            while (_nd.getTime() <= _ed.getTime()) {
              _nd.setDate(_nd.getDate() + 1);

              _cd7.setDate(_cd7.getDate() + 1);

              _cw = this.getWeek(_cd7);

              var _newWeekKey = "".concat(_cd7.getFullYear(), ",").concat(_cw);

              if (Object.hasOwnProperty.call(_m, _newWeekKey)) {
                _m[_newWeekKey] += (_nd - _cd7) / (60 * 60 * 1000);
              } else {
                _m[_newWeekKey] = (_nd - _cd7) / (60 * 60 * 1000);
              }
            }

            retval = _m;
            break;
          }

        case /^(|week)days?$/i.test(scale):
          {
            // return { "year/month/day": hours,... }
            var _cd8 = new Date(_bd.getFullYear(), _bd.getMonth(), _bd.getDate()),
                _nd2 = new Date(_cd8),
                _pd2 = new Date(_cd8);

            _nd2.setDate(_nd2.getDate() + 1);

            _pd2.setDate(_pd2.getDate() - 1);

            _m["".concat(_cd8.getFullYear(), "/").concat(_cd8.getMonth() + 1, "/").concat(_cd8.getDate())] = (_cd8 - _pd2) / (60 * 60 * 1000);

            while (_nd2.getTime() <= _ed.getTime()) {
              _nd2.setDate(_nd2.getDate() + 1);

              _cd8.setDate(_cd8.getDate() + 1);

              _m["".concat(_cd8.getFullYear(), "/").concat(_cd8.getMonth() + 1, "/").concat(_cd8.getDate())] = (_nd2 - _cd8) / (60 * 60 * 1000);
            }

            retval = _m;
            break;
          }

        case /^hours?$/i.test(scale):
          {
            // return { "year/month/day hour": minutes,... }
            var _cd9 = new Date(_bd.getFullYear(), _bd.getMonth(), _bd.getDate(), _bd.getHours()),
                _nd3 = new Date(_cd9),
                _pd3 = new Date(_cd9);

            _nd3.setHours(_nd3.getHours() + 1);

            _pd3.setHours(_pd3.getHours() - 1);

            _m["".concat(_cd9.getFullYear(), "/").concat(_cd9.getMonth() + 1, "/").concat(_cd9.getDate(), " ").concat(_cd9.getHours())] = (_cd9 - _pd3) / (60 * 1000);

            while (_nd3.getTime() <= _ed.getTime()) {
              _nd3.setHours(_nd3.getHours() + 1);

              _cd9.setHours(_cd9.getHours() + 1);

              _m["".concat(_cd9.getFullYear(), "/").concat(_cd9.getMonth() + 1, "/").concat(_cd9.getDate(), " ").concat(_cd9.getHours())] = (_nd3 - _cd9) / (60 * 1000);
            }

            retval = _m;
            break;
          }

        case /^minutes?$/i.test(scale):
          {
            // return { "year/month/day hour:minute": seconds,... }
            var _cd10 = new Date(_bd.getFullYear(), _bd.getMonth(), _bd.getDate(), _bd.getHours(), _bd.getMinutes()),
                _nd4 = new Date(_cd10),
                _pd4 = new Date(_cd10);

            _nd4.setMinutes(_nd4.getMinutes() + 1);

            _pd4.setMinutes(_pd4.getMinutes() - 1);

            _m["".concat(_cd10.getFullYear(), "/").concat(_cd10.getMonth() + 1, "/").concat(_cd10.getDate(), " ").concat(_cd10.getHours(), ":").concat(_cd10.getMinutes())] = (_cd10 - _pd4) / 1000;

            while (_nd4.getTime() <= _ed.getTime()) {
              _nd4.setMinutes(_nd4.getMinutes() + 1);

              _cd10.setMinutes(_cd10.getMinutes() + 1);

              _m["".concat(_cd10.getFullYear(), "/").concat(_cd10.getMonth() + 1, "/").concat(_cd10.getDate(), " ").concat(_cd10.getHours(), ":").concat(_cd10.getMinutes())] = (_nd4 - _cd10) / 1000;
            }

            retval = _m;
            break;
          }

        case /^seconds?$/i.test(scale):
          {
            // return { "year/month/day hour:minute:second": milliseconds,... }
            var _cd11 = new Date(_bd.getFullYear(), _bd.getMonth(), _bd.getDate(), _bd.getHours(), _bd.getMinutes(), _bd.getSeconds()),
                _nd5 = new Date(_cd11),
                _pd5 = new Date(_cd11);

            _nd5.setSeconds(_nd5.getSeconds() + 1);

            _pd5.setSeconds(_pd5.getSeconds() - 1);

            _m["".concat(_cd11.getFullYear(), "/").concat(_cd11.getMonth() + 1, "/").concat(_cd11.getDate(), " ").concat(_cd11.getHours(), ":").concat(_cd11.getMinutes(), ":").concat(_cd11.getSeconds())] = _cd11 - _pd5;

            while (_nd5.getTime() <= _ed.getTime()) {
              _nd5.setSeconds(_nd5.getSeconds() + 1);

              _cd11.setSeconds(_cd11.getSeconds() + 1);

              _m["".concat(_cd11.getFullYear(), "/").concat(_cd11.getMonth() + 1, "/").concat(_cd11.getDate(), " ").concat(_cd11.getHours(), ":").concat(_cd11.getMinutes(), ":").concat(_cd11.getSeconds())] = _nd5 - _cd11;
            }

            retval = _m;
            break;
          }

        default:
          // return number of milliseconds
          retval = diffMS;
          break;
      }

      return retval;
    }
    /*
     * Verify whether is allowed scale in the plugin. (:> 許容スケールかを確認します。
     * Then retrieves that values of intervals on the scale if the scale is available and given arguments of date range. (:> 有効スケールかつ日付範囲引数が与えられた場合、対象スケールの間隔値を取得します
     * And return the base millisecond of scale if it is not the variable length scale (isVLS to false) (:> 可変長スケールでない場合はスケールの基本ミリ秒を返します
     *
     * @param string scale (required)
     * @param int begin (optional; begin of range as unit millisecs that got by `Date.getTime()`)
     * @param int end (optional; end of range as unit millisecs that got by `Date.getTime()`)
     * @param bool isVLS (optional; whether is variable length scale, defaults to false)
     *
     * @return mixed (boolean if no arguments are given after the first argument)
     */

  }, {
    key: "verifyScale",
    value: function verifyScale(scale) {
      var begin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var isVLS = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var _ms = -1,
          isBool = this.is_empty(begin) || this.is_empty(end),
          retval = isVLS ? this.diffDate(begin, end, scale) : false;

      if (typeof scale === 'undefined' || typeof scale !== 'string') {
        return false;
      }

      switch (true) {
        case /^millisec(|ond)s?$/i.test(scale):
          // Millisecond (:> ミリ秒
          _ms = 1;
          break;

        case /^seconds?$/i.test(scale):
          // Second (:> 秒
          _ms = 1000;
          break;

        case /^minutes?$/i.test(scale):
          // Minute (:> 分
          _ms = 60 * 1000;
          break;

        case /^quarter-?(|hour)$/i.test(scale):
          // Quarter of an hour (:> 15分
          _ms = 15 * 60 * 1000;
          break;

        case /^half-?(|hour)$/i.test(scale):
          // Half an hour (:> 30分
          _ms = 30 * 60 * 1000;
          break;

        case /^hours?$/i.test(scale):
          // Hour (:> 時（時間）
          _ms = 60 * 60 * 1000;
          break;

        case /^(|week)days?$/i.test(scale):
          // Day (is the variable length scale by DST) (:> 日 (サマータイムによる可変長スケール)
          _ms = 24 * 60 * 60 * 1000;
          break;

        case /^weeks?$/i.test(scale):
          // Week (is the variable length scale by DST) (:> 週 (サマータイムによる可変長スケール)
          _ms = 7 * 24 * 60 * 60 * 1000;
          break;

        case /^months?$/i.test(scale):
          // Month (is the variable length scale) (:> 月（可変長スケール）
          _ms = 30.44 * 24 * 60 * 60 * 1000;
          break;

        case /^years?$/i.test(scale):
          // Year (is the variable length scale) (:> 年（可変長スケール）
          _ms = 365.25 * 24 * 60 * 60 * 1000;
          break;

        case /^lustrum$/i.test(scale):
          // Lustrum (is the variable length scale, but currently does not support) (:> 五年紀 (可変長スケールだが現在サポートしてない)
          // 5y = 1826 or 1827; 1826 * 24 * 60 * 60 = 15766400, 1827 * 24 * 60 * 60 = 157852800 | avg.= 157788000
          //_ms = ( ( 3.1536 * Math.pow( 10, 8 ) ) / 2 ) * 1000 // <--- Useless by info of wikipedia
          _ms = 157788000 * 1000;
          break;

        case /^dec(ade|ennium)$/i.test(scale):
          // Decade (is the variable length scale, but currently does not support) (:> 十年紀 (可変長スケールだが現在サポートしてない)
          // 10y = 3652 or 3653; 3652 * 24 * 60 * 60 = 315532800, 3653 * 24 * 60 * 60 = 157852800 | avg. = 315576000
          // _ms = ( 3.1536 * Math.pow( 10, 8 ) ) * 1000 // <--- Useless by info of wikipedia
          _ms = 315576000 * 1000;
          break;

        case /^century$/i.test(scale):
          // Century (:> 世紀（百年紀）
          // 100y = 36525; 36525 * 24 * 60 * 60 = 3155760000
          _ms = 3155760000 * 1000;
          break;

        case /^millenniums?|millennia$/i.test(scale):
          // Millennium (:> 千年紀
          // 100y = 365250
          //_ms = ( 3.1536 * Math.pow( 10, 10 ) ) * 1000
          _ms = 3155760000 * 10 * 1000;
          break;

        default:
          //console.warn( `Specified an invalid "${scale}" scale.` )
          this._error("Specified an invalid \"".concat(scale, "\" scale."), 'warn');

          _ms = -1;
      }

      if (isBool) {
        return _ms > 0;
      } else {
        return isVLS ? retval : _ms;
      }
    }
    /*
     * Retrieve one higher scale
     *
     * @param string scale (required)
     *
     * @return string as higher scale
     */

  }, {
    key: "getHigherScale",
    value: function getHigherScale(scale) {
      return this.findScale(scale, 'higher');
    }
    /*
     * Retrieve one lower scale
     *
     * @param string scale (required)
     *
     * @return string as lower scale
     */

  }, {
    key: "getLowerScale",
    value: function getLowerScale(scale) {
      return this.findScale(scale, 'lower');
    }
    /*
     * Find scale matched the specified condition
     *
     * @param string base_scale (required)
     * @param string condition (required)
     *
     * @return mixed matched scale(s)
     */

  }, {
    key: "findScale",
    value: function findScale(base_scale, condition) {
      var scalePatternMap = [['millisecond', '^millisec(|ond)s?$'], ['second', '^seconds?$'], ['minute', '^minutes?$'], ['hour', '^(|half|quarter)-?(|hour)s?$'], ['day', '^(|week)days?$'], ['week', '^weeks?$'], ['month', '^months?$'], ['year', '^years?$'], ['lustrum', '^lustrum$'], ['decade', '^dec(ade|ennium)$'], ['century', '^century$'], ['millennium', '^millenniums?|millennia$']],
          _idx = scalePatternMap.findIndex(function (elm) {
        return new RegExp("".concat(elm[1]), 'i').test(base_scale);
      }),
          _narrows;

      switch (true) {
        case /^higher$/i.test(condition):
          _idx = scalePatternMap[_idx + 1] ? _idx + 1 : _idx;
          return scalePatternMap[_idx][0];

        case /^higher\s?all$/i.test(condition):
          _narrows = scalePatternMap.slice(_idx + 1);
          _narrows = _narrows.reduce(function (acc, cur) {
            return acc.concat(cur[0]);
          }, []);

          if (_narrows.includes('day')) {
            _narrows.push('weekday');
          }

          return _narrows;

        case /^lower$/i.test(condition):
          _idx = scalePatternMap[_idx - 1] ? _idx - 1 : _idx;
          return scalePatternMap[_idx][0];

        case /^lower\s?all$/i.test(condition):
          _narrows = scalePatternMap.slice(0, _idx);
          _narrows = _narrows.reduce(function (acc, cur) {
            return acc.concat(cur[0]);
          }, []);

          if (_narrows.includes('day')) {
            _narrows.push('weekday');
          }

          return _narrows;

        default:
          return scalePatternMap[_idx][0];
      }
    }
    /*
     * Retrieve the date string of specified locale (:> 指定されたロケールの日付文字列を取得する
     *
     * @param string date_seed (required)
     * @param string scale (optional; defalts to '')
     * @param string locales (optional and omittable; defaults to 'en-US')
     * @param object options (optional; defaults to empty object)
     *
     * @return mixed locale_string (return false if failure)
     */

  }, {
    key: "getLocaleString",
    value: function getLocaleString(date_seed) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var locales = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      function toLocaleStringSupportsLocales() {
        try {
          new Date().toLocaleString('i');
        } catch (e) {
          return e.name === "RangeError";
        }

        return false;
      }

      var is_toLocalString = toLocaleStringSupportsLocales(),
          locale_string = '',
          _options = {},
          // options for built-in method only
      //_ext_opts        = {}, // options extended for this plugin
      _has_options = false,
          getOrdinal = function getOrdinal(n) {
        var s = ['th', 'st', 'nd', 'rd'],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
      },
          getZerofill = function getZerofill(num) {
        var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

        var strDuplicate = function strDuplicate(n, str) {
          return Array(n + 1).join(str);
        },
            zero = strDuplicate(digit - String(num).length, '0');

        return String(num).length == digit ? String(num) : (zero + num).substr(num * -1);
      },
          _prop,
          _temp,
          _str,
          _num,
          _year,
          _month,
          _week;

      if (this.is_empty(date_seed)) {
        return false;
      }

      locales = this.supplement('en-US', locales, this.validateString);
      options = this.supplement({}, options, this.validateObject);

      for (_prop in options) {
        if (/^(localeMatcher|timeZone|hour12|formatMatcher|era|timeZoneName)$/.test(_prop)) {
          _options[_prop] = options[_prop];
        }
      }

      if (Object.keys(_options).length > 0) {
        _has_options = true;
      } //console.log( `!getLocaleString::${scale}:`, date_seed, locales, options[scale], is_toLocalString )


      switch (true) {
        case /^millenniums?|millennia$/i.test(scale):
        case /^century$/i.test(scale):
        case /^dec(ade|ennium)$/i.test(scale):
        case /^lustrum$/i.test(scale):
          // Allowed value as format: 'numeric', 'ordinal'
          _year = this.getCorrectDatetime(date_seed).getFullYear();

          if (/^millenniums?|millennia$/i.test(scale)) {
            _temp = 1000;
          } else if (/^century$/i.test(scale)) {
            _temp = 100;
          } else if (/^dec(ade|ennium)$/i.test(scale)) {
            _temp = 10;
          } else {
            _temp = 5;
          }

          _num = this.numRound(_year / _temp, 0, 'ceil');

          if (Object.hasOwnProperty.call(options, scale) && options[scale] === 'ordinal') {
            locale_string = getOrdinal(_num);
          } else {
            locale_string = _num;
          }

          break;

        case /^years?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'zerofill'
          _temp = this.getCorrectDatetime(date_seed);
          _year = _temp.getFullYear();

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit)$/i.test(options[scale])) {
                _options.year = options[scale]; //locale_string = _temp.toLocaleString( locales, _options )

                locale_string = _temp.toLocaleDateString(locales, _options);
              } else if (/^zerofill$/i.test(options[scale])) {
                locale_string = _year.toString().length > 3 ? _year : getZerofill(_year, 4);

                if (_has_options) {
                  locale_string = _temp.toLocaleDateString(locales, _options).replace(_year, locale_string);
                }
              } else {
                locale_string = _year;
              }
            } else if (_has_options) {
              locale_string = _temp.toLocaleDateString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _year : locale_string; //console.log(`!getLocaleString::${scale}:`, date_seed, _temp, _year, is_toLocalString, options[scale], locale_string )

          break;

        case /^months?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'narrow', 'short', 'long'
          _temp = this.getCorrectDatetime(date_seed, true);
          _month = _temp.getMonth() + 1; //console.log(`!getLocaleString::${scale}:`, date_seed, _temp, _month, is_toLocalString, options[scale], _options )

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit|narrow|short|long)$/i.test(options[scale])) {
                _options.month = options[scale];
                locale_string = _temp.toLocaleString(locales, _options);
              } else {
                locale_string = _month;
              }
            } else if (_has_options) {
              locale_string = _temp.toLocaleDateString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _month : locale_string; //console.log(`!!getLocaleString::${scale}:`, locale_string )

          break;

        case /^weeks?$/i.test(scale):
          // Allowed value as format: 'numeric', 'ordinal'
          if (typeof date_seed === 'string' && /^(.*)+,\d{1,2}$/.test(date_seed)) {
            var _date_seed$split3 = date_seed.split(',');

            var _date_seed$split4 = _slicedToArray(_date_seed$split3, 2);

            _str = _date_seed$split4[0];
            _num = _date_seed$split4[1];
            _week = parseInt(_num, 10);
          } else {
            _week = this.getWeek(this.getCorrectDatetime(date_seed));
          }

          if (Object.hasOwnProperty.call(options, scale) && options[scale] === 'ordinal') {
            locale_string = getOrdinal(_week);
          } else {
            locale_string = _week;
          }

          break;

        case /^weekdays?$/i.test(scale):
          // Allowed value as format: 'narrow', 'short', 'long'
          if (typeof date_seed === 'string' && /^(.*)+,\d{1}$/.test(date_seed)) {
            var _date_seed$split5 = date_seed.split(',');

            var _date_seed$split6 = _slicedToArray(_date_seed$split5, 2);

            _str = _date_seed$split6[0];
            _num = _date_seed$split6[1];
            _temp = this.getCorrectDatetime(_str, true);
            _num = parseInt(_num, 10);
          } else {
            _temp = this.getCorrectDatetime(date_seed, true);
          }

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(narrow|short|long)$/i.test(options[scale])) {
                _options.weekday = options[scale];
                locale_string = _temp.toLocaleString(locales, _options);
              }
            } else if (_has_options) {
              locale_string = _temp.toLocaleDateString(locales, _options);
            }
          }

          if (this.is_empty(locale_string)) {
            _str = _temp.toLocaleDateString(locales, {
              weekday: 'long'
            });

            if (/^short$/i.test(options[scale])) {
              locale_string = _str.substring(0, 3);
            } else if (/^long$/i.test(options[scale])) {
              locale_string = _str;
            } else {
              locale_string = _str.substring(0, 1);
            }
          }

          break;

        case /^days?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'ordinal'
          _temp = this.getCorrectDatetime(date_seed, true);

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit)$/i.test(options[scale])) {
                _options.day = options[scale];
                locale_string = _temp.toLocaleString(locales, _options);
              } else if (/^ordinal$/i.test(options[scale])) {
                locale_string = getOrdinal(parseInt(_temp.getDate(), 10));
              }
            } else if (_has_options) {
              locale_string = _temp.toLocaleDateString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _temp.getDate() : locale_string;
          break;

        case /^hours?$/i.test(scale):
        case /^(half|quarter)-?hours?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'fulltime'
          _temp = this.getCorrectDatetime(date_seed);

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit)$/i.test(options[scale])) {
                _options.hour = options[scale];
              } else if (/^fulltime$/i.test(options[scale])) {
                _options.hour = 'numeric';
                _options.minute = 'numeric';
              }

              locale_string = _temp.toLocaleString(locales, _options);
            } else if (_has_options) {
              locale_string = _temp.toLocaleString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _temp.getHours() : locale_string;
          break;

        case /^minutes?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'fulltime'
          _temp = this.getCorrectDatetime(date_seed);

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit)$/i.test(options[scale])) {
                _options.minute = options[scale];
              } else if (/^fulltime$/i.test(options[scale])) {
                _options.hour = 'numeric';
                _options.minute = 'numeric';
              }

              locale_string = _temp.toLocaleString(locales, _options);
            } else if (_has_options) {
              locale_string = _temp.toLocaleString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _temp.getMinutes() : locale_string;
          break;

        case /^seconds?$/i.test(scale):
          // Allowed value as format: 'numeric', '2-digit', 'fulltime'
          _temp = this.getCorrectDatetime(date_seed);

          if (is_toLocalString) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (Object.hasOwnProperty.call(options, scale)) {
              if (/^(numeric|2-digit)$/i.test(options[scale])) {
                _options.second = options[scale];
              } else if (/^fulltime$/i.test(options[scale])) {
                _options.hour = 'numeric';
                _options.minute = 'numeric';
                _options.second = 'numeric';
              }

              locale_string = _temp.toLocaleString(locales, _options);
            } else if (_has_options) {
              locale_string = _temp.toLocaleString(locales, _options);
            }
          }

          locale_string = this.is_empty(locale_string) ? _temp.getSeconds() : locale_string;
          break;

        case /^millisec(|ond)s?$/i.test(scale):
          // Allowed value as format: 'narrow', 'numeric'
          _temp = this.getCorrectDatetime(date_seed);

          if (Object.hasOwnProperty.call(options, scale)) {
            if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
              _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
            }

            if (/^numeric$/i.test(options[scale])) {
              locale_string = parseInt(_temp.getMilliseconds(), 10);
            } else {
              locale_string = getZerofill(parseInt(_temp.getMilliseconds(), 10), 3);
            }
          }

          locale_string = this.is_empty(locale_string) ? _temp.getMilliseconds() : locale_string;
          break;

        case /^custom$/i.test(scale):
          //console.log( `!getLocaleString::${scale}:`, date_seed, locales, options, _options, _has_options )
          // Custom format
          _temp = this.getCorrectDatetime(date_seed);

          if (Object.hasOwnProperty.call(options, 'timeZone') && /^utc$/i.test(options.timeZone)) {
            _temp = this.modifyDate(_temp, -1 * _temp.getTimezoneOffset(), 'minute');
          }

          if (Object.hasOwnProperty.call(options, scale)) {
            locale_string = this.datetimeFormat(_temp, options[scale], locales);
          }

          locale_string = this.is_empty(locale_string) ? _temp.toString() : locale_string;
          break;

        default:
          // Allowed value as format: 'narrow'
          _temp = this.getCorrectDatetime(date_seed);

          if (_has_options) {
            locale_string = _temp.toLocaleString(locales, _options);
          } else {
            locale_string = _temp.toString();
          }

          break;
      } //console.log( '!getLocaleString:', date_seed, scale, locales, options[scale], locale_string )


      return locale_string.toString();
    }
    /*
     * Convert the date-time to custom formatting strings, as like ruby
     *
     * @param mixed baseDate (required; should be a Date object)
     * @param string format (optional; defaults to '')
     * @param string locales (optional; defaults to 'en-US')
     *
     * @return string
     */

  }, {
    key: "datetimeFormat",
    value: function datetimeFormat(baseDate) {
      var _this17 = this;

      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var locales = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';

      // let _baseDt = Object.prototype.toString.call( baseDate ) === '[object Date]' ? baseDate : this.getCorrectDatetime( baseDate ),
      var _baseDt = baseDate instanceof Date ? baseDate : this.getCorrectDatetime(baseDate),
          _fmt = format.toString().split(''),
          _ptn = 'YyZmBbdwWAaIHMSj'.split(''),
          _cnvStr = '',
          lastDayOfMonth = function lastDayOfMonth(dateObj) {
        var _tmp = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);

        _tmp.setTime(_tmp.getTime() - 1);

        return _tmp.getDate();
      };

      if (this.is_empty(_fmt)) {
        return _baseDt.toString();
      }

      _fmt.forEach(function (_str, _i, _orig) {
        var _match = false,
            _repStr = '';

        if (_ptn.includes(_str) && !_this17.is_empty(_orig[_i - 1]) && _orig[_i - 1] === '%') {
          _match = _this17.is_empty(_orig[_i - 2]) || _orig[_i - 2] !== '\\';
        }

        if (_match) {
          switch (_str) {
            case 'Y':
            case 'y':
            case 'Z':
              {
                // year
                var _year = _baseDt.getFullYear();

                if (_str === 'Z') {
                  _repStr = _year < 10 ? "000".concat(_year) : _year < 100 ? "00".concat(_year) : _year < 1000 ? "0".concat(_year) : _year;
                } else {
                  _repStr = _str === 'Y' ? _year : _year.toString().slice(-2);
                }

                break;
              }

            case 'm':
            case 'B':
            case 'b':
              {
                // month
                if (_str === 'm') {
                  var _month = _baseDt.getMonth() + 1;

                  _repStr = _month < 10 ? "0".concat(_month) : _month;
                } else {
                  var _opts = {
                    month: _str === 'B' ? 'long' : 'short'
                  };
                  _repStr = _baseDt.toLocaleDateString(locales, _opts);
                }

                break;
              }

            case 'd':
              {
                // day
                var _day = _baseDt.getDate();

                _repStr = _day < 10 ? "0".concat(_day) : _day;
                break;
              }

            case 'w':
            case 'A':
            case 'a':
              {
                // weekday
                if (_str === 'w') {
                  var _wday = _baseDt.getDay();

                  _repStr = _wday;
                } else {
                  var _opts2 = {
                    weekday: _str === 'A' ? 'long' : 'short'
                  };
                  _repStr = _baseDt.toLocaleDateString(locales, _opts2);
                }

                break;
              }

            case 'W':
              {
                // week
                _repStr = _this17.getWeek(_baseDt);
                break;
              }

            case 'I':
            case 'H':
              {
                // hour
                var _opts3 = {
                  hour12: _str === 'I',
                  hour: 'numeric'
                };
                _repStr = _baseDt.toLocaleTimeString(locales, _opts3);
                break;
              }

            case 'M':
              {
                // minute
                _repStr = _baseDt.toLocaleTimeString(locales, {
                  minute: 'numeric'
                });
                break;
              }

            case 'S':
              {
                // second
                _repStr = _baseDt.toLocaleTimeString(locales, {
                  second: 'numeric'
                });
                break;
              }

            case 'j':
              {
                // day of year
                var _fdy = new Date(_baseDt.getFullYear(), 0, 1),
                    _month2 = _baseDt.getMonth(),
                    _days = 0,
                    _m;

                for (_m = 0; _m < _month2; _m++) {
                  _fdy.setMonth(_m);

                  _days += lastDayOfMonth(_fdy);
                }

                _repStr = _days + _baseDt.getDate();
                _repStr = _repStr < 10 ? "00".concat(_repStr) : _repStr < 100 ? "0".concat(_repStr) : _repStr;
                break;
              }
          }

          _cnvStr = _cnvStr.substring(0, _cnvStr.length - 1) + _repStr.toString();
        } else {
          _cnvStr += _str;
        }
      }, _cnvStr);

      _cnvStr = _cnvStr.toString().replace(/\\/g, '');
      return _cnvStr;
    }
    /*
     * Get the rendering width of the given string
     *
     * @param string str (required)
     *
     * @return int
     */

  }, {
    key: "strWidth",
    value: function strWidth(str) {
      var _str_ruler = $('<span id="jqtl-str-ruler"></span>'),
          _width = 0;

      if ($('#jqtl-str-ruler').length == 0) {
        $('body').append(_str_ruler);
      }

      _width = $('#jqtl-str-ruler').text(str).get(0).offsetWidth;
      $('#jqtl-str-ruler').empty();
      return _width;
    }
    /*
     * Sort an array by value of specific property (Note: destructive method)
     * Usage: Object.sort( this.compareValues( property, order ) )
     *
     * @param string key (required)
     * @param string order (optional; defaults to 'asc')
     *
     * @return object
     */

  }, {
    key: "compareValues",
    value: function compareValues(key) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
      return function (a, b) {
        if (!Object.hasOwnProperty.call(a, key) || !Object.hasOwnProperty.call(b, key)) {
          return 0;
        }

        var varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        var varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
        var comparison = 0;

        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }

        return order === 'desc' ? comparison * -1 : comparison;
      };
    }
    /*
     * Getter argument as user data
     *
     * @since v2.1.0
     *
     * @param array userdata (required)
     *
     * @return mixed
     */

  }, {
    key: "getUserArg",
    value: function getUserArg(userdata) {
      //console.log( '!_getUserArg:', userdata, typeof userdata, typeof userdata[0], this.is_Object( userdata[0] ) )
      switch (_typeof(userdata[0])) {
        case 'string':
        case 'number':
          userdata = [userdata[0]];
          break;

        case 'object':
          if (this.is_Object(userdata[0])) {
            // Object
            if (this.is_empty(userdata[0])) {
              userdata = {};
            } else {
              userdata = this.mergeDeep({}, userdata[0]);
            }
          } else {
            // Array
            if (this.is_empty(userdata[0])) {
              userdata = [];
            } else {
              userdata = userdata[0];
            }
          }

          break;

        default:
          userdata = userdata[0];
          break;
      }

      return userdata;
    }
    /*
     * Apply custom theme styles
     *
     * @since v2.1.0
     *
     * @return void
     */

  }, {
    key: "applyThemeStyle",
    value: function applyThemeStyle() {
      var theme = this._config.colorScheme.theme,
          selector = this._selector,
          styleId = "".concat(PREFIX, "-theme-").concat(selector.replace(/[.#_]/g, '-')),
          styleTag = $('<style></style>', {
        id: styleId
      }),
          _is = {},
          _os = {},
          cssText = '';

      if ($("style#".concat(styleId)).length > 0) {
        $("style#".concat(styleId)).remove();
      }

      if ('default' === theme.name) {
        return;
      }

      _is[Selector.TIMELINE_CONTAINER] = "border:solid 1px ".concat(theme.offline, "; background:").concat(theme.background);
      _is[Selector.HEADLINE_TITLE] = "color:".concat(theme.text);
      _is[Selector.RANGE_META] = "color:".concat(theme.subtext);
      _is[Selector.TIMELINE_RULER_TOP] = "outline:solid 1px ".concat(theme.offline);
      _is[Selector.TIMELINE_RULER_BOTTOM] = "outline:solid 1px ".concat(theme.offline);
      _is["".concat(Selector.TIMELINE_RULER_LINES, ":nth-child(even)")] = "background-color:".concat(this.hexToRgbA(theme.striped1, 0.25));
      _is[Selector.TIMELINE_RULER_ITEM] = "color:".concat(theme.subtext);
      _is["".concat(Selector.TIMELINE_RULER_ITEM, ":nth-child(even)")] = "background-color:".concat(this.hexToRgbA(theme.striped2, 0.25));
      _is[Selector.TIMELINE_EVENT_CONTAINER] = "outline:solid 1px ".concat(theme.offline);
      _is["".concat(Selector.TIMELINE_EVENT_NODE, ":not(.jqtl-event-type-pointer).active")] = "color:".concat(theme.background, ";background-color:").concat(theme.active);
      _is["".concat(Selector.TIMELINE_EVENT_NODE, ":hover")] = "color:".concat(theme.background, ";background-color:").concat(theme.active);
      _is["".concat(Selector.TIMELINE_EVENT_NODE, ":hover::after")] = "background-color:".concat(this.hexToRgbA(theme.invertbg, 0.1));
      _is["".concat(Selector.TIMELINE_EVENT_NODE, "::before")] = "color:".concat(theme.modesttext);
      _is["".concat(Selector.TIMELINE_EVENT_NODE).concat(Selector.VIEWER_EVENT_TYPE_POINTER)] = "border:solid 3px ".concat(theme.line);
      _is["".concat(Selector.TIMELINE_EVENT_NODE).concat(Selector.VIEWER_EVENT_TYPE_POINTER, ".active")] = "border-color:".concat(theme.activeline);
      _is["".concat(Selector.TIMELINE_EVENT_NODE).concat(Selector.VIEWER_EVENT_TYPE_POINTER, ":hover")] = "border-color:".concat(theme.activeline);
      _is[Selector.TIMELINE_SIDEBAR] = "outline:solid 1px ".concat(theme.offline);
      _is["".concat(Selector.TIMELINE_SIDEBAR, "> [class^=\"jqtl-side-index-\"]")] = "border-bottom:dotted 1px ".concat(theme.offline, ";background-color:").concat(theme.background, ";color:").concat(theme.text);
      _is["".concat(Selector.TIMELINE_SIDEBAR, " ").concat(Selector.TIMELINE_SIDEBAR_ITEM, ":nth-child(odd)")] = "background-color:".concat(theme.striped1);
      _is["".concat(Selector.TIMELINE_SIDEBAR, " ").concat(Selector.TIMELINE_SIDEBAR_ITEM, ":first-child")] = "border-top:solid 1px ".concat(theme.offline);
      _is[Selector.TIMELINE_SIDEBAR_MARGIN] = "outline:solid 1px ".concat(theme.offline);
      _is["".concat(Selector.TIMELINE_SIDEBAR_MARGIN, ":first-child")] = "border-bottom:solid 1px ".concat(theme.offline);
      _is["".concat(Selector.TIMELINE_SIDEBAR_MARGIN, ":last-child")] = "border-top:solid 1px ".concat(theme.offline);
      _is[Selector.OVERLAY] = "background-color:".concat(this.hexToRgbA(theme.background, 0.65), " !important");
      _is["".concat(Selector.OVERLAY, ":nth-child(odd)")] = "background-color:".concat(this.hexToRgbA(theme.striped1, 0.45), " !important");
      _os["".concat(Selector.VIEWER_EVENT_TITLE, ",").concat(Selector.VIEWER_EVENT_CONTENT)] = "color:".concat(theme.text);
      _os["".concat(Selector.VIEWER_EVENT_TITLE, "> .event-content")] = "color:".concat(theme.offtext);
      _os[Selector.VIEWER_EVENT_META] = "color:".concat(theme.offtext);
      _is[Selector.PRESENT_TIME_MARKER] = "border-left:dotted 1px ".concat(theme.marker);
      _is["".concat(Selector.PRESENT_TIME_MARKER, "::before,").concat(Selector.PRESENT_TIME_MARKER, "::after")] = "background-color:".concat(theme.marker);
      _is["".concat(Selector.LOADER_ITEM, " span")] = "background:".concat(this.hexToRgbA(theme.text, 0.15));
      _os['@keyframes loader'] = "0%{background:".concat(this.hexToRgbA(theme.text, 0.15), "}25%{background:").concat(this.hexToRgbA(theme.text, 0.15), "}50%{background:").concat(this.hexToRgbA(theme.text, 0.15), "}100%{background:").concat(this.hexToRgbA(theme.text, 0.15), "}");

      for (var _i16 = 0, _Object$keys9 = Object.keys(_is); _i16 < _Object$keys9.length; _i16++) {
        var _prop = _Object$keys9[_i16];
        cssText += "".concat(selector, " ").concat(_prop, "{").concat(_is[_prop], "}");
      }

      for (var _i17 = 0, _Object$keys10 = Object.keys(_os); _i17 < _Object$keys10.length; _i17++) {
        var _prop2 = _Object$keys10[_i17];
        cssText += "".concat(_prop2, "{").concat(_os[_prop2], "}");
      }

      $('head').append(styleTag.text(cssText));
    }
    /*
     * Validators
     */

  }, {
    key: "validateString",
    value: function validateString(def, val) {
      return typeof val === 'string' && val !== '' ? val : def;
    }
  }, {
    key: "validateNumeric",
    value: function validateNumeric(def, val) {
      return typeof val === 'number' ? Number(val) : def;
    }
  }, {
    key: "validateBoolean",
    value: function validateBoolean(def, val) {
      return typeof val === 'boolean' || _typeof(val) === 'object' && val !== null && typeof val.valueOf() === 'boolean' ? val : def;
    }
  }, {
    key: "validateObject",
    value: function validateObject(def, val) {
      return _typeof(val) === 'object' ? val : def;
    }
  }, {
    key: "validateArray",
    value: function validateArray(def, val) {
      return Object.prototype.toString.call(val) === '[object Array]' ? val : def;
    } // Static

  }], [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "_jQueryInterface",
    value: function _jQueryInterface(config) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = _objectSpread(_objectSpread(_objectSpread({}, Default), $(this).data()), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          // Apply the plugin and store the instance in data
          data = new Timeline(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string' && config.charAt(0) != '_') {
          if (typeof data[config] === 'undefined') {
            // Call no method
            throw new ReferenceError("No method named \"".concat(config, "\""));
          } // Call public method


          data[config](args);
        } else {
          if (!data._isInitialized || !data._isCompleted) {
            data._init();
          }
        }
      });
    }
  }, {
    key: "_getInstance",
    value: function _getInstance(element) {
      return Data.getData(element, DATA_KEY);
    }
  }]);

  return Timeline;
}(); // class end

/* ----------------------------------------------------------------------------------------------------------------
 * For jQuery
 * ----------------------------------------------------------------------------------------------------------------
 */


$.fn[NAME] = Timeline._jQueryInterface;
$.fn[NAME].Constructor = Timeline;

$.fn[NAME].noConflict = function () {
  $.fn[NAME] = JQUERY_NO_CONFLICT;
  return Timeline._jQueryInterface;
};

/***/ })

/******/ });
//# sourceMappingURL=jquery.timeline.js.map