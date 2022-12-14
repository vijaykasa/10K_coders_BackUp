import React, { Component } from 'react'
import './form2.css'

export class Form1 extends Component {
    constructor() {
        super();
        this.state = {
          student: {
            university: "",
            institute: "",
            branch: "",
            degree: "",
            percentage: "",
            experince: "",
            website: "",
          },
          allstudents:[
            {university:"Jntu",
            institute: "wise",
            branch: "Mechanical",
            degree:"B-Tech",
            percentage:"78",
            experince:"1",
            website: "google.com"
        }
          ],
          index:null
        };
      }
      capture=(e)=>{
        console.log(e.target.name)
          let newstudent={...this.state.student}
           newstudent[e.target.name]=e.target.value;
           this.setState({student:newstudent})
      }
      adduser=()=>{
           console.log(this.state.student)
          let newallstudents=[...this.state.allstudents]
          newallstudents.push(this.state.student)
          this.setState({allstudents:newallstudents})
          this.clearform()
      }
      clearform=()=>{
        let empty={
            university: "",
            institute: "",
            branch: "",
            degree: "",
            percentage: "",
            experince: "",
            website: "",
        }
        this.setState({student:empty})
      }
      edituser=(val,ind)=>{
        this.setState({student:val, index:ind})
      }
      updateuser=()=>{
        var updateuser=[...this.state.allstudents]
        updateuser[this.state.index]=this.state.student
        this.setState({allstudents:updateuser , index:null})
        this.clearform()
      }
      deleteuser=(val,ind)=>{
           let deleteuser = this.state.allstudents.filter((usr)=> usr.percentage !== val.percentage)
           this.setState({allstudents:deleteuser})
      }
      render() {
        let {
          university,
          institute,
          branch,
          degree,
          percentage,
          experince,
          website,
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
                  <option>select branch</option>
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
                <label className="form-label">Experince :</label>
                <input
                  type="url"
                  className="form-control"
                  name="website"
                  value={website}
                  onChange={(e) => {
                    this.capture(e);
                  }}
                />
               
              </form>
              {this.state.index==null ? <button className="btn btn-primary mt-3" onClick={this.adduser}>submit</button>:
              <button className="btn btn-primary mt-3" onClick={this.updateuser}>update</button>
              }
            </fieldset>
          </div>
           <div className="col-8">
           <table className="table">
                 <thead>
                    <tr>
                        <th>#</th>
                        {Object.keys(this.state.student).map((val,i)=> <th key={i}>{val}</th>)}
                        <th>Edit</th><th>Delete</th>
                    </tr>
                 </thead>
                 <tbody>
                     {this.state.allstudents.map((val,ind)=><tr key={ind}>
                     {/* <td>{val.university}</td> */}
                     <td>{ind+1}</td>
                        {Object.values(val).map((ele,i)=><td key={i}>{ele}</td>)}
                       <td><button className="btn btn-warning" onClick={()=>{this.edituser(val,ind)}}>Edit</button></td>
                       <td><button className="btn btn-danger" onClick={()=>{this.deleteuser(val,ind)}}>Delete</button></td>
                     </tr>)}
    
                 </tbody>
            </table>
           </div> 
          </div>
            </div>
         
        );
      }
    }

export default Form1
