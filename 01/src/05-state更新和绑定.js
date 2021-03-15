// 创建节点
import React from 'react'
// 更新虚拟DOM
import ReactDom from 'react-dom'

class Hello extends React.Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {
      count: 0,
      msg: 'hello'
    }
  }
  render() {
    return <div>
      {/* onClick等需要使用驼峰命名 建议使用箭头函数使this指向自身 */}
      <button onClick={() => this.inc()}>+</button>
      <span> {this.state.count} </span>
      <button onClick={() => this.dec()}>-</button>
      <div>
        <input type="text" value={this.state.msg} onChange={e => this.change(e)} ref="txt" ></input>
        <h4>{this.state.msg}</h4>
      </div>
    </div>
  }
  // 建议使用箭头函数
  fun = () => {
    console.log(this.props.address)
    console.log(this)
  }
  inc = () => {
    // 建议使用setState更新数据，能够重新渲染虚拟DOM
    // 仅更新指定的属性，不会覆盖state
    // 这是异步方法
    this.setState({count: this.state.count + 1}, () => console.log('回调', this.state.count))
  }
  dec = () => {
    this.setState({count: this.state.count - 1})
  }
  change = e => {
    // 通过refs获取
    console.log(this.refs.txt.value)

    this.setState({
      msg: e.target.value
    })
  }
}

ReactDom.render(<div>
  <Hello address='china'/>
</div>, document.querySelector('#app'))
