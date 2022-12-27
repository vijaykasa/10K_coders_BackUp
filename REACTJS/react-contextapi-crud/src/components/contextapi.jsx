import React from 'react'
import { createContext } from 'react'
import { useEffect,useState } from 'react'
import { useContext } from 'react'
import { useParams, useNavigate } from "react-router-dom";


const MyContext=createContext()
export const MyContextProvider=({children})=>{
    const navigate= useNavigate()
    const [user,setUser]=useState({
        fullname:"",
        username:"",
        email:""
    })
    const handlechange=(e)=>{
        let newuser={...user}
        newuser[e.target.name]=e.target.value
        setUser(newuser)
    }
    const adduser=()=>{
        fetch("http://localhost:3015/useres",{
            method:"post",
            body:JSON.stringify(user),
            headers:{
                "content-Type":"application/json"
            }
        }).then((response)=>{
            getAllData();
            navigate('/')
        })
    }
    const [users,setUsers]=useState(
       []
    )
    useEffect(()=>{
     getAllData()
    },[])
    const getAllData = async () => {
    let data=await (await fetch("http://localhost:3015/useres")).json()
    setUsers(data)
    }
    return <MyContext.Provider value={{users,user,handlechange,adduser}}>
        {children}
    </MyContext.Provider>
}

export const MyContextConsumer=()=>{
  return useContext(MyContext)
}