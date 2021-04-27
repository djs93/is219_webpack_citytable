/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
  console.log(message);
}

/***/ }),

/***/ "./src/js/DataFuncs.js":
/*!*****************************!*\
  !*** ./src/js/DataFuncs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataFuncs)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataFuncs = /*#__PURE__*/function () {
  function DataFuncs() {
    _classCallCheck(this, DataFuncs);
  }

  _createClass(DataFuncs, null, [{
    key: "_generateTableHead",
    value: function _generateTableHead(table, data) {
      var thead = table.createTHead();
      var row = thead.insertRow();

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          var th = document.createElement("th");
          var text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_generateTableBody",
    value: function _generateTableBody(table, data) {
      var _iterator2 = _createForOfIteratorHelper(data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          var row = table.insertRow();
          console.log(element);
          var key = void 0;

          for (key in element) {
            var cell = row.insertCell();
            var text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "generateTable",
    value: function generateTable(table, data, dataRecords) {
      this._generateTableHead(table, data);

      this._generateTableBody(table, dataRecords);
    }
  }]);

  return DataFuncs;
}();



/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
  console.log("Loaded");
}

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
}
;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs.js */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt.js */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");
/* harmony import */ var _DataFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataFuncs */ "./src/js/DataFuncs.js");




(0,_TestJs_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    var table = document.querySelector("table");
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    _DataFuncs__WEBPACK_IMPORTED_MODULE_3__.default.generateTable(table, data, dataRecords);
  }
});
(0,_ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__.default)("this worked in the bundle");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0RhdGFGdW5jcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1Rlc3RKcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29uc29sZUxvZ0l0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJEYXRhRnVuY3MiLCJ0YWJsZSIsImRhdGEiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwicm93IiwiaW5zZXJ0Um93Iiwia2V5IiwidGgiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjZWxsIiwiaW5zZXJ0Q2VsbCIsImRhdGFSZWNvcmRzIiwiX2dlbmVyYXRlVGFibGVIZWFkIiwiX2dlbmVyYXRlVGFibGVCb2R5IiwiVGVzdEpTIiwiZ2V0SlNPTiIsInVybCIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZW5kIiwiZXJyIiwicmVjb3JkcyIsImFsZXJ0IiwicXVlcnlT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Ozs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUFYLG1EQUFNO0FBRU5DLGlEQUFPLENBQUMscUNBQUQsRUFDSCxVQUFTVyxHQUFULEVBQWNDLE9BQWQsRUFBdUI7QUFDbkIsTUFBSUQsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDZEUsU0FBSyxDQUFDLDJCQUEyQkYsR0FBNUIsQ0FBTDtBQUNILEdBRkQsTUFFTztBQUNILFFBQUkvQixLQUFLLEdBQUdRLFFBQVEsQ0FBQzBCLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBLFFBQUlqQyxJQUFJLEdBQUdrQyxNQUFNLENBQUNDLElBQVAsQ0FBYUosT0FBTyxDQUFDL0IsSUFBUixDQUFhLENBQWIsQ0FBYixDQUFYO0FBQ0EsUUFBSWUsV0FBVyxHQUFHZ0IsT0FBTyxDQUFDL0IsSUFBMUI7QUFFQUYsaUVBQUEsQ0FBd0JDLEtBQXhCLEVBQStCQyxJQUEvQixFQUFxQ2UsV0FBckM7QUFDSDtBQUNKLENBWEUsQ0FBUDtBQWFBckIseURBQVksQ0FBQywyQkFBRCxDQUFaLEMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc29sZUxvZ0l0KG1lc3NhZ2UpIHtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUZ1bmNze1xyXG4gICAgc3RhdGljIF9nZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSkge1xyXG4gICAgICAgIGxldCB0aGVhZCA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XHJcbiAgICAgICAgbGV0IHJvdyA9IHRoZWFkLmluc2VydFJvdygpO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkpO1xyXG4gICAgICAgICAgICB0aC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIF9nZW5lcmF0ZVRhYmxlQm9keSh0YWJsZSwgZGF0YSkge1xyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBsZXQga2V5O1xyXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnRba2V5XSk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhLCBkYXRhUmVjb3Jkcyl7XHJcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuX2dlbmVyYXRlVGFibGVCb2R5KHRhYmxlLCBkYXRhUmVjb3Jkcyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0SlMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRlZFwiKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci5zZW5kKCk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGVzdEpTIGZyb20gXCIuL1Rlc3RKcy5qc1wiO1xyXG5pbXBvcnQgQ29uc29sZUxvZ0l0IGZyb20gXCIuL0NvbnNvbGVMb2dJdC5qc1wiO1xyXG5pbXBvcnQgZ2V0SlNPTiBmcm9tIFwiLi9nZXRKU09OXCI7XHJcbmltcG9ydCBEYXRhRnVuY3MgZnJvbSBcIi4vRGF0YUZ1bmNzXCI7XHJcblxyXG5UZXN0SlMoKTtcclxuXHJcbmdldEpTT04oJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvY2l0aWVzJyxcclxuICAgIGZ1bmN0aW9uKGVyciwgcmVjb3Jkcykge1xyXG4gICAgICAgIGlmIChlcnIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nOiAnICsgZXJyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGFibGVcIik7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gT2JqZWN0LmtleXMoKHJlY29yZHMuZGF0YVswXSkpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YVJlY29yZHMgPSByZWNvcmRzLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBEYXRhRnVuY3MuZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSwgZGF0YVJlY29yZHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuQ29uc29sZUxvZ0l0KFwidGhpcyB3b3JrZWQgaW4gdGhlIGJ1bmRsZVwiKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==