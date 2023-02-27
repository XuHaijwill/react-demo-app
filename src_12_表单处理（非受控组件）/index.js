import React from 'react'
import { createRoot } from 'react-dom/client'


/* 
  非受控组件：
*/

class App extends React.Component {
    constructor() {
        super()

        // 创建ref
        this.txtRef = React.createRef()
    }

    // 获取文本框的值
    getTxt = () => {
        console.log('文本框值为：', this.txtRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.txtRef} />

                <button onClick={this.getTxt}>获取文本框的值</button>
            </div>
        )
    }
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)