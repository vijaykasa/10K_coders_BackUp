import  { Component } from 'react'

export class classcomponent1 extends Component {
    constructor(){
        super()
        this.state={
            user:{
                fname:"vijay",
                lname:"kumar",
                id:220125,
                DOB:"27/11/1997",
                Phone:9110709448,
                Email:"xyz@gamil.com"
            }
        }
    }
  render() {
    return (
      <div>
            <table border={1}>{Object.entries(this.state.user).map((ele)=>
            {return <tr><td>{ele[0]}</td><td>{ele[1]}</td></tr>})}
            </table>
      </div>
    )
  }
}

export default classcomponent1
