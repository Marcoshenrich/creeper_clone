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
    function Cell(id, length, rowPos, colPos, view, grid) {
        this.debugFillValue = Math.floor(Math.random() * 255);
        this.maxfill = 255;
        this.fill = 0;
        this.id = id;
        this.view = view;
        this.grid = grid;
        this.length = length;
        this.pos = [rowPos, colPos];
    }
    Cell.prototype.drawCreeper = function () {
        this.view.ctx.fillStyle = "rgba(0,0,255,".concat(this.fill / this.maxfill, ")");
        this.view.ctx.fillRect(this.pos[0], this.pos[1], this.length, this.length);
    };
    Cell.prototype.fillCellRandomly = function () {
        this.view.ctx.fillStyle = "rgba(".concat(this.debugFillValue, ",").concat(this.debugFillValue, ",").concat(this.debugFillValue, ",1");
        this.view.ctx.fillRect(this.pos[0], this.pos[1], this.length, this.length);
    };
    Cell.prototype.drawIds = function () {
        this.view.ctx.fillStyle = "rgba(75,0,0,1";
        this.view.ctx.font = '20px Arial';
        var measure = this.view.ctx.measureText(String(this.id));
        var textHeight = measure.fontBoundingBoxAscent;
        var textWidth = measure.width;
        this.view.ctx.fillText(String(this.id), this.pos[0] + (this.length / 2) - (textWidth / 2), this.pos[1] + (this.length / 2) + textHeight - (textHeight / 2));
    };
    return Cell;
}());
/* harmony default export */ __webpack_exports__["default"] = (Cell);


/***/ }),

/***/ "./src/creeper.ts":
/*!************************!*\
  !*** ./src/creeper.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Creeper = /** @class */ (function () {
    function Creeper(view, grid) {
        this.view = view;
        this.grid = grid;
        this.startingCell = this.findStartCell();
        this.startingCell.fill = this.startingCell.maxfill;
        console.log(this.startingCell.fill);
    }
    Creeper.prototype.findStartCell = function () {
        Object.values(this.grid.cells).length;
        var coord = Math.floor(Math.sqrt(Object.values(this.grid.cells).length) / 2);
        console.log(this.grid.cells);
        console.log("".concat(coord, ",").concat(coord));
        return this.grid.cells["".concat(coord, ",").concat(coord)];
    };
    return Creeper;
}());
/* harmony default export */ __webpack_exports__["default"] = (Creeper);


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
        this.partition = 100;
        this.cells = {};
        this.defineCells();
    }
    Grid.prototype.defineCells = function () {
        var cellHeight = this.view.canvas.height / this.partition;
        var cellWidth = this.view.canvas.width / this.partition;
        var cellId = 1;
        var rowCount = 0;
        var colCount = 0;
        for (var colHeight = 0; colHeight < this.view.canvas.height; colHeight += cellHeight) {
            for (var rowLen = 0; rowLen < this.view.canvas.width; rowLen += cellWidth) {
                this.cells["".concat(rowCount, ",").concat(colCount)] = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](cellId, cellHeight, rowLen, colHeight, this.view, this);
                cellId += 1;
                rowCount += 1;
            }
            rowCount = 0;
            colCount += 1;
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
/* harmony import */ var _creeper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creeper */ "./src/creeper.ts");


