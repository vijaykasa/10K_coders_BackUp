import { Component } from "react";

export class ParentClass4 extends Component{
    render(){
        return (
            <div>
                <h1>From Parent class 4</h1>
            </div>
        )
    }
}

export class ChildClass4 extends Component{
    render(){
        return(
            <div>
                <h1>From Chid Class 4</h1>
            </div>
        )
    }
}

export default class Mainclass extends Component{
    render(){
        return(
            <div>
                <h1>From Main class 4</h1>
                <ParentClass4/>
                <ChildClass4/>
            </div>
        )
    }
}

