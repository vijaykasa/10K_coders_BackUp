import { Component } from "react";

export class ParentClass2 extends Component{
    render(){
        return (
            <div>
                <h1>From Parent class 2</h1>
            </div>
        )
    }
}

export class ChildClass2 extends Component{
    render(){
        return(
            <div>
                <h1>From Child Class 2</h1>
            </div>
        )
    }
}

export default class Mainclass2 extends Component{
    render(){
        return(
            <div>
                <h1>From Main class 2</h1>
                <ParentClass2/>
                <ChildClass2/>
            </div>
        )
    }
}

