// 创建节点
import React from 'react'
// 更新虚拟DOM
import ReactDom from 'react-dom'

function CommentItem(props) {
  const styles = {
    item: {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #cc'},
    user: {fontSize: '14px'},
    content: {fontSize: '12px'}
  }
  return <div style={styles.item}>
    <h1 style={styles.user}> 评论人：{props.user} </h1>
    <p style={styles.content}> 内容：{props.content} </p>
  </div>
}

class CommentList extends React.Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {
      list: [
        {id: 1, user: 'pink', content: '哈哈哈'},
        {id: 2, user: 'pink', content: '哈哈哈'},
        {id: 3, user: 'pink', content: '哈哈哈'},
        {id: 4, user: 'pink', content: '哈哈哈'},
        {id: 5, user: 'pink', content: '哈哈哈'}
      ]
    }
  }
  styles = {
    title: {color: 'red', fontSize: '35px'}
  }
  render() {
    return <div>
      <h1 style={this.styles.title}>评论列表</h1>
      {this.state.list.map(item => <CommentItem {...item} key={item.id} />)}
    </div>
  }
}

ReactDom.render(<div>
  <CommentList></CommentList>
</div>, document.querySelector('#app'))
