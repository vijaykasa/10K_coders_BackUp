import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function User({data}) {
    const navigate = useNavigate();
    const handleDelete = (data) => {
      console.log(data.id);
      navigate("/delete/" + data.id);
    };
    const handleEdit = (data) => {
      navigate("/edit/" + data.id);
    };
  return (
      <tr>
        {Object.values(data).map((ele,i)=> <td key={i}>{ele}</td>
        )}
        <td ><button className='btn btn-warning'onClick={() => {
            handleEdit(data);
          }}  >Edit</button></td>
        <td ><button className='btn btn-danger'onClick={() => {
            handleDelete(data);
          }}>Delete</button></td>
      </tr>  
  )
}
