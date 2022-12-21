import React from "react";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function PhoneBook() {
  const [contact, setContact] = useState({
    Name: "",
    Number: "",
  });
  const [allcontacts, setallContacts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    getAllContacts();
  }, []);
  let handelChange = (e) => {
    let newContact = { ...contact };
    newContact[e.target.name] = e.target.value;
    setContact(newContact);
  };
  let handleSubmit = () => {
    axios.post("http://localhost:3005/contacts", contact).then(() => {
      getAllContacts();
      clearForm();
    });
  };
  const getAllContacts = () => {
    axios.get("http://localhost:3005/contacts").then((response) => {
      console.log(response.data);
      setallContacts(response.data);
    });
  };
  const editContact = (ele) => {
    setIsEdit(true);
    setContact(ele);
  };
  const deleteContact = (ele) => {
    axios.delete("http://localhost:3005/contacts/" + ele.id).then(() => {
      getAllContacts();
    });
  };
  const handleUpdate = () => {
    axios
      .put("http://localhost:3005/contacts/" + contact.id, contact)
      .then(() => {
        getAllContacts();
        setIsEdit(false);
        clearForm();
      });
  };
  let clearForm = () => {
    let empty = {
      Name: "",
      Number: "",
    };
    setContact(empty);
  };
  return (
    <div>
      <div className="inputs">
        <label className="form-label">Name :</label>
        <input
          className="form-control"
          type="text"
          name="Name"
          placeholder="Enter Contact Name"
          value={contact.Name}
          onChange={(e) => {
            handelChange(e);
          }}
        />
        <label className="form-label">Number :</label>
        <input
          className="form-control"
          type="tel"
          name="Number"
          placeholder="Enter Contact Number"
          value={contact.Number}
          onChange={(e) => {
            handelChange(e);
          }}
        />

        {isEdit ? (
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={handleUpdate}
          >
            Update
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
        <hr />
        <div className="m-3">
          <h3>Phone Book</h3>
          {allcontacts.map((ele, i) => (
            <div className="display mb-3" key={i}>
              <div className="icon">
                <i className="far fa-user"></i>
              </div>
              <div className="contact">
                <p>{ele.Name}</p>
                <p>
                  <span>+91</span>
                  {ele.Number}
                </p>
              </div>
              <div className="editIcons">
                <div
                  className="fas fa-pen"
                  onClick={() => editContact(ele)}
                ></div>
                <div
                  className="fas fa-trash"
                  onClick={() => deleteContact(ele)}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
