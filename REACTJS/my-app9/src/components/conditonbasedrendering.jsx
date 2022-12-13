


import React, { Component } from 'react'

export class Conditonbasedrendering extends Component {
    constructor(){
        super();
        this.state={
            images:["https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg",
            "https://www.w3schools.com/css/img_lights.jpg","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"],
            
            showPictures:false,
            
        }
        this.showImages=this.showImages.bind(this)
    };
    showImages(){
        this.setState({showPictures:true})
    }
  render() {
    return (
      <div>
              <h2>welocme to image galary</h2>
            
              <button onClick={this.showImages}>display images</button>
              <hr/>
              <div> {this.state.showPictures ? this.state.images.map((ele,i)=> <img key={i} style={{width:150,height:100,marginRight:10}} src={ele} alt="nature"/>):
                <p>there is no images</p>}</div> 
                
      </div>
    )
  }
}

export default Conditonbasedrendering
