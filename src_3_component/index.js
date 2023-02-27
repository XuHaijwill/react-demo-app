import React from 'react'
import ReactDOM from 'react-dom'

/* 
  函数组件：
*/

//渲染结构：
// function Hello() {
//   return (
//     <div>这是我的第一个函数组件</div>
//   )
// }

// 使用箭头函数创建组件
// const Hello1 = () => <div>这是我的第2个函数组件</div>


/* 
  类组件：
*/

// 创建类组件
class Hello3 extends React.Component {
    render() {
      return (
        <div>这是我的第一个类组件</div>
      )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello3/>);
