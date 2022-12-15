import React, { Component } from "react";
import "./form3.css";

export class Form2 extends Component {
  constructor() {
    super();
    this.state = {
      address: {
        street: "",
        second_line: "",
        city: "",
        state: "",
        zip_code: "",
        country: "",
      },
      addressArray: [],
      index: null,
    };
    this.capture = this.capture.bind(this);
    this.display = this.display.bind(this);
  }
  capture(e) {
    let newaddress = { ...this.state.address };
    newaddress[e.target.name] = e.target.value;
    this.setState({ address: newaddress });
  }
  display() {
    console.log(this.state.address);
    var newarray = [...this.state.addressArray];
    newarray.push(this.state.address);
    this.setState({ addressArray: newarray });
    this.clearform()
  }
  clearform = () => {
    var empty = {
      street: "",
      second_line: "",
      city: "",
      state: "",
      zip_code: "",
      country: "",
    };
    this.setState({ address: empty });
  };
  edituser = (val, ind) => {
    this.setState({ address: val, index: ind });
  };
  update = () => {
    var updateuser = [...this.state.addressArray];
    updateuser[this.state.index] = this.state.address;
    this.setState({ addressArray: updateuser, index: null });
    this.clearform();
  };
  deleteuser = (val, ind) => {
    let deleteuser = this.state.addressArray.filter((usr, i) => i !== ind);
    this.setState({ addressArray: deleteuser });
  };
  render() {
    return (
      <div className="holecontainer">
        <div className="content">
          <h3>Address</h3>
          <hr />
          <label>street :</label>
          <input
            type={"text"}
            name={"street"}
            value={this.state.address.street}
            onChange={(e) => {
              this.capture(e);
            }}
          />
          <br />
          <label>street :</label>
          <input
            type={"text"}
            name={"second_line"}
            value={this.state.address.second_line}
            onChange={(e) => {
              this.capture(e);
            }}
          />
          <br />
          <label>City</label>
          <span>,</span> <label>State</label>
          <input
            type={"text"}
            name={"city"}
            value={this.state.address.city}
            onChange={(e) => {
              this.capture(e);
            }}
          />
          <input
            type={"text"}
            name={"state"}
            
            value={this.state.address.state}
            onChange={(e) => {
              this.capture(e);
            }}
          />
          <br />
          <label>Zip ccode :</label>
          <input
            type={"text"}
            name={"zip_code"}
            value={this.state.address.zip_code}
            onChange={(e) => {
              this.capture(e);
            }}
          />
          <br />
          <label>Country :</label>
          <input
            type={"text"}
            name={"country"}
            value={this.state.address.country}
            onChange={(e) => {
              this.capture(e);
            }}
          />
          <br />
          {this.state.index === null ? 
          <button className="btn btn-primary" onClick={this.display}>
            submit
          </button>:<button className="btn btn-primary" onClick={this.update}>
            update
          </button>}
        </div>
        <div className="tabledata">
          <table className="table ms-2">
            <thead>
              <tr>
                <th>#</th>
                {Object.keys(this.state.address).map((val, i) => (
                  <th key={i}>{val}</th>
                ))}
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.addressArray.map((val, ind) => (
                <tr key={ind}>
                  {/* <td>{val.university}</td> */}
                  <td>{ind + 1}</td>
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
    );
  }
}

export default Form2;
