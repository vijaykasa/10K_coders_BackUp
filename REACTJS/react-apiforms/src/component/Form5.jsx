import axios from 'axios';
import React, { Component } from 'react';

export default class Form5 extends Component {
    constructor(){
        super();
        this.state={
            address:{
                id:"",
                street:"",
                city:"",
                state:"",
                zipcode:"",
                country:""
            },
            allUsers:[],
            index:null,
        }
    }

    handleForm=(e)=>{
        var newaddress={...this.state.person}
        newaddress[e.target.name]=e.target.value 
        this.setState({address:newaddress})
    }

    addUser=()=>{
        axios({
            method:"post",
            url:"http://localhost:3002/address",
            data:this.state.address,
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>this.getdata()) 
            this.clearForm()
    }


    clearForm=()=>{
         var  empty={
            id:"",
            street:"",
            city:"",
            state:"",
            zipcode:"",
            country:""
        };
        this.setState({address:empty})
    }

    editUser=(val,i)=>{
 this.setState({address:val,index:i})
    }

    deleteUser=(val,id)=>{
        axios.delete("http://localhost:3002/address/"+val.id).then((res)=>
        this.getdata()
        )
    }
     getdata=async()=>{
        var response=await axios("http://localhost:3002/address")
        this.setState({allUsers:response.data})
     }
 
    updateUser=()=>{
        axios({
            method:"put",
            url:"http://localhost:3002/address"+this.state.address.id,
            data:this.state.address
        }).then((res)=>this.getdat())
      
      this.clearForm()
    }

    render() {
        return (
            <div>
                <form action="">
                <label >Id:</label>
                    <input type="number" name="Id" value={this.state.person.id}  onChange={(e)=>{this.handleForm(e)}} disabled />
                    <label >Street:</label>
                    <input type="text" name="street" value={this.state.person.street}  onChange={(e)=>{this.handleForm(e)}}/>
                    <br /><br />
                    <label >City,State:</label>
                    <input type="text" name="city" value={this.state.person.city}  onChange={(e)=>{this.handleForm(e)}}/>&nbsp;
                    <input type="text" name="state" style={{width:"40px"}} value={this.state.person.state}  onChange={(e)=>{this.handleForm(e)}} />
                    <br /><br />
                    <label >Zip Code:</label>
                    <input type="text" name="zipcode"  value={this.state.person.zipcode}  onChange={(e)=>{this.handleForm(e)}} />
                    <br /><br />
                    <label >Country:</label>
                    <input type="text" name="country" value={this.state.person.country} onChange={(e)=>{this.handleForm(e)}} />
                    <br /><br />
                    {this.state.editIndex !== null ? <button type='button' className='btn btn-primary' onClick={this.updateUser}>Update User</button> :
                    <button type='button' className='btn btn-primary' onClick={this.addUser}>Add User</button>}
                </form>
                <br />
                <table className='table'>
                    <thead>
                        <th>id</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Country</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((val,i)=>
                          <tr key={i}>
                            <td>{val.id}</td>
                            <td>{val.street}</td>
                            <td>{val.city}</td>
                            <td>{val.state}</td>
                            <td>{val.zipcode}</td>
                            <td>{val.country}</td>
                            <td><button type="button" className='btn btn-warning' onClick={()=>{this.editUser(val,i)}}>EDIT</button></td>
                            <td><button type="button" className='btn btn-danger' onClick={()=>{this.deleteUser(val,i)}}>DELETE</button></td>
                          </tr>   
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
   async componentDidMount(){
            var response=await axios("http://localhost:3002/adress")
            console.log(response)
             this.setState({allUsers:response.data})
    }
}