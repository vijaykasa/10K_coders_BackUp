import React, { Component } from 'react'

export class form3 extends Component {
    constructor(){
        super()
    }
    show=()=>{
        
    }
  render() {
    return (
      <div>
        <input type={"radio"} name="gender" value={"male"}/>male
        <input type={"radio"} name="gender" value={"female"}/>female
        <button onClick={this.show}>enter</button>
      </div>
    )
  }
}

export default form3
