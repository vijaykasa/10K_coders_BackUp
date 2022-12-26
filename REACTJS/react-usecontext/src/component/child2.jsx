import React from 'react'
import { MyContextConsumer, MyContextProvider } from './main'

export default function Child2() {
  return (
    <div>
       <MyContextConsumer>
          {(userinfo)=>{
           return  <>
             <h1>{userinfo.lname}</h1>
             <button >change</button>
             </> 
          }}
       </MyContextConsumer>
    </div>
  )
}
