import React from 'react'
import { createRoot } from 'react-dom/client'


/* 
  props
  组件方式
*/

// class Hello extends React.Component{
//   render(){
//     console.log(this.props)
//     return (<div>
//       <h1>props: {this.props.age}</h1>
//     </div>)
//   }
// }

/**
 * 
 * @param {函数方式} props 
 */
const Hello = props => {
  // props是一个对象
  console.log(props)
  return (
    <div>
      <h1>props：{props.name}</h1>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Hello name="rose" age={19} />, document.getElementById('root'))