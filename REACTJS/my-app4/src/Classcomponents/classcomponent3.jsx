import  { Component } from 'react'

export class Classcomponent3 extends Component {

    constructor(){
      super()
        this.state={
            product:{
    
              "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
              "price": 109.95,
              "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
              "category": "men's clothing",
              "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              "rating": {
                "rate": 3.9,
                "count": 120
            }
        }
    }
  }
  render() {
    return (
      <div className='card'>
            <img src={this.state.product.image} alt="image" /> 
            <h1>{this.state.product.title}</h1>
            <h3>{this.state.product.price}</h3>
            
      </div>
    )
  }
}

export default Classcomponent3
