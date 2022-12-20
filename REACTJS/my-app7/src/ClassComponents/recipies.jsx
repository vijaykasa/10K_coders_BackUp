import React, { Component } from 'react'

export default class Recipies extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
  async componentDidMount(){
    let data=await (await fetch("http://localhost:3002/recipes")).json()
    console.log(data)
  }
}