var View = /** @class */ (function () {
    function View(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.canvas.width = 800;
        this.canvas.height = 800;
        this.grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.creeper = new _creeper__WEBPACK_IMPORTED_MODULE_1__["default"](this, this.grid);
        this.animate();
    }
    View.prototype.animate = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var cell in this.grid.cells) {
            // this.grid.cells[cell].fillCellRandomly()
            // this.grid.cells[cell].drawIds()
            this.grid.cells[cell].drawCreeper();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL2NyZWVwZXIudHMiLCJ3ZWJwYWNrOi8vanNwcm9qLy4vc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vanNwcm9qLy4vc3JjL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vanNwcm9qL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzcHJvai93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzcHJvai8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCJcbmltcG9ydCBHcmlkIGZyb20gXCIuL2dyaWRcIlxuaW1wb3J0IENyZWVwZXIgZnJvbSBcIi4vY3JlZXBlclwiXG5cbmNsYXNzIENlbGwge1xuICAgIGlkOiBudW1iZXJcbiAgICBsZW5ndGg6IG51bWJlclxuICAgIHBvczogbnVtYmVyW11cbiAgICB2aWV3OiBWaWV3XG4gICAgZ3JpZDogR3JpZFxuXG4gICAgZGVidWdGaWxsVmFsdWU6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSlcbiAgICBtYXhmaWxsOiBudW1iZXIgPSAyNTVcbiAgICBmaWxsOiBudW1iZXIgPSAwXG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyLCByb3dQb3M6IG51bWJlciwgY29sUG9zOiBudW1iZXIsIHZpZXc6IFZpZXcsIGdyaWQ6IEdyaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZFxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgICAgICB0aGlzLnBvcyA9IFtyb3dQb3MsIGNvbFBvc11cbiAgICB9XG5cbiAgICBkcmF3Q3JlZXBlcigpIHtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5maWxsU3R5bGUgPSBgcmdiYSgwLDAsMjU1LCR7dGhpcy5maWxsL3RoaXMubWF4ZmlsbH0pYDtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMubGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgICB9XG5cblxuXG5cblxuICAgIGZpbGxDZWxsUmFuZG9tbHkoKSB7XG4gICAgICAgIHRoaXMudmlldy5jdHguZmlsbFN0eWxlID0gYHJnYmEoJHt0aGlzLmRlYnVnRmlsbFZhbHVlfSwke3RoaXMuZGVidWdGaWxsVmFsdWV9LCR7dGhpcy5kZWJ1Z0ZpbGxWYWx1ZX0sMWA7XG4gICAgICAgIHRoaXMudmlldy5jdHguZmlsbFJlY3QodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLmxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gICAgfVxuXG4gICAgZHJhd0lkcygpIHtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5maWxsU3R5bGUgPSBgcmdiYSg3NSwwLDAsMWA7XG4gICAgICAgIHRoaXMudmlldy5jdHguZm9udCA9ICcyMHB4IEFyaWFsJztcbiAgICAgICAgbGV0IG1lYXN1cmUgPSB0aGlzLnZpZXcuY3R4Lm1lYXN1cmVUZXh0KFN0cmluZyh0aGlzLmlkKSlcbiAgICAgICAgbGV0IHRleHRIZWlnaHQgPSBtZWFzdXJlLmZvbnRCb3VuZGluZ0JveEFzY2VudFxuICAgICAgICBsZXQgdGV4dFdpZHRoID0gbWVhc3VyZS53aWR0aFxuICAgICAgICB0aGlzLnZpZXcuY3R4LmZpbGxUZXh0KFN0cmluZyh0aGlzLmlkKSwgdGhpcy5wb3NbMF0gKyAodGhpcy5sZW5ndGggLyAyKSAtICh0ZXh0V2lkdGggLyAyKSwgdGhpcy5wb3NbMV0gKyAodGhpcy5sZW5ndGggLyAyKSArIHRleHRIZWlnaHQgLSAodGV4dEhlaWdodCAvIDIpKVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDZWxsIiwiaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vY2VsbFwiO1xuXG5cblxuY2xhc3MgQ3JlZXBlciB7XG4gICAgdmlldzogVmlld1xuICAgIGdyaWQ6IEdyaWRcbiAgICBzdGFydGluZ0NlbGw6IENlbGxcblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcsIGdyaWQ6IEdyaWQpIHtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkXG4gICAgICAgIHRoaXMuc3RhcnRpbmdDZWxsID0gdGhpcy5maW5kU3RhcnRDZWxsKClcbiAgICAgICAgdGhpcy5zdGFydGluZ0NlbGwuZmlsbCA9IHRoaXMuc3RhcnRpbmdDZWxsLm1heGZpbGxcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGFydGluZ0NlbGwuZmlsbClcbiAgICB9XG5cbiAgICBmaW5kU3RhcnRDZWxsKCk6IENlbGwge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZ3JpZC5jZWxscykubGVuZ3RoXG4gICAgICAgIGxldCBjb29yZCA9IE1hdGguZmxvb3IoTWF0aC5zcXJ0KE9iamVjdC52YWx1ZXModGhpcy5ncmlkLmNlbGxzKS5sZW5ndGgpLzIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZC5jZWxscylcbiAgICAgICAgY29uc29sZS5sb2coYCR7Y29vcmR9LCR7Y29vcmR9YClcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5jZWxsc1tgJHtjb29yZH0sJHtjb29yZH1gXVxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWVwZXIiLCJpbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCJcbmltcG9ydCBDZWxsIGZyb20gXCIuL2NlbGxcIlxuXG5cbmNsYXNzIEdyaWQge1xuICAgIHBhcnRpdGlvbjogbnVtYmVyXG4gICAgdmlldzogVmlld1xuICAgIGNlbGxzOiB7IFxuICAgICAgICBba2V5OiBzdHJpbmddOiBDZWxsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IodmlldzogVmlldykgeyBcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld1xuICAgICAgICB0aGlzLnBhcnRpdGlvbiA9IDEwMFxuICAgICAgICB0aGlzLmNlbGxzID0ge31cbiAgICAgICAgdGhpcy5kZWZpbmVDZWxscygpXG4gICAgfVxuXG4gICAgZGVmaW5lQ2VsbHMoKSB7XG4gICAgICAgIGxldCBjZWxsSGVpZ2h0ID0gdGhpcy52aWV3LmNhbnZhcy5oZWlnaHQgLyB0aGlzLnBhcnRpdGlvblxuICAgICAgICBsZXQgY2VsbFdpZHRoID0gdGhpcy52aWV3LmNhbnZhcy53aWR0aCAvIHRoaXMucGFydGl0aW9uXG4gICAgICAgIGxldCBjZWxsSWQgPSAxXG4gICAgICAgIGxldCByb3dDb3VudCA9IDBcbiAgICAgICAgbGV0IGNvbENvdW50ID0gMFxuXG4gICAgICAgIGZvciAobGV0IGNvbEhlaWdodCA9IDA7IGNvbEhlaWdodCA8IHRoaXMudmlldy5jYW52YXMuaGVpZ2h0OyBjb2xIZWlnaHQgKz0gY2VsbEhlaWdodCkge1xuICAgICAgICAgICAgZm9yIChsZXQgcm93TGVuID0gMDsgcm93TGVuIDwgdGhpcy52aWV3LmNhbnZhcy53aWR0aDsgcm93TGVuICs9IGNlbGxXaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbYCR7cm93Q291bnR9LCR7Y29sQ291bnR9YF0gPSBuZXcgQ2VsbChjZWxsSWQsIGNlbGxIZWlnaHQsIHJvd0xlbiwgY29sSGVpZ2h0LCB0aGlzLnZpZXcsIHRoaXMpXG4gICAgICAgICAgICAgICAgY2VsbElkICs9IDFcbiAgICAgICAgICAgICAgICByb3dDb3VudCArPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3dDb3VudCA9IDBcbiAgICAgICAgICAgIGNvbENvdW50ICs9IDFcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkIiwiaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiXG5pbXBvcnQgQ3JlZXBlciBmcm9tIFwiLi9jcmVlcGVyXCJcblxuY2xhc3MgVmlldyB7XG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgZ3JpZDogR3JpZFxuICAgIGNyZWVwZXI6IENyZWVwZXJcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gODAwXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDgwMFxuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh0aGlzKVxuICAgICAgICB0aGlzLmNyZWVwZXIgPSBuZXcgQ3JlZXBlcih0aGlzLCB0aGlzLmdyaWQpXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICBmb3IgKGxldCBjZWxsIGluIHRoaXMuZ3JpZC5jZWxscykge1xuICAgICAgICAgICAgLy8gdGhpcy5ncmlkLmNlbGxzW2NlbGxdLmZpbGxDZWxsUmFuZG9tbHkoKVxuICAgICAgICAgICAgLy8gdGhpcy5ncmlkLmNlbGxzW2NlbGxdLmRyYXdJZHMoKVxuICAgICAgICAgICAgdGhpcy5ncmlkLmNlbGxzW2NlbGxdLmRyYXdDcmVlcGVyKClcblxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVmlldyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIlxuXG5jb25zdCBjYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJylcblxuY29uc3QgdmlldyA9IG5ldyBWaWV3KGNhbnZhcylcbmNvbnNvbGUubG9nKFwiaW5kZXgzXCIpXG5cbnZpZXcuYW5pbWF0ZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9