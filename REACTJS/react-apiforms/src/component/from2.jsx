import React, { Component } from 'react'
import axios from "axios"

export default class From2 extends Component {
    constructor(){
        super()
        this.state={
            user: {
                id: "",
                fullname: "vijay",
                username: "",
                email: "sdhfkjdshfs",
                password: "12345",
                confirmpassword: "",
              },
            allusers:[]
        }
  
}
     adduser=()=>{
          axios({
            method:"post",
            url:"http://localhost:3002/useres",
            data:this.state.user,
            header:{
                "contenr-Type":"application/json"
            }
       })
    }
  render() {
    return (
      <div>
        {this.state.allusers.map((ele,i)=><h2 key={i}>{ele.email}</h2>)}
        <button onClick={this.adduser}>send</button>
      </div>
    )
  }
   async componentDidMount(){
    let response=await axios.get("http://localhost:3002/useres")
    this.setState({allusers:response.data})
  }
}
