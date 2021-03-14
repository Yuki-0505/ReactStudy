import React from 'react'

export default function CommentItem(props) {
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
