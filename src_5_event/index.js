import React from 'react'
import { createRoot } from 'react-dom/client';

/* 
  React事件对象
*/

class App extends React.Component {
    handleClick(e) {
      // 阻止浏览器的默认行为
      e.preventDefault()
      
      console.log('a标签的单击事件触发了')
    }
    render() {
      return (
        <a href="http://itcast.cn/" onClick={this.handleClick}>传智播客</a>
      )
    }
  }

/* 
  React事件处理
*/

// class App extends React.Component {
//   // 事件处理程序
//   handleClick() {
//     console.log('单击事件触发了')
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>点我，点我</button>
//     )
//   }
// }

// 通过函数组件绑定事件：
// function App() {
//     // 事件处理程序
//     function handleClick() {
//       console.log('函数组件中的事件绑定，事件触发了')
//     }
  
//     return (
//       <button onClick={handleClick}>点我</button>
//     )
//   }


const root = createRoot(document.getElementById('root'));
root.render(<App />);
