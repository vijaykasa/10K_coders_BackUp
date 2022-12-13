import React, { Component } from 'react'

export class Changevaluesinstate extends Component {
    constructor(){
        super()
        this.state={
            employee:{
                name:"vijay",
                lname:"kumar",
                email:"xyz@gmail.com",
                roll:"tester"
            },
        }
    }
    changedata=()=>{
       let employee2={
            name:"raju",
            lname:"kumar",
            email:"xyz@gmail.com",
            roll:"tester"
       }
       let employee5={...this.state.employee,lname:"kapur"}
       this.setState({employee:employee5})
    }

  render() {
    return (
      <div>
      
        <button onClick={this.changedata}>change employee data</button>
        <ul>{Object.values(this.state.employee).map((val,i)=> <li key={i}>{val}</li>)}</ul>
      </div>
    )
  }
}

export default  Changevaluesinstate
