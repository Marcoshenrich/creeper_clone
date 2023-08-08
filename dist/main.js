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
    function Cell(id, length, pos, coords, view, grid) {
        this.debugFillValue = Math.floor(Math.random() * 255);
        this.maxfill = 255;
        this.fill = 0;
        this.id = id;
        this.view = view;
        this.grid = grid;
        this.length = length;
        this.pos = pos;
        this.coords = coords;
    }
    Cell.prototype.drawCreeper = function () {
        this.view.ctx.fillStyle = "rgba(0,0,255,".concat(this.fill / this.maxfill, ")");
        this.view.ctx.fillRect(this.coords[0], this.coords[1], this.length, this.length);
    };
    Cell.prototype.receiveCreeper = function (amount) {
        this.fill += amount;
        this.propogateCreeper();
    };
    Cell.prototype.propogateCreeper = function () {
        if (this.fill < this.maxfill / 10)
            return;
        if (this.fill <= 0)
            return;
        var deltas = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for (var _i = 0, deltas_1 = deltas; _i < deltas_1.length; _i++) {
            var delta = deltas_1[_i];
            var newCellCoords = "".concat(this.pos[0] + delta[0], ",").concat(this.pos[1] + delta[1]);
            if (!this.grid.cells[newCellCoords])
                continue;
            if (this.grid.cells[newCellCoords].fill >= this.fill)
                continue;
            var propogationRate = Math.floor(this.fill / 10);
            this.fill = (this.fill - propogationRate < 0) ? 0 : this.fill - propogationRate;
            this.grid.cells[newCellCoords].receiveCreeper(propogationRate);
        }
    };
    Cell.prototype.fillCellRandomly = function () {
        this.view.ctx.fillStyle = "rgba(".concat(this.debugFillValue, ",").concat(this.debugFillValue, ",").concat(this.debugFillValue, ",1");
        this.view.ctx.fillRect(this.coords[0], this.coords[1], this.length, this.length);
    };
    Cell.prototype.drawIds = function () {
        this.view.ctx.fillStyle = "rgba(75,0,0,1";
        this.view.ctx.font = '20px Arial';
        var measure = this.view.ctx.measureText(String(this.id));
        var textHeight = measure.fontBoundingBoxAscent;
        var textWidth = measure.width;
        this.view.ctx.fillText(String(this.fill), this.coords[0] + (this.length / 2) - (textWidth / 2), this.coords[1] + (this.length / 2) + textHeight - (textHeight / 2));
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
        this.floodRate = .1;
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
        this.partition = 10;
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
                this.cells["".concat(rowCount, ",").concat(colCount)] = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](cellId, cellHeight, [rowCount, colCount], [rowLen, colHeight], this.view, this);
                cellId += 1;
                rowCount += 1;
            }
            rowCount = 0;
            colCount += 1;
        }
        console.log(this.cells);
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
            this.grid.cells[cell].drawIds();
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
view.animate();

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztBQ055QjtBQUV6QixJQUFNLE1BQU0sR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFFckUsSUFBTSxJQUFJLEdBQUcsSUFBSSw2Q0FBSSxDQUFDLE1BQU0sQ0FBQztBQUU3QixJQUFJLENBQUMsT0FBTyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwcm9qLy4vc3JjL2NlbGwudHMiLCJ3ZWJwYWNrOi8vanNwcm9qLy4vc3JjL2NyZWVwZXIudHMiLCJ3ZWJwYWNrOi8vanNwcm9qLy4vc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vanNwcm9qLy4vc3JjL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vanNwcm9qL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzcHJvai93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzcHJvai8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCJcbmltcG9ydCBHcmlkIGZyb20gXCIuL2dyaWRcIlxuaW1wb3J0IENyZWVwZXIgZnJvbSBcIi4vY3JlZXBlclwiXG5cbmNsYXNzIENlbGwge1xuICAgIGlkOiBudW1iZXJcbiAgICBsZW5ndGg6IG51bWJlclxuICAgIGNvb3JkczogbnVtYmVyW11cbiAgICBwb3M6IG51bWJlcltdXG4gICAgdmlldzogVmlld1xuICAgIGdyaWQ6IEdyaWRcblxuICAgIGRlYnVnRmlsbFZhbHVlOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpXG4gICAgbWF4ZmlsbDogbnVtYmVyID0gMjU1XG4gICAgZmlsbDogbnVtYmVyID0gMFxuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgcG9zOiBudW1iZXJbXSwgY29vcmRzOiBudW1iZXJbXSwgdmlldzogVmlldywgZ3JpZDogR3JpZCkge1xuICAgICAgICB0aGlzLmlkID0gaWRcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gICAgICAgIHRoaXMucG9zID0gcG9zXG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzXG4gICAgfVxuXG4gICAgZHJhd0NyZWVwZXIoKSB7XG4gICAgICAgIHRoaXMudmlldy5jdHguZmlsbFN0eWxlID0gYHJnYmEoMCwwLDI1NSwke3RoaXMuZmlsbC90aGlzLm1heGZpbGx9KWA7XG4gICAgICAgIHRoaXMudmlldy5jdHguZmlsbFJlY3QodGhpcy5jb29yZHNbMF0sIHRoaXMuY29vcmRzWzFdLCB0aGlzLmxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gICAgfVxuXG5cbiAgICByZWNlaXZlQ3JlZXBlcihhbW91bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmZpbGwgKz0gYW1vdW50XG4gICAgICAgIHRoaXMucHJvcG9nYXRlQ3JlZXBlcigpXG4gICAgfVxuXG4gICAgcHJvcG9nYXRlQ3JlZXBlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsbCA8IHRoaXMubWF4ZmlsbCAvIDEwICkgcmV0dXJuXG4gICAgICAgIGlmICh0aGlzLmZpbGwgPD0gMCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgZGVsdGFzID0gW1swLDFdLFsxLDBdLFswLC0xXSxbLTEsMF1dXG5cbiAgICAgICAgZm9yIChsZXQgZGVsdGEgb2YgZGVsdGFzKSB7XG4gICAgICAgICAgICBsZXQgbmV3Q2VsbENvb3JkcyA9IGAke3RoaXMucG9zWzBdICsgZGVsdGFbMF19LCR7dGhpcy5wb3NbMV0gKyBkZWx0YVsxXX1gXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3JpZC5jZWxsc1tuZXdDZWxsQ29vcmRzXSkgY29udGludWVcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWQuY2VsbHNbbmV3Q2VsbENvb3Jkc10uZmlsbCA+PSB0aGlzLmZpbGwpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgIGxldCBwcm9wb2dhdGlvblJhdGUgPSBNYXRoLmZsb29yKHRoaXMuZmlsbCAvIDEwKVxuICAgICAgICAgICAgdGhpcy5maWxsID0gKHRoaXMuZmlsbCAtIHByb3BvZ2F0aW9uUmF0ZSA8IDApID8gMCA6IHRoaXMuZmlsbCAtIHByb3BvZ2F0aW9uUmF0ZVxuICAgICAgICAgICAgdGhpcy5ncmlkLmNlbGxzW25ld0NlbGxDb29yZHNdLnJlY2VpdmVDcmVlcGVyKHByb3BvZ2F0aW9uUmF0ZSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZmlsbENlbGxSYW5kb21seSgpIHtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3RoaXMuZGVidWdGaWxsVmFsdWV9LCR7dGhpcy5kZWJ1Z0ZpbGxWYWx1ZX0sJHt0aGlzLmRlYnVnRmlsbFZhbHVlfSwxYDtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5maWxsUmVjdCh0aGlzLmNvb3Jkc1swXSwgdGhpcy5jb29yZHNbMV0sIHRoaXMubGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgICB9XG5cbiAgICBkcmF3SWRzKCkge1xuICAgICAgICB0aGlzLnZpZXcuY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDc1LDAsMCwxYDtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xuICAgICAgICBsZXQgbWVhc3VyZSA9IHRoaXMudmlldy5jdHgubWVhc3VyZVRleHQoU3RyaW5nKHRoaXMuaWQpKVxuICAgICAgICBsZXQgdGV4dEhlaWdodCA9IG1lYXN1cmUuZm9udEJvdW5kaW5nQm94QXNjZW50XG4gICAgICAgIGxldCB0ZXh0V2lkdGggPSBtZWFzdXJlLndpZHRoXG4gICAgICAgIHRoaXMudmlldy5jdHguZmlsbFRleHQoU3RyaW5nKHRoaXMuZmlsbCksIHRoaXMuY29vcmRzWzBdICsgKHRoaXMubGVuZ3RoIC8gMikgLSAodGV4dFdpZHRoIC8gMiksIHRoaXMuY29vcmRzWzFdICsgKHRoaXMubGVuZ3RoIC8gMikgKyB0ZXh0SGVpZ2h0IC0gKHRleHRIZWlnaHQgLyAyKSlcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2VsbCIsImltcG9ydCBHcmlkIGZyb20gXCIuL2dyaWRcIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL2NlbGxcIjtcblxuXG5cbmNsYXNzIENyZWVwZXIge1xuICAgIHZpZXc6IFZpZXdcbiAgICBncmlkOiBHcmlkXG4gICAgc3RhcnRpbmdDZWxsOiBDZWxsXG5cbiAgICBmbG9vZFJhdGU6IG51bWJlciA9IC4xXG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBncmlkOiBHcmlkKSB7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZFxuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2VsbCA9IHRoaXMuZmluZFN0YXJ0Q2VsbCgpXG4gICAgICAgIHRoaXMuc3RhcnRpbmdDZWxsLmZpbGwgPSA1MFxuICAgIH1cblxuICAgIGZpbmRTdGFydENlbGwoKTogQ2VsbCB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5ncmlkLmNlbGxzKS5sZW5ndGhcbiAgICAgICAgbGV0IGNlbnRlckNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnNxcnQoT2JqZWN0LnZhbHVlcyh0aGlzLmdyaWQuY2VsbHMpLmxlbmd0aCkvMilcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5jZWxsc1tgJHtjZW50ZXJDb29yZH0sJHtjZW50ZXJDb29yZH1gXVxuICAgIH1cblxuICAgIGZsb29kKCkge1xuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2VsbC5yZWNlaXZlQ3JlZXBlcih0aGlzLmZsb29kUmF0ZSlcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVlcGVyIiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9jZWxsXCJcblxuXG5jbGFzcyBHcmlkIHtcbiAgICBwYXJ0aXRpb246IG51bWJlclxuICAgIHZpZXc6IFZpZXdcbiAgICBjZWxsczogeyBcbiAgICAgICAgW2tleTogc3RyaW5nXTogQ2VsbFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcpIHsgXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcbiAgICAgICAgdGhpcy5wYXJ0aXRpb24gPSAxMFxuICAgICAgICB0aGlzLmNlbGxzID0ge31cbiAgICAgICAgdGhpcy5kZWZpbmVDZWxscygpXG4gICAgfVxuXG4gICAgZGVmaW5lQ2VsbHMoKSB7XG4gICAgICAgIGxldCBjZWxsSGVpZ2h0ID0gdGhpcy52aWV3LmNhbnZhcy5oZWlnaHQgLyB0aGlzLnBhcnRpdGlvblxuICAgICAgICBsZXQgY2VsbFdpZHRoID0gdGhpcy52aWV3LmNhbnZhcy53aWR0aCAvIHRoaXMucGFydGl0aW9uXG4gICAgICAgIGxldCBjZWxsSWQgPSAxXG4gICAgICAgIGxldCByb3dDb3VudCA9IDBcbiAgICAgICAgbGV0IGNvbENvdW50ID0gMFxuXG4gICAgICAgIGZvciAobGV0IGNvbEhlaWdodCA9IDA7IGNvbEhlaWdodCA8IHRoaXMudmlldy5jYW52YXMuaGVpZ2h0OyBjb2xIZWlnaHQgKz0gY2VsbEhlaWdodCkge1xuICAgICAgICAgICAgZm9yIChsZXQgcm93TGVuID0gMDsgcm93TGVuIDwgdGhpcy52aWV3LmNhbnZhcy53aWR0aDsgcm93TGVuICs9IGNlbGxXaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbYCR7cm93Q291bnR9LCR7Y29sQ291bnR9YF0gPSBuZXcgQ2VsbChjZWxsSWQsIGNlbGxIZWlnaHQsIFtyb3dDb3VudCwgY29sQ291bnRdLCBbcm93TGVuLCBjb2xIZWlnaHRdLCB0aGlzLnZpZXcsIHRoaXMpXG4gICAgICAgICAgICAgICAgY2VsbElkICs9IDFcbiAgICAgICAgICAgICAgICByb3dDb3VudCArPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3dDb3VudCA9IDBcbiAgICAgICAgICAgIGNvbENvdW50ICs9IDFcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2VsbHMpXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQiLCJpbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCJcbmltcG9ydCBDcmVlcGVyIGZyb20gXCIuL2NyZWVwZXJcIlxuXG5jbGFzcyBWaWV3IHtcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICBncmlkOiBHcmlkXG4gICAgY3JlZXBlcjogQ3JlZXBlclxuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDBcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gODAwXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRoaXMpXG4gICAgICAgIHRoaXMuY3JlZXBlciA9IG5ldyBDcmVlcGVyKHRoaXMsIHRoaXMuZ3JpZClcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNyZWVwZXIuZmxvb2QoKVxuICAgICAgICBmb3IgKGxldCBjZWxsIGluIHRoaXMuZ3JpZC5jZWxscykge1xuICAgICAgICAgICAgLy8gdGhpcy5ncmlkLmNlbGxzW2NlbGxdLmZpbGxDZWxsUmFuZG9tbHkoKVxuICAgICAgICAgICAgdGhpcy5ncmlkLmNlbGxzW2NlbGxdLmRyYXdJZHMoKVxuICAgICAgICAgICAgdGhpcy5ncmlkLmNlbGxzW2NlbGxdLmRyYXdDcmVlcGVyKClcblxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVmlldyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIlxuXG5jb25zdCBjYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMxJylcblxuY29uc3QgdmlldyA9IG5ldyBWaWV3KGNhbnZhcylcblxudmlldy5hbmltYXRlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=