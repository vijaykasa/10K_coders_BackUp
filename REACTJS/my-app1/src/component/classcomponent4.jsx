import { Component } from "react";

class Classcomponetobject extends Component{
    constructor(){
        super()
        this.state={
            user:{ name:"vijay",
             lname:"kumar",
             age:24,
             email:"vijaykumar984802@gmail.com",
             id:"220125"
                 }
        }
    }
    render(){
        return <div className="table">
             <ul>
            {Object.entries(this.state.user).map((ele)=>{return <li>{ele[0]+":"+ele[1]}</li>})}
             </ul>
        </div>
       
    }
}
export default Classcomponetobject