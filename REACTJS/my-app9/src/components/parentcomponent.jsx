import React, { Component } from 'react'
import Props from './props'
import Props2 from './props2'

export class Parentcomponent extends Component {
    constructor(){
        super()
        this.state={
            welcomeMassage:"welcome to all...!",
            heading:"this is heading"
        }
    }
  render() {
    return (
      <div>
      <h2>below displayed contex from props component</h2>
        <Props {...this.state}/>
        <Props2 massage={this.state.heading}/>
      </div>
    )
  }
}

export default Parentcomponent
