(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["requireindex"],{

/***/ "./src/requireindex.js":
/*!*****************************!*\
  !*** ./src/requireindex.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// function getComponent() {
//     // import() 会返回一个 promise
//   return import('lodash')
//     .then(({ default: _ }) => {
//       //我们之所以需要 default，是因为 webpack 4 在导入 CommonJS 模块时，将不再解析为 module.exports 的值，而是为 CommonJS 模块创建一个 artificial namespace 对象，更多有关背后原因的信息，请阅读 webpack 4: import() and CommonJs。
//       const element = document.createElement('div');

//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//       return element;
//     })
//     .catch((error) => 'An error occurred while loading the component');
// }


// async简化
async function getComponent() {
    const element = document.createElement('div');
    const { default: _ } = await __webpack_require__.e(/*! import() */ "vendors-node_modules_lodash_lodash_js").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23));
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

console.log('测试hash改动')

getComponent().then((component) => {
  document.body.appendChild(component);
})

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/requireindex.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWluZGV4LmJ1bmRsZS4zYTg0MjljMjAwZjNiMmVlMTNjMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYSxRQUFRLHlMQUFnQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcmVxdWlyZWluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xuLy8gICAgIC8vIGltcG9ydCgpIOS8mui/lOWbnuS4gOS4qiBwcm9taXNlXG4vLyAgIHJldHVybiBpbXBvcnQoJ2xvZGFzaCcpXG4vLyAgICAgLnRoZW4oKHsgZGVmYXVsdDogXyB9KSA9PiB7XG4vLyAgICAgICAvL+aIkeS7rOS5i+aJgOS7pemcgOimgSBkZWZhdWx077yM5piv5Zug5Li6IHdlYnBhY2sgNCDlnKjlr7zlhaUgQ29tbW9uSlMg5qih5Z2X5pe277yM5bCG5LiN5YaN6Kej5p6Q5Li6IG1vZHVsZS5leHBvcnRzIOeahOWAvO+8jOiAjOaYr+S4uiBDb21tb25KUyDmqKHlnZfliJvlu7rkuIDkuKogYXJ0aWZpY2lhbCBuYW1lc3BhY2Ug5a+56LGh77yM5pu05aSa5pyJ5YWz6IOM5ZCO5Y6f5Zug55qE5L+h5oGv77yM6K+36ZiF6K+7IHdlYnBhY2sgNDogaW1wb3J0KCkgYW5kIENvbW1vbkpz44CCXG4vLyAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbi8vICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuXG4vLyAgICAgICByZXR1cm4gZWxlbWVudDtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb21wb25lbnQnKTtcbi8vIH1cblxuXG4vLyBhc3luY+eugOWMllxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB7IGRlZmF1bHQ6IF8gfSA9IGF3YWl0IGltcG9ydCgnbG9kYXNoJyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnNvbGUubG9nKCfmtYvor5VoYXNo5pS55YqoJylcblxuZ2V0Q29tcG9uZW50KCkudGhlbigoY29tcG9uZW50KSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9