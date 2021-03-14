import React from 'react'
import ReactDom from 'react-dom'

// 创建一个组件，首字母大写
function Hello(props) {
  // 组件中的props是只读的
  return <div> Hello组件-- {props.name} -- {props.age} -- {props.gender}</div>
}

const user = {
  name: 'pink',
  age: 18,
  gender: '男'
}
ReactDom.render(<div>
  {/* <Hello name={user.name} age={user.age} gender={user.gender}/> */}
  <Hello {...user}/>
</div>, document.querySelector('#app'))
