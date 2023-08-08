/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var View = /** @class */ (function () {
    function View(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.x = 0;
        this.animate();
    }
    View.prototype.animate = function () {
        // // Clear the entire canvas
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // // Draw a rectangle
        // this.ctx.fillStyle = 'red';
        // this.ctx.fillRect(this.x, 10, 100, 100);
        // // Update the x position
        // this.x += 1;
        // // If the rectangle is off the right edge of the canvas, reset x
        // if (this.x > this.canvas.width) {
        //     this.x = -100;
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBO0lBT0ksY0FBWSxNQUF5QjtRQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0ksNkJBQTZCO1FBQzdCLG1FQUFtRTtRQUVuRSxzQkFBc0I7UUFDdEIsOEJBQThCO1FBQzlCLDJDQUEyQztRQUUzQywyQkFBMkI7UUFDM0IsZUFBZTtRQUVmLG1FQUFtRTtRQUNuRSxvQ0FBb0M7UUFDcEMscUJBQXFCO1FBQ3JCLElBQUk7UUFFSixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQztBQUdELCtEQUFlLElBQUk7Ozs7Ozs7VUN0Q25CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlCO0FBRXpCLElBQU0sTUFBTSxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUVyRSxJQUFNLElBQUksR0FBRyxJQUFJLDZDQUFJLENBQUMsTUFBTSxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBRXJCLElBQUksQ0FBQyxPQUFPLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvdmlldy50cyIsIndlYnBhY2s6Ly9qc3Byb2ovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNwcm9qL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNwcm9qLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmNsYXNzIFZpZXcge1xuICAgIGhlaWdodDogbnVtYmVyXG4gICAgd2lkdGg6IG51bWJlclxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgIHg6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy54ID0gMFxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICAvLyAvLyBDbGVhciB0aGUgZW50aXJlIGNhbnZhc1xuICAgICAgICAvLyB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gLy8gRHJhdyBhIHJlY3RhbmdsZVxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCAxMCwgMTAwLCAxMDApO1xuXG4gICAgICAgIC8vIC8vIFVwZGF0ZSB0aGUgeCBwb3NpdGlvblxuICAgICAgICAvLyB0aGlzLnggKz0gMTtcblxuICAgICAgICAvLyAvLyBJZiB0aGUgcmVjdGFuZ2xlIGlzIG9mZiB0aGUgcmlnaHQgZWRnZSBvZiB0aGUgY2FudmFzLCByZXNldCB4XG4gICAgICAgIC8vIGlmICh0aGlzLnggPiB0aGlzLmNhbnZhcy53aWR0aCkge1xuICAgICAgICAvLyAgICAgdGhpcy54ID0gLTEwMDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFZpZXciLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCJcblxuY29uc3QgY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzMScpXG5cbmNvbnN0IHZpZXcgPSBuZXcgVmlldyhjYW52YXMpXG5jb25zb2xlLmxvZyhcImluZGV4M1wiKVxuXG52aWV3LmFuaW1hdGUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==