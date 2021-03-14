/**
 * function定义组件
 * 无状态组件
 */
// 别忘了导入 React
import React from 'react'

// 创建一个组件，首字母大写
export default function Hello(props) {
  // 组件中的props是只读的
  return <div>Hello组件 -- {props.name} -- {props.age} -- {props.gender}</div>
}
