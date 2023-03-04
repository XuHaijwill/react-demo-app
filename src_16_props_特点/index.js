import React from 'react'
import { createRoot } from 'react-dom/client'


// 类组件：
class Hello extends React.Component {
  // 推荐使用props作为constructor的参数！！
  constructor(props) {
    super(props)

    // console.log(this.props)
    console.log(props)
  }

  render() {
    console.log('render：', this.props)

    return (
      <div>
        <h1>props：</h1>
      </div>
    )
  }
}

const root = createRoot(document.getElementById('root'))
root.render(  <Hello
  name="rose"
  age={19}
  colors={['red', 'green', 'blue']}
  fn={() => console.log('这是一个函数')}
  tag={<p>这是一个p标签</p>}
/>, document.getElementById('root'))