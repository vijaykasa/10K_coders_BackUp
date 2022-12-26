import React from 'react'
import { MyContextProvider } from './main'
import { useState } from 'react'
import Child2 from './child2'

export default function Parent() {
    const [data,useData]=useState({
        fname:"vijay",
        lname:"kumar"
    })
    // const ChangeName=()=>{
    //     const user={
    //         fname:"raju",
    //         lname:"kumar"
    //     }
    //     useData(user)
    // }
  return (
    <div>
    <h1>hello</h1>
      <MyContextProvider value={data}>
        <Child2/>
      </MyContextProvider>
    </div>
  )
}
