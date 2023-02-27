import React from 'react'
import { createRoot } from 'react-dom/client'

/* 
  从JSX中抽离事件处理程序
*/

class App extends React.Component {
    state = {
      count: 0
    }
  
    // 事件处理程序
    onIncrement = () => {
      console.log('事件处理程序中的this：', this)
      this.setState({
        count: this.state.count + 1
      })
    }
  
    render() {
      return (
        <div>
          <h1>计数器：{ this.state.count }</h1>
          <button onClick={this.onIncrement}>+1</button>
        </div>
      )
    }
  }

const root = createRoot(document.getElementById('root'))
root.render(<App />)