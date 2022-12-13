import  { Component } from 'react'

export class classcomponent4 extends Component {
    constructor(){
      super()
        this.state={
            user:{
                fname:"vijay",
                lname:"kumar",
                DOB:"27/11/1997",
                Phone:9110709448,
                Email:"xyz@gamil.com"
            }
        }
    }
  render() {
    return (
      <div>
            <ul>{Object.values(this.state.user).map((ele)=>
            {return <li>{ele}</li>})}
            </ul>
      </div>
    )
  }
}

export default classcomponent4
