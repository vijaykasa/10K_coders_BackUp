import React, { Component } from 'react'
import { connect } from "react-redux";
import { deletelistAction } from './Actions'

class TodolistTable extends Component {
    
  render() {
    return (
      <div className='container mt-5'>
      <h4>To Do List</h4>
        <table className='table'>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Task Name</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
             {this.props.list.map((ele,i)=> <tr key={i}>
              <td>{i+1}</td>
              <td>{ele}</td>
              <td>
                <span className='btn btn-danger btn-sm' onClick={()=>{this.props.deleteData(ele)}}>X</span>
              </td>

             </tr>)}
            </tbody>
        </table>
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
        deleteData : (Data)=>dispatch(deletelistAction(Data))
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(TodolistTable);