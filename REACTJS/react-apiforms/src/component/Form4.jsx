import React, { Component } from "react";
import axios from 'axios';

export class Form4 extends Component {
  constructor() {
    super();
    this.state = {
      student: {
        id:"",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        percentage: "",
        experince: "",
        gender: "",
        website: "",
        subjects: [],
      },
      allstudents: [
      ],
      index: null,
    };
  }
  capture = (e) => {
    let newstudent = { ...this.state.student };
    
    if (e.target.name === "gender") {
      newstudent[e.target.name] = e.target.value;
   
    } else if (e.target.name === "subjects") {
      
        if (this.state.student.subjects.length === 0) {
        newstudent.subjects.push(e.target.value);
      
        } else {
        var check = this.state.student.subjects.find(
          (val) => val === e.target.value
        );
           
             if (check) {
              newstudent.subjects = this.state.student.subjects.filter(
              (val) => val !== e.target.value );
        
            } else {
             newstudent.subjects.push(e.target.value);
            }
        }
    } else {
      newstudent[e.target.name] = e.target.value;
    }
    this.setState({ student: newstudent });
  };
 
  adduser = () => {
    axios({
        method:"post",
        url:"http://localhost:3002/studentdata",
        data:this.state.student,
        header:{
            "contenr-Type":"application/json"
        }
   }).then((res)=> this.getdata())
    this.clearForm();
  };
  getdata = async () =>{
    let response=await axios.get("http://localhost:3002/studentdata")
    this.setState({allstudents:response.data})
}
 
  clearForm = () => {
    let empty = {
      university: "",
      institute: "",
      branch: "",
      degree: "",
      percentage: "",
      experince: "",
      gender: "",
      website: "",
      subjects: [],
    };
    this.setState({ student: empty });
  };
  edituser = (val, ind) => {
    this.setState({ student: val, index: ind });
  };
  updateuser = () => {
    axios({
        method:"PUT",
        url:"http://localhost:3002/studentdata/"+this.state.student.id,
        data:this.state.student,
        header:{
            "contenr-Type":"application/json"
        }
   }).then((res)=> this.getdata())
    this.clearForm();
  };
  deleteuser = (val, ind) => {
    axios({
        method:"DELETE",
            url:"http://localhost:3002/studentdata/"+val.id,
           
       }).then((res)=> this.getdata())
      };
  render() {
    let {
      university,
      institute,
      branch,
      degree,
      percentage,
      experince,
      gender,
      website,
      subjects,
    } = this.state.student;
    return (
      <div className="container wrapper">
        <div className="row">
          <div className="col-4 border p-3">
            <fieldset>
              <legend>Registration</legend>
              <form>
                <label className="form-label">University :</label>
                <input
                  type="text"
                  className="form-control"
                  name="university"
                  value={university}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                />
                <label className="form-label">Institute :</label>
                <input
                  type="text"
                  className="form-control"
                  name="institute"
                  value={institute}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                />
                <label className="form-label">Branch :</label>
                <select
                  className="form-select"
                  name="branch"
                  value={branch}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                >
                  <option>select branch</option>
                  <option value={"Mechanical"}>Mechanical</option>
                  <option value={"Electrical"}>Electrical</option>
                  <option value={"Civil"}>Civil</option>
                </select>
                <label className="form-label">Degree:</label>
                <select
                  className="form-select"
                  name="degree"
                  value={degree}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                >
                  <option>select degree</option>
                  <option value={"B-Tech"}>B-Tech</option>
                  <option value={"Diploma"}>Diploma</option>
                  <option value={"Degree"}>Degree</option>
                </select>
                <label className="form-label">percentage :</label>
                <input
                  type="number"
                  className="form-control"
                  name="percentage"
                  value={percentage}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                />
                <label className="form-label">Experince :</label>
                <input
                  type="number"
                  className="form-control"
                  name="experince"
                  value={experince}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                />
                <input
                  type={"radio"}
                  name={"gender"}
                  value={"male"}
                  checked={this.state.student.gender === "male"}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                />
                <label>male</label>
                <br />
                <input
                  type={"radio"}
                  name={"gender"}
                  value={"female"}
                  checked={this.state.student.gender === "female"}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                />
                <label>female</label>
                <br />
                <label className="form-label">Website :</label>
                <input
                  type="url"
                  className="form-control"
                  name="website"
                  value={website}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                />
                <br />
                <input
                  type={"checkbox"}
                  name="subjects"
                  value={"HTML"}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                  checked={this.state.student.subjects.indexOf("HTML") > -1}
                />
                HTML
                <br />
                <input
                  type={"checkbox"}
                  name="subjects"
                  value={"CSS"}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                  checked={this.state.student.subjects.indexOf("CSS") > -1}
                />
                CSS <br />
                <input
                  type={"checkbox"}
                  name="subjects"
                  value={"REACT"}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                  checked={this.state.student.subjects.indexOf("REACT") > -1}
                />
                REACT
                <br />
                <input
                  type={"checkbox"}
                  name="subjects"
                  value={"JAVASCRIPT"}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                  checked={
                    this.state.student.subjects.indexOf("JAVASCRIPT") > -1
                  }
                />
                JAVASCRIPT
                <br />
              </form>
              {this.state.index == null ? (
                <button className="btn btn-primary mt-3" onClick={this.adduser}>
                  submit
                </button>
              ) : (
                <button
                  className="btn btn-primary mt-3"
                  onClick={this.updateuser}
                >
                  update
                </button>
              )}
            </fieldset>
          </div>
          <div className="col-8">
            <table className="table">
              <thead>
                <tr>   
                  {Object.keys(this.state.student).map((val, i) => (
                    <th key={i}>{val}</th>
                  ))}
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.allstudents.map((val, ind) => (
                  <tr key={ind}>
                    {/* <td>{val.university}</td> */}  
                    {Object.values(val).map((ele, i) => (
                      <td key={i}>{ele}</td>
                    ))}
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          this.edituser(val, ind);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.deleteuser(val, ind);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  async componentDidMount(){
    let response=await axios.get("http://localhost:3002/studentdata")
    this.setState({allstudents:response.data})
  }
}

export default Form4;
