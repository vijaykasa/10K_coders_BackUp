import { Component } from "react";

class Classcomponet extends Component{
    constructor(){
        super()
        this.state={
             names:["vijay","ravi","gopal","mahesh"]
        }
    }
    render(){
        return <div className="table">
             <table border="1">
            {this.state.names.map((ele,index)=>{return <tr><td>{index+1}</td><td>{ele}</td></tr>})}
             </table>
        </div>
       
    }
}
export default Classcomponet