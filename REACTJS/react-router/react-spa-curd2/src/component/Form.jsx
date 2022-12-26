import React from 'react'

export default function Form({data,handlechange,handlesubmit,btntext}) {
    const { university,
    institute,
    branch,
    degree,
    percentage,
    experince,
    gender,
    website,
    subjects}=data
  return (
    <div className='container w-50 bg-dark text-light '>
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
                    handlechange(e);
                  }}
                />
                <label className="form-label">Institute :</label>
                <input
                  type="text"
                  className="form-control"
                  name="institute"
                  value={institute}
                  onChange={(e) => {
                    handlechange(e);
                  }}
                />
                <label className="form-label">Branch :</label>
                <select
                  className="form-select"
                  name="branch"
                  value={branch}
                  onChange={(e) => {
                    handlechange(e);
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
                    handlechange(e);
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
                    handlechange(e);
                  }}
                />
                <label className="form-label">Experince :</label>
                <input
                  type="number"
                  className="form-control"
                  name="experince"
                  value={experince}
                  onChange={(e) => {
                    handlechange(e);
                  }}
                />
                <input
                className='me-3'
                  type={"radio"}
                  name={"gender"}
                  value={"male"}
                  checked={data.gender === "male"}
                  onChange={(e) => {
                    handlechange(e);
                  }}
                />
                <label className='form-label me-3'>male</label>
                
                <input
                className='me-3'
                  type={"radio"}
                  name={"gender"}
                  value={"female"}
                  checked={data.gender === "female"}
                  onChange={(e) => {
                    handlechange(e);
                  }}
                />
                <label className='me-3'>female</label>
                <br/>
                <label className="form-label">Website :</label>
                <input
                  type="url"
                  className="form-control"
                  name="website"
                  value={website}
                  onChange={(e) => {
                    handlechange(e);
                  }}
                />
                <input
                className='me-3'
                  type={"checkbox"}
                  name="subjects"
                  value={"HTML"}
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  checked={data.subjects.indexOf("HTML") > -1}
                />
                <label className='me-3'>HTML</label>
                <input
                 className='me-3'
                  type={"checkbox"}
                  name="subjects"
                  value={"CSS"}
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  checked={data.subjects.indexOf("CSS") > -1}
                />
                <label className='me-3'>CSS</label>
                <input
                 className='me-3'
                  type={"checkbox"}
                  name="subjects"
                  value={"REACT"}
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  checked={data.subjects.indexOf("REACT") > -1}
                />
                <label className='me-3'>REACT</label>
          
                <input
                 className='me-3'
                  type={"checkbox"}
                  name="subjects"
                  value={"JAVASCRIPT"}
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  checked={
                    data.subjects.indexOf("JAVASCRIPT") > -1
                  }
                />
                <label className='me-3'>JAVASCRIPT</label>
          
              </form>
               
                <button
                  className="btn btn-primary mt-3"
                  onClick={handlesubmit}
                >
                  {btntext}
                </button>
              
      </fieldset>
    </div>
  )
}
