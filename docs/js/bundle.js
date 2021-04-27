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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataFuncs = /*#__PURE__*/function () {
  function DataFuncs() {
    _classCallCheck(this, DataFuncs);
  }

  _createClass(DataFuncs, null, [{
    key: "generateTableHead",
    value: function generateTableHead(table, data) {
      var thead = table.createTHead();
      var row = thead.insertRow();
      data.forEach(function (key) {
        /* eslint-disable no-undef */
        var th = document.createElement('th');
        var text = document.createTextNode(key);
        /* eslint-enable no-undef */

        th.appendChild(text);
        row.appendChild(th);
      });
    }
  }, {
    key: "generateTableBody",
    value: function generateTableBody(table, data) {
      Object.entries(data).forEach(function (element) {
        var row = table.insertRow();
        console.log(element[1]);
        Object.entries(element[1]).forEach(function (key) {
          var cell = row.insertCell();
          /* eslint-disable no-undef */

          var text = document.createTextNode(element[1][key[0]]);
          /* eslint-enable no-undef */

          cell.appendChild(text);
        });
      });
    }
  }, {
    key: "generateTable",
    value: function generateTable(table, data, dataRecords) {
      this.generateTableHead(table, data);
      this.generateTableBody(table, dataRecords);
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
  console.log('Loaded');
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
  /* eslint-disable no-undef */
  var xhr = new XMLHttpRequest();
  /* eslint-enable no-undef */

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
    /* eslint-disable no-undef */
    alert('Something went wrong: ' + err);
    /* eslint-enable no-undef */
  } else {
    /* eslint-disable no-undef */
    var table = document.querySelector('table');
    /* eslint-enable no-undef */

    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    _DataFuncs__WEBPACK_IMPORTED_MODULE_3__.default.generateTable(table, data, dataRecords);
  }
});
(0,_ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__.default)('this worked in the bundle');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0RhdGFGdW5jcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1Rlc3RKcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29uc29sZUxvZ0l0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJEYXRhRnVuY3MiLCJ0YWJsZSIsImRhdGEiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwicm93IiwiaW5zZXJ0Um93IiwiZm9yRWFjaCIsImtleSIsInRoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJPYmplY3QiLCJlbnRyaWVzIiwiZWxlbWVudCIsImNlbGwiLCJpbnNlcnRDZWxsIiwiZGF0YVJlY29yZHMiLCJnZW5lcmF0ZVRhYmxlSGVhZCIsImdlbmVyYXRlVGFibGVCb2R5IiwiVGVzdEpTIiwiZ2V0SlNPTiIsInVybCIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZW5kIiwiZXJy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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFFQVgsbURBQU07QUFFTkMsaURBQU8sQ0FBQyxxQ0FBRCxFQUNILFVBQVNXLEdBQVQsRUFBY0MsT0FBZCxFQUF1QjtBQUNuQixNQUFJRCxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNkO0FBQ0FFLFNBQUssQ0FBQywyQkFBMkJGLEdBQTVCLENBQUw7QUFDQTtBQUNILEdBSkQsTUFJTztBQUNIO0FBQ0EsUUFBSWxDLEtBQUssR0FBR1MsUUFBUSxDQUFDNEIsYUFBVCxDQUF1QixPQUF2QixDQUFaO0FBQ0E7O0FBQ0EsUUFBSXBDLElBQUksR0FBR2EsTUFBTSxDQUFDd0IsSUFBUCxDQUFhSCxPQUFPLENBQUNsQyxJQUFSLENBQWEsQ0FBYixDQUFiLENBQVg7QUFDQSxRQUFJa0IsV0FBVyxHQUFHZ0IsT0FBTyxDQUFDbEMsSUFBMUI7QUFFQUYsaUVBQUEsQ0FBd0JDLEtBQXhCLEVBQStCQyxJQUEvQixFQUFxQ2tCLFdBQXJDO0FBQ0g7QUFDSixDQWZFLENBQVA7QUFpQkF4Qix5REFBWSxDQUFDLDJCQUFELENBQVosQyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25zb2xlTG9nSXQobWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUZ1bmNzIHtcclxuICAgIHN0YXRpYyBnZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcclxuICAgICAgICBjb25zdCByb3cgPSB0aGVhZC5pbnNlcnRSb3coKTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkpO1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHRoLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlVGFibGVCb2R5KHRhYmxlLCBkYXRhKSB7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFsxXSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGVsZW1lbnRbMV0pLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnRbMV1ba2V5WzBdXSk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEsIGRhdGFSZWNvcmRzKSB7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVRhYmxlQm9keSh0YWJsZSwgZGF0YVJlY29yZHMpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RKUygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdMb2FkZWQnKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gZ2V0SlNPTih1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xyXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzO1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCB4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHN0YXR1cywgeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoKTtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGVzdEpTIGZyb20gJy4vVGVzdEpzLmpzJztcclxuaW1wb3J0IENvbnNvbGVMb2dJdCBmcm9tICcuL0NvbnNvbGVMb2dJdC5qcyc7XHJcbmltcG9ydCBnZXRKU09OIGZyb20gJy4vZ2V0SlNPTic7XHJcbmltcG9ydCBEYXRhRnVuY3MgZnJvbSAnLi9EYXRhRnVuY3MnO1xyXG5cclxuVGVzdEpTKCk7XHJcblxyXG5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL2NpdGllcycsXHJcbiAgICBmdW5jdGlvbihlcnIsIHJlY29yZHMpIHtcclxuICAgICAgICBpZiAoZXJyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZzogJyArIGVycik7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gT2JqZWN0LmtleXMoKHJlY29yZHMuZGF0YVswXSkpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YVJlY29yZHMgPSByZWNvcmRzLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBEYXRhRnVuY3MuZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSwgZGF0YVJlY29yZHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuQ29uc29sZUxvZ0l0KCd0aGlzIHdvcmtlZCBpbiB0aGUgYnVuZGxlJyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=