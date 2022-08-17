import _ from 'lodash';
import './style.css';
import Icon from './assets/icon.jpeg';
function component() {
    const element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们已经存在的 div 中。
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    return element;
  }
  
  document.body.appendChild(component());