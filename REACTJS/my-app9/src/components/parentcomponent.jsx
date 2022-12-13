import React, { Component } from 'react'
import Changingthepropsvalues from './changingthepropsvalues'
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
    changeprops=()=>{
      this.setState({heading:"changed data"})
    }
  render() {
    let {heading,welcomemassage}=this.state
    return (
     
      <div>
      <h2>below displayed contex from props component</h2>
        <Props {...this.state}/>
        <Props2 massage={heading}/>
        <Changingthepropsvalues massage={heading} change={this.changeprops}/>
      </div>
    )
  }
}

export default Parentcomponent
