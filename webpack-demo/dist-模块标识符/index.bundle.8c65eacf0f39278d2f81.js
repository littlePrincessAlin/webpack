"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
/* harmony import */ var _print2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print2.js */ "./src/print2.js");



// 管理输出时，移除了style-loader和css-loader，并移除以下代码
// import './style.css';
// import Icon from './assets/icon.jpeg';
function component() {
    const element = document.createElement('div');

    const btn = document.createElement('button');
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');
    
    // element.classList.add('hello');

    // 将图像添加到我们已经存在的 div 中。
    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    // element.appendChild(btn);

    element.onclick = _print2_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(null, 'Hello webpack!');
    return element;
  }
  
  document.body.appendChild(component());

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
    console.log('I get called from print.js!');
  }

/***/ }),

/***/ "./src/print2.js":
/*!***********************!*\
  !*** ./src/print2.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ print)
/* harmony export */ });
function print(text) {
    console.log(text);
  };

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLjhjNjVlYWNmMGYzOTI3OGQyZjgxLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ1U7QUFDQTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFNO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsdURBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0JlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wcmludDIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuaW1wb3J0IFByaW50MiBmcm9tICcuL3ByaW50Mi5qcyc7XG4vLyDnrqHnkIbovpPlh7rml7bvvIznp7vpmaTkuoZzdHlsZS1sb2FkZXLlkoxjc3MtbG9hZGVy77yM5bm256e76Zmk5Lul5LiL5Luj56CBXG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCBJY29uIGZyb20gJy4vYXNzZXRzL2ljb24uanBlZyc7XG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIFxuICAgIC8vIGxvZGFzaO+8iOebruWJjemAmui/h+S4gOS4qiBzY3JpcHQg5byV5YWl77yJ5a+55LqO5omn6KGM6L+Z5LiA6KGM5piv5b+F6ZyA55qEXG4gICAgLy8gbG9kYXNoIOWcqOW9k+WJjSBzY3JpcHQg5Lit5L2/55SoIGltcG9ydCDlvJXlhaVcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbiAgICBcbiAgICAvLyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XG5cbiAgICAvLyDlsIblm77lg4/mt7vliqDliLDmiJHku6zlt7Lnu4/lrZjlnKjnmoQgZGl2IOS4reOAglxuICAgIC8vIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIC8vIG15SWNvbi5zcmMgPSBJY29uO1xuXG4gICAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gICAgLy8gYnRuLmlubmVySFRNTCA9ICdDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhJztcbiAgICAvLyBidG4ub25jbGljayA9IHByaW50TWU7XG4gICAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgZWxlbWVudC5vbmNsaWNrID0gUHJpbnQyLmJpbmQobnVsbCwgJ0hlbGxvIHdlYnBhY2shJyk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gICAgY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzIScpO1xuICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnQodGV4dCkge1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==