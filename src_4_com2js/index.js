import React from 'react'
import ReactDOM from 'react-dom'


/* 
  抽离组件到独立的JS文件中
*/

// 导入Hello组件
import Hello from './Hello'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello/>);
