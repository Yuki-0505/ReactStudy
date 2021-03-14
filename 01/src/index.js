// 创建节点
import React from 'react'
// 更新虚拟DOM
import ReactDom from 'react-dom'

import CommentList from '@/components/CommentList'

ReactDom.render(<div>
  <CommentList></CommentList>
</div>, document.querySelector('#app'))
