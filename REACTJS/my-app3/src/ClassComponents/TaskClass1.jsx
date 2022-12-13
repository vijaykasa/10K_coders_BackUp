import { Component } from "react";

export class ParentClass extends Component{
    render(){
        return (
            <div>
                <h1>From Parent class 1</h1>
            </div>
        )
    }
}

export class ChildClass extends Component{
    render(){
        return(
            <div>
                <h1>From Chid Class 1</h1>
            </div>
        )
    }
}

export default class Mainclass extends Component{
    render(){
        return(
            <div>
                <h1>From Main class 1</h1>
                <ParentClass/>
                <ChildClass/>
            </div>
        )
    }
}

