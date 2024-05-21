import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count:0}
  onIncrement = ()=>{
    this.setState((prevState)=>{
      return {count:prevState.count+1}
    })
  }
  render() {
    const {count}=this.state 
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <br/> <span className="count">{count}</span> times{' '}
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="btn" type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default Counter
