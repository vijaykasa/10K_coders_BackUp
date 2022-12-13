import React, { Component } from 'react'

export class Students extends Component {
    constructor(){
        super()
        this.state={
            welcome:"welcome to all students...!",
            studentsDetails:{
                   name:"vijay",
                   lname:"kumar",
                   mail:"vijay@gmail.com"
            },
            subjects:["HTML","CSS","JavaScript","ReacrJS"] ,
            images:["https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
            "https://www.w3schools.com/css/img_lights.jpg","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        ]   
        }
    }
  render() {
    return (
      <div>
           <h1>{this.state.welcome}</h1>
           <hr/>
           <ul>
            {Object.values(this.state.studentsDetails).map((ele,i)=> <li key={i}>{ele}</li>)}
           </ul>
            <hr/>
            <ul>
                {this.state.subjects.map((ele,i)=> <li key={i}>{ele}</li>)}
            </ul>
            <hr/>
            <div>
                {this.state.images.map((ele,i)=> <img key={i} style={{width:150,height:100,marginRight:10}} src={ele} alt="nature"/>)}
            </div>
      </div>
    )
  }
}

export default Students
