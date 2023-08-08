/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cell.ts":
/*!*********************!*\
  !*** ./src/cell.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Cell = /** @class */ (function () {
    function Cell(id, rowPos, colPos, view) {
        this.id = id;
        this.view = view;
        this.pos = [rowPos, colPos];
    }
    Cell.prototype.draw = function () {
        this.view.ctx.fillStyle = "rgba(75,0,0,1";
        this.view.ctx.font = '20px Arial';
        this.view.ctx.fillText(String(this.id), this.pos[0], this.pos[1] + 20);
    };
    return Cell;
}());
/* harmony default export */ __webpack_exports__["default"] = (Cell);


/***/ }),

/***/ "./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/cell.ts");

var Grid = /** @class */ (function () {
    function Grid(view) {
        this.view = view;
        this.partition = 10;
        this.cells = {};
        this.defineCells();
    }
    Grid.prototype.defineCells = function () {
        var cellHeight = this.view.canvas.height / this.partition;
        var cellWidth = this.view.canvas.width / this.partition;
        var cellId = 1;
        for (var rowLen = 0; rowLen < this.view.canvas.width; rowLen += cellWidth) {
            for (var colHeight = 0; colHeight < this.view.canvas.height; colHeight += cellHeight) {
                this.cells["".concat(rowLen, ",").concat(colHeight)] = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](cellId, rowLen, colHeight, this.view);
                cellId += 1;
            }
        }
    };
    return Grid;
}());
/* harmony default export */ __webpack_exports__["default"] = (Grid);


/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.ts");

var View = /** @class */ (function () {
    function View(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.canvas.width = 800;
        this.canvas.height = 800;
        this.grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.animate();
    }
    View.prototype.animate = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var cell in this.grid.cells) {
            this.grid.cells[cell].draw();
        }
        this.ctx.fillText("hello", 0, 0);
        requestAnimationFrame(this.animate.bind(this));
    };
    return View;
}());
/* harmony default export */ __webpack_exports__["default"] = (View);


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/view.ts");

var canvas = document.getElementById('canvas1');
var view = new _view__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
console.log("index3");
view.animate();

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7U0FDL0I7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUdoQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQztBQUdELCtEQUFlLElBQUk7Ozs7Ozs7VUNsQ25CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlCO0FBRXpCLElBQU0sTUFBTSxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUVyRSxJQUFNLElBQUksR0FBRyxJQUFJLDZDQUFJLENBQUMsTUFBTSxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBRXJCLElBQUksQ0FBQyxPQUFPLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvY2VsbC50cyIsIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvdmlldy50cyIsIndlYnBhY2s6Ly9qc3Byb2ovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNwcm9qL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNwcm9qLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIlxuXG5jbGFzcyBDZWxsIHtcbiAgICBpZDogbnVtYmVyXG4gICAgcG9zOiBudW1iZXJbXVxuICAgIHZpZXc6IFZpZXdcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHJvd1BvczogbnVtYmVyLCBjb2xQb3M6IG51bWJlciwgdmlldzogVmlldykge1xuICAgICAgICB0aGlzLmlkID0gaWRcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld1xuICAgICAgICB0aGlzLnBvcyA9IFtyb3dQb3MsIGNvbFBvc11cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnZpZXcuY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDc1LDAsMCwxYDtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xuICAgICAgICB0aGlzLnZpZXcuY3R4LmZpbGxUZXh0KFN0cmluZyh0aGlzLmlkKSwgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdICsgMjApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDZWxsIiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9jZWxsXCJcblxuXG5jbGFzcyBHcmlkIHtcbiAgICBwYXJ0aXRpb246IG51bWJlclxuICAgIHZpZXc6IFZpZXdcbiAgICBjZWxsczogeyBcbiAgICAgICAgW2tleTogc3RyaW5nXTogQ2VsbFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcpIHsgXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy5wYXJ0aXRpb24gPSAxMFxuICAgICAgICB0aGlzLmNlbGxzID0ge31cbiAgICAgICAgdGhpcy5kZWZpbmVDZWxscygpXG4gICAgfVxuXG4gICAgZGVmaW5lQ2VsbHMoKSB7XG4gICAgICAgIGxldCBjZWxsSGVpZ2h0ID0gdGhpcy52aWV3LmNhbnZhcy5oZWlnaHQgLyB0aGlzLnBhcnRpdGlvblxuICAgICAgICBsZXQgY2VsbFdpZHRoID0gdGhpcy52aWV3LmNhbnZhcy53aWR0aCAvIHRoaXMucGFydGl0aW9uXG4gICAgICAgIGxldCBjZWxsSWQgPSAxXG5cbiAgICAgICAgZm9yIChsZXQgcm93TGVuID0gMDsgcm93TGVuIDwgdGhpcy52aWV3LmNhbnZhcy53aWR0aDsgcm93TGVuICs9IGNlbGxXaWR0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sSGVpZ2h0ID0gMDsgY29sSGVpZ2h0IDwgdGhpcy52aWV3LmNhbnZhcy5oZWlnaHQ7IGNvbEhlaWdodCArPSBjZWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tgJHtyb3dMZW59LCR7Y29sSGVpZ2h0fWBdID0gbmV3IENlbGwoY2VsbElkLCByb3dMZW4sIGNvbEhlaWdodCwgdGhpcy52aWV3KVxuICAgICAgICAgICAgICAgIGNlbGxJZCArPSAxXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQiLCJpbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCJcblxuXG5jbGFzcyBWaWV3IHtcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICBncmlkOiBHcmlkXG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDgwMFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA4MDBcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodGhpcylcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGZvciAobGV0IGNlbGwgaW4gdGhpcy5ncmlkLmNlbGxzKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuY2VsbHNbY2VsbF0uZHJhdygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcImhlbGxvXCIsIDAsIDApXG5cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBWaWV3IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiXG5cbmNvbnN0IGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhczEnKVxuXG5jb25zdCB2aWV3ID0gbmV3IFZpZXcoY2FudmFzKVxuY29uc29sZS5sb2coXCJpbmRleDNcIilcblxudmlldy5hbmltYXRlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=