import React, { Component } from 'react'

export default class Form1 extends Component {
    constructor(){
        super()
        this.state={
            user:{
                username:"vijay",
                email:"kfsdlfk",
                salary:1522
            },
            userdata:[]   
        }
    }
      adduser=()=>{
          fetch("http://localhost:3002/useres",{
            method:"POST",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify(this.state.user),
        }).then((res)=>{
            console.log(res.json())
        }).then((response)=>{
            this.componentDidMount()
        })
   }
   deleteuser=()=>{
    fetch("http://localhost:3002/useres/"+1,{
        method:"DELETE"
    }).then((res)=>{
        console.log(res)
    }).then((response)=>{
        this.componentDidMount()
    })
   }
  render() {
    return (
      <div>
      <h1>hello</h1>
      <table>
        <thead>
            <tr>
                <th>username</th>
                <th>email</th>
                <th>salaray</th>
            </tr>
        </thead>
        <tbody>
        {this.state.userdata.map((ele,i)=> <tr key={i}><td>{ele.username}</td><td>{ele.email}</td>
        <td>{ele.salary}</td></tr>)}
        </tbody>
      </table>
      <button onClick={this.adduser}>send</button>
      <button onClick={this.deleteuser}>delete</button>     
      </div>
    )
  }
   async componentDidMount(){
    let data=await(await fetch("http://localhost:3002/useres")).json()
        this.setState({userdata:data})
  } 
   
}
