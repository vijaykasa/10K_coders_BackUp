import { Component } from "react";


import  axios  from "axios";

class Form3 extends Component {
  constructor() {
    super();
    this.state = {
      userdetails: {
        firstname: "",
        lastname: "",
        dob: "",
        email: "",
        number: "",
      },
      arrayofusers: [],
      index: null,
    };
  }
  handleChange = (e) => {
    var newuser = { ...this.state.userdetails };
    newuser[e.target.name] = e.target.value;
    this.setState({ userdetails: newuser });
  };
  adduser = () => {
    axios({
        method:"post",
        url:"http://localhost:3002/userdata2",
        data:this.state.userdetails,
        header:{
            "contenr-Type":"application/json"
        }
   }).then((res)=> this.getdata())
    this.clearForm();
  };
    getdata = async () =>{
        let response=await axios.get("http://localhost:3002/userdata2")
        this.setState({arrayofusers:response.data})
  }
  clearForm = () => {
    var empty = {
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
      number: "",
    };
    this.setState({ userdetails: empty });
  };
  deleteUser = (usr, ind) => {
    axios({
    method:"DELETE",
        url:"http://localhost:3002/userdata2/"+usr.id,
       
   }).then((res)=> this.getdata())
  };
  editUser = (usr, ind) => {
    this.setState({ userdetails: usr, index: ind });
  };
  updateuser = () => {
    axios({
        method:"PUT",
        url:"http://localhost:3002/userdata2/"+this.state.userdetails.id,
        data:this.state.userdetails,
        header:{
            "contenr-Type":"application/json"
        }
   }).then((res)=> this.getdata())
    this.clearForm();
  };
  render() {
    const { firstname, lastname, dob, email, number } = this.state.userdetails;
    return (
      <div>
        <form>
          <label htmlFor="">FirstName :</label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">LastName :</label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">DateOfBirth :</label>
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Email :</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Mobile :</label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          {this.state.index == null ? (
            <button
              type="button"
              onClick={this.adduser}
              className="btn btn-primary"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={this.updateuser}
              className="btn btn-primary"
            >
              Update
            </button>
          )}
        </form>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>lastName</th>
              <th>DateOFBirth</th>
              <th>Email</th>
              <th>MobileNumber</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrayofusers.map((usr, ind) => (
              <tr key={ind}>
                <td>{usr.firstname}</td>
                <td>{usr.lastname}</td>
                <td>{usr.dob}</td>
                <td>{usr.email}</td>
                <td>{usr.number}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.editUser(usr, ind);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteUser(usr, ind);
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
    );
  }
  async componentDidMount(){
    let response=await axios.get("http://localhost:3002/userdata2")
    this.setState({arrayofusers:response.data})
  }
}
export default Form3;
