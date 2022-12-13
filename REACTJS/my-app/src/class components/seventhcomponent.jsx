import { Component } from "react";

class Seventhcomponent extends Component{
    constructor(){
      super()
      this.state={
        fname:"vijay",
        lname:"kumar"

      }
    }
    render(){
        return <div>
            <ul>
            <li>username:{this.state.fname}</li>
            <li>username:{this.state.lname}</li>
            </ul>
        </div>
    }
}
export default Seventhcomponent;