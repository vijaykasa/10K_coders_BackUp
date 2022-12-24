import React from "react";

const UserForm = ({ handleChange, user, handleSubmit, btntext }) => {
  console.log(user);
  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 ">
        <label className="form-label">FirstName :</label>
        <input
          className="form-control"
          type="text"
          name="firstname"
          value={user.firstname}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label className="form-label">LastName :</label>
        <input
          className="form-control"
          type="text"
          name="lastname"
          value={user.lastname}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label className="form-label">Email :</label>
        <input
          className="form-control"
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button className="btn btn-primary mt-5" onClick={handleSubmit}>
          {btntext}
        </button>
      </div>
    </div>
  );
};

export default UserForm;
