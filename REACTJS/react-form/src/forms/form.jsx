import React, { Component } from "react";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
      allusers: [],
      index:null,
    };
  }
  handleChange = (e) => {
   var newuser={...this.state.user}
    newuser[e.target.name]=e.target.value
    this.setState({ user: newuser})
   
  };
  adduser=()=>{
    let newallusers=[...this.state.allusers]
    newallusers.push(this.state.user)
    this.setState({ allusers: newallusers})
   this.clearform()
    //this.state.allusers.push(this.state.user)
  }
  clearform=()=>{
     let empty={
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
     }
     this.setState({ user: empty})
  }
  
  edituser=(val,i)=>{
    this.setState({user:val , index:i})
  }
  updateuser=()=>{
    var updateuser=[...this.state.allusers]
    updateuser[this.state.index]=this.state.user
    this.setState({allusers:updateuser , index:null})
    this.clearform()
  }
  deleteuser=(val,i)=>{
       let deleteuser = this.state.allusers.filter((usr)=> usr.fullname !== val.fullname)
       this.setState({allusers:deleteuser})
  }

  render() {
    let { fullname, username, email, password, confirmpassword } =
      this.state.user;
    return (
      <div>
        <label className="form-label">Name :</label>
        <input
          type={"text"}
          className="form-control"
          name="fullname"
          value={fullname}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <label className="form-label">User Name :</label>
        <input
          type={"text"}
          className="form-control"
          name="username"
          value={username}
          onChange={(e) => {
            this.handleChange(e)
          }}
        />
        <label className="form-label">Email :</label>
        <input
          type={"email"}
          className="form-control"
          name="email"
          value={email}
          onChange={(e) => {
            this.handleChange(e)
          }}
        />
        <label className="form-label">Password :</label>
        <input
          type={"password"}
          className="form-control"
          name="password"
          value={password}
          onChange={(e) => {
            this.handleChange(e)
          }}
        />
        <label className="form-label">Confirm Password :</label>
        <input
          type={"password"}
          className="form-control"
          name="confirmpassword"
          value={confirmpassword}
          onChange={(e) => {
            this.handleChange(e)
          }}
        />
        {this.state.index == null ? <button className="btn btn-primary mt-3" onClick={this.adduser}>submit</button>
        : <button className="btn btn-primary mt-3" onClick={this.updateuser}>update</button>
        }
       
        <div>
          <table className="table  mt-3">
            <thead>
              <tr>
                <th >#</th>
                <th >Name</th>
                <th >User Name</th>
                <th >Email</th>
                <th >Password</th>
                <th >confirm password</th>
                <th >Edit</th>
                <th >Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allusers.map((val, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{val.fullname}</td>
                  <td>{val.username}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td>{val.confirmpassword}</td>
                  <td><button className="btn btn-warning" onClick={()=>{this.edituser(val,i)}}>Edit</button></td>
                  <td><button className="btn btn-danger" onClick={()=>{this.deleteuser(val,i)}}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Form;
