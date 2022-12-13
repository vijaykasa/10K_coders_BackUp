import { Component } from 'react'

export class classcomonent1 extends Component {
    constructor(){
        super()
        this.state={
            PhoneBands:["samsung","redmi","apple","nokia","onepluse"]
        }
    }
  render() {
    return (
      <div>
             <ul>{this.state.PhoneBands.map((ele)=>{
                return <li>{ele}</li>
             })}</ul>
      </div>
    )
  }
}

export default classcomonent1
