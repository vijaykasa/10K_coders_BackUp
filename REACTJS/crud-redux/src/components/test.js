import React from 'react'
import { useEffect } from 'react';

export default function Test() {
    useEffect(() => {
      fetch("http://localhost:5050/products").then((res)=>{
        console.log(res)
      })
    }, []);
  return (
    <div>
      
    </div>
  )
}
