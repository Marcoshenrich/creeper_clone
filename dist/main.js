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
        this.id = id;
        this.view = view;
        this.grid = grid;
        this.length = length;
        this.pos = [rowPos, colPos];
        this.debugFillValue = Math.floor(Math.random() * 255);
        this.fill = 0;
    }
    // draw() {
    //     this.view.ctx.fillStyle = `rgba(75,0,0,1`;
    //     this.view.ctx.font = '20px Arial';
    //     this.view.ctx.fillText(String(this.id), this.pos[0], this.pos[1] + this.view.ctx.measureText(String(this.id)).fontBoundingBoxAscent)
    // }
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
        for (var colHeight = 0; colHeight < this.view.canvas.height; colHeight += cellHeight) {
            for (var rowLen = 0; rowLen < this.view.canvas.width; rowLen += cellWidth) {
                this.cells["".concat(rowLen, ",").concat(colHeight)] = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](cellId, cellHeight, rowLen, colHeight, this.view, this);
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
            // this.grid.cells[cell].fillCellRandomly()
            // this.grid.cells[cell].drawIds()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBO0lBVUksY0FBWSxFQUFVLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsSUFBVSxFQUFFLElBQVU7UUFDMUYsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXO0lBQ1gsaURBQWlEO0lBQ2pELHlDQUF5QztJQUN6QywySUFBMkk7SUFDM0ksSUFBSTtJQUlKLCtCQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxlQUFRLElBQUksQ0FBQyxjQUFjLGNBQUksSUFBSSxDQUFDLGNBQWMsY0FBSSxJQUFJLENBQUMsY0FBYyxPQUFJLENBQUM7UUFDeEcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUUsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLHFCQUFxQjtRQUM5QyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsS0FBSztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFL0osQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDO0FBRUQsK0RBQWUsSUFBSTs7Ozs7Ozs7Ozs7OztBQzlDTTtBQUd6QjtJQU9JLGNBQVksSUFBVTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUNmLElBQUksQ0FBQyxXQUFXLEVBQUU7SUFDdEIsQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFDekQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTO1FBQ3ZELElBQUksTUFBTSxHQUFHLENBQUM7UUFFZCxLQUFLLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDbEYsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLElBQUksU0FBUyxFQUFFO2dCQUN2RSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQUcsTUFBTSxjQUFJLFNBQVMsQ0FBRSxDQUFDLEdBQUcsSUFBSSw2Q0FBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDdkcsTUFBTSxJQUFJLENBQUM7YUFDZDtTQUNKO0lBRUwsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDO0FBRUQsK0RBQWUsSUFBSTs7Ozs7Ozs7Ozs7OztBQ2pDTTtBQUd6QjtJQU9JLGNBQVksTUFBeUI7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUc7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksNkNBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhFLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDOUIsMkNBQTJDO1lBQzNDLGtDQUFrQztTQUNyQztRQUVELHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDO0FBR0QsK0RBQWUsSUFBSTs7Ozs7OztVQ2hDbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUI7QUFFekIsSUFBTSxNQUFNLEdBQXVCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO0FBRXJFLElBQU0sSUFBSSxHQUFHLElBQUksNkNBQUksQ0FBQyxNQUFNLENBQUM7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFFckIsSUFBSSxDQUFDLE9BQU8sRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvai8uL3NyYy9jZWxsLnRzIiwid2VicGFjazovL2pzcHJvai8uL3NyYy9ncmlkLnRzIiwid2VicGFjazovL2pzcHJvai8uL3NyYy92aWV3LnRzIiwid2VicGFjazovL2pzcHJvai93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc3Byb2ovd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiXG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCJcblxuY2xhc3MgQ2VsbCB7XG4gICAgaWQ6IG51bWJlclxuICAgIGxlbmd0aDogbnVtYmVyXG4gICAgcG9zOiBudW1iZXJbXVxuICAgIHZpZXc6IFZpZXdcbiAgICBkZWJ1Z0ZpbGxWYWx1ZTpudW1iZXJcbiAgICBncmlkOiBHcmlkXG4gICAgZmlsbDogbnVtYmVyXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgcm93UG9zOiBudW1iZXIsIGNvbFBvczogbnVtYmVyLCB2aWV3OiBWaWV3LCBncmlkOiBHcmlkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWRcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICAgICAgdGhpcy5wb3MgPSBbcm93UG9zLCBjb2xQb3NdXG4gICAgICAgIHRoaXMuZGVidWdGaWxsVmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpXG4gICAgICAgIHRoaXMuZmlsbCA9IDBcbiAgICB9XG5cbiAgICAvLyBkcmF3KCkge1xuICAgIC8vICAgICB0aGlzLnZpZXcuY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDc1LDAsMCwxYDtcbiAgICAvLyAgICAgdGhpcy52aWV3LmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xuICAgIC8vICAgICB0aGlzLnZpZXcuY3R4LmZpbGxUZXh0KFN0cmluZyh0aGlzLmlkKSwgdGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdICsgdGhpcy52aWV3LmN0eC5tZWFzdXJlVGV4dChTdHJpbmcodGhpcy5pZCkpLmZvbnRCb3VuZGluZ0JveEFzY2VudClcbiAgICAvLyB9XG5cblxuXG4gICAgZmlsbENlbGxSYW5kb21seSgpIHtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3RoaXMuZGVidWdGaWxsVmFsdWV9LCR7dGhpcy5kZWJ1Z0ZpbGxWYWx1ZX0sJHt0aGlzLmRlYnVnRmlsbFZhbHVlfSwxYDtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMubGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgICB9XG5cbiAgICBkcmF3SWRzKCkge1xuICAgICAgICB0aGlzLnZpZXcuY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDc1LDAsMCwxYDtcbiAgICAgICAgdGhpcy52aWV3LmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xuICAgICAgICBsZXQgbWVhc3VyZSA9IHRoaXMudmlldy5jdHgubWVhc3VyZVRleHQoU3RyaW5nKHRoaXMuaWQpKVxuICAgICAgICBsZXQgdGV4dEhlaWdodCA9IG1lYXN1cmUuZm9udEJvdW5kaW5nQm94QXNjZW50XG4gICAgICAgIGxldCB0ZXh0V2lkdGggPSBtZWFzdXJlLndpZHRoXG4gICAgICAgIHRoaXMudmlldy5jdHguZmlsbFRleHQoU3RyaW5nKHRoaXMuaWQpLCB0aGlzLnBvc1swXSArICh0aGlzLmxlbmd0aCAvIDIpIC0gKHRleHRXaWR0aCAvIDIpLCB0aGlzLnBvc1sxXSArICh0aGlzLmxlbmd0aCAvIDIpICsgdGV4dEhlaWdodCAtICh0ZXh0SGVpZ2h0IC8gMikpXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENlbGwiLCJpbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCJcbmltcG9ydCBDZWxsIGZyb20gXCIuL2NlbGxcIlxuXG5cbmNsYXNzIEdyaWQge1xuICAgIHBhcnRpdGlvbjogbnVtYmVyXG4gICAgdmlldzogVmlld1xuICAgIGNlbGxzOiB7IFxuICAgICAgICBba2V5OiBzdHJpbmddOiBDZWxsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IodmlldzogVmlldykgeyBcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld1xuICAgICAgICB0aGlzLnBhcnRpdGlvbiA9IDEwMFxuICAgICAgICB0aGlzLmNlbGxzID0ge31cbiAgICAgICAgdGhpcy5kZWZpbmVDZWxscygpXG4gICAgfVxuXG4gICAgZGVmaW5lQ2VsbHMoKSB7XG4gICAgICAgIGxldCBjZWxsSGVpZ2h0ID0gdGhpcy52aWV3LmNhbnZhcy5oZWlnaHQgLyB0aGlzLnBhcnRpdGlvblxuICAgICAgICBsZXQgY2VsbFdpZHRoID0gdGhpcy52aWV3LmNhbnZhcy53aWR0aCAvIHRoaXMucGFydGl0aW9uXG4gICAgICAgIGxldCBjZWxsSWQgPSAxXG5cbiAgICAgICAgZm9yIChsZXQgY29sSGVpZ2h0ID0gMDsgY29sSGVpZ2h0IDwgdGhpcy52aWV3LmNhbnZhcy5oZWlnaHQ7IGNvbEhlaWdodCArPSBjZWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCByb3dMZW4gPSAwOyByb3dMZW4gPCB0aGlzLnZpZXcuY2FudmFzLndpZHRoOyByb3dMZW4gKz0gY2VsbFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tgJHtyb3dMZW59LCR7Y29sSGVpZ2h0fWBdID0gbmV3IENlbGwoY2VsbElkLCBjZWxsSGVpZ2h0LCByb3dMZW4sIGNvbEhlaWdodCwgdGhpcy52aWV3LCB0aGlzKVxuICAgICAgICAgICAgICAgIGNlbGxJZCArPSAxXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQiLCJpbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCJcblxuXG5jbGFzcyBWaWV3IHtcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICBncmlkOiBHcmlkXG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDgwMFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA4MDBcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodGhpcylcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGZvciAobGV0IGNlbGwgaW4gdGhpcy5ncmlkLmNlbGxzKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmdyaWQuY2VsbHNbY2VsbF0uZmlsbENlbGxSYW5kb21seSgpXG4gICAgICAgICAgICAvLyB0aGlzLmdyaWQuY2VsbHNbY2VsbF0uZHJhd0lkcygpXG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBWaWV3IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiXG5cbmNvbnN0IGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhczEnKVxuXG5jb25zdCB2aWV3ID0gbmV3IFZpZXcoY2FudmFzKVxuY29uc29sZS5sb2coXCJpbmRleDNcIilcblxudmlldy5hbmltYXRlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=