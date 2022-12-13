import React, { Component } from 'react'

export class Changingthepropsvalues extends Component {
    constructor(props){
        super()
    }
  render() {
    return (
      <div>
        <h1>{this.props.massage}</h1>
        <button onClick={this.props.change}>change heading</button>
      </div>
    )
  }
}

export default Changingthepropsvalues
