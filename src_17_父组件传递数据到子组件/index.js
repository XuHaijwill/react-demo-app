import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
/* 
  props
*/

// 父组件
class Parent extends React.Component {
  state = {
    lastName: '王'
  }

  render() {
    return (
      <div className="parent">
        父组件：
        <Child name={this.state.lastName}/>
      </div>
    )
  }
}

// 子组件
const Child = props => {
  return (
    <div className="child">
      <p>子组件，接收到父组件的数据：{props.name}</p>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Parent />)