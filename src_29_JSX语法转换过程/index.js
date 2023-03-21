import React from 'react'
import { createRoot } from 'react-dom/client'

/* 
  JSX 语法的转化过程
*/

// const element = <h1 className="greeting">Hello JSX!</h1>

const element = React.createElement(
  'h1',
  {
    className: 'greeting'
  },
  'Hello JSX！'
)

console.log(element)

const root = createRoot(document.getElementById('root'))
root.render(element)
