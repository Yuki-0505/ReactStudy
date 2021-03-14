import React from 'react'
import ReactDom from 'react-dom'


const myDiv = React.createElement('div', {
  id: 'myDiv',
  title: 'this is div'
}, '这是一个div')

// jsx语法默认是调用React.createElement()来实现的
const div2 = <div>
  {10 + 2}
  {/* 这是注释 */}
</div>

ReactDom.render(<div>
  {/* class用className代替 */}
  <p className="content">p标签</p>
  {/* for用htmlFor代替 */}
  <label htmlFor="">label标签</label>
  {/* jsx中行内样式需要使用style对象 */}
  <h1 style={{color: 'red', fontSize: '35px'}}>h1标签</h1>
</div>, document.querySelector('#app'))
