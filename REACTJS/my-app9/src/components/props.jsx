import React, { Component } from 'react'

export class Props extends Component {
    constructor(props){
        super()
        console.log(props)

    }
  render() {
    return (
      <div>
      <hr/>
        <h1 style={{background:"grey",color:"white",padding:'10'}}>{this.props.welcomeMassage}</h1>
        <h2>{this.props.heading}</h2>
      </div>
    )
  }
}

export default Props
