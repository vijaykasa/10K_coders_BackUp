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
             <table border={1}>{this.state.PhoneBands.map((ele)=>{
                return <tr><td>{ele}</td></tr>
             })}</table>
      </div>
    )
  }
}

export default classcomonent1
