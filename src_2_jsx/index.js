import React from 'react'
import ReactDOM from 'react-dom'

import './css/index.css'

/* 
  JSX的样式处理
*/

const title = (
    <h1 className="title" style={{ color: 'red', backgroundColor: 'skyblue' }}>
      JSX的样式处理
    </h1>
  )


/* 
  6.列表渲染：
*/

// 歌曲列表：
/*const songs = [
    {id: 1, name: '痴心绝对'},
    {id: 2, name: '像我这样的人'},
    {id: 3, name: '南山南'},
  ]
  
  const title = (
    <ul>
      {songs.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  )*/

/* 
  5.条件渲染：
*/
//const isLoading = true
/*  if-else
const loadData = () => {
  if (isLoading) {
    return <div>loading...</div>
  }

  return <div>数据加载完成，此处显示加载后的数据</div>
}

//三元表达式：
const loadData = () => {
  return isLoading ? (<div>loading...</div>) : (<div>数据加载完成，此处显示加载后的数据</div>)
 }*/

// 逻辑与运算符：
/*const loadData = () => {
  return isLoading && (<div>loading...</div>)
}

const title = (
  <h1>
    条件渲染：
    {loadData()}
  </h1>
)*/

/* 
  4.JSX中使用JavaScript表达式的注意点：
*/

// 函数调用表达式
// const sayHi = () => 'Hi~'
// const dv = <div>我是一个div</div>

// const title = (
//   <h1>
//     Hello JSX
//     <p>{1}</p>
//     <p>{'a'}</p>
//     <p>{1 + 7}</p>
//     <p>{3 > 5 ? '大于' : '小于等于'}</p>
//     <p>{sayHi()}</p>
//     {dv}

//     {/* 错误演示 */}
//     {/* <p>{ {a: '6'} }</p> */}
//     {/* { if (true) {} } */}
//     {/* { for (var i = 0; i < 10; i++) {} } */}
//   </h1>
// )

/* 
  3.JSX中使用JavaScript表达式
*/
// const name = 'Jack'
// const age = 19

// const title = (
//   <h1>
//     Hello JSX, {name}, 年龄：{age}
//   </h1>
// )

/* 
  2.JSX注意点：
*/

// const title = (
//     <h1 className="title">
//       Hello JSX 
//       <span />
//     </h1>
//   )

//1.基本使用
//const title = <h1> Hello JSX1 <span>这是apan</span></h1>

// 渲染react元素 react18 遗留方法
// ReactDOM.render(title, document.getElementById('root'))


//在 React 18 中，render 函数已被 createRoot 函数所取代。具体请参阅 createRoot 以了解更多。
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(title);
