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
    Cell.prototype.receiveCreeper = function (amount) {
        this.fill += amount;
        this.propogateCreeper();
    };
    Cell.prototype.propogateCreeper = function () {
        if (this.fill < this.maxfill / 10)
            return;
        var deltas = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for (var _i = 0, deltas_1 = deltas; _i < deltas_1.length; _i++) {
            var delta = deltas_1[_i];
            var newCellCoords = "".concat(this.pos[0] + delta[0], ",").concat(this.pos[1] + delta[1]);
            console.log(this.grid.cells);
            console.log(newCellCoords);
            if (!this.grid.cells[newCellCoords])
                continue;
            if (this.grid.cells[newCellCoords].fill >= this.fill)
                continue;
            var propogationRate = Math.floor(this.fill / 10);
            this.fill -= propogationRate;
            this.grid.cells[newCellCoords].receiveCreeper(propogationRate);
        }
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
        this.floodRate = 1;
        this.view = view;
        this.grid = grid;
        this.startingCell = this.findStartCell();
        this.startingCell.fill = 50;
    }
    Creeper.prototype.findStartCell = function () {
        Object.values(this.grid.cells).length;
        var centerCoord = Math.floor(Math.sqrt(Object.values(this.grid.cells).length) / 2);
        return this.grid.cells["".concat(centerCoord, ",").concat(centerCoord)];
    };
    Creeper.prototype.flood = function () {
        this.startingCell.receiveCreeper(this.floodRate);
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
                this.cells["".concat(rowCount, ",").concat(colCount)] = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](cellId, cellHeight, rowCount, colCount, this.view, this);
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
        this.creeper.flood();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9qc3Byb2ovLi9zcmMvY2VsbC50cyIsIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvY3JlZXBlci50cyIsIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvdmlldy50cyIsIndlYnBhY2s6Ly9qc3Byb2ovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNwcm9qL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNwcm9qLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIlxuaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiXG5pbXBvcnQgQ3JlZXBlciBmcm9tIFwiLi9jcmVlcGVyXCJcblxuY2xhc3MgQ2VsbCB7XG4gICAgaWQ6IG51bWJlclxuICAgIGxlbmd0aDogbnVtYmVyXG4gICAgcG9zOiBudW1iZXJbXVxuICAgIHZpZXc6IFZpZXdcbiAgICBncmlkOiBHcmlkXG5cbiAgICBkZWJ1Z0ZpbGxWYWx1ZTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KVxuICAgIG1heGZpbGw6IG51bWJlciA9IDI1NVxuICAgIGZpbGw6IG51bWJlciA9IDBcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIsIHJvd1BvczogbnVtYmVyLCBjb2xQb3M6IG51bWJlciwgdmlldzogVmlldywgZ3JpZDogR3JpZCkge1xuICAgICAgICB0aGlzLmlkID0gaWRcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgICAgIHRoaXMucG9zID0gW3Jvd1BvcywgY29sUG9zXVxuICAgIH1cblxuICAgIGRyYXdDcmVlcGVyKCkge1xuICAgICAgICB0aGlzLnZpZXcuY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDAsMCwyNTUsJHt0aGlzLmZpbGwvdGhpcy5tYXhmaWxsfSlgO1xuICAgICAgICB0aGlzLnZpZXcuY3R4LmZpbGxSZWN0KHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy5sZW5ndGgsIHRoaXMubGVuZ3RoKVxuICAgIH1cblxuXG4gICAgcmVjZWl2ZUNyZWVwZXIoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5maWxsICs9IGFtb3VudFxuICAgICAgICB0aGlzLnByb3BvZ2F0ZUNyZWVwZXIoKVxuICAgIH1cblxuICAgIHByb3BvZ2F0ZUNyZWVwZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbGwgPCB0aGlzLm1heGZpbGwgLyAxMCApIHJldHVyblxuICAgICAgICBjb25zdCBkZWx0YXMgPSBbWzAsMV0sWzEsMF0sWzAsLTFdLFstMSwwXV1cblxuICAgICAgICBmb3IgKGxldCBkZWx0YSBvZiBkZWx0YXMpIHtcbiAgICAgICAgICAgIGxldCBuZXdDZWxsQ29vcmRzID0gYCR7dGhpcy5wb3NbMF0gKyBkZWx0YVswXX0sJHt0aGlzLnBvc1sxXSArIGRlbHRhWzFdfWBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZC5jZWxscylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0NlbGxDb29yZHMpXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3JpZC5jZWxsc1tuZXdDZWxsQ29vcmRzXSkgY29udGludWVcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQuY2VsbHNbbmV3Q2VsbENvb3Jkc10uZmlsbCA+PSB0aGlzLmZpbGwpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgIGxldCBwcm9wb2dhdGlvblJhdGUgPSBNYXRoLmZsb29yKHRoaXMuZmlsbCAvIDEwKVxuICAgICAgICAgICAgdGhpcy5maWxsIC09IHByb3BvZ2F0aW9uUmF0ZVxuICAgICAgICAgICAgdGhpcy5ncmlkLmNlbGxzW25ld0NlbGxDb29yZHNdLnJlY2VpdmVDcmVlcGVyKHByb3BvZ2F0aW9uUmF0ZSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZmlsbENlbGxSYW5kb21seSgpIHtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3RoaXMuZGVidWdGaWxsVmFsdWV9LCR7dGhpcy5kZWJ1Z0ZpbGxWYWx1ZX0sJHt0aGlzLmRlYnVnRmlsbFZhbHVlfSwxYDtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMubGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgICB9XG5cbiAgICBkcmF3SWRzKCkge1xuICAgICAgICB0aGlzLnZpZXcuY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDc1LDAsMCwxYDtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xuICAgICAgICBsZXQgbWVhc3VyZSA9IHRoaXMudmlldy5jdHgubWVhc3VyZVRleHQoU3RyaW5nKHRoaXMuaWQpKVxuICAgICAgICBsZXQgdGV4dEhlaWdodCA9IG1lYXN1cmUuZm9udEJvdW5kaW5nQm94QXNjZW50XG4gICAgICAgIGxldCB0ZXh0V2lkdGggPSBtZWFzdXJlLndpZHRoXG4gICAgICAgIHRoaXMudmlldy5jdHguZmlsbFRleHQoU3RyaW5nKHRoaXMuaWQpLCB0aGlzLnBvc1swXSArICh0aGlzLmxlbmd0aCAvIDIpIC0gKHRleHRXaWR0aCAvIDIpLCB0aGlzLnBvc1sxXSArICh0aGlzLmxlbmd0aCAvIDIpICsgdGV4dEhlaWdodCAtICh0ZXh0SGVpZ2h0IC8gMikpXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENlbGwiLCJpbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9jZWxsXCI7XG5cblxuXG5jbGFzcyBDcmVlcGVyIHtcbiAgICB2aWV3OiBWaWV3XG4gICAgZ3JpZDogR3JpZFxuICAgIHN0YXJ0aW5nQ2VsbDogQ2VsbFxuXG4gICAgZmxvb2RSYXRlOiBudW1iZXIgPSAxXG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBncmlkOiBHcmlkKSB7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZFxuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2VsbCA9IHRoaXMuZmluZFN0YXJ0Q2VsbCgpXG4gICAgICAgIHRoaXMuc3RhcnRpbmdDZWxsLmZpbGwgPSA1MFxuICAgIH1cblxuICAgIGZpbmRTdGFydENlbGwoKTogQ2VsbCB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5ncmlkLmNlbGxzKS5sZW5ndGhcbiAgICAgICAgbGV0IGNlbnRlckNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoT2JqZWN0LnZhbHVlcyh0aGlzLmdyaWQuY2VsbHMpLmxlbmd0aCkvMilcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5jZWxsc1tgJHtjZW50ZXJDb29yZH0sJHtjZW50ZXJDb29yZH1gXVxuICAgIH1cblxuICAgIGZsb29kKCkge1xuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2VsbC5yZWNlaXZlQ3JlZXBlcih0aGlzLmZsb29kUmF0ZSlcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVlcGVyIiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9jZWxsXCJcblxuXG5jbGFzcyBHcmlkIHtcbiAgICBwYXJ0aXRpb246IG51bWJlclxuICAgIHZpZXc6IFZpZXdcbiAgICBjZWxsczogeyBcbiAgICAgICAgW2tleTogc3RyaW5nXTogQ2VsbFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcpIHsgXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy5wYXJ0aXRpb24gPSAxMDBcbiAgICAgICAgdGhpcy5jZWxscyA9IHt9XG4gICAgICAgIHRoaXMuZGVmaW5lQ2VsbHMoKVxuICAgIH1cblxuICAgIGRlZmluZUNlbGxzKCkge1xuICAgICAgICBsZXQgY2VsbEhlaWdodCA9IHRoaXMudmlldy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5wYXJ0aXRpb25cbiAgICAgICAgbGV0IGNlbGxXaWR0aCA9IHRoaXMudmlldy5jYW52YXMud2lkdGggLyB0aGlzLnBhcnRpdGlvblxuICAgICAgICBsZXQgY2VsbElkID0gMVxuICAgICAgICBsZXQgcm93Q291bnQgPSAwXG4gICAgICAgIGxldCBjb2xDb3VudCA9IDBcblxuICAgICAgICBmb3IgKGxldCBjb2xIZWlnaHQgPSAwOyBjb2xIZWlnaHQgPCB0aGlzLnZpZXcuY2FudmFzLmhlaWdodDsgY29sSGVpZ2h0ICs9IGNlbGxIZWlnaHQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0xlbiA9IDA7IHJvd0xlbiA8IHRoaXMudmlldy5jYW52YXMud2lkdGg7IHJvd0xlbiArPSBjZWxsV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxzW2Ake3Jvd0NvdW50fSwke2NvbENvdW50fWBdID0gbmV3IENlbGwoY2VsbElkLCBjZWxsSGVpZ2h0LCByb3dDb3VudCwgY29sQ291bnQsIHRoaXMudmlldywgdGhpcylcbiAgICAgICAgICAgICAgICBjZWxsSWQgKz0gMVxuICAgICAgICAgICAgICAgIHJvd0NvdW50ICs9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvd0NvdW50ID0gMFxuICAgICAgICAgICAgY29sQ291bnQgKz0gMVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQiLCJpbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCJcbmltcG9ydCBDcmVlcGVyIGZyb20gXCIuL2NyZWVwZXJcIlxuXG5jbGFzcyBWaWV3IHtcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICBncmlkOiBHcmlkXG4gICAgY3JlZXBlcjogQ3JlZXBlclxuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDBcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gODAwXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRoaXMpXG4gICAgICAgIHRoaXMuY3JlZXBlciA9IG5ldyBDcmVlcGVyKHRoaXMsIHRoaXMuZ3JpZClcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNyZWVwZXIuZmxvb2QoKVxuICAgICAgICBmb3IgKGxldCBjZWxsIGluIHRoaXMuZ3JpZC5jZWxscykge1xuICAgICAgICAgICAgLy8gdGhpcy5ncmlkLmNlbGxzW2NlbGxdLmZpbGxDZWxsUmFuZG9tbHkoKVxuICAgICAgICAgICAgLy8gdGhpcy5ncmlkLmNlbGxzW2NlbGxdLmRyYXdJZHMoKVxuICAgICAgICAgICAgdGhpcy5ncmlkLmNlbGxzW2NlbGxdLmRyYXdDcmVlcGVyKClcblxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVmlldyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIlxuXG5jb25zdCBjYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJylcblxuY29uc3QgdmlldyA9IG5ldyBWaWV3KGNhbnZhcylcbmNvbnNvbGUubG9nKFwiaW5kZXgzXCIpXG5cbnZpZXcuYW5pbWF0ZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9