// 创建节点
import React from 'react'
// 更新虚拟DOM
import ReactDom from 'react-dom'
// 默认需要添加后缀名，可进行配置，@为路径别名
// import Hello from '@/components/Hello'
import Hello from '@/components/HelloClass'

const user = {
  name: 'pink',
  age: 18,
  gender: '男'
}
ReactDom.render(<div>
  <Hello {...user}/>
</div>, document.querySelector('#app'))
