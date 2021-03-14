/**
 * class创建组件
 * 有状态组件
 */
import React from 'react'

export default class Hello extends React.Component {
  constructor(props) {
    super()
    // props只读
    this.props = props
    // state可读可写
    state = {
      msg: 'Hello'
    }
  }

  render() {
    return <div>{this.state.msg} -- {this.props.name} -- {this.props.age} -- {this.props.gender}</div>
  }
}
