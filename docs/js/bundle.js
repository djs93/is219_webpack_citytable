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
    alert('Something went wrong: ' + err);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0RhdGFGdW5jcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1Rlc3RKcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29uc29sZUxvZ0l0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJEYXRhRnVuY3MiLCJ0YWJsZSIsImRhdGEiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwicm93IiwiaW5zZXJ0Um93IiwiZm9yRWFjaCIsImtleSIsInRoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJPYmplY3QiLCJlbnRyaWVzIiwiZWxlbWVudCIsImNlbGwiLCJpbnNlcnRDZWxsIiwiZGF0YVJlY29yZHMiLCJnZW5lcmF0ZVRhYmxlSGVhZCIsImdlbmVyYXRlVGFibGVCb2R5IiwiVGVzdEpTIiwiZ2V0SlNPTiIsInVybCIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZW5kIiwiZXJy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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUFYLGdEQUFNO0FBRU5DLGlEQUFPLENBQUMscUNBQUQsRUFDSCxVQUFDVyxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDZCxNQUFJRCxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNkOztBQUNBO0FBQ0FFLFNBQUssQ0FBQywyQkFBMkJGLEdBQTVCLENBQUw7QUFDQTs7QUFDQTtBQUNILEdBTkQsTUFNTztBQUNIO0FBQ0EsUUFBSWxDLEtBQUssR0FBR1MsUUFBUSxDQUFDNEIsYUFBVCxDQUF1QixPQUF2QixDQUFaO0FBQ0E7O0FBQ0EsUUFBSXBDLElBQUksR0FBR2EsTUFBTSxDQUFDd0IsSUFBUCxDQUFhSCxPQUFPLENBQUNsQyxJQUFSLENBQWEsQ0FBYixDQUFiLENBQVg7QUFDQSxRQUFJa0IsV0FBVyxHQUFHZ0IsT0FBTyxDQUFDbEMsSUFBMUI7QUFFQUYsaUVBQUEsQ0FBd0JDLEtBQXhCLEVBQStCQyxJQUEvQixFQUFxQ2tCLFdBQXJDO0FBQ0g7QUFDSixDQWpCRSxDQUFQO0FBbUJBeEIsc0RBQVksQ0FBQywyQkFBRCxDQUFaLEMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc29sZUxvZ0l0KG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFGdW5jcyB7XHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0aGVhZCA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoa2V5KTtcclxuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICB0aC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVUYWJsZUJvZHkodGFibGUsIGRhdGEpIHtcclxuICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50WzFdKTtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZWxlbWVudFsxXSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFsxXVtrZXlbMF1dKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhLCBkYXRhUmVjb3Jkcykge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVUYWJsZUJvZHkodGFibGUsIGRhdGFSZWNvcmRzKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0SlMoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnTG9hZGVkJyk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SlNPTih1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXHJcbiAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XHJcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB4aHI7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soc3RhdHVzLCB4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB4aHIuc2VuZCgpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRlc3RKUyBmcm9tICcuL1Rlc3RKcyc7XHJcbmltcG9ydCBDb25zb2xlTG9nSXQgZnJvbSAnLi9Db25zb2xlTG9nSXQnO1xyXG5pbXBvcnQgZ2V0SlNPTiBmcm9tICcuL2dldEpTT04nO1xyXG5pbXBvcnQgRGF0YUZ1bmNzIGZyb20gJy4vRGF0YUZ1bmNzJztcclxuXHJcblRlc3RKUygpO1xyXG5cclxuZ2V0SlNPTignaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9jaXRpZXMnLFxyXG4gICAgKGVyciwgcmVjb3JkcykgPT4ge1xyXG4gICAgICAgIGlmIChlcnIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cclxuICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nOiAnICsgZXJyKTtcclxuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWFsZXJ0ICovXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcclxuICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5rZXlzKChyZWNvcmRzLmRhdGFbMF0pKTtcclxuICAgICAgICAgICAgbGV0IGRhdGFSZWNvcmRzID0gcmVjb3Jkcy5kYXRhO1xyXG5cclxuICAgICAgICAgICAgRGF0YUZ1bmNzLmdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEsIGRhdGFSZWNvcmRzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbkNvbnNvbGVMb2dJdCgndGhpcyB3b3JrZWQgaW4gdGhlIGJ1bmRsZScpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9