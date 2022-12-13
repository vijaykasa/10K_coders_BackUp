import { Component } from 'react'

export class classcomonent3 extends Component {
    constructor(){
        super()
        this.state={
            PhoneBrands:["samsung","redmi","apple","nokia","onepluse"]
        }
    }
  render() {
    return (
      <div>
             <table border={1}><tr>
                <td>{this.state.PhoneBrands[0]}</td>
                <td>{this.state.PhoneBrands[1]}</td>
                <td>{this.state.PhoneBrands[2]}</td>
                <td>{this.state.PhoneBrands[3]}</td>
                <td>{this.state.PhoneBrands[4]}</td>

                </tr>
             </table>
      </div>
    )
  }
}

export default classcomonent3
