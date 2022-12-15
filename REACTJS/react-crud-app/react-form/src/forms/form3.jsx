import React, { Component } from 'react'

export class Form3 extends Component {
    constructor(){
      super()
      this.state={
        gender:"",
      }
    }
    showgender=(e)=>{
        if(e.target.checked===true){
          let values=e.target.value
         this.setState({gender:values})
        }
    }
    show=()=>{
      console.log(this.state.gender)
    }
  render() {
    return (
      <div>
        <input type={"radio"} name="gender" value={"male"} onChange={(e)=>{this.showgender(e)}}/>male
        <br></br><input type={"radio"} name="gender" value={"female"} onChange={(e)=>{this.showgender(e)}}/>female
        <br></br><button onClick={this.show}>enter</button>
      </div>
    )
  }
}

export default Form3
