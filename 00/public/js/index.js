
class App extends React.Component {
  constructor(props) {
    super()
    this.props = props
  }
  render() {
    return <div> {this.props.name} -- {this.props.age} </div>
  }
}

let user = {
  name: 'pink',
  age: 18
}

ReactDOM.render(<div>
  <App {...user} />
</div>, document.querySelector('#app'))
