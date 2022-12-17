import React, { Component } from "react";


export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to Life Cycles",
      showImage: true,
    };
    console.log("LifeCycleA Constructor Triggered !!");
  }
  changeMessage = () => {
    this.setState({
      message: "This Message will Change from Welcome to Life Cycle A !!",
    });
  };
  showHideImage = () => {
    this.setState({ showImage: !this.state.showImage });
  };
  render() {
    console.log("LifeCycleA render Triggered !!");

    return (
      <div>
        {this.state.showImage && (<Child/>)}
        <button onClick={this.changeMessage}>Get Values From Server</button>

        <button onClick={this.showHideImage}>Show/Hide</button>
      </div>
    );
  }
 
  componentDidMount() {
    con
    
    sole.log("LifeCycleA componentDidMount Triggered !!");
  }
  shouldComponentUpdate(){
    return true
  }
  componentDidUpdate() {
    console.log("lifecycleA componentUpdate triggered");
  }
 
}

export class Child extends Component{
    render(){
        return <img
        width={"200"}
        src="./4K-Black-Wallpapers-scaled.jpg"
        alt="nature"
      />
    }
    componentWillUnmount() {
        console.log("LifeCycleA child componentwillUnmount triggred");
      }
     
}



// Component Mounting Phase
// 1. Constructor
// 2. Render
// 3. Component Did Mount

// Component Update Phase
// 1. shouldComponentUpdate
// 2. Render
// 3. componentDidUpdate

// Component Unmountning Phase
// 1. componentWillUnmount

// fetch
// axios cd
