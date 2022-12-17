import React, { Component } from "react";

export class Form3 extends Component {
  constructor() {
    super();
    this.state = {
      data: { gender: "", range:null, subjects: [] },
      arraydata:[],
    };
  }
  showgender = (e) => {
    console.log(e.target.name);
    var values = { ...this.state.data };

    if (e.target.name === "range") {
      values.range = e.target.value;
      this.setState({ data: values });
    } else if (e.target.name === "gender") {
      values.gender = e.target.value;
      this.setState({ data: values });
    } else if (e.target.name === "subjects") {
      if (this.state.data.subjects.length === 0) {
        var newsubjects = [];
        newsubjects.push(e.target.value);
        values.subjects = newsubjects;
        this.setState({ data: values });
      } else {
        var check = this.state.data.subjects.find(
          (val) => val === e.target.value
        );
        if (check) {
           newsubjects = this.state.data.subjects.filter(
            (val) => val !== e.target.value
          );
          values.subjects = newsubjects;
        } else {
          newsubjects = [...this.state.data.subjects];
          newsubjects.push(e.target.value);
          values.subjects = newsubjects;
        }
        this.setState({ data: values });
      }
    }
  };
  edituser = (val) => {
    this.setState({ data:val });
  };
  show = () => {
  
     var newarraydata=[...this.state.arraydata]
     newarraydata.push(this.state.data)
     this.setState({arraydata:newarraydata})
    this.clearform();
  };
  clearform = () => {
    var empty = {
      gender:"",
      range:5,
      subjects:[],
    };

    this.setState({data: empty });
  };
  render() {
    return (
      <div>
        <input
          type={"radio"}
          name="gender"
          value={"male"}
          checked={this.state.data.gender === "male"}
          onChange={(e) => {
            this.showgender(e);
          }}
        />
        male <br />
        <input
          type={"radio"}
          name="gender"
          value={"female"}
          checked={this.state.data.gender === "female"}
          onChange={(e) => {
            this.showgender(e);
          }}
        />
        female <br />
        <input
          type={"checkbox"}
          name="subjects"
          value={"HTML"}
          onChange={(e) => {
            this.showgender(e);
          }}
          checked={this.state.data.subjects.indexOf("HTML") > -1}
        />
        HTML
        <br />
        <input
          type={"checkbox"}
          name="subjects"
          value={"CSS"}
          onChange={(e) => {
            this.showgender(e);
          }}
          checked={this.state.data.subjects.indexOf("CSS") > -1}
        />
        CSS <br />
        <input
          type={"checkbox"}
          name="subjects"
          value={"REACT"}
          onChange={(e) => {
            this.showgender(e);
          }}
          checked={this.state.data.subjects.indexOf("REACT") > -1}
        />
        REACT
        <br />
        <input
          type={"checkbox"}
          name="subjects"
          value={"JAVASCRIPT"}
          onChange={(e) => {
            this.showgender(e);
          }}
          checked={this.state.data.subjects.indexOf("JAVASCRIPT") > -1}
        />
        JAVASCRIPT
        <br />
        <input
          type={"range"}
          name="range"
          max={"5"}
          min={"0"}
          step={"0.1"}
          value={this.state.data.range}
          onChange={(e) => {
            this.showgender(e);
          }}
        />
        <span>{this.state.data.range}</span>
        <button onClick={this.show}>enter</button>
        


        <div>
          {this.state.arraydata.map((val,i)=>  <ul key={i}><li>{"gender : "+val.gender}</li><li>{"rating : "+val.range}</li>
          <li>{"subjects : "+val.subjects}</li> <li><button onClick={()=>{this.edituser(val)}}>edit</button></li></ul>)}
        </div>
      </div>
    );
  }
}

export default Form3;
