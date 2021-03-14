import React from 'react'
import CommentItem from '@/components/CommentItem'
import styles from '@/css/commentList.css'

export default class CommentList extends React.Component {
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
  // styles = {
  //   title: {color: 'red', fontSize: '35px'}
  // }
  render() {
    return <div>
      <h1 className={styles.title}>评论列表</h1>
      {/* <h1 style={this.styles.title}>评论列表</h1> */}
      {this.state.list.map(item => <CommentItem {...item} key={item.id} />)}
    </div>
  }
}
