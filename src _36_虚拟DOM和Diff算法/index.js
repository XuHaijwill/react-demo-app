import React from 'react'
import { createRoot } from 'react-dom/client'

/* 
  虚拟DOM 和 Diff算法
*/

// 生成随机数
class App extends React.PureComponent {
  state = {
    number: 0
  }

  handleClick = () => {
    this.setState(() => {
      return {
        number: Math.floor(Math.random() * 3)
      }
    })
  }

  // render方法调用并不意味着浏览器中的重新渲染！！！
  // render方法调用仅仅说明要进行diff
  render() {
    const el = (
      <div>
        <h1>随机数：</h1>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>重新生成</button>
      </div>
    )
    console.log(el)

    return el
  }
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
