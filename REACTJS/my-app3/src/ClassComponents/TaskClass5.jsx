import { Component } from "react";

export class ParentClass5 extends Component{
    render(){
        return (
            <div>
                <h1>From Parent class 5</h1>
            </div>
        )
    }
}

export class ChildClass5 extends Component{
    render(){
        return(
            <div>
                <h1>From Child Class 5</h1>
            </div>
        )
    }
}

export default class Mainclass5 extends Component{
    render(){
        return(
            <div>
                <h1>From Main class 5</h1>
                <ParentClass5/>
                <ChildClass5/>
            </div>
        )
    }
}

