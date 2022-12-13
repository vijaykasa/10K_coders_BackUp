import { Component } from "react";

export class ParentClass3 extends Component{
    render(){
        return (
            <div>
                <h1>From Parent class 3</h1>
            </div>
        )
    }
}

export class ChildClass3 extends Component{
    render(){
        return(
            <div>
                <h1>From Chid Class 3</h1>
            </div>
        )
    }
}

export default class Mainclass extends Component{
    render(){
        return(
            <div>
                <h1>From Main class 3</h1>
                <ParentClass3/>
                <ChildClass3/>
            </div>
        )
    }
}

