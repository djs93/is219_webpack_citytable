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
/* harmony import */ var _TestJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");
/* harmony import */ var _DataFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataFuncs */ "./src/js/DataFuncs.js");




(0,_TestJs__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    /* eslint-disable no-undef */

    /* eslint-disable no-alert */
    alert("Something went wrong: ".concat(err));
    /* eslint-enable no-undef */

    /* eslint-enable no-alert */
  } else {
    /* eslint-disable no-undef */
    var table = document.querySelector('table');
    /* eslint-enable no-undef */

    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    _DataFuncs__WEBPACK_IMPORTED_MODULE_3__.default.generateTable(table, data, dataRecords);
  }
});
(0,_ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__.default)('this worked in the bundle');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0RhdGFGdW5jcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1Rlc3RKcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29uc29sZUxvZ0l0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJEYXRhRnVuY3MiLCJ0YWJsZSIsImRhdGEiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwicm93IiwiaW5zZXJ0Um93IiwiZm9yRWFjaCIsImtleSIsInRoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJPYmplY3QiLCJlbnRyaWVzIiwiZWxlbWVudCIsImNlbGwiLCJpbnNlcnRDZWxsIiwiZGF0YVJlY29yZHMiLCJnZW5lcmF0ZVRhYmxlSGVhZCIsImdlbmVyYXRlVGFibGVCb2R5IiwiVGVzdEpTIiwiZ2V0SlNPTiIsInVybCIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZW5kIiwiZXJy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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUFYLGdEQUFNO0FBRU5DLGlEQUFPLENBQUMscUNBQUQsRUFDSCxVQUFDVyxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDZCxNQUFJRCxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNkOztBQUNBO0FBQ0FFLFNBQUssaUNBQTBCRixHQUExQixFQUFMO0FBQ0E7O0FBQ0E7QUFDSCxHQU5ELE1BTU87QUFDSDtBQUNBLFFBQU1sQyxLQUFLLEdBQUdTLFFBQVEsQ0FBQzRCLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUNBOztBQUNBLFFBQU1wQyxJQUFJLEdBQUdhLE1BQU0sQ0FBQ3dCLElBQVAsQ0FBYUgsT0FBTyxDQUFDbEMsSUFBUixDQUFhLENBQWIsQ0FBYixDQUFiO0FBQ0EsUUFBTWtCLFdBQVcsR0FBR2dCLE9BQU8sQ0FBQ2xDLElBQTVCO0FBRUFGLGlFQUFBLENBQXdCQyxLQUF4QixFQUErQkMsSUFBL0IsRUFBcUNrQixXQUFyQztBQUNIO0FBQ0osQ0FqQkUsQ0FBUDtBQW1CQXhCLHNEQUFZLENBQUMsMkJBQUQsQ0FBWixDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnNvbGVMb2dJdChtZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhRnVuY3Mge1xyXG4gICAgc3RhdGljIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdGhlYWQgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IHRoZWFkLmluc2VydFJvdygpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgdGguYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlVGFibGVCb2R5KHRhYmxlLCBkYXRhKSB7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFsxXSk7XHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGVsZW1lbnRbMV0pLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnRbMV1ba2V5WzBdXSk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSwgZGF0YVJlY29yZHMpIHtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlVGFibGVCb2R5KHRhYmxlLCBkYXRhUmVjb3Jkcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdEpTKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0xvYWRlZCcpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEpTT04odXJsLCBjYWxsYmFjaykge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xyXG4gICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHN0YXR1cyB9ID0geGhyO1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCB4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHN0YXR1cywgeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUZXN0SlMgZnJvbSAnLi9UZXN0SnMnO1xyXG5pbXBvcnQgQ29uc29sZUxvZ0l0IGZyb20gJy4vQ29uc29sZUxvZ0l0JztcclxuaW1wb3J0IGdldEpTT04gZnJvbSAnLi9nZXRKU09OJztcclxuaW1wb3J0IERhdGFGdW5jcyBmcm9tICcuL0RhdGFGdW5jcyc7XHJcblxyXG5UZXN0SlMoKTtcclxuXHJcbmdldEpTT04oJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvY2l0aWVzJyxcclxuICAgIChlcnIsIHJlY29yZHMpID0+IHtcclxuICAgICAgICBpZiAoZXJyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXHJcbiAgICAgICAgICAgIGFsZXJ0KGBTb21ldGhpbmcgd2VudCB3cm9uZzogJHtlcnJ9YCk7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1hbGVydCAqL1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmtleXMoKHJlY29yZHMuZGF0YVswXSkpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhUmVjb3JkcyA9IHJlY29yZHMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIERhdGFGdW5jcy5nZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhLCBkYXRhUmVjb3Jkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5Db25zb2xlTG9nSXQoJ3RoaXMgd29ya2VkIGluIHRoZSBidW5kbGUnKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==