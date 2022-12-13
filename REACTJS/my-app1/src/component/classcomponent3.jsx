import { Component } from "react";

export default class Maincomp extends Component{
    render(){
        return <h1>from multiple component:main class</h1>
    }
}
export class Childcomp1 extends Component{
    render(){
        return <h1>from multiple component:child class1</h1>
    }
}
export class Childcomp2 extends Component{
    render(){
        return <h1>from multiple component:child class2</h1>
    }
}