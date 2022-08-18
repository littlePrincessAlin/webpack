
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
    const { default: _ } = await import('lodash');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
})