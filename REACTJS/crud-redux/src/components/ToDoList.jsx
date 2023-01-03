import React, { Component } from 'react'
import { connect } from "react-redux";
import { addlistAction } from './Actions'


export class ToDoList extends Component {
    constructor(props){
        super(props)
        this.state={
            Data:""
        }
    }
   
     handlechange=(e)=>{
        const newdata=e.target.value
        this.setState({Data:newdata})
    }
   addlist = () =>{
       this.props.addData(this.state.Data) 
       this.clearForm()
   }
   clearForm=()=>{
    const newdata=""
    this.setState({Data:newdata})
   }
  
  render() {
    return (
      <div className='container mt-5 p-3 d-flex border'>
        <input type={"text"} className="form-control me-3" name="Data" value={this.state.Data} placeholder="Enter the task" onChange={(e)=>{this.handlechange(e)}}/>
        <button onClick={this.addlist} className="btn btn-primary btn-sm">ADDTASK</button>
      </div>
    )
  }
}
 
const  mapStatetoProps =(state)=>{
     return {
        list : state.Todolist
     }
}
const mapDispatchtoProps =(dispatch)=>{
    return {
        addData : (Data)=>dispatch(addlistAction(Data))
    }
}
export default  connect(mapStatetoProps,mapDispatchtoProps)(ToDoList);
