import React from 'react'
import { createRoot } from 'react-dom/client'


import './css/index.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div>
          <input className="user" type="text" placeholder="请输入评论人" />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
          />
          <br />
          <button>发表评论</button>
        </div>

        <div className="no-comment">暂无评论，快去评论吧~</div>
        <ul>
          <li>
            <h3>评论人：jack</h3>
            <p>评论内容：沙发！！！</p>
          </li>
        </ul>
      </div>
    )
  }
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)