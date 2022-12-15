import { Component } from "react";

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
    var newuserdata = [...this.state.arrayofusers];
    newuserdata.push(this.state.userdetails);
    this.setState({ arrayofusers: newuserdata });
    this.clearForm();
  };
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
    var latestInfo = this.state.arrayofusers.filter((usr, i) => i !== ind);
    this.setState({ arrayofusers: latestInfo });
  };
  editUser = (usr, ind) => {
    this.setState({ userdetails: usr, index: ind });
  };
  updateuser = () => {
    var updateuser = [...this.state.arrayofusers];
    updateuser[this.state.index] = this.state.userdetails;
    this.setState({ arrayofusers: updateuser, index: null });
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
}
export default Form3;
